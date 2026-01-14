import React from 'react';
import { Opinion } from '../types';
import { OpinionList } from './OpinionList';

interface HomePageProps {
  opinions: Opinion[];
  onRead: (opinion: Opinion) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ opinions, onRead }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section - UNIDA Gontor Aesthetic Vibe */}
      <div className="relative h-[400px] md:h-[500px] w-full mb-12 overflow-hidden border-b-8 border-double border-ink/20 group">
        {/* Main Background Image - Representing UNIDA Main Building/Mosque Style */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-110"
          style={{ backgroundImage: "url('https://unida.gontor.ac.id/wp-content/uploads/2024/09/Gedung-Terpadu-2024-65-1-scaled.jpg')" }}
        ></div>
        
        {/* Aesthetic Overlays for Vintage Effect */}
        <div className="absolute inset-0 bg-sepia mix-blend-multiply opacity-80"></div>
        <div className="absolute inset-0 bg-ink mix-blend-screen opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="bg-paper/90 p-8 md:p-12 shadow-2xl border-4 border-double border-ink/30 max-w-3xl backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <h2 className="font-serif text-3xl md:text-5xl italic text-ink mb-4 leading-tight">
              "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya."
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="font-mono text-xs md:text-sm text-ink-light uppercase tracking-[0.2em] font-bold">
              Universitas Darussalam Gontor
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-ink/20 flex-grow"></div>
          <span className="font-mono text-sm uppercase tracking-widest text-ink/60 font-bold bg-paper px-4 border border-ink/10 py-1">
            Laporan Utama & Opini
          </span>
          <div className="h-px bg-ink/20 flex-grow"></div>
        </div>

        <OpinionList opinions={opinions} onRead={onRead} />
      </main>
    </div>
  );
};