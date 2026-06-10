import React from 'react';
import Reveal from '../ui/Reveal';

const financials = [
  { name: 'Revenue', val: '$48.2M', cls: 'g' },
  { name: 'EBITDA Margin', val: '18.4%', cls: 'g' },
  { name: 'Headcount', val: '312', cls: 'n' },
  { name: 'Sales Pipeline', val: '$12.1M', cls: 'n' },
  { name: 'Projects On-Track', val: '68%', cls: 'n' },
];

const signals = [
  { name: 'Slow decision-making', flag: 'High', sub: 'approval_cycle: 14d avg · 3 layers deep', impact: 'Impact · initiative delay risk' },
  { name: 'Unclear ownership', flag: 'High', sub: '41% of initiatives lack a clear DRI', impact: 'Impact · accountability leakage' },
  { name: 'Leadership bottlenecks', flag: 'Crit', sub: '3 teams route all decisions to the CEO', impact: 'Impact · execution capacity ceiling' },
  { name: 'Transformation fatigue', flag: 'Med', sub: 'change_readiness: −12 pts / 90d', impact: 'Impact · stalled initiatives' },
  { name: 'Strategy not translating', flag: 'Med', sub: 'team-level execution gaps widening vs. plan', impact: 'Impact · plan-to-actual drift' },
];

export default function Problem() {
  return (
    <section id="problem">
      <div className="wrap">
        <Reveal><div className="eyebrow"><span className="num">01</span><span className="ln" /><span className="lbl">The Problem</span></div></Reveal>
        <Reveal><h2 className="head">Financial dashboards show what happened. Oprava shows what is quietly causing it.</h2></Reveal>
        <Reveal><p className="lead">Most companies can track revenue, costs, headcount, and EBITDA. But they cannot continuously see the execution friction building underneath the numbers, until the cost is already absorbed.</p></Reveal>

        <Reveal>
          <div className="prob-grid">
            <div className="prob-col visible">
              <div className="prob-col-h v">
                <svg className="ic w-4 h-4" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M5 10l2-2 2 1 2-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                What leadership can see
              </div>
              <div className="fin-rows">
                {financials.map((f) => (
                  <div key={f.name} className="fin-row">
                    <span className="fin-name">{f.name}</span>
                    <span className={`fin-val ${f.cls}`}>{f.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="prob-col hidden-col">
              <div className="prob-col-h h">
                <svg className="ic w-4 h-4" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                What is building beneath the numbers
              </div>
              <div className="fsig-list">
                {signals.map((s) => (
                  <div key={s.name} className="fsig">
                    <div className="fsig-t">
                      <span className="fsig-name">{s.name}</span>
                      <span className="fsig-flag">{s.flag}</span>
                    </div>
                    <div className="fsig-sub">{s.sub}</div>
                    <div className="fsig-impact">{s.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="prob-quote">
            <div className="pq-mark">&ldquo;</div>
            <div className="pq-body">
              <p>The cost of hidden friction is invisible, until it is already in the numbers.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
