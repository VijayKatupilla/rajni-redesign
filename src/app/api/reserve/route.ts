import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ReservePayload = {
  name?: string;
  email?: string;
  phone?: string;
  party?: string;
  date?: string;
  time?: string;
  notes?: string;
};

const managerEmail = process.env.MANAGER_EMAIL || "Rajni.Madison@gmail.com";

function buildReference() {
  return `RJ-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")}`;
}

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Email transport is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReservePayload;
    const requiredFields: (keyof ReservePayload)[] = ["name", "email", "phone", "party", "date", "time"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }

    const reference = buildReference();
    const transporter = getTransport();
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || "reservations@rajnimadison.com";

    const managerMessage = {
      from: fromEmail,
      to: managerEmail,
      subject: `New Reservation: ${body.name} (${reference})`,
      text: [
        `New reservation submitted`,
        `Reference: ${reference}`,
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone}`,
        `Party Size: ${body.party}`,
        `Date: ${body.date}`,
        `Time: ${body.time}`,
        `Notes: ${body.notes || "None"}`,
      ].join("\n"),
    };

    const guestMessage = {
      from: fromEmail,
      to: body.email,
      subject: `Rajni Reservation Request Received (${reference})`,
      text: [
        `Hi ${body.name},`,
        ``,
        `We've received your reservation request at Rajni.`,
        ``,
        `Reference: ${reference}`,
        `Date: ${body.date}`,
        `Time: ${body.time}`,
        `Party Size: ${body.party}`,
        ``,
        `We will confirm shortly. If you need to adjust anything, reply to this email or call us.`,
        ``,
        `Thank you,`,
        `Rajni Team`,
      ].join("\n"),
    };

    await Promise.all([transporter.sendMail(managerMessage), transporter.sendMail(guestMessage)]);

    return NextResponse.json({
      ok: true,
      reference,
      message: "Reservation received. A confirmation email has been sent.",
    });
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
