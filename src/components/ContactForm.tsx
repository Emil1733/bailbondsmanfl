'use client';

import { FormEvent, useRef, useState } from 'react';

type SubmissionState =
  | { status: 'idle'; message: '' }
  | { status: 'submitting'; message: 'Sending your request…' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

const inputClasses =
  'w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white transition-colors placeholder:text-slate-500 focus:border-yellow-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle', message: '' });
  const isSubmitting = submission.status === 'submitting';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: 'submitting', message: 'Sending your request…' });

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get('name') ?? ''),
      phone: String(form.get('phone') ?? ''),
      defendantName: String(form.get('defendantName') ?? ''),
      message: String(form.get('message') ?? ''),
      consent: form.get('consent') === 'on',
      website: String(form.get('website') ?? ''),
      startedAt,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'We could not send your request. Please call us instead.');
      }

      formRef.current?.reset();
      setStartedAt(Date.now());
      setSubmission({
        status: 'success',
        message: result.message || 'Your request was received. An agent will contact you shortly.',
      });
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error instanceof Error ? error.message : 'We could not send your request. Please call us instead.',
      });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          enterKeyHint="next"
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="Full Name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          maxLength={30}
          autoComplete="tel"
          inputMode="tel"
          enterKeyHint="next"
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="(000) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="defendantName" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">
          Defendant Name
        </label>
        <input
          type="text"
          id="defendantName"
          name="defendantName"
          required
          minLength={2}
          maxLength={100}
          autoComplete="off"
          enterKeyHint="next"
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="Defendant's full name"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">
          Message <span className="font-normal normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={500}
          enterKeyHint="send"
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="County, facility, or directory question"
        />
      </div>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" inert>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="url" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-400">
        <input
          type="checkbox"
          name="consent"
          required
          disabled={isSubmitting}
          className="mt-1 h-4 w-4 shrink-0 accent-yellow-500"
        />
        <span>I agree that a Bond Florida agent may contact me about this request by phone or text.</span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-yellow-500 py-4 font-bold text-slate-950 shadow-lg transition-colors hover:bg-yellow-400 disabled:cursor-wait disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Submit Request'}
      </button>

      <div aria-live="polite" aria-atomic="true" className="min-h-6 text-center text-sm">
        {submission.status !== 'idle' && (
          <p className={submission.status === 'error' ? 'text-red-400' : submission.status === 'success' ? 'text-green-400' : 'text-slate-400'}>
            {submission.message}
          </p>
        )}
      </div>

      <p className="text-center text-[10px] uppercase tracking-tighter text-slate-500">
        Do not include charges, case narratives, Social Security numbers, identification images, payment details, medical information, or confidential communications.
      </p>
    </form>
  );
}
