import React from 'react';
import './Footer.css';

/**
 * Footer — menampilkan copyright, info jam layanan, dan link bantuan.
 * Menyesuaikan warna pada mode siang dan malam.
 */
export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        {/* Kiri: Copyright */}
        <div className="footer-section footer-copyright">
          <span>© 2026 Kampus Siang Malam</span>
        </div>

        {/* Tengah: Jam Layanan Info */}
        <div className="footer-section footer-info">
          <svg className="footer-clock-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>Jam layanan mengikuti waktu lokal perangkat Anda</span>
        </div>

        {/* Kanan: Link Bantuan */}
        <div className="footer-section footer-help">
          <a href="#" id="help-link" className="footer-link">
            Pusat bantuan
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
