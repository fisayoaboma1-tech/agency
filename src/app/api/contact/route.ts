import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import nodemailer from "nodemailer";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "messages.json");
const CONTACT_EMAIL = "support@ptkonsultantberdikaribersama.id";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  createdAt: string;
  read: boolean;
}

async function ensureDataFile() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function readMessages(): Promise<ContactMessage[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

async function writeMessages(messages: ContactMessage[]) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

async function sendContactEmail(message: ContactMessage) {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD;
  const recipient = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_EMAIL;

  if (!host || !user || !password || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP settings are missing or invalid.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass: password },
  });

  await transporter.sendMail({
    from: { name: "KBB Website", address: user },
    to: recipient,
    replyTo: { name: message.name, address: message.email },
    subject: `[KBB Website] New inquiry from ${message.name.replace(/[\r\n]+/g, " ")}`,
    text: [
      `Name: ${message.name}`,
      `Email: ${message.email}`,
      `Company: ${message.company || "Not provided"}`,
      `Service: ${message.service || "Not specified"}`,
      "",
      "Message:",
      message.message,
    ].join("\n"),
  });
}

export async function GET() {
  try {
    const rawMessages = await readMessages();
    const now = new Date();
    const thisMonth = rawMessages.filter((m) => {
      const d = new Date(m.createdAt);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
    const unread = rawMessages.filter((m) => !m.read).length;

    // Sort by newest first
    rawMessages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const messages = rawMessages.map((m) => ({
      id: m.id,
      name: m.name,
      email: m.email,
      company: m.company,
      service: m.service,
      message: m.message,
      createdAt: m.createdAt,
      read: m.read,
    }));

    return NextResponse.json({
      messages,
      stats: {
        total: rawMessages.length,
        unread,
        thisMonth,
      },
    });
  } catch (error) {
    console.error("GET /api/contact error:", error);
    return NextResponse.json({ messages: [], stats: { total: 0, unread: 0, thisMonth: 0 } });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (
      !name ||
      !email ||
      !message ||
      name.length > 120 ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      company.length > 160 ||
      service.length > 120 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 }
      );
    }

    const messages = await readMessages();

    const newMessage: ContactMessage = {
      id: randomUUID(),
      name,
      email,
      company: company || "",
      service: service || "",
      message,
      createdAt: new Date().toISOString(),
      read: false,
    };

    messages.push(newMessage);
    await writeMessages(messages);

    try {
      await sendContactEmail(newMessage);
    } catch (error) {
      console.error("POST /api/contact email notification error:", error);
      return NextResponse.json(
        {
          error: `Your message was saved, but we couldn't email our team. Please contact us directly at ${CONTACT_EMAIL}.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Failed to save message." }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, read } = body;

    if (!id || typeof read !== "boolean") {
      return NextResponse.json(
        { error: "id and read status are required." },
        { status: 400 }
      );
    }

    const messages = await readMessages();
    const index = messages.findIndex((m) => m.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Message not found." }, { status: 404 });
    }

    messages[index].read = read;
    await writeMessages(messages);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PATCH /api/contact error:", error);
    return NextResponse.json({ error: "Failed to update message." }, { status: 500 });
  }
}