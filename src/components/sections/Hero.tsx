'use client';

import React, { useEffect, useRef } from 'react';
import Reveal from '../ui/Reveal';
import { useGuide } from '../layout/GuideProvider';

export default function Hero() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { startTour } = useGuide();

  useEffect(() => {
    const svg = svgRef.current;
    const scan = svg ? svg.querySelector('#scan') : null;
    let sy = 60;
    let dir = 1;
    let rafId: number;

    function animScan() {
      if (scan) {
        sy += dir * 1.4;
        if (sy > 360) { dir = -1; }
        if (sy < 60) { dir = 1; }
        scan.setAttribute('y1', String(sy));
        scan.setAttribute('y2', String(sy));
        scan.setAttribute('opacity', String(0.15 + Math.abs(Math.sin(sy / 100)) * 0.25));
      }
      rafId = requestAnimationFrame(animScan);
    }

    rafId = requestAnimationFrame(animScan);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="wrap">
        <div className="hero">
          {/* Left column */}
          <div>
            <div className="hero-tag">
              <span className="dot" />
              Organizational Performance Intelligence
            </div>
            <h1>
              Execution friction,<br />
              <span className="accent">made visible.</span>
            </h1>
            <p className="hero-sub">
              Oprava helps CEOs, PE operating partners, and leadership teams detect hidden organizational drag, quantify execution risk, and protect EBITDA before value leaks away.
            </p>
            <div className="hero-cta">
              <a href="#pilot" className="btn btn-primary">
                Run a 30-Day Diagnostic
                <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#solution" className="btn btn-ghost">See How It Works</a>
            </div>
            <div className="hero-cta-tour">
              <button className="btn btn-walkthrough" type="button" onClick={startTour}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
                </svg>
                Take the Executive Walkthrough
              </button>
            </div>
            <div className="hero-metrics">
              <div className="hm"><div className="hm-val">74</div><div className="hm-lbl">Health Score</div></div>
              <div className="hm"><div className="hm-val amber">MOD</div><div className="hm-lbl">Friction Index</div></div>
              <div className="hm"><div className="hm-val crit">$3.2M</div><div className="hm-lbl">EBITDA at Risk</div></div>
              <div className="hm"><div className="hm-val">−18%</div><div className="hm-lbl">Decision Velocity</div></div>
            </div>
          </div>

          {/* Lens card */}
          <Reveal>
            <div className="lens-card">
              <div className="lens-head">
                <div className="lens-head-l">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#7A8794" strokeWidth="1" />
                    <circle cx="7" cy="7" r="2" stroke="#7A8794" strokeWidth="1" />
                  </svg>
                  OPRAVA LENS · DIAGNOSTIC
                </div>
                <span className="live">Scanning</span>
              </div>
              <svg ref={svgRef} className="lens-svg" viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1F4DDB" stopOpacity="0.18" />
                    <stop offset="70%" stopColor="#1F4DDB" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#1F4DDB" stopOpacity="0" />
                  </radialGradient>
                  <clipPath id="lhalf"><rect x="0" y="0" width="260" height="440" /></clipPath>
                </defs>
                {/* Ligne de scan animée */}
                <line
                  id="scan"
                  x1="0"
                  y1="60"
                  x2="520"
                  y2="60"
                  stroke="#1F4DDB"
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                />
                <g opacity="0.85">
                  <line x1="30" y1="80" x2="190" y2="195" stroke="#1F4DDB" strokeOpacity="0.3" strokeWidth="0.75" strokeDasharray="4 3" />
                  <line x1="30" y1="135" x2="190" y2="208" stroke="#1F4DDB" strokeOpacity="0.22" strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1="30" y1="195" x2="190" y2="220" stroke="#C26A0A" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 3" />
                  <line x1="30" y1="255" x2="190" y2="232" stroke="#1F4DDB" strokeOpacity="0.22" strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1="30" y1="315" x2="190" y2="244" stroke="#C26A0A" strokeOpacity="0.4" strokeWidth="0.75" strokeDasharray="4 3" />
                  <line x1="30" y1="365" x2="190" y2="255" stroke="#1F4DDB" strokeOpacity="0.18" strokeWidth="0.75" strokeDasharray="3 4" />
                </g>
                <g>
                  <circle cx="30" cy="80" r="3" fill="#1F4DDB" fillOpacity="0.5" />
                  <circle cx="30" cy="135" r="2.5" fill="#1F4DDB" fillOpacity="0.4" />
                  <circle cx="30" cy="195" r="4" fill="#C26A0A" />
                  <circle cx="30" cy="255" r="2.5" fill="#1F4DDB" fillOpacity="0.4" />
                  <circle cx="30" cy="315" r="3.5" fill="#C26A0A" fillOpacity="0.7" />
                  <circle cx="30" cy="365" r="2.5" fill="#1F4DDB" fillOpacity="0.3" />
                </g>
                <text x="42" y="77" fill="#56636F" fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">decision_latency</text>
                <text x="42" y="132" fill="#7A8794" fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">ownership_gap</text>
                <text x="42" y="192" fill="#C26A0A" fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">leadership_block</text>
                <text x="42" y="252" fill="#7A8794" fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">coord_overload</text>
                <text x="42" y="312" fill="#C26A0A" fontSize="9.5" fontFamily="'IBM Plex Mono',monospace" opacity="0.85">change_fatigue</text>
                <text x="42" y="362" fill="#9AA3AC" fontSize="9.5" fontFamily="'IBM Plex Mono',monospace">strategy_drift</text>
                <circle cx="260" cy="220" r="130" fill="url(#core)" />
                <circle cx="260" cy="220" r="128" stroke="#1F4DDB" strokeOpacity="0.12" strokeWidth="0.75" />
                <circle cx="260" cy="220" r="98" stroke="#1F4DDB" strokeOpacity="0.2" strokeWidth="0.75" />
                <circle cx="260" cy="220" r="68" stroke="#1F4DDB" strokeOpacity="0.4" strokeWidth="1" />
                <circle cx="260" cy="220" r="40" fill="#FBFAF6" stroke="#1F4DDB" strokeOpacity="0.65" strokeWidth="1.25" />
                <line x1="260" y1="186" x2="260" y2="254" stroke="#1F4DDB" strokeOpacity="0.25" strokeWidth="0.5" />
                <line x1="226" y1="220" x2="294" y2="220" stroke="#1F4DDB" strokeOpacity="0.25" strokeWidth="0.5" />
                <circle cx="260" cy="220" r="5" fill="#1F4DDB" />
                <g opacity="0.9">
                  <line x1="328" y1="195" x2="358" y2="120" stroke="#0C141E" strokeOpacity="0.18" strokeWidth="0.75" />
                  <line x1="330" y1="210" x2="358" y2="165" stroke="#0C141E" strokeOpacity="0.22" strokeWidth="0.75" />
                  <line x1="332" y1="222" x2="358" y2="212" stroke="#1F4DDB" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="330" y1="232" x2="358" y2="258" stroke="#0C141E" strokeOpacity="0.18" strokeWidth="0.75" />
                  <line x1="328" y1="244" x2="358" y2="305" stroke="#0C141E" strokeOpacity="0.14" strokeWidth="0.75" />
                </g>
                <g fontFamily="'IBM Plex Mono',monospace">
                  <rect x="358" y="104" width="132" height="34" rx="5" fill="#FFFFFF" stroke="#1F4DDB" strokeOpacity="0.2" strokeWidth="0.75" />
                  <text x="370" y="120" fill="#7A8794" fontSize="8.5">Health Score</text>
                  <text x="370" y="132" fill="#1F4DDB" fontSize="11" fontWeight="500">74 / 100</text>
                  <rect x="358" y="149" width="132" height="34" rx="5" fill="#FBEFD9" fillOpacity="0.5" stroke="#C26A0A" strokeOpacity="0.25" strokeWidth="0.75" />
                  <text x="370" y="165" fill="#C26A0A" fontSize="8.5" opacity="0.8">Friction Index</text>
                  <text x="370" y="177" fill="#C26A0A" fontSize="11" fontWeight="500">MOD · 0.61</text>
                  <rect x="358" y="194" width="132" height="34" rx="5" fill="#F8E6E1" fillOpacity="0.5" stroke="#B23A2A" strokeOpacity="0.25" strokeWidth="0.75" />
                  <text x="370" y="210" fill="#B23A2A" fontSize="8.5" opacity="0.85">EBITDA at Risk</text>
                  <text x="370" y="222" fill="#B23A2A" fontSize="11" fontWeight="500">$3.2M ±0.4M</text>
                  <rect x="358" y="239" width="132" height="34" rx="5" fill="#FFFFFF" stroke="#0C141E" strokeOpacity="0.1" strokeWidth="0.75" />
                  <text x="370" y="255" fill="#7A8794" fontSize="8.5">Decision Velocity</text>
                  <text x="370" y="267" fill="#56636F" fontSize="11" fontWeight="500">−18% ↓</text>
                  <rect x="358" y="284" width="132" height="34" rx="5" fill="#DEF1E8" fillOpacity="0.5" stroke="#1B7A57" strokeOpacity="0.25" strokeWidth="0.75" />
                  <text x="370" y="300" fill="#1B7A57" fontSize="8.5">Interventions</text>
                  <text x="370" y="312" fill="#1B7A57" fontSize="11" fontWeight="500">4 prioritized</text>
                </g>
                <text x="260" y="400" textAnchor="middle" fill="#9AA3AC" fontSize="8.5" fontFamily="'IBM Plex Mono',monospace" letterSpacing="3">SIGNALS  →  LENS  →  INTELLIGENCE</text>
              </svg>
              <div className="lens-cap">Live execution risk scan · signals translated into friction risk</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
