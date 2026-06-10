'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useGuide } from './GuideProvider';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { startTour } = useGuide();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#hero" className="logo" onClick={close}>
          <div className="logo-txt">
            <Image
              src="/assets/images/oprava_logo.png"
              alt="Oprava Logo"
              width={120}
              height={40}
              className="logo-icon"
            />
          </div>
        </a>

        {/* Desktop menu */}
        <div className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <a href="#solution" onClick={close}>Platform</a>
          <a href="#product" onClick={close}>Product</a>
          <a href="#usecases" onClick={close}>Use Cases</a>
          <a href="#pe" onClick={close}>For PE</a>
          <a href="#ontology" onClick={close}>Architecture</a>
          <button className="nav-tour-btn" onClick={() => {
            close();
            startTour();
          }}>Tour</button>
          <a href="#pilot" className="nav-btn" onClick={close}>Run a Diagnostic</a>
        </div>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
