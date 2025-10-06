import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL } from "@/lib/config";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(async () => Object.fromEntries((await req.formData()).entries()));
    const type = body.type || "lead";
    const data = body.data || body;

    if (!resend) {
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    const fields = Object.entries(data).map(([k, v]) => `<tr><td style="padding:4px 8px;"><b>${k}</b></td><td style="padding:4px 8px;">${String(v)}</td></tr>`).join("");

    await resend.emails.send({
      from: process.env.EMAIL_FROM || "noreply@example.com",
      to: process.env.EMAIL_TO || "you@example.com",
      subject: `36Zero Lead: ${type}`,
      html: `<h2>New ${type} lead</h2><table border="0" cellpadding="0" cellspacing="0">${fields}</table>`
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "unknown" }, { status: 500 });
  }
}