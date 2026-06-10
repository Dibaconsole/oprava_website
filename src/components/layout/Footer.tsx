import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <Image
                src="/assets/images/oprava_white_logo.png"
                alt="Oprava Logo"
                width={120}
                height={40}
                className="logo-icon"
              />
            </div>
            <p className="foot-desc">Organizational Performance Intelligence. Execution friction, made visible.</p>
          </div>
          <div className="foot-col">
            <h5>Platform</h5>
            <a href="#solution">How It Works</a>
            <a href="#product">Product</a>
            <a href="#ontology">Architecture</a>
            <a href="#comparison">Why Oprava</a>
          </div>
          <div className="foot-col">
            <h5>Solutions</h5>
            <a href="#usecases">Use Cases</a>
            <a href="#pe">For PE Firms</a>
            <a href="#pilot">Pilot Program</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="#">Insights</a>
            <a href="mailto:hello@oprava.com">Contact</a>
            <a href="#pilot">Request a Pilot</a>
          </div>
        </div>
        <div className="foot-bot">
          <span className="foot-tag">You can&apos;t optimize what you cannot see</span>
          <span className="foot-copy">© 2026 Oprava · All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
