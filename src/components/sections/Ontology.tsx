import React from 'react';
import Reveal from '../ui/Reveal';

const layers = [
  { n:'L1', t:'Signal Ingestion Layer', d:'Operating systems, assessments, workflow data, leadership structures', cls:'ol1', tag:'Data', tagStyle:{background:'rgba(31,77,219,0.16)',color:'#7DA0F5'} },
  { n:'L2', t:'Friction Pattern Ontology', d:'Taxonomy of recurring execution drag across decision, ownership, alignment, coordination', cls:'ol2', tag:'Patterns', tagStyle:{background:'rgba(31,77,219,0.12)',color:'#7DA0F5'} },
  { n:'L3', t:'Execution Risk Scoring', d:'Composite Health Score, Friction Index, domain-level risk indicators and velocity measures', cls:'ol3', tag:'Scoring', tagStyle:{background:'rgba(31,77,219,0.09)',color:'#7DA0F5'} },
  { n:'L4', t:'Financial Impact Mapping', d:'Translation of friction risk into EBITDA exposure estimates with confidence ranges', cls:'ol4', tag:'Financial', tagStyle:{background:'rgba(194,106,10,0.14)',color:'#F0B354'} },
  { n:'L5', t:'Intervention Intelligence', d:'Prioritized recommendations calibrated to friction type, severity, and business context', cls:'ol5', tag:'Actions', tagStyle:{background:'rgba(27,122,87,0.12)',color:'#5FD3A0'} },
  { n:'L6', t:'Benchmarking Intelligence', d:'Cross-company baselines across industries, stages, and transformation contexts', cls:'ol6', tag:'Intelligence', tagStyle:{background:'rgba(255,255,255,0.06)',color:'var(--d-dim)'} },
];

const stats = [
  { lbl:'Friction Domains', val:'6', d:'Decision · Ownership · Alignment · Coordination · Leadership · Change' },
  { lbl:'Signal Sources', val:'40+', d:'Operational, structural, behavioral, and financial signals mapped to the ontology' },
  { lbl:'Core Output Metrics', val:'3', d:'Health Score · Friction Index · EBITDA at Risk, all financially grounded' },
];

export default function Ontology() {
  return (
    <section id="ontology">
      <div className="wrap">
        <Reveal><div className="eyebrow on-dark"><span className="num">04</span><span className="ln" style={{color:'var(--d-dim)'}} /><span className="lbl">Intelligence Architecture</span></div></Reveal>
        <Reveal><h2 className="head">Built on a proprietary Organizational Health Ontology.</h2></Reveal>
        <Reveal><p className="lead on-dark">Oprava unifies organizational psychology, management science, systems theory, network science, and strategy execution research into a single scoring architecture that grows more intelligent over time.</p></Reveal>
        <Reveal><p className="onto-pull">The dashboard is the interface. <span>The ontology is the asset.</span></p></Reveal>
        <Reveal><p className="onto-learn">Every assessment, benchmark, intervention, and outcome strengthens the Oprava model. The asset compounds across companies.</p></Reveal>

        <div className="onto-wrap">
          <Reveal className="onto-stack">
            {layers.map((l) => (
              <div key={l.n} className={`olayer ${l.cls}`}>
                <span className="ol-n">{l.n}</span>
                <div>
                  <div className="ol-t">{l.t}</div>
                  <div className="ol-d">{l.d}</div>
                </div>
                <span className="ol-tag" style={l.tagStyle}>{l.tag}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="onto-side">
            {stats.map((s) => (
              <div key={s.lbl} className="osc">
                <div className="osc-l">{s.lbl}</div>
                <div className="osc-v">{s.val}</div>
                <div className="osc-d">{s.d}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
