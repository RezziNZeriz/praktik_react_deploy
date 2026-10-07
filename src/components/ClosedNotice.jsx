import React from 'react';
import './ClosedNotice.css';

/**
 * ClosedNotice — ditampilkan pada malam hari sebagai pengganti form login.
 * Menampilkan pesan bahwa layanan tutup dengan ikon jam dan info jam operasional.
 * Sesuai desain Figma: style papan mading bertema night dengan tali pengikat.
 */
export default function ClosedNotice() {
  return (
    <div className="closed-notice" id="closed-notice">
      <div className="closed-card">
        {/* Corner pins */}
        <div className="card-pin pin-tl" aria-hidden="true" />
        <div className="card-pin pin-tr" aria-hidden="true" />
        <div className="card-pin pin-bl" aria-hidden="true" />
        <div className="card-pin pin-br" aria-hidden="true" />

        {/* Content */}
        <div className="closed-content">
          {/* Clock Icon */}
          <div className="closed-icon-wrapper" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>

          {/* Main Message */}
          <h2 className="closed-heading">
            <span className="closed-heading-bold">TUTUP:</span> Jam Operasional
            Habis. Silakan kembali pada
            pukul 08.00 – 18.00 Waktu
            Lokal Anda.
          </h2>

          {/* Divider */}
          <div className="closed-divider" aria-hidden="true" />

          {/* Sub Message */}
          <p className="closed-sub">
            Layanan akan tersedia kembali
            secara otomatis besok pagi.
          </p>
        </div>

        {/* Wooden stand posts (noticeboard style) */}
        <div className="stand-post stand-left" aria-hidden="true" />
        <div className="stand-post stand-right" aria-hidden="true" />
      </div>
    </div>
  );
}
