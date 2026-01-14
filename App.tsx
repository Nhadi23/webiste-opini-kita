import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer'; // Import Footer
import { HomePage } from './components/HomePage';
import { OpinionForm } from './components/OpinionForm';
import { ArticleView } from './components/ArticleView';
import { LoginForm } from './components/LoginForm';
import { AboutDept } from './components/AboutDept';
import { Opinion, ViewState, User } from './types';

// Mock initial data with Aesthetic Images
const INITIAL_OPINIONS: Opinion[] = [
  {
    id: '1',
    title: "Peran Santri dalam Membangun Peradaban Digital",
    author: "Azrul Amirullah",
    category: "Teknologi",
    date: "12 Oktober 2024",
    content: "Di era revolusi industri 4.0, santri tidak boleh hanya berdiam diri di menara gading pesantren. Peradaban digital menuntut partisipasi aktif santri untuk mengisi ruang-ruang kosong di internet dengan konten positif dan nilai-nilai keislaman yang rahmatan lil 'alamin.\n\nTransformasi digital bukan sekadar tentang menggunakan gawai, melainkan tentang pola pikir. Bagaimana nilai-nilai adab yang diajarkan di Gontor dapat diterjemahkan ke dalam etika bermedia sosial? Inilah tantangan terbesar kita hari ini.",
    summary: "Santri harus berperan aktif mengisi ruang digital dengan nilai keislaman dan adab.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" // Laptop & Coffee vintage vibe
  },
  {
    id: '2',
    title: "Revitalisasi Bahasa Arab di Kalangan Mahasiswa",
    author: "Alfan Arif Rabbani",
    category: "Pendidikan",
    date: "10 Oktober 2025",
    content: "Bahasa adalah mahkota pondok. Namun, seiring berjalannya waktu, kita melihat adanya degradasi dalam kualitas berbahasa Arab di kalangan mahasiswa. Apakah ini karena kurangnya disiplin, atau metode pengajaran yang perlu diperbarui?\n\nKita perlu menengok kembali metode 'mubasyarah' yang menjadi ciri khas kita. Bahasa bukan sekadar alat komunikasi, tapi juga identitas seorang muslim intelektual.",
    summary: "Menyoroti penurunan kualitas bahasa Arab dan urgensi kembali ke metode mubasyarah.",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheELowc11pJwSDoX4e9hWkJ95uF_iqGj6rpShjEv2zfZnw42MMcCpvyCd6mNGaKoGCG0_BF2VPztReQvyOSA9i8lTW0ljgg6B_7pHFro7UpO7o4qHHeX5liSL290tFkg5Sqxd1tS6hKkzQL-6MjTbkOQqpi18Vna3RNyIWy3gtGfxxvWBHprzyzVfvzHIx" // Ancient Arabic Text/Book
  },
  {
    id: '3',
    title: "Ekonomi Syariah: Solusi Krisis Global?",
    author: "Ars*** ",
    category: "Keislaman",
    date: "08 Oktober 2025",
    content: "Dunia sedang menghadapi ketidakpastian ekonomi. Inflasi merajalela dan kesenjangan semakin lebar. Sistem kapitalisme murni telah menunjukkan cacat bawaannya. Di sinilah Ekonomi Syariah menawarkan jalan tengah.\n\nDengan prinsip keadilan, pelarangan riba, dan distribusi kekayaan melalui zakat dan wakaf, sistem ini bukan hanya utopis, tapi terbukti tahan banting dalam berbagai krisis sejarah.",
    summary: "Ekonomi Syariah menawarkan solusi konkret untuk ketidakpastian ekonomi global.",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVUiWkvZbaoiqzsgq1JR-nhxl57mJox5WDpxEgyT4U6GOUmvojN0BzaZT5HTFSUuT-dQLj4yBrV3UFe1gK8WaUBB2Uc3jLERVA28MJun3Ktae1mU-ZAxa7KDnOv9dteOYPES7NcjhOObfQtLshVYp2jVpbef0T11oIg8C85ZTl_zbNtFdPBBHVDrcrYHmZ/" // Aesthetic Architecture/Market
  }
];

export const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [opinions, setOpinions] = useState<Opinion[]>(INITIAL_OPINIONS);
  const [selectedOpinion, setSelectedOpinion] = useState<Opinion | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // Protected Route Logic
  const handleChangeView = (newView: ViewState) => {
    if (newView === ViewState.WRITE && !user) {
      setView(ViewState.LOGIN);
    } else {
      setView(newView);
      window.scrollTo(0, 0);
    }
  };

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    setView(ViewState.WRITE); // Redirect to write page after login
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setUser(null);
    setView(ViewState.HOME);
  };

  const handleCreateOpinion = (newOpinion: Omit<Opinion, 'id'>) => {
    const opinion: Opinion = {
      ...newOpinion,
      id: Math.random().toString(36).substr(2, 9),
      // Random image for new posts for demo purposes
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop"
    };
    setOpinions([opinion, ...opinions]);
    setView(ViewState.HOME);
  };

  const handleReadOpinion = (opinion: Opinion) => {
    setSelectedOpinion(opinion);
    setView(ViewState.READ);
  };

  const handleFooterNav = (view: ViewState) => {
    setView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen pb-12 font-sans selection:bg-accent/30 selection:text-ink">
      <Header 
        currentView={view} 
        user={user}
        onChangeView={handleChangeView}
        onLogout={handleLogout}
      />

      {/* Main Content Router */}
      {view === ViewState.HOME && (
        <HomePage opinions={opinions} onRead={handleReadOpinion} />
      )}

      {view !== ViewState.HOME && (
        <main className="max-w-6xl mx-auto px-4 mt-8">
          {view === ViewState.LOGIN && (
             <div className="animate-in zoom-in-95 duration-300">
                <LoginForm onLogin={handleLogin} onCancel={() => setView(ViewState.HOME)} />
             </div>
          )}

          {view === ViewState.WRITE && user && (
            <div className="animate-in zoom-in-95 duration-300">
              <OpinionForm 
                currentUser={user}
                onSubmit={handleCreateOpinion} 
                onCancel={() => setView(ViewState.HOME)} 
              />
            </div>
          )}

          {view === ViewState.READ && selectedOpinion && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <ArticleView 
                opinion={selectedOpinion} 
                onBack={() => setView(ViewState.HOME)} 
              />
            </div>
          )}

          {view === ViewState.ABOUT_DEPT && (
            <AboutDept onBack={() => setView(ViewState.HOME)} />
          )}
        </main>
      )}

      <Footer onChangeView={handleFooterNav} />
    </div>
  );
};