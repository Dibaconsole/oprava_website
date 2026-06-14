'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// ── Email service ────────────────────────────────────────────────────────────
// 1. Créez un compte gratuit sur https://formspree.io
// 2. Créez un formulaire avec l'email : imbimi@oprava.ia
// 3. Remplacez YOUR_FORM_ID ci-dessous par l'identifiant fourni (ex: xpwzgkjd)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqeonvj';
// ─────────────────────────────────────────────────────────────────────────────

type Fields = { name: string; email: string; company: string; role: string; message: string };
type Status = 'idle' | 'sending' | 'sent' | 'error';
type Props = { onClose: () => void };

export default function ContactModal({ onClose }: Props) {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', company: '', role: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Portal needs document to be available (client only)
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const set = (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields(prev => ({ ...prev, [k]: e.target.value }));

  const canSubmit = Boolean(fields.name.trim() && fields.email.trim() && fields.message.trim() && status !== 'sending');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          company: fields.company || undefined,
          role: fields.role || undefined,
          message: fields.message,
        }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!mounted) return null;

  const content =
    status === 'sent' ? (
      <div id="contact-overlay" ref={overlayRef} onClick={handleOverlayClick}>
        <div className="cm-card" role="dialog" aria-modal="true" aria-label="Message sent">
          <div className="cm-success">
            <div className="cm-success-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11l5 5L18 6" stroke="var(--signal)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Message sent</h3>
            <p>
              Thank you — the Oprava team has received your message and will reply within one business day.
            </p>
            <button className="cm-submit" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div id="contact-overlay" ref={overlayRef} onClick={handleOverlayClick}>
        <div className="cm-card" role="dialog" aria-modal="true" aria-labelledby="cm-title">
          <div className="cm-head">
            <div className="cm-headtxt">
              <h3 id="cm-title">Contact the Team</h3>
              <p>Tell us about your situation and a member of the Oprava team will be in touch.</p>
            </div>
            <button className="cm-close" type="button" onClick={onClose} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="cm-body">
              <div className="cm-row">
                <div className="cm-field">
                  <label htmlFor="cm-name">
                    Full Name <span aria-hidden="true" style={{ color: 'var(--crit)' }}>*</span>
                  </label>
                  <input
                    id="cm-name"
                    type="text"
                    value={fields.name}
                    onChange={set('name')}
                    placeholder="Jane Smith"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="cm-field">
                  <label htmlFor="cm-email">
                    Work Email <span aria-hidden="true" style={{ color: 'var(--crit)' }}>*</span>
                  </label>
                  <input
                    id="cm-email"
                    type="email"
                    value={fields.email}
                    onChange={set('email')}
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div className="cm-row">
                <div className="cm-field">
                  <label htmlFor="cm-company">Company</label>
                  <input
                    id="cm-company"
                    type="text"
                    value={fields.company}
                    onChange={set('company')}
                    placeholder="Acme Corp"
                    autoComplete="organization"
                  />
                </div>
                <div className="cm-field">
                  <label htmlFor="cm-role">Role / Title</label>
                  <input
                    id="cm-role"
                    type="text"
                    value={fields.role}
                    onChange={set('role')}
                    placeholder="CEO, Operating Partner…"
                    autoComplete="organization-title"
                  />
                </div>
              </div>
              <div className="cm-field">
                <label htmlFor="cm-msg">
                  How can we help? <span aria-hidden="true" style={{ color: 'var(--crit)' }}>*</span>
                </label>
                <textarea
                  id="cm-msg"
                  value={fields.message}
                  onChange={set('message')}
                  placeholder="Tell us about your organization, what you're trying to solve, or what you'd like to discuss…"
                  required
                />
              </div>
              {status === 'error' && (
                <p className="cm-error">
                  Something went wrong. Please try again or email us directly at{' '}
                  <a href="mailto:imbimi@oprava.ia">imbimi@oprava.ia</a>.
                </p>
              )}
            </div>
            <div className="cm-foot">
              <span className="cm-note">We typically respond within one business day.</span>
              <button className="cm-submit" type="submit" disabled={!canSubmit}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );

  return createPortal(content, document.body);
}
