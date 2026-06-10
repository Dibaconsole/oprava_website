import React from 'react';
import Reveal from '../ui/Reveal';

const steps = [
  {
    n: '01 / CONNECT', title: 'Ingest Signals',
    desc: 'Designed to ingest signals from the operating systems companies already use, or through structured assessments.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="5" cy="11" r="2.4" stroke="#1F4DDB" strokeWidth="1.5"/><circle cx="17" cy="5.5" r="2.4" stroke="#1F4DDB" strokeWidth="1.5"/><circle cx="17" cy="16.5" r="2.4" stroke="#1F4DDB" strokeWidth="1.5"/><path d="M7.4 11H11M11 11L14.6 6M11 11l3.6 5" stroke="#1F4DDB" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    n: '02 / DETECT', title: 'Map Friction Patterns',
    desc: 'Identify recurring patterns across decisions, ownership, alignment, coordination, and leadership flow.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="7.5" stroke="#1F4DDB" strokeWidth="1.5"/><circle cx="11" cy="11" r="3.5" stroke="#1F4DDB" strokeWidth="1.2"/><circle cx="11" cy="11" r="1.3" fill="#1F4DDB"/><path d="M11 3.5V2M11 20v-1.5M3.5 11H2M20 11h-1.5" stroke="#1F4DDB" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    n: '03 / QUANTIFY', title: 'Score Execution Risk',
    desc: 'Translate friction patterns into scores, risk levels, and an estimated EBITDA exposure range.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="13" width="3.2" height="6.5" rx="1" stroke="#C26A0A" strokeWidth="1.5"/><rect x="9.4" y="9" width="3.2" height="10.5" rx="1" stroke="#C26A0A" strokeWidth="1.5"/><rect x="15.8" y="4.5" width="3.2" height="15" rx="1" stroke="#B23A2A" strokeWidth="1.5"/></svg>,
  },
  {
    n: '04 / ACT', title: 'Prioritize Interventions',
    desc: 'Prioritize interventions before performance deteriorates. Establish a benchmark for continuous monitoring.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4.5 11l4.5 4.5L18 6" stroke="#1B7A57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

export default function Solution() {
  return (
    <section id="solution">
      <div className="wrap">
        <Reveal><div className="eyebrow"><span className="num">10</span><span className="ln" /><span className="lbl">The Platform</span></div></Reveal>
        <Reveal><h2 className="head">Oprava turns operating signals into measurable execution risk intelligence.</h2></Reveal>
        <Reveal><p className="lead">Oprava connects organizational signals across systems, teams, workflows, and leadership structures to identify where execution is slowing, why it is happening, and what it may cost.</p></Reveal>
        <div className="sol-steps">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="sol-step">
                <div className="step-n">{s.n}</div>
                <div className="step-ic">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
