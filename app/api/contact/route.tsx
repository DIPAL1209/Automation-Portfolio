

import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
})

const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL!

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json()

        // 1. Email TO YOU
        await transporter.sendMail({
            from: `"Dipal Patel" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `✉️ ${name} contacted you via portfolio`,
            html: `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">

        <!-- Top accent bar -->
        <tr>
          <td style="background:#0f172a;padding:0;height:4px;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

        <!-- Header -->
        <tr>
          <td style="padding:28px 32px 24px;">
            <div style="width:44px;height:44px;border-radius:10px;background:#0f172a;text-align:center;line-height:44px;font-size:20px;color:#ffffff;margin-bottom:16px;">&#9993;</div>
            <p style="margin:0 0 4px;font-size:10px;font-weight:600;color:#94a3b8;letter-spacing:0.12em;text-transform:uppercase;">Portfolio · Contact Form</p>
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#0f172a;">New message from ${name.split(' ')[0]}</h1>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 32px;"><div style="height:1px;background:#f1f5f9;"></div></td></tr>

        <!-- Info rows -->
        <tr>
          <td style="padding:0 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:13px 0;border-bottom:1px solid #f8fafc;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-size:11px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;width:72px;">Name</td>
                      <td style="font-size:13px;color:#0f172a;font-weight:500;text-align:right;">${name}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:13px 0;border-bottom:1px solid #f8fafc;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-size:11px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;width:72px;">Email</td>
                      <td style="font-size:13px;text-align:right;"><a href="mailto:${email}" style="color:#0f172a;text-decoration:none;font-weight:500;">${email}</a></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:13px 0 8px;">
                  <p style="margin:0;font-size:11px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message box -->
        <tr>
          <td style="padding:0 32px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
              <tr>
                <td style="padding:16px 18px;">
                  <p style="margin:0;font-size:13px;color:#475569;line-height:1.85;">${message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 32px 32px;">
            <a href="mailto:${email}?subject=Re: Your message via my portfolio" style="display:inline-block;background:#0f172a;color:#ffffff;font-size:12px;font-weight:600;padding:11px 24px;border-radius:7px;text-decoration:none;letter-spacing:0.02em;">Reply to ${name.split(' ')[0]}</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;background:#f8fafc;border-top:1px solid #f1f5f9;text-align:center;">
            <p style="margin:0;font-size:11px;color:#cbd5e1;">Portfolio contact form &nbsp;·&nbsp; <a href="https://dipalpatel-portfolio.vercel.app" style="color:#0f172a;text-decoration:none;">dipalpatel-portfolio.vercel.app</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
        })

        // 2. Confirmation email TO VISITOR
        await transporter.sendMail({
            from: `"Dipal Patel" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `Got your message, ${name.split(' ')[0]}! I'll be in touch soon.`,
            html: `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">

        <!-- Top accent bar -->
        <tr>
          <td style="background:#0f172a;padding:0;height:4px;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

        <!-- Hero -->
        <tr>
          <td style="padding:36px 32px 24px;text-align:center;">
            <div style="width:56px;height:56px;border-radius:14px;background:#0f172a;text-align:center;line-height:56px;font-size:26px;color:#ffffff;margin:0 auto 18px;">&#10003;</div>
            <h1 style="margin:0 0 8px;font-size:20px;font-weight:700;color:#0f172a;">Message received!</h1>
            <p style="margin:0 auto;font-size:13px;color:#94a3b8;line-height:1.6;max-width:320px;">I'll get back to you within 24 hours, ${name.split(' ')[0]}.</p>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 32px;"><div style="height:1px;background:#f1f5f9;"></div></td></tr>

        <!-- Body -->
        <tr>
          <td style="padding:24px 32px 0;">
            <p style="margin:0 0 20px;font-size:13px;color:#475569;line-height:1.85;">Hey <strong style="color:#0f172a;">${name.split(' ')[0]}</strong>, thank you for visiting my portfolio and reaching out. I've received your message and I'm looking forward to connecting with you. I'll reply as soon as I can!</p>

            <p style="margin:0 0 8px;font-size:10px;font-weight:600;color:#94a3b8;letter-spacing:0.12em;text-transform:uppercase;">Your message</p>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:28px;">
              <tr>
                <td style="padding:16px 18px;">
                  <p style="margin:0;font-size:13px;color:#64748b;line-height:1.85;font-style:italic;">"${message}"</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 32px;"><div style="height:1px;background:#f1f5f9;"></div></td></tr>

        <!-- Signature -->
        <tr>
          <td style="padding:22px 32px 28px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td valign="middle">
                  <div style="width:38px;height:38px;border-radius:10px;background:#0f172a;text-align:center;line-height:38px;font-size:15px;font-weight:700;color:#ffffff;">D</div>
                </td>
                <td valign="middle" style="padding-left:12px;">
                  <p style="margin:0;font-size:14px;font-weight:700;color:#0f172a;">Dipal Patel</p>
                  <p style="margin:3px 0 0;font-size:11px;color:#94a3b8;">Full-Stack Developer &nbsp;·&nbsp; Ahmedabad, India</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;background:#f8fafc;border-top:1px solid #f1f5f9;text-align:center;">
            <p style="margin:0;font-size:11px;color:#cbd5e1;">Automated confirmation &nbsp;·&nbsp; <a href="https://dipalpatel-portfolio.vercel.app" style="color:#0f172a;text-decoration:none;">dipalpatel-portfolio.vercel.app</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
        })

        // 3. Slack notification
        await fetch(slackWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: `*New Portfolio Contact!*\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`,
            }),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact error:', error)
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
    }
}