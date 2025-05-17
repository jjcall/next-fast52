import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@yourdomain.com',
      to: 'user@example.com',
      subject: 'Welcome!',
      html: '<p>Thanks for joining us.</p>',
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error });
  }
}
