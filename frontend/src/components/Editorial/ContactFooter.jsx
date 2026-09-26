import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { portfolioData } from '../../data/portfolio.js';
import { getContactCardUrl } from '../../utils/siteConfig.js';

export default function ContactFooter({ onOpenResume }) {
  const { personal } = portfolioData;
  const contactCardUrl = getContactCardUrl();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <footer id="contact" className="w-full bg-[#EFECE3] py-20 px-6 sm:px-12 md:px-16 text-[#141414] border-t border-[#D8D4C8]">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="border-b border-[#D8D4C8] pb-12 mb-12">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase block mb-2">
            05 // INITIATION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#141414] leading-[1.05] tracking-tight">
            LET&apos;S BUILD <br />
            <span className="text-[#C86D51]">SOMETHING GREAT</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#55524B] mt-4 max-w-2xl leading-relaxed">
            Have a project or opportunity in mind? Let&apos;s build practical software that solves real-world problems.
          </p>
        </div>

        {/* Content Columns: Info & Form + QR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-[#D8D4C8]">
          {/* Left: Contact Form & Channels */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Direct Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block mb-1">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-serif text-base sm:text-lg font-bold text-[#141414] hover:text-[#C86D51] transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white border border-[#D8D4C8] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                </div>
              </div>

              <div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block mb-1">
                  LOCATION &amp; STATUS
                </span>
                <p className="font-serif text-base sm:text-lg font-bold text-[#141414]">
                  {personal.location}
                </p>
                <p className="font-mono text-xs text-[#C86D51] font-semibold mt-0.5">
                  Available for opportunities
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block mb-1">
                  LINKEDIN PROFILE
                </span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-base sm:text-lg font-bold text-[#141414] hover:text-[#C86D51] transition-colors"
                >
                  linkedin.com/in/yeswanth-uggina
                </a>
              </div>

              <div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block mb-1">
                  GITHUB REPOSITORIES
                </span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-base sm:text-lg font-bold text-[#141414] hover:text-[#C86D51] transition-colors"
                >
                  github.com/yeswanth412
                </a>
              </div>
            </div>

            {/* Quick Editorial Contact Form */}
            <div className="bg-white border border-[#D8D4C8] p-6 sm:p-8 rounded-sm">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#C86D51] uppercase block mb-2">
                SEND A MESSAGE
              </span>

              {formSubmitted ? (
                <div className="py-4">
                  <h4 className="font-serif text-lg font-bold text-[#141414] mb-2">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="font-sans text-sm text-[#55524B] mb-4">
                    Your note has been received. You can also reach me directly at{' '}
                    <a href={`mailto:${personal.email}`} className="text-[#C86D51] underline font-medium">
                      {personal.email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-full border border-[#141414] text-xs font-mono font-bold uppercase hover:bg-[#141414] hover:text-white transition-colors"
                  >
                    SEND ANOTHER NOTE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-mono text-[10.5px] font-bold tracking-wider text-[#66645E] uppercase block mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3 py-2 text-sm font-sans bg-[#F5F3EC] border border-[#D8D4C8] rounded-sm focus:outline-none focus:border-[#C86D51]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-mono text-[10.5px] font-bold tracking-wider text-[#66645E] uppercase block mb-1">
                        YOUR EMAIL *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        className="w-full px-3 py-2 text-sm font-sans bg-[#F5F3EC] border border-[#D8D4C8] rounded-sm focus:outline-none focus:border-[#C86D51]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-mono text-[10.5px] font-bold tracking-wider text-[#66645E] uppercase block mb-1">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Discussing Python backend development or project collaboration..."
                      className="w-full px-3 py-2 text-sm font-sans bg-[#F5F3EC] border border-[#D8D4C8] rounded-sm focus:outline-none focus:border-[#C86D51]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#141414] hover:bg-[#C86D51] text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
                    >
                      SEND MESSAGE →
                    </button>

                    <button
                      type="button"
                      onClick={onOpenResume}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D8D4C8] hover:border-[#141414] font-mono text-xs font-bold tracking-wider uppercase text-[#141414] transition-colors cursor-pointer"
                    >
                      RESUME
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Editorial QR Code Card (Real Functional QR) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end justify-center">
            <div className="bg-white border border-[#D8D4C8] p-6 rounded-sm shadow-md text-center w-full max-w-[280px]">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#C86D51] uppercase block mb-1">
                SCAN TO CONNECT
              </span>
              <div className="font-serif text-lg font-bold text-[#141414] leading-tight">
                {personal.name}
              </div>
              <p className="font-mono text-[10px] text-[#66645E] font-bold uppercase tracking-wider mb-4">
                {personal.title}
              </p>

              {/* Real Live QR Code */}
              <a
                href={contactCardUrl}
                onClick={(e) => {
                  if (contactCardUrl.startsWith('/') || (typeof window !== 'undefined' && contactCardUrl.startsWith(window.location.origin))) {
                    e.preventDefault();
                    window.history.pushState({}, '', '/contact-card');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                    window.scrollTo(0, 0);
                  }
                }}
                className="w-48 h-48 mx-auto bg-white p-3 rounded border border-[#E7E4DC] flex items-center justify-center hover:border-[#C86D51] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C86D51] block shadow-inner cursor-pointer"
                aria-label="QR code to open Yeswanth Uggina's digital contact card"
                title="Scan with phone or click to view contact card"
              >
                <QRCodeSVG
                  value={contactCardUrl}
                  size={168}
                  level="M"
                  fgColor="#141414"
                  bgColor="#FFFFFF"
                  aria-label="QR code to open Yeswanth Uggina's digital contact card"
                  role="img"
                />
              </a>

              <p className="font-sans text-[11px] text-[#8C887B] mt-3 leading-relaxed">
                Scan with your phone camera to view and save contact details.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#8C887B]">
          <div>
            © {new Date().getFullYear()} YESWANTH UGGINA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>VISAKHAPATNAM, ANDHRA PRADESH</span>
            <span>PYTHON DEVELOPER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
