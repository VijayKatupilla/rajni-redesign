import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type CateringPayload = {
  name?: string;
  email?: string;
  phone?: string;
  type?: string;
  guests?: string;
  date?: string;
  notes?: string;
};

const managerEmail = process.env.MANAGER_EMAIL || "Rajni.Madison@gmail.com";

function buildReference() {
  return `CAT-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)
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
    const body = (await request.json()) as CateringPayload;
    const requiredFields: (keyof CateringPayload)[] = ["name", "email", "phone", "type", "guests", "date"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }

    const reference = buildReference();
    const transporter = getTransport();
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || "events@rajnimadison.com";

    const managerMessage = {
      from: fromEmail,
      to: managerEmail,
      subject: `New Catering Inquiry: ${body.name} (${reference})`,
      text: [
        `New catering inquiry submitted`,
        `Reference: ${reference}`,
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone}`,
        `Event Type: ${body.type}`,
        `Guest Count: ${body.guests}`,
        `Date: ${body.date}`,
        `Notes: ${body.notes || "None"}`,
      ].join("\n"),
    };

    const guestMessage = {
      from: fromEmail,
      to: body.email,
      subject: `Rajni Catering Request Received (${reference})`,
      text: [
        `Hi ${body.name},`,
        ``,
        `We've received your catering request at Rajni.`,
        ``,
        `Reference: ${reference}`,
        `Event Type: ${body.type}`,
        `Guest Count: ${body.guests}`,
        `Date: ${body.date}`,
        ``,
        `We will confirm details shortly. If you need changes, reply to this email or call us.`,
        ``,
        `Thank you,`,
        `Rajni Team`,
      ].join("\n"),
    };

    await Promise.all([transporter.sendMail(managerMessage), transporter.sendMail(guestMessage)]);

    return NextResponse.json({
      ok: true,
      reference,
      message: "Catering request received. A confirmation email has been sent.",
    });
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
