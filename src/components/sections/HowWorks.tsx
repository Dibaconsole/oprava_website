import React from 'react';
import Reveal from '../ui/Reveal';

const steps = [
  { n:'01', h:'Map the operating context', p:'Define the company, leadership structure, core initiatives, functions, and execution priorities.' },
  { n:'02', h:'Capture friction signals', p:'Collect structured inputs from workflows, leadership assessments, operating rhythms, and available system data.' },
  { n:'03', h:'Prioritize action', p:'Translate signals into risk patterns, intervention priorities, and an executive-ready operating view.' },
];

const Arrow = () => (
  <div className="hw-arrow" aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default function HowWorks() {
  return (
    <section id="howworks">
      <div className="wrap">
        <Reveal><div className="eyebrow"><span className="num">09</span><span className="ln" /><span className="lbl">The Process</span></div></Reveal>
        <Reveal><h2 className="head">How the diagnostic works.</h2></Reveal>
        <Reveal><p className="lead">Three structured steps. Thirty days. An executive-ready operating view.</p></Reveal>
        <Reveal>
          <div className="hw-steps">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="hw-step">
                  <div className="hw-n">{s.n}</div>
                  <div className="hw-body">
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <Arrow />}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
