import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  Monitor, 
  Palette, 
  GraduationCap, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  BookOpen,
  Globe,
  MessageCircle
} from 'lucide-react';

// --- IMPORT GAMBAR ---
import logoACN from './assets/logo-acn.png';
// Pastikan file gedung.png sudah ada di folder src/assets
import gedungImg from './assets/gedung.png'; 

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            
            {/* Logo Image */}
            <img 
              src={logoACN} 
              alt="Logo Ayo Cendekia Nusantara" 
              className="h-10 w-auto object-contain"
            />

            <div className={`font-bold text-xl md:text-2xl ${scrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'} transition-colors`}>
              AYO Cendekia <span className="text-amber-500">Nusantara</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Tentang', 'Layanan', 'Nilai', 'Tim', 'Kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-slate-800' : 'text-blue-900'} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 flex flex-col items-center space-y-4 border-t border-gray-100">
            {['Tentang', 'Layanan', 'Nilai', 'Tim', 'Kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-700 font-medium hover:text-amber-500 w-full text-center py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section (FULL SCREEN & SEAMLESS) */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-blue-900 pt-20">
        
        {/* 1. Background Pattern (Tetap ada di paling belakang) */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* 2. GAMBAR GEDUNG (Posisi Absolute Full Kanan) */}
        <div className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0">
            {/* Gambar Gedung */}
            <img 
              src={gedungImg} 
              alt="Gedung Pusat" 
              className="w-full h-full object-cover object-right md:object-center opacity-60 md:opacity-100"
            />
            
            {/* Layer Gradasi Biru (Rahasia agar seamless ke kiri) */}
            {/* Ini membuat gambar perlahan menghilang saat menuju ke arah teks di kiri */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/60 to-transparent"></div>
            
            {/* Layer Gradasi Bawah (Agar seamless ke section berikutnya) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
        </div>
        
        {/* 3. KONTEN TEKS (Relative agar di atas gambar) */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center h-full">
            
            {/* Text Area (Dibatasi lebarnya agar tidak menabrak gambar di desktop) */}
            <div className="w-full md:w-1/2 text-left animate-fade-in-up py-12 md:py-0">
              <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Terdaftar Resmi: AHU-005313.AH.01.31.2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                Bergerak, Bertumbuh, <br /> & Berkolaborasi
              </h1>
              
              <p className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed drop-shadow-sm">
                Mitra strategis Anda dalam konsultasi CSR, transformasi teknologi, pengembangan SDM, dan layanan kreatif berbasis riset dan inovasi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button 
                  onClick={() => scrollToSection('layanan')}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Layanan Kami <ChevronRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('kontak')}
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-bold transition-all backdrop-blur-sm"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>

            {/* Area Kanan Kosong (Karena sudah diisi gambar background) */}
            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-900 font-bold text-3xl md:text-4xl mb-6">Profil Perusahaan</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                <strong>PT Ayo Cendekia Nusantara</strong> adalah perusahaan konsultan dan penyedia layanan pendidikan, riset, teknologi, serta jasa kreatif. Berpusat di Samarinda, kami hadir sebagai mitra profesional bagi sektor publik dan swasta.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                Didirikan oleh praktisi berpengalaman lebih dari lima tahun, kami mengedepankan pendekatan <em>evidence-based</em> dan kolaboratif. Kami resmi berbadan hukum dan terdaftar dalam sistem perizinan berusaha nasional (NIB 2706250033275).
              </p>
              
              <div className="bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-blue-900 mb-2">Filosofi Kami</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-amber-500 min-w-[30px]">AYO</span>
                    <span className="text-sm text-slate-600">Simbol ajakan untuk bergerak, bertumbuh, dan berkolaborasi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-amber-500 min-w-[30px]">Cendekia</span>
                    <span className="text-sm text-slate-600">Komitmen pada proses berpikir jernih, berbasis pengetahuan, dan etis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-amber-500 min-w-[30px]">Nusantara</span>
                    <span className="text-sm text-slate-600">Kepekaan terhadap keberagaman sosial, budaya, dan geografis Indonesia.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-xl text-blue-900 mb-3">
                  <Award className="text-amber-500" /> Visi
                </h3>
                <p className="text-slate-700">
                  Menjadi perusahaan edukasi dan konsultasi terdepan di Indonesia yang menghadirkan inovasi, penelitian, dan layanan pengembangan kapasitas berkualitas tinggi.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-xl text-blue-900 mb-3">
                  <BookOpen className="text-amber-500" /> Misi Utama
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-amber-500 mt-1 flex-shrink-0" /> Layanan konsultasi profesional berbasis riset.</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-amber-500 mt-1 flex-shrink-0" /> Program pelatihan berstandar sertifikasi nasional/internasional.</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-amber-500 mt-1 flex-shrink-0" /> Mendukung transformasi digital & organisasi.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold text-3xl md:text-4xl mb-4">Layanan Unggulan</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Solusi terintegrasi yang dirancang dengan pendekatan <em>evidence-based</em> untuk memastikan dampak berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500 group">
              <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <Users className="text-amber-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl text-blue-900 mb-3">CSR & Pemberdayaan</h3>
              <p className="text-slate-600 text-sm mb-4">
                Penyusunan Masterplan CSR, strategi CSV, Social Mapping, dan pendampingan pemberdayaan masyarakat desa/UMKM.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Baseline Survey</li>
                <li>• Monitoring & Evaluation</li>
                <li>• Pendampingan Koperasi</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500 group">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <Monitor className="text-blue-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl text-blue-900 mb-3">Teknologi & IT</h3>
              <p className="text-slate-600 text-sm mb-4">
                Pengembangan aplikasi, website, dashboard monitoring, digitalisasi layanan, dan keamanan data organisasi.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Sistem Informasi Manajemen</li>
                <li>• Pelaporan Digital</li>
                <li>• Pelatihan IT Internal</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500 group">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <Palette className="text-purple-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl text-blue-900 mb-3">Jasa Kreatif</h3>
              <p className="text-slate-600 text-sm mb-4">
                Solusi komunikasi visual, branding, produksi video, fotografi, dan pengelolaan konten media sosial profesional.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Company Profile & Laporan</li>
                <li>• Video Dokumentasi</li>
                <li>• Desain Grafis</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-500 group">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <GraduationCap className="text-emerald-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl text-blue-900 mb-3">Pelatihan & SDM</h3>
              <p className="text-slate-600 text-sm mb-4">
                Program Leadership, peningkatan kapasitas perangkat desa/UMKM, public speaking, dan literasi digital.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Sertifikasi BNSP</li>
                <li>• Manajemen Konflik</li>
                <li>• Fasilitasi Partisipatif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="nilai" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h4 className="text-amber-500 font-bold text-lg mb-2">Integritas</h4>
              <p className="text-sm text-blue-100">Kejujuran dan etika adalah prinsip utama dalam setiap hubungan profesional kami.</p>
            </div>
            <div className="p-4">
              <h4 className="text-amber-500 font-bold text-lg mb-2">Kolaborasi</h4>
              <p className="text-sm text-blue-100">Perubahan besar tercapai melalui kemitraan strategis lintas sektor.</p>
            </div>
            <div className="p-4">
              <h4 className="text-amber-500 font-bold text-lg mb-2">Inovasi Relevan</h4>
              <p className="text-sm text-blue-100">Mengadopsi teknologi dan pendekatan baru yang memberi nilai tambah nyata.</p>
            </div>
            <div className="p-4">
              <h4 className="text-amber-500 font-bold text-lg mb-2">Orientasi Dampak</h4>
              <p className="text-sm text-blue-100">Bekerja untuk menciptakan perubahan positif jangka panjang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="tim" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold text-3xl md:text-4xl mb-4">Tim Ahli Kami</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Didukung oleh tenaga ahli bersertifikasi nasional BNSP dan berpengalaman di bidangnya. Kami menerapkan <em>project-based recruitment</em> untuk memastikan keahlian yang relevan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-slate-200 flex items-center justify-center p-6">
                 {/* Avatar Placeholder */}
                 <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl font-bold">YS</div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-bold text-xl text-blue-900">Yogie Stefanus, S.Fil., M.Pd.</h3>
                <p className="text-amber-600 text-sm font-semibold mb-3">Founder & Instructional Technology Expert</p>
                <p className="text-slate-600 text-sm mb-3">
                  Ahli dalam perancangan desain pembelajaran, teknologi pendidikan, dan inovasi instruksional. Lulusan S2 Teknologi Pembelajaran Universitas Negeri Yogyakarta.
                </p>
                <div className="flex gap-2 text-xs text-slate-500">
                  <span className="bg-white px-2 py-1 rounded border">Google Certified</span>
                  <span className="bg-white px-2 py-1 rounded border">Cisco Certified</span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-slate-200 flex items-center justify-center p-6">
                 {/* Avatar Placeholder */}
                 <div className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center text-white text-3xl font-bold">AP</div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-bold text-xl text-blue-900">Ameylia Puspita, S.Fil., M.Sc.</h3>
                <p className="text-amber-600 text-sm font-semibold mb-3">Founder & Policy Specialist</p>
                <p className="text-slate-600 text-sm mb-3">
                  Spesialis dalam analisis kebijakan, inovasi sosial, dan CSR. Lulusan S2 Kepemimpinan dan Inovasi Kebijakan UGM. Tersertifikasi BNSP Pemberdayaan Masyarakat.
                </p>
                <div className="flex gap-2 text-xs text-slate-500">
                  <span className="bg-white px-2 py-1 rounded border">BNSP Certified</span>
                  <span className="bg-white px-2 py-1 rounded border">Researcher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Optional) */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-12">
            <h2 className="text-blue-900 font-bold text-3xl mb-4">Investasi Layanan</h2>
            <p className="text-slate-600">Pilihan paket fleksibel sesuai kebutuhan organisasi Anda.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-blue-900 mb-2">Paket Pelatihan</h3>
                <p className="text-2xl font-bold text-amber-500 mb-4">Mulai Rp 3jt<span className="text-sm font-normal text-slate-400">/peserta</span></p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                    <li>✓ Durasi 1 minggu penuh</li>
                    <li>✓ Full Board (Konsumsi & Venue)</li>
                    <li>✓ Modul & Sertifikat</li>
                    <li>✓ Fasilitator Utama + Co-trainer</li>
                </ul>
                <button onClick={() => scrollToSection('kontak')} className="w-full py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50">Tanya Detail</button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all border-t-4 border-amber-500 relative transform md:-translate-y-2">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs px-2 py-1 rounded-bl">Populer</div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Pendampingan (Mentoring)</h3>
                <p className="text-2xl font-bold text-amber-500 mb-4">Rp 10jt<span className="text-sm font-normal text-slate-400">/triwulan</span></p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                    <li>✓ Periode 3 Bulan</li>
                    <li>✓ 6-8 Sesi Mentoring Strategis</li>
                    <li>✓ Review Dokumen & Coaching</li>
                    <li>✓ Dukungan WhatsApp/Email</li>
                </ul>
                <button onClick={() => scrollToSection('kontak')} className="w-full py-2 bg-blue-900 text-white rounded hover:bg-blue-800">Pilih Paket</button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-blue-900 mb-2">Jasa Kreatif & Web</h3>
                <p className="text-2xl font-bold text-amber-500 mb-4">Custom</p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                    <li>✓ Desain Grafis Profesional</li>
                    <li>✓ Produksi Video & Foto</li>
                    <li>✓ Pembuatan Website (Mulai Rp 5jt)</li>
                    <li>✓ Branding Kit</li>
                </ul>
                <button onClick={() => scrollToSection('kontak')} className="w-full py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50">Konsultasi</button>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-blue-900 font-bold text-3xl mb-6">Mulai Kolaborasi</h2>
              <p className="text-slate-600 mb-8">
                Kami siap berdiskusi lebih lanjut mengenai kebutuhan spesifik organisasi Anda. Hubungi kami melalui WhatsApp atau Email untuk respon cepat.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Kantor Pusat</h4>
                    <p className="text-slate-600 text-sm">
                      Jl. Kruing 2 B3 No. 161, Lempake,<br />
                      Samarinda Utara, Kalimantan Timur 75113
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Telepon / WhatsApp</h4>
                    <p className="text-slate-600 text-sm">0851-6366-9852 (Ameylia) / 0822-5205-624 (Yogie)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Email</h4>
                    <p className="text-slate-600 text-sm">ayocendekianusantara@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl shadow-lg border-t-4 border-blue-900 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Hubungi Kami Sekarang</h3>
              
              <div className="space-y-4">
                {/* Tombol WA Yogie */}
                <a 
                  href="https://wa.me/628225205624" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md group"
                >
                  <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                  Chat WhatsApp Yogie
                </a>

                {/* Tombol WA Ameylia */}
                <a 
                  href="https://wa.me/6285163669852" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors shadow-md group"
                >
                  <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                  Chat WhatsApp Ameylia
                </a>

                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-300"></div>
                    <span className="flex-shrink mx-4 text-slate-400 text-sm">ATAU</span>
                    <div className="flex-grow border-t border-slate-300"></div>
                </div>

                {/* Tombol Email */}
                <a 
                  href="mailto:ayocendekianusantara@gmail.com"
                  className="flex items-center justify-center gap-3 w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors shadow-md group"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                  Kirim Email Resmi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
               <span className="text-2xl font-bold text-white">AYO <span className="text-amber-500">Cendekia</span></span>
               <p className="text-sm mt-2 max-w-sm">Mitra strategis untuk transformasi sosial dan teknologi di Nusantara.</p>
            </div>
            <div className="flex gap-6">
                <Globe size={20} className="hover:text-amber-500 cursor-pointer" />
                <Mail size={20} className="hover:text-amber-500 cursor-pointer" />
                <Phone size={20} className="hover:text-amber-500 cursor-pointer" />
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between text-sm">
            <p>&copy; 2025 PT Ayo Cendekia Nusantara. All rights reserved.</p>
            <div className="mt-2 md:mt-0 flex gap-4">
                <span>NIB: 2706250033275</span>
                <span>AHU-005313.AH.01.31.2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;