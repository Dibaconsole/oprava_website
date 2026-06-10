import React from 'react';
import Reveal from '../ui/Reveal';

const items = [
  { k:'Pilot Timeline', v:'3–4 weeks', d:'Scoped, structured, and immediately actionable.' },
  { k:'Built For', v:'CEOs · PE · Boards', d:'Operating partners, portfolio & transformation leaders.' },
  { k:'Core Outputs', v:'OHS · EFI · EBITDA at Risk', d:'Three proprietary, financially grounded metrics.' },
  { k:'Deployment', v:'Pilot → Portfolio', d:'Start focused, then expand across the portfolio.' },
];

export default function CredStrip() {
  return (
    <section className="cred" id="cred">
      <div className="wrap">
        <Reveal>
          <div className="cred-grid">
            {items.map((it) => (
              <div key={it.k} className="cred-item">
                <div className="cred-k">{it.k}</div>
                <div className="cred-v">{it.v}</div>
                <div className="cred-d">{it.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
