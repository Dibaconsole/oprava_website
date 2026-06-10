import React from 'react';
import Reveal from '../ui/Reveal';

const deliverables = [
  {
    n:'DELIVERABLE 01', h:'Organizational Health Score', p:'Composite score benchmarked against comparable companies, with domain-level breakdown.',
    icBg:'var(--signal-tint)',
    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#1F4DDB" strokeWidth="1.5"/><path d="M9 5v4l3 3" stroke="#1F4DDB" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    n:'DELIVERABLE 02', h:'Execution Friction Index', p:'A measure of hidden drag across decision, ownership, alignment, coordination, and leadership flow.',
    icBg:'var(--amber-tint)',
    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#C26A0A" strokeWidth="1.5"/><path d="M5 9l2.5 2.5L13 6" stroke="#C26A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    n:'DELIVERABLE 03', h:'EBITDA at Risk Estimate', p:'Estimated financial exposure from unresolved friction, with a confidence range and key drivers.',
    icBg:'var(--crit-soft)',
    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="9" width="2.5" height="6" rx="0.75" stroke="#B23A2A" strokeWidth="1.5"/><rect x="7.75" y="7" width="2.5" height="8" rx="0.75" stroke="#B23A2A" strokeWidth="1.5"/><rect x="12.5" y="4" width="2.5" height="11" rx="0.75" stroke="#B23A2A" strokeWidth="1.5"/></svg>,
  },
  {
    n:'DELIVERABLE 04', h:'Top Friction Patterns', p:'The highest-impact recurring friction signals, ranked by severity and financial exposure.',
    icBg:'var(--amber-tint)',
    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="4" cy="9" r="2" stroke="#C26A0A" strokeWidth="1.5"/><circle cx="14" cy="5" r="2" stroke="#C26A0A" strokeWidth="1.5"/><circle cx="14" cy="13" r="2" stroke="#C26A0A" strokeWidth="1.5"/><path d="M6 9h4M10 9L12 6M10 9l2 4" stroke="#C26A0A" strokeWidth="1" strokeLinecap="round"/></svg>,
  },
  {
    n:'DELIVERABLE 05', h:'Leadership & Ownership Risk Map', p:'A diagnostic map of decision bottlenecks, ownership ambiguity clusters, and leadership flow gaps.',
    icBg:'var(--signal-tint)',
    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="2.5" stroke="#1F4DDB" strokeWidth="1.5"/><path d="M3.5 15c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" stroke="#1F4DDB" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    n:'DELIVERABLE 06', h:'Recommended Interventions', p:'Prioritized actions ranked by Intervention Priority Score, with guidance and a baseline for tracking.',
    icBg:'var(--green-soft)',
    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9l4 4 7-7" stroke="#1B7A57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

export default function Pilot() {
  return (
    <section id="pilot">
      <div className="wrap">
        <Reveal><div className="eyebrow"><span className="num">08</span><span className="ln" /><span className="lbl">Get Started</span></div></Reveal>
        <Reveal><h2 className="head">Run a 30-Day Execution Diagnostic.</h2></Reveal>
        <Reveal><p className="lead">Use a focused Oprava diagnostic to identify hidden execution friction, quantify risk, and prioritize the operating issues most likely to affect performance. Structured, evidence-based, and executive-ready in 30 days.</p></Reveal>

        <div className="pd-grid">
          {deliverables.map((d, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="pd">
                <div className="pd-n">{d.n}</div>
                <div className="pd-ic" style={{background:d.icBg}}>{d.icon}</div>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="pilot-foot">
            <a href="mailto:hello@oprava.com" className="btn btn-ink">
              Run a 30-Day Diagnostic
              <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <span className="pilot-note">Typically scoped and delivered within 3–4 weeks.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
