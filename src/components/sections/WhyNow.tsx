import React from 'react';
import Reveal from '../ui/Reveal';

const cards = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="5" r="2.5" stroke="#C26A0A" strokeWidth="1.5"/><circle cx="4" cy="17" r="2.5" stroke="#C26A0A" strokeWidth="1.5"/><circle cx="18" cy="17" r="2.5" stroke="#C26A0A" strokeWidth="1.5"/><path d="M10 7.5L5.5 14.5M12 7.5L16.5 14.5M7 17h8" stroke="#C26A0A" strokeWidth="1.2" strokeLinecap="round"/></svg>,
    title: 'Execution is more distributed',
    desc: 'Critical work now moves across functions, systems, geographies, vendors, and leadership layers.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="3" width="5" height="5" rx="1.5" stroke="#C26A0A" strokeWidth="1.5"/><rect x="8.5" y="9" width="5" height="5" rx="1.5" stroke="#C26A0A" strokeWidth="1.5"/><rect x="15" y="14" width="5" height="5" rx="1.5" stroke="#C26A0A" strokeWidth="1.5"/><path d="M7 5.5h2M14.5 11.5h1" stroke="#C26A0A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 1.5"/></svg>,
    title: 'Signals are fragmented',
    desc: 'The data exists, but it is scattered across tools, surveys, dashboards, meetings, and operational workflows.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 17l5-7 4 4 3-5 4 8" stroke="#B23A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="19" cy="17" r="1.5" fill="#B23A2A"/></svg>,
    title: 'Financial impact appears late',
    desc: 'By the time friction shows up in missed targets or margin pressure, the organization has already lost time and value.',
  },
];

export default function WhyNow() {
  return (
    <section id="whynow">
      <div className="wrap">
        <Reveal><div className="eyebrow"><span className="num">02</span><span className="ln" /><span className="lbl">Why Now</span></div></Reveal>
        <Reveal><h2 className="head">Why now?</h2></Reveal>
        <Reveal><p className="lead">Companies are operating with more tools, more cross-functional dependencies, more data, and more pressure to execute faster. Yet leadership still lacks a reliable way to see where execution is slowing down before it shows up in the numbers.</p></Reveal>
        <div className="wn-grid">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="wn-card">
                <div className="wn-ic">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
