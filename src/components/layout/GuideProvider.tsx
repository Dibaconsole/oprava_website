'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type TourStep = {
  id: string;
  title: string;
  desc: string;
};

type GuideContextValue = {
  startTour: () => void;
};

const GuideContext = createContext<GuideContextValue | undefined>(undefined);

const TOUR_STEPS: TourStep[] = [
  {
    id: 'hero',
    title: 'Execution friction, made visible.',
    desc: 'Oprava helps CEOs, PE operating partners, and leadership teams detect hidden organizational drag and quantify execution risk before value leaks away.',
  },
  {
    id: 'problem',
    title: 'The problem is not just performance. It is invisible friction.',
    desc: 'Most companies can see revenue, costs, and EBITDA. Oprava focuses on the hidden execution issues behind those numbers.',
  },
  {
    id: 'whynow',
    title: 'Why execution risk is harder to see than ever.',
    desc: 'More tools, more dependencies, more data, yet leadership still lacks a reliable way to see where execution is slowing before it shows up in the numbers.',
  },
  {
    id: 'solution',
    title: 'A system for translating signals into risk.',
    desc: 'Oprava connects operational signals, identifies friction patterns, and turns them into measurable execution risk that leaders can act on.',
  },
  {
    id: 'product',
    title: 'The dashboard is the command center.',
    desc: 'Users see health scores, friction signals, EBITDA-at-risk indicators, bottlenecks, and recommended interventions in one executive-ready view.',
  },
  {
    id: 'ontology',
    title: 'The ontology is the intelligence layer.',
    desc: 'Beyond charts, Oprava is built on a proprietary organizational health ontology that links behavior, systems, operations, execution, and financial outcomes.',
  },
  {
    id: 'usecases',
    title: 'Use cases turn diagnosis into action.',
    desc: 'Oprava supports transformation tracking, operating reviews, leadership alignment, integration risk, and portfolio-wide execution visibility.',
  },
  {
    id: 'pe',
    title: 'Built for PE operating partners.',
    desc: 'For private equity teams, Oprava creates a repeatable way to see execution risk across portfolio companies before it affects value creation.',
  },
  {
    id: 'pilot',
    title: 'The next step is a focused diagnostic.',
    desc: 'The 30-day diagnostic helps leadership experience how Oprava surfaces friction, prioritizes risk, and creates a clearer operating view.',
  },
];

function useGuideContext() {
  const context = useContext(GuideContext);
  if (!context) {
    throw new Error('useGuide must be used within a GuideProvider');
  }
  return context;
}

export function useGuide() {
  return useGuideContext();
}

export default function GuideProvider({ children }: { children: React.ReactNode }) {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [active, setActive] = useState(false);

  const currentStep = TOUR_STEPS[stepIndex];

  const startTour = () => {
    setStepIndex(0);
    setActive(true);
  };

  const closeTour = () => {
    setActive(false);
  };

  const goNext = () => {
    setStepIndex((current) => Math.min(current + 1, TOUR_STEPS.length - 1));
  };

  const goPrev = () => {
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  useEffect(() => {
    if (!active) {
      document.querySelectorAll('.tour-highlight').forEach((el) => el.classList.remove('tour-highlight'));
      return;
    }

    const target = document.getElementById(currentStep.id);
    if (!target) {
      return;
    }

    const previous = document.querySelector('.tour-highlight');
    if (previous) {
      previous.classList.remove('tour-highlight');
    }

    target.classList.add('tour-highlight');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!active) return;
      if (event.key === 'Escape') {
        closeTour();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      target.classList.remove('tour-highlight');
    };
  }, [active, currentStep]);

  const contextValue = useMemo(() => ({ startTour }), []);

  return (
    <GuideContext.Provider value={contextValue}>
      {children}
      <div id="tour-overlay" className={active ? 'active' : ''} onClick={closeTour} />
      <div id="tour-card" className={active ? 'active' : ''} role="dialog" aria-modal="true" aria-labelledby="tour-title">
        <div className="tour-eyebrow" aria-live="polite">Step {stepIndex + 1} of {TOUR_STEPS.length}</div>
        <h3 id="tour-title">{currentStep.title}</h3>
        <p>{currentStep.desc}</p>
        <div className="tour-progress" role="tablist" aria-label="Tour progress">
          {TOUR_STEPS.map((_, index) => (
            <span key={index} className={`tp-dot${index === stepIndex ? ' on' : ''}`} aria-label={`Step ${index + 1}`} />
          ))}
        </div>
        <div className="tour-btns">
          <button className="tbtn-skip" onClick={closeTour} type="button">Skip</button>
          {stepIndex > 0 && (
            <button className="tbtn-back" onClick={goPrev} type="button">Back</button>
          )}
          <button className={stepIndex === TOUR_STEPS.length - 1 ? 'tbtn-finish' : 'tbtn-next'} onClick={stepIndex === TOUR_STEPS.length - 1 ? closeTour : goNext} type="button">
            {stepIndex === TOUR_STEPS.length - 1 ? 'Finish' : 'Next →'}
          </button>
        </div>
      </div>
    </GuideContext.Provider>
  );
}
