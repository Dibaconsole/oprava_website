import React from 'react';
import Reveal from '../ui/Reveal';

const items = [
  { lbl: 'Built for', val: 'CEOs & PE Operating Partners', desc: 'Designed for leaders responsible for execution, transformation, and value creation.' },
  { lbl: 'Measures', val: 'Execution Friction', desc: 'Looks beyond employee sentiment to quantify organizational drag and operational risk.' },
  { lbl: 'Connects', val: 'Behavior + Systems + Outcomes', desc: 'Links everyday operating signals to leadership visibility and business performance.' },
  { lbl: 'Designed as', val: 'Intelligence Infrastructure', desc: 'Built to become more valuable as it learns from diagnostics, benchmarks, interventions, and outcomes.' },
];

export default function Credibility() {
  return (
    <section className="cred2" id="credibility" aria-label="Platform foundations">
      <div className="wrap">
        <Reveal>
          <div className="cred2-grid">
            {items.map((it) => (
              <div key={it.lbl} className="cred2-item">
                <div className="cred2-lbl">{it.lbl}</div>
                <div className="cred2-val">{it.val}</div>
                <div className="cred2-desc">{it.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
