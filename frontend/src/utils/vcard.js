import { portfolioData } from '../data/portfolio.js';
import { getProductionSiteUrl } from './siteConfig.js';

/**
 * Generates standards-compliant vCard 3.0 (RFC 2426) for Yeswanth Uggina.
 * Compatible with iPhone Contacts, Android Contacts, Google Contacts, and desktop address books.
 */
export const generateVCardString = () => {
  const { personal } = portfolioData;
  const prodUrl = getProductionSiteUrl() || (typeof window !== 'undefined' ? window.location.origin : '');

  // RFC 2426 compliant line breaks (\r\n)
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Uggina;Yeswanth;Narasayya Naidu;;',
    `FN:${personal.name}`,
    `TITLE:${personal.title}`,
    `EMAIL;TYPE=INTERNET,PREF:${personal.email}`,
    `TEL;TYPE=CELL,VOICE:${personal.phone}`,
  ];

  if (prodUrl) {
    lines.push(`URL:${prodUrl}`);
  }

  lines.push(`NOTE:${personal.title}`);
  lines.push('END:VCARD');

  return lines.join('\r\n') + '\r\n';
};

/**
 * Triggers the download of Yeswanth_Uggina.vcf
 */
export const downloadVCard = () => {
  const vcardText = generateVCardString();
  const blob = new Blob([vcardText], { type: 'text/vcard;charset=utf-8;' });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Yeswanth_Uggina.vcf');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    window.URL.revokeObjectURL(url);
  }, 1000);
};
