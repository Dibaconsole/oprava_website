import React from 'react';
import Reveal from '../ui/Reveal';

const pts = [
  { n:'01', h:'Portfolio-level execution visibility', p:'Monitor Health Scores and Friction Indexes across all portfolio companies from a single view, before results deteriorate.' },
  { n:'02', h:'Detect fragility before it\'s too late', p:'Identify where execution is fragile, where intervention is needed, and where EBITDA may be exposed, weeks or months earlier than financial reporting.' },
  { n:'03', h:'Connect organizational health to exit value', p:'Link organizational performance intelligence to the metrics that matter at exit: EBITDA growth, margin improvement, and execution quality.' },
];

const companies = [
  { name:'Company A', badge:'Low Friction', cls:'pb-low', score:82, w:82, c:'#43C893' },
  { name:'Company B', badge:'Ownership Risk', cls:'pb-med', score:67, w:67, c:'#E08A12' },
  { name:'Company C', badge:'Decision Risk', cls:'pb-med', score:61, w:61, c:'#E08A12' },
  { name:'Company D', badge:'Change Readiness', cls:'pb-med', score:58, w:58, c:'#E08A12' },
  { name:'Company E', badge:'EBITDA Exposed', cls:'pb-hi', score:44, w:44, c:'#E36B5A' },
];

export default function PE() {
  return (
    <section id="pe">
      <div className="wrap">
        <Reveal><div className="eyebrow on-dark"><span className="num">08</span><span className="ln" style={{color:'var(--d-dim)'}} /><span className="lbl">For Private Equity</span></div></Reveal>
        <Reveal><h2 className="head">For PE firms, value creation depends on execution speed.</h2></Reveal>
        <Reveal><p className="lead on-dark">Portfolio companies don&apos;t miss value creation plans because the strategy is wrong. They miss because execution friction compounds faster than leadership can see it.</p></Reveal>

        <div className="pe-grid">
          <Reveal>
            <div>
              <div className="pe-pts">
                {pts.map((p) => (
                  <div key={p.n} className="pe-pt">
                    <span className="pe-n">{p.n}</span>
                    <div><h4>{p.h}</h4><p>{p.p}</p></div>
                  </div>
                ))}
              </div>
              <a href="#pilot" className="btn btn-primary">
                Run a Portfolio Diagnostic
                <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="pf">
              <div className="pf-h">
                <span className="pf-t">Portfolio Execution Overview</span>
                <span className="pf-tag">Q4 · 5 Companies</span>
              </div>
              <div className="pf-b">
                {companies.map((c) => (
                  <div key={c.name} className="pf-r">
                    <span className="pf-name">{c.name}</span>
                    <span className={`pf-badge ${c.cls}`}>{c.badge}</span>
                    <div className="pf-bar-bg"><div className="pf-bar" style={{width:`${c.w}%`,background:c.c}}/></div>
                    <span className="pf-sc">{c.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
