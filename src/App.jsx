import React from 'react';
import { useLocalTime } from './hooks/useLocalTime';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import ClosedNotice from './components/ClosedNotice';
import Footer from './components/Footer';
import campusDay from './assets/campus-landscape.png';
import './App.css';

/**
 * Komponen utama — Portal Login Kampus Siang Malam.
 * 
 * Layout: Split design
 * - Left: Hero section (headline + campus illustration)
 * - Right: Login form (siang) / Closed notice (malam)
 * 
 * Mekanik:
 * - Mode Siang (08:00-17:59): Form login aktif
 * - Mode Malam (18:00-07:59): Form ditutup, pesan "Kampus beristirahat"
 * - Transisi halus antara kedua mode
 */
export default function App() {
  const { hours, minutes, isDaytime } = useLocalTime();

  return (
    <div className={`app ${isDaytime ? 'day-mode' : 'night-mode'}`} id="app">
      {/* Night sky elements */}
      {!isDaytime && (
        <div className="night-sky" aria-hidden="true">
          {/* Stars */}
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="sky-star"
              style={{
                left: `${(i * 17 + 5) % 100}%`,
                top: `${(i * 13 + 3) % 55}%`,
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                animationDelay: `${(i * 0.4) % 5}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
          {/* Moon */}
          <div className="sky-moon">
            <div className="moon-shadow" />
          </div>
        </div>
      )}

      {/* Day sky elements */}
      {isDaytime && (
        <div className="day-sky" aria-hidden="true">
          <div className="sky-sun">
            <div className="sun-core" />
            <div className="sun-halo" />
          </div>
        </div>
      )}

      {/* Navbar */}
      <Navbar isDaytime={isDaytime} hours={hours} minutes={minutes} />

      {/* Main Content — Split Layout */}
      <main className="main-content" id="main-content">
        {/* Left: Hero Section */}
        <section className="hero-section" id="hero-section">
          <div className="hero-content">
            <span className="hero-label">RUANG DIGITAL KAMPUS ANDA</span>
            
            {isDaytime ? (
              <>
                <h1 className="hero-title" key="day-title">
                  Selamat datang<br />di kampus.
                </h1>
                <p className="hero-subtitle" key="day-sub">
                  Satu pintu untuk kegiatan akademik Anda.
                  <br />
                  Silakan masuk dan lanjutkan perjalanan belajar.
                </p>
              </>
            ) : (
              <>
                <h1 className="hero-title night-title" key="night-title">
                  Kampus beristirahat.<br />Sampai esok.
                </h1>
                <p className="hero-subtitle" key="night-sub">
                  Layanan daring mengikuti jam operasional kampus.
                  <br />
                  Istirahat sejenak, kita bertemu lagi besok pagi.
                </p>
              </>
            )}
          </div>

          {/* Campus Illustration */}
          <div className="hero-illustration">
            <img
              src={campusDay}
              alt="Ilustrasi Gedung Kampus Siang Malam"
              className="campus-image"
              loading="eager"
            />
          </div>
        </section>

        {/* Right: Form / Closed Notice */}
        <section className="form-section" id="form-section">
          {isDaytime ? (
            <LoginForm hours={hours} minutes={minutes} />
          ) : (
            <ClosedNotice />
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Information Button */}
      <div className="info-btn-container">
        <button 
          className="info-btn" 
          aria-label="Informasi Website"
        >
          <span className="info-icon">i</span>
        </button>
        <div className="info-tooltip">
          Form login hanya dibuka pada waktu siang hari (08:00 - 17:59).
        </div>
      </div>
    </div>
  );
}
