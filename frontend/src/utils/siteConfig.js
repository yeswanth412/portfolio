/**
 * Configuration and URL utilities for production deployment and QR generation.
 */

export const getProductionSiteUrl = () => {
  const envUrl = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_PUBLIC_SITE_URL : undefined;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/+$/, '');
  }

  // If in browser and running on a live domain (not localhost or loopback)
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host && host !== 'localhost' && host !== '127.0.0.1' && !host.startsWith('192.168.')) {
      return window.location.origin;
    }
  }

  // When still on localhost without explicit production URL configured
  return '';
};

export const getContactCardUrl = () => {
  const prodBase = getProductionSiteUrl();
  if (prodBase) {
    return `${prodBase}/contact-card`;
  }
  // Fallback to relative path without hardcoding localhost or fake domain
  return '/contact-card';
};
