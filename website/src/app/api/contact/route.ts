import { siteContent } from '../../../content/site';
import { siteDictionary } from '../../../content/siteDictionary';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  language?: 'ro' | 'en';
};

function normalize(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let language: 'ro' | 'en' = 'ro';

  try {
    const body = (await request.json()) as ContactPayload;
    language = body.language === 'en' ? 'en' : 'ro';
    const copy = siteDictionary[language].contact.api;
    const name = normalize(body.name);
    const email = normalize(body.email);
    const subject = normalize(body.subject);
    const message = normalize(body.message);

    if (!name || !email || !subject || !message) {
      return Response.json({ error: copy.missingFields }, { status: 400 });
    }

    if (!resend) {
      return Response.json({ error: copy.missingConfig }, { status: 500 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || siteContent.contact.email;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!fromEmail) {
      return Response.json({ error: copy.missingFromEmail }, { status: 500 });
    }

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedSubject = escapeHtml(subject);
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br />');

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `${copy.inboxSubjectPrefix}: ${subject}`,
      text: [
        `${copy.inboxName}: ${name}`,
        `${copy.inboxEmail}: ${email}`,
        '',
        `${copy.inboxMessage}:`,
        message,
      ].join('\n'),
      html: `
        <div>
          <h2>${copy.inboxHeading}</h2>
          <p><strong>${copy.inboxName}:</strong> ${escapedName}</p>
          <p><strong>${copy.inboxEmail}:</strong> ${escapedEmail}</p>
          <p><strong>${copy.inboxSubject}:</strong> ${escapedSubject}</p>
          <p><strong>${copy.inboxMessage}:</strong></p>
          <p>${escapedMessage}</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: toEmail,
      subject: copy.confirmationSubject,
      text: [
        `${copy.confirmationGreeting}, ${name}!`,
        '',
        copy.confirmationBody,
        '',
        `${copy.confirmationSubjectLabel}: ${subject}`,
        '',
        `${copy.confirmationReply} ${toEmail}.`,
        '',
        copy.confirmationSignature,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #142026;">
          <h2 style="margin-bottom: 12px;">${copy.confirmationSubject}</h2>
          <p>${copy.confirmationGreeting}, <strong>${escapedName}</strong>!</p>
          <p>${copy.confirmationBody}</p>
          <p><strong>${copy.confirmationSubjectLabel}:</strong> ${escapedSubject}</p>
          <p>${copy.confirmationReply} <a href="mailto:${toEmail}">${toEmail}</a>.</p>
          <p style="margin-top: 24px;">${copy.confirmationSignature}</p>
        </div>
      `,
    });

    return Response.json({ message: copy.success });
  } catch {
    return Response.json({ error: siteDictionary[language].contact.api.requestFailed }, { status: 500 });
  }
}