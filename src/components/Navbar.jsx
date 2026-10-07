import React from 'react';
import './Navbar.css';

/**
 * Navigation bar - menampilkan branding "Jam Operasional" dan status layanan.
 * Berubah antara mode siang (light) dan malam (dark).
 */
export default function Navbar({ isDaytime, hours, minutes }) {
  const formatTime = (h, m) =>
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

  return (
    <nav className="navbar" id="navbar">
      {/* Logo & Brand */}
      <div className="navbar-brand">
        <div className="navbar-logo" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </div>
        <div className="navbar-text">
          <span className="navbar-title">Jam Operasional</span>
          <span className="navbar-subtitle">Portal Kampus Siang Malam</span>
        </div>
      </div>

      {/* Status Badge */}
      <div className={`navbar-status ${isDaytime ? 'status-open' : 'status-closed'}`} id="navbar-status">
        <span className="status-indicator" />
        <span className="status-text">
          {isDaytime
            ? `Layanan buka · 08:00–17:59`
            : `Layanan tutup · 18:00–07:59`
          }
        </span>
      </div>
    </nav>
  );
}
