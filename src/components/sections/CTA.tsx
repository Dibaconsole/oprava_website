'use client';
import { useState } from 'react';
import Reveal from '../ui/Reveal';
import ContactModal from '../ui/ContactModal';

export default function CTA() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="cta">
      <div className="wrap">
        <Reveal><h2>Before performance breaks, see the friction.</h2></Reveal>
        <Reveal><p>Oprava helps leaders identify the organizational drag slowing execution before it becomes financial underperformance.</p></Reveal>
        <Reveal>
          <div className="cta-btns">
            <a href="#pilot" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '15px' }}>
              Run a 30-Day Diagnostic
              <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              className="btn btn-ghost-d"
              style={{ padding: '15px 26px', fontSize: '15px' }}
              onClick={() => setShowContact(true)}
            >
              Contact the Team
            </button>
          </div>
        </Reveal>
        <div className="cta-line" />
        <div className="cta-tag">You can&apos;t optimize what you cannot see</div>
      </div>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </section>
  );
}
