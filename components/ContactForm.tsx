'use client';

import { FORMSPREE_CONFIG_ERROR, FORMSPREE_ENDPOINT, FORMSPREE_FORM_ID } from '@/lib/constants';
import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');

  if (FORMSPREE_CONFIG_ERROR) {
    return (
      <div className="card rounded-2xl p-6 border text-center h-full flex flex-col justify-center" role="alert">
        <p className="text-sm text-red-400 mb-2">{FORMSPREE_CONFIG_ERROR}</p>
        <p className="text-xs text-portfolio-subtle">
          In <code className="text-portfolio-accent-soft">.env.local</code>, set{' '}
          <code className="text-portfolio-accent-soft">NEXT_PUBLIC_FORMSPREE_FORM_ID=xlgklynq</code> — the ID from your
          Formspree endpoint, not <code className="text-portfolio-accent-soft">https://formspree.io/f/...</code>.
        </p>
      </div>
    );
  }

  if (!FORMSPREE_FORM_ID) {
    return (
      <div className="card rounded-2xl p-6 border text-center h-full flex flex-col justify-center">
        <p className="text-sm text-portfolio-muted mb-2">
          Contact form is not configured yet. Set{' '}
          <code className="text-portfolio-accent-soft text-xs">NEXT_PUBLIC_FORMSPREE_FORM_ID</code> in{' '}
          <code className="text-portfolio-accent-soft text-xs">.env.local</code>.
        </p>
        <p className="text-xs text-portfolio-subtle">
          Sign up free at{' '}
          <a
            href="https://formspree.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-accent-soft underline hover:text-portfolio-text transition-colors"
          >
            formspree.io
          </a>{' '}
          to enable the form.
        </p>
      </div>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('submitting');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setState('success');
        form.reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="card rounded-2xl p-8 border text-center h-full flex flex-col justify-center" role="status">
        <p className="text-lg font-semibold text-portfolio-text mb-2">Message sent!</p>
        <p className="text-sm text-portfolio-muted mb-4">
          Thanks for reaching out. I&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="btn-secondary px-5 py-3 rounded-lg text-sm font-medium border mx-auto min-h-11"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="card rounded-2xl p-4 sm:p-6 border h-full min-h-full flex flex-col">
      <h3 className="text-lg font-semibold text-portfolio-text mb-1">Send a Message</h3>
      <p className="text-sm text-portfolio-muted mb-5">Fill out the form and I&apos;ll get back to you soon.</p>

      <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="_subject" value="Portfolio inquiry — mohit-portfolio" />

        <div>
          <label htmlFor="name" className="block text-xs font-semibold mb-1.5 text-portfolio-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="form-input w-full px-4 py-3 rounded-xl text-base sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold mb-1.5 text-portfolio-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="form-input w-full px-4 py-3 rounded-xl text-base sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold mb-1.5 text-portfolio-muted">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Role inquiry, project idea, etc."
            className="form-input w-full px-4 py-3 rounded-xl text-base sm:text-sm"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="message" className="block text-xs font-semibold mb-1.5 text-portfolio-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell me about the role, project, or idea..."
            className="form-input w-full px-4 py-3 rounded-xl text-base sm:text-sm resize-none min-h-[120px]"
          />
        </div>
        {state === 'error' && (
          <p className="text-sm text-red-400" role="alert">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 mt-auto min-h-11"
        >
          {state === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
