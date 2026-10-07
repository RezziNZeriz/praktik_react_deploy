import React, { useState } from 'react';
import './LoginForm.css';

/**
 * Komponen Form Login — ditampilkan pada siang hari (08:00-17:59).
 * Redesign sesuai Figma: clean white card dengan form modern.
 * 
 * Elemen:
 * - Header: "LAYANAN AKADEMIK" + badge "● BUKA"
 * - Title: "Masuk ke portal"
 * - Input: NIM/Email + Password
 * - Checkbox: Ingat saya + Link: Lupa kata sandi?
 * - Button: Masuk →
 * - Link: Aktivasi akun kampus
 * - Info bar: Jam layanan
 */
export default function LoginForm({ hours, minutes }) {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nim.trim() || !password.trim()) return;

    setIsLoading(true);
    setLoginStatus(null);

    // Simulasi proses login
    setTimeout(() => {
      setIsLoading(false);
      if (nim.toLowerCase() === 'admin' && password === 'admin') {
        setLoginStatus('success');
      } else {
        setLoginStatus('error');
        setTimeout(() => setLoginStatus(null), 3000);
      }
    }, 1500);
  };

  return (
    <div className="login-card-wrapper" id="login-area">
      {/* Corner pins for wooden board */}
      <div className="login-card-pin pin-tl" aria-hidden="true" />
      <div className="login-card-pin pin-tr" aria-hidden="true" />
      <div className="login-card-pin pin-bl" aria-hidden="true" />
      <div className="login-card-pin pin-br" aria-hidden="true" />

      <div className="login-card">
        {/* Card Header */}
        <div className="card-header">
          <span className="card-label">LAYANAN AKADEMIK</span>
          <div className="card-badge" id="status-badge">
            <span className="badge-dot" />
            <span className="badge-text">BUKA</span>
          </div>
        </div>

        {/* Card Title */}
        <div className="card-title-section">
          <h1 className="card-title">Masuk ke portal</h1>
          <p className="card-description">Gunakan akun kampus untuk melanjutkan.</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit} id="login-form">
          {/* NIM / Email */}
          <div className="form-field">
            <label className="field-label" htmlFor="nim-input">NIM / Email kampus</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                type="text"
                id="nim-input"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Masukkan NIM atau email Anda"
                autoComplete="username"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-field">
            <label className="field-label" htmlFor="password-input">Kata sandi</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
                id="toggle-password-btn"
                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Options Row */}
          <div className="form-options">
            <label className="checkbox-label" htmlFor="remember-checkbox" id="remember-me-label">
              <input
                type="checkbox"
                id="remember-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkbox-custom" />
              <span className="checkbox-text">Ingat saya</span>
            </label>
            <a href="#" className="forgot-link" id="forgot-password-link">Lupa kata sandi?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`submit-btn ${isLoading ? 'loading' : ''} ${loginStatus || ''}`}
            disabled={isLoading}
            id="login-submit-btn"
          >
            <span className="btn-content">
              {isLoading ? (
                <span className="btn-spinner" />
              ) : loginStatus === 'success' ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Berhasil!</span>
                </>
              ) : loginStatus === 'error' ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Gagal! Coba lagi</span>
                </>
              ) : (
                <>
                  <span>Masuk</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </span>
          </button>
        </form>

        {/* Activation Link */}
        <div className="activation-section">
          <p className="activation-text">Mahasiswa baru atau belum punya akses?</p>
          <a href="#" className="activation-link" id="activation-link">
            Aktivasi akun kampus
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </a>
        </div>

        {/* Info Bar */}
        <div className="info-bar" id="info-bar">
          <svg className="info-bar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <div className="info-bar-text">
            <span className="info-bar-title">Jam layanan 08.00–18.00</span>
            <span className="info-bar-desc">Portal ditutup saat jam operasional berakhir.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
