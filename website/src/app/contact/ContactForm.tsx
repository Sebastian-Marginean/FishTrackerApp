'use client';

import { FormEvent, useState } from 'react';
import { siteDictionary } from '../../content/siteDictionary';
import { useSiteSettings } from '../../components/SiteSettingsProvider';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const { language } = useSiteSettings();
  const copy = siteDictionary[language].contact.form;
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setFeedback(copy.sendingFeedback);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form, language }),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || copy.genericError);
      }

      setStatus('success');
      setFeedback(result.message || copy.submit);
      setForm(initialState);
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : copy.genericError);
    }
  }

  return (
    <article className="subpage-card contact-form-card">
      <h2>{copy.title}</h2>
      <p>{copy.description}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-field">
          <span>{copy.name}</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder={copy.namePlaceholder}
            required
          />
        </label>

        <label className="contact-field">
          <span>{copy.email}</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder={copy.emailPlaceholder}
            required
          />
        </label>

        <label className="contact-field">
          <span>{copy.subject}</span>
          <input
            type="text"
            value={form.subject}
            onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
            placeholder={copy.subjectPlaceholder}
            required
          />
        </label>

        <label className="contact-field">
          <span>{copy.message}</span>
          <textarea
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            placeholder={copy.messagePlaceholder}
            rows={7}
            required
          />
        </label>

        <button className="primary-cta contact-submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? copy.sending : copy.submit}
        </button>

        {feedback ? (
          <p className={`contact-feedback ${status === 'error' ? 'error' : status === 'success' ? 'success' : ''}`}>
            {feedback}
          </p>
        ) : null}
      </form>
    </article>
  );
}
