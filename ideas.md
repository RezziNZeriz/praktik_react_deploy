# Spesifikasi Project: Form Login "Jam Operasional" (Time-Based Gimmick)

## 1. Ringkasan Proyek
Proyek ini adalah pembuatan UI Form Login berbasis web dengan konsep *aesthetic flat design* yang interaktif menggunakan **React**. Tema utamanya adalah "Kehidupan Sehari-hari (Jam Operasional)". Halaman login ini memiliki *gimmick* utama: Form login hanya bisa diakses pada **siang hari** berdasarkan pengaturan waktu lokal (OS) pada *device* pengguna.

## 2. Mekanik Utama (The Gimmick)
- Aplikasi harus mendeteksi waktu lokal pengguna menggunakan objek Date di JavaScript (`new Date().getHours()`).
- Terdapat 2 *state* utama: **Mode Siang** dan **Mode Malam**.
- **Tujuan/Iseng:** Pengguna (dosen) yang membuka web ini pada malam hari tidak akan bisa login. Mereka dipaksa untuk menyadari *clue* dan harus mengubah pengaturan jam di laptop/PC mereka ke waktu siang agar form login terbuka.

## 3. Detail Visual & State
Desain keseluruhan menggunakan gaya *flat design* minimalis, menggambarkan sebuah gedung (kampus/fakultas) di tengah hamparan pemandangan yang tenang.

### A. Mode Siang (Waktu: 06:00 - 17:59)
- **Tema Warna:** Cerah, hangat (biru langit, hijau segar).
- **Elemen Visual:** Langit cerah, gedung terlihat jelas.
- **Form Login:** Terlihat menyatu dengan lingkungan, misalnya diletakkan di atas sebuah papan mading (*signboard*) di depan gedung.
- **Interaksi:** Komponen `<LoginForm />` di-render sepenuhnya dan berfungsi normal.

### B. Mode Malam (Waktu: 18:00 - 05:59)
- **Tema Warna:** Gelap, teduh (biru dongker, ungu gelap).
- **Elemen Visual:** Langit malam bersinar redup, lampu-lampu gedung menyala.
- **Form Login (Hidden):** Komponen `<LoginForm />` dihilangkan dari DOM, digantikan oleh komponen `<TarpCover />` (ilustrasi terpal yang diikat menutupi area form).
- **Clue (Penting):** Di atas terpal tersebut terdapat teks peringatan: *"TUTUP: Jam Operasional Habis. Silakan kembali pada pukul 06.00 - 18.00 Waktu Lokal Anda."*

## 4. Kebutuhan Teknis Dasar (React Stack)
Tolong buatkan kerangka kodenya dengan spesifikasi berikut:
- **State Management:** Gunakan *hook* `useState` untuk menyimpan status `isDaytime`.
- **Time Effect:** Gunakan `useEffect` untuk mengecek jam saat komponen di-*mount*, serta implementasikan `setInterval` (misalnya setiap 1 menit) agar aplikasi mendeteksi perubahan jika pengguna (dosen) mengubah jam OS saat web masih terbuka tanpa me-refresh halaman.
- **Conditional Rendering:** Gunakan *ternary operator* (misal: `isDaytime ? <LoginForm /> : <TarpCover />`) untuk merender UI yang tepat.
- **Styling:** Gunakan CSS/SCSS Modules atau Tailwind CSS dengan pendekatan CSS Variables untuk mengatur palet warna global (warna langit, bayangan) sehingga transisi dari siang ke malam terlihat halus (`transition: all 1s ease`).

## 5. Langkah Eksekusi (Tugas untuk Agent Selanjutnya)
1. Buatkan struktur kerangka arsitektur komponen React (misal: pemisahan komponen `Background`, `CampusBuilding`, dan `AuthArea`).
2. Tuliskan logika *custom hook* (misal: `useLocalTime`) untuk sistem interval deteksi waktu siang/malam.
3. Berikan *scaffolding* kode utama (`App.jsx` atau sejenisnya) yang mengimplementasikan *conditional rendering* antara form dan terpal.
4. Berikan panduan *best practice* untuk menyisipkan aset ilustrasi SVG ke dalam komponen-komponen tersebut agar transisi warnanya mudah dimanipulasi via CSS.