import { useState, useEffect } from 'react';

/**
 * Custom hook untuk mendeteksi waktu lokal pengguna.
 * 
 * Jam Operasional (sesuai Figma):
 * - Siang (BUKA):  08:00 – 17:59
 * - Malam (TUTUP): 18:00 – 07:59
 * 
 * Menggunakan setInterval setiap 1 detik agar responsif
 * terhadap perubahan jam OS tanpa perlu refresh.
 */
export function useLocalTime() {
  const getTimeInfo = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const isDaytime = hours >= 8 && hours < 18;
    return { hours, minutes, isDaytime };
  };

  const [timeInfo, setTimeInfo] = useState(getTimeInfo);

  useEffect(() => {
    const updateTime = () => setTimeInfo(getTimeInfo());

    // Cek setiap 1 detik agar sangat responsif
    const interval = setInterval(updateTime, 1000);

    // Langsung update ketika user kembali ke tab browser (misal dari setting jam OS)
    window.addEventListener('focus', updateTime);
    document.addEventListener('visibilitychange', updateTime);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', updateTime);
      document.removeEventListener('visibilitychange', updateTime);
    };
  }, []);

  return { 
    ...timeInfo
  };
}
