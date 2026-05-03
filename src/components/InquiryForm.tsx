import { useState, type FormEvent } from 'react';
import { qualifyLead } from '../utils/leadQualify.ts';
import './InquiryForm.css';

const webhook = import.meta.env.VITE_INQUIRY_WEBHOOK as string | undefined;

export default function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: 'corporate',
    eventDate: '',
    guestCount: '40',
    budget: '50-100',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const guests = parseInt(form.guestCount, 10) || 0;
    const qualification = qualifyLead({
      eventType: form.eventType,
      budget: form.budget,
      guestCount: guests,
    });

    const payload = {
      ...form,
      guestCount: guests,
      leadTag: qualification.tag,
      leadTier: qualification.tier,
      recommendedAction: qualification.action,
      qualificationNotes: qualification.notes,
      submittedAt: new Date().toISOString(),
      source: 'briggsbrothersranch.com',
    };

    try {
      if (webhook) {
        const res = await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Webhook failed');
      } else {
        console.info('[Inquiry demo — set VITE_INQUIRY_WEBHOOK for CRM]', payload);
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="inquiry-form inquiry-form--full" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
          />
        </label>
        <label>
          <span>Company</span>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            autoComplete="organization"
          />
        </label>
        <label>
          <span>Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
          />
        </label>
        <label>
          <span>Phone *</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            autoComplete="tel"
          />
        </label>
        <label>
          <span>Event type *</span>
          <select
            required
            value={form.eventType}
            onChange={(e) => setForm({ ...form, eventType: e.target.value })}
          >
            <option value="corporate">Corporate retreat</option>
            <option value="wedding">Luxury wedding</option>
            <option value="private">Private event / buyout</option>
          </select>
        </label>
        <label>
          <span>Preferred event date</span>
          <input
            type="date"
            value={form.eventDate}
            onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
          />
        </label>
        <label>
          <span>Guest count *</span>
          <input
            required
            type="number"
            min={8}
            max={500}
            value={form.guestCount}
            onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
          />
        </label>
        <label>
          <span>Budget range *</span>
          <select
            required
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="under-25">Under $25k</option>
            <option value="25-50">$25k – $50k</option>
            <option value="50-100">$50k – $100k</option>
            <option value="100-250">$100k – $250k</option>
            <option value="250+">$250k+</option>
          </select>
        </label>
      </div>
      <label className="inquiry-form__full">
        <span>Message *</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your vision, timing, and any must-haves."
        />
      </label>

      <button type="submit" className="btn-primary inquiry-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit inquiry'}
      </button>

      {status === 'success' && (
        <p className="inquiry-form__msg inquiry-form__msg--ok" role="status">
          Thank you. A concierge will respond shortly. High-value inquiries are prioritized for a
          discovery call.
        </p>
      )}
      {status === 'error' && (
        <p className="inquiry-form__msg inquiry-form__msg--err" role="alert">
          Something went wrong. Email concierge@briggsbros.com or call (555) RANCH-LIFE.
        </p>
      )}
    </form>
  );
}
