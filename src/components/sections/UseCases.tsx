import React from 'react';
import Reveal from '../ui/Reveal';

const cases = [
  { eb:'Private Equity', title:'PE Portfolio Monitoring', det:'Execution fragility and ownership gaps across portfolio companies before they surface in financials.', prev:'Value creation plan misses driven by organizational friction rather than strategy failure.', out:'Protects EBITDA targets & exit multiples' },
  { eb:'M&A / Integration', title:'Post-Acquisition Integration', det:'Cultural misalignment, decision gaps, and leadership ownership ambiguity during integration.', prev:'Integration friction compounding into execution breakdown and deal value erosion.', out:'Protects deal value & synergy capture' },
  { eb:'Transformation', title:'Transformation Execution', det:'Change readiness decline, strategy-to-execution gaps, and transformation fatigue signals.', prev:'Strategic initiatives stalling at the organizational layer before visible performance impact.', out:'Protects transformation ROI & timeline' },
  { eb:'Leadership', title:'Leadership Alignment', det:'Where leadership intent is not reaching team-level execution, creating bottlenecks and drift.', prev:'Misalignment between executive intent and operational reality compounding over time.', out:'Protects execution speed & clarity' },
  { eb:'Operations', title:'Operating Performance', det:'Coordination overload, duplicated work, and process friction slowing growth and margins.', prev:'Operational drag becoming a structural drag on EBITDA without a clear diagnosis.', out:'Protects margin & growth velocity' },
  { eb:'Board / Investor', title:'Board & Investor Visibility', det:'Organizational risk not visible in financial reporting: fragility, leadership gaps, readiness.', prev:'Boards being surprised by organizational performance failure after results deteriorate.', out:'Protects enterprise value & confidence' },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function UseCases() {
  return (
    <section id="usecases">
      <div className="wrap">
        <Reveal><div className="eyebrow"><span className="num">05</span><span className="ln" /><span className="lbl">Use Cases</span></div></Reveal>
        <Reveal><h2 className="head">Built for moments when execution risk matters most.</h2></Reveal>
        <Reveal><p className="lead">From PE portfolio monitoring to transformation execution, Oprava delivers execution risk visibility when organizational performance is under the highest pressure.</p></Reveal>
        <div className="uc-grid">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="uc">
                <div className="uc-eb">{c.eb}</div>
                <h3>{c.title}</h3>
                <div className="uc-block">
                  <div className="uc-k det"><span className="kdot" />Detects</div>
                  <div className="uc-p">{c.det}</div>
                </div>
                <div className="uc-block">
                  <div className="uc-k prev"><span className="kdot" />Prevents</div>
                  <div className="uc-p">{c.prev}</div>
                </div>
                <div className="uc-out"><CheckIcon />{c.out}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
