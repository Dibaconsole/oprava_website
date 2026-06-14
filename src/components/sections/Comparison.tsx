import React from 'react';
import Reveal from '../ui/Reveal';

const rows = [
  { feat:'Measurement cadence', hr:'Periodic / annual', bi:'Continuous (lag)', op:'Continuous intelligence' },
  { feat:'Signal type', hr:'Sentiment / perception', bi:'Financial / operational', op:'Execution friction signals' },
  { feat:'Financial linkage', hr:'None', bi:'Partial (lagging)', op:'EBITDA at Risk estimate' },
  { feat:'Primary audience', hr:'HR / People teams', bi:'Finance / Ops', op:'CEO · PE · Board' },
  { feat:'Intervention guidance', hr:'None', bi:'None', op:'Prioritized by score' },
  { feat:'Benchmarking', hr:'Limited', bi:'Varies', op:'Cross-company ontology' },
];

export default function Comparison() {
  return (
    <section id="comparison">
      <div className="wrap">
        <Reveal><div className="eyebrow"><span className="num">07</span><span className="ln" /><span className="lbl">Differentiation</span></div></Reveal>
        <Reveal><h2 className="head">Not engagement. Not sentiment. Execution risk intelligence.</h2></Reveal>
        <Reveal><p className="lead">Oprava is a new category. It is not an HR survey, a BI dashboard, or an engagement tool. It is a continuous execution intelligence layer for CEOs, PE operating partners, and boards.</p></Reveal>

        <Reveal style={{overflowX:'auto'}}>
          <table className="ctable">
            <thead>
              <tr>
                <th>Capability</th>
                <th>HR Surveys</th>
                <th>BI Dashboards</th>
                <th className="op">Oprava</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feat}>
                  <td className="cf">{r.feat}</td>
                  <td className="cdim">{r.hr}</td>
                  <td className="cdim">{r.bi}</td>
                  <td className="op">{r.op}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal><p className="comp-line">Oprava does not measure how employees feel. It measures where execution is breaking.</p></Reveal>
        <Reveal>
          <div className="comp-cta">
            <a href="#pilot" className="btn btn-primary">
              Request a Pilot
              <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
