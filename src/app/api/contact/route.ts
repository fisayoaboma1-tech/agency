import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "messages.json");

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
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
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