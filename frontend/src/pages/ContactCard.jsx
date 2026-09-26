import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import yeswanthPortrait from '../assets/portrait/yeswanth-latest-studio-portrait.png';
import { portfolioData } from '../data/portfolio.js';
import { downloadVCard } from '../utils/vcard.js';
import { getContactCardUrl, getProductionSiteUrl } from '../utils/siteConfig.js';

export default function ContactCard({ onNavigateHome }) {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);
  const contactCardUrl = getContactCardUrl();
  const prodSiteUrl = getProductionSiteUrl();

  // SEO & Head Metadata for Contact Card
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Yeswanth Uggina — Contact';

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Digital contact card for Yeswanth Uggina, Python Developer.');

    return () => {
      document.title = prevTitle;
      if (metaDesc) {
        metaDesc.setAttribute('content', prevDesc || '');
      }
    };
  }, []);

  const handleCopy = (text, fieldName) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#F5F3EC] text-[#141414] py-8 sm:py-12 px-4 sm:px-6 md:px-8 flex flex-col justify-between selection:bg-[#C86D51] selection:text-white">
      {/* Top Bar Navigation */}
      <header className="max-w-2xl mx-auto w-full mb-6 sm:mb-8 flex items-center justify-between">
        <a
          href="/"
          onClick={handleHomeClick}
          className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-bold tracking-wider uppercase text-[#141414] hover:text-[#C86D51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C86D51] rounded"
          aria-label="Navigate back to full portfolio"
        >
          <span aria-hidden="true">←</span> BACK TO PORTFOLIO
        </a>

        <span className="text-[11px] font-mono tracking-widest text-[#8C887B] uppercase hidden sm:inline-block">
          DIGITAL CONTACT CARD
        </span>
      </header>

      {/* Main Card Container */}
      <article className="max-w-2xl mx-auto w-full bg-white border border-[#E7E4DC] rounded-lg shadow-sm p-4 sm:p-8 md:p-10 transition-shadow">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-[#E7E4DC]">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#C86D51]/30 bg-[#EFECE3] shrink-0 shadow-inner">
            <img
              src={yeswanthPortrait}
              alt="Portrait of Yeswanth Uggina"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          <div className="text-center sm:text-left flex-1">
            <span className="inline-block px-2.5 py-0.5 mb-2 font-mono text-[11px] font-bold tracking-widest uppercase bg-[#C86D51]/10 text-[#C86D51] rounded">
              {personal.title}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              {personal.name}
            </h1>
            <p className="font-mono text-xs font-semibold text-[#66645E] mt-1 uppercase tracking-wider">
              {personal.fullName}
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#55524B] mt-2">
              {personal.location}
            </p>
            <p className="font-mono text-[11px] font-bold text-[#C86D51] mt-1 flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#34A853] inline-block animate-pulse" aria-hidden="true" />
              {personal.availability}
            </p>
          </div>
        </div>

        {/* Primary Call to Action: SAVE CONTACT */}
        <div className="pt-6 pb-6">
          <button
            type="button"
            onClick={downloadVCard}
            id="btn-save-contact"
            className="w-full py-4 px-6 rounded-md bg-[#C86D51] hover:bg-[#b55e43] text-white font-mono text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-3 shadow-md hover:shadow cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C86D51]/30 min-h-[48px]"
            aria-label="Save Yeswanth Uggina contact details to your phone or address book"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" />
            </svg>
            <span>SAVE CONTACT</span>
          </button>
          <p className="text-center font-sans text-xs text-[#8C887B] mt-2">
            Downloads standard <span className="font-mono font-medium">Yeswanth_Uggina.vcf</span> (iOS &amp; Android compatible)
          </p>
        </div>

        {/* Quick Action Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-8 border-b border-[#E7E4DC]">
          <a
            href={`mailto:${personal.email}`}
            className="flex flex-col items-center justify-center p-3 rounded-md border border-[#E7E4DC] hover:border-[#141414] hover:bg-[#F5F3EC] text-[#141414] transition-colors min-h-[56px] text-center focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
            aria-label="Send email to Yeswanth Uggina"
          >
            <svg className="w-5 h-5 mb-1 fill-current text-[#C86D51]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase">EMAIL</span>
          </a>

          <a
            href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`}
            className="flex flex-col items-center justify-center p-3 rounded-md border border-[#E7E4DC] hover:border-[#141414] hover:bg-[#F5F3EC] text-[#141414] transition-colors min-h-[56px] text-center focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
            aria-label="Call Yeswanth Uggina"
          >
            <svg className="w-5 h-5 mb-1 fill-current text-[#C86D51]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase">CALL / SMS</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-md border border-[#E7E4DC] hover:border-[#141414] hover:bg-[#F5F3EC] text-[#141414] transition-colors min-h-[56px] text-center focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
            aria-label="Open LinkedIn profile"
          >
            <svg className="w-5 h-5 mb-1 fill-current text-[#C86D51]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
            </svg>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase">LINKEDIN</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-md border border-[#E7E4DC] hover:border-[#141414] hover:bg-[#F5F3EC] text-[#141414] transition-colors min-h-[56px] text-center focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
            aria-label="Open GitHub repositories"
          >
            <svg className="w-5 h-5 mb-1 fill-current text-[#C86D51]" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase">GITHUB</span>
          </a>
        </div>

        {/* Detailed Contact Attributes */}
        <section className="py-6 space-y-4 border-b border-[#E7E4DC]" aria-label="Contact Details">
          {/* Full Name */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase">
              FULL NAME
            </span>
            <span className="font-sans text-sm font-semibold text-[#141414]">
              {personal.fullName}
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase">
              EMAIL
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={`mailto:${personal.email}`}
                className="font-sans text-sm font-medium text-[#C86D51] hover:underline break-all"
              >
                {personal.email}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(personal.email, 'email')}
                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#F5F3EC] border border-[#E7E4DC] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
                aria-label="Copy email address"
              >
                {copiedField === 'email' ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase">
              PHONE
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`}
                className="font-mono text-sm font-semibold text-[#141414] hover:text-[#C86D51]"
              >
                {personal.phone}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#F5F3EC] border border-[#E7E4DC] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
                aria-label="Copy phone number"
              >
                {copiedField === 'phone' ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>

          {/* Portfolio */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase">
              PORTFOLIO
            </span>
            <a
              href="/"
              onClick={handleHomeClick}
              className="font-sans text-sm font-medium text-[#C86D51] hover:underline"
            >
              {prodSiteUrl || 'Production Portfolio Home'}
            </a>
          </div>
        </section>

        {/* Share Section with Live QR */}
        <section className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6" aria-label="Share contact card">
          <div className="text-center sm:text-left">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block">
              SHARE THIS CONTACT CARD
            </span>
            <p className="font-sans text-xs text-[#55524B] mt-1 max-w-xs">
              Allow anyone to scan and save your contact information directly from their phone camera.
            </p>
          </div>

          <div
            className="p-2.5 bg-white border border-[#E7E4DC] rounded shadow-sm shrink-0 flex items-center justify-center"
            title="Scan to open this contact card"
          >
            <QRCodeSVG
              value={contactCardUrl}
              size={100}
              level="M"
              fgColor="#141414"
              bgColor="#FFFFFF"
              aria-label="QR code to open Yeswanth Uggina's digital contact card"
            />
          </div>
        </section>
      </article>

      {/* Editorial Footer Bottom Bar */}
      <footer className="max-w-2xl mx-auto w-full text-center mt-8 text-xs font-mono text-[#8C887B]">
        <p>© {new Date().getFullYear()} UGGINA YESWANTH NARASAYYA NAIDU • PYTHON DEVELOPER</p>
      </footer>
    </main>
  );
}
