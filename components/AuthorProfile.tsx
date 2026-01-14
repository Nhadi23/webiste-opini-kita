import React from 'react';
import { Opinion } from '../types';
import { ArrowLeft, User, BookOpen, Award, PenTool } from 'lucide-react';
import { OpinionList } from './OpinionList';

interface AuthorProfileProps {
  authorName: string;
  allOpinions: Opinion[];
  onBack: () => void;
  onRead: (opinion: Opinion) => void;
}

export const AuthorProfile: React.FC<AuthorProfileProps> = ({ authorName, allOpinions, onBack, onRead }) => {
  // Filter opinions by this author
  const authorOpinions = allOpinions.filter(op => op.author === authorName);
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-ink-light hover:text-accent mb-6 font-mono text-sm transition-colors"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Kembali
      </button>

      {/* ID Card / Profile Header */}
      <div className="bg-paper border-4 border-double border-ink/20 p-8 md:p-12 mb-12 relative overflow-hidden shadow-lg">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Avatar Area */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-ink/10 flex items-center justify-center relative overflow-hidden group">
                {/* Fallback avatar if no image is available */}
                <User size={64} className="text-ink/30" />
                <div className="absolute inset-0 bg-sepia mix-blend-color opacity-30"></div>
            </div>
            <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold">
                    Penulis Terverifikasi
                </span>
            </div>
          </div>

          {/* Info Area */}
          <div className="flex-grow text-center md:text-left space-y-4">
            <div>
                <h1 className="font-serif text-4xl font-bold text-ink mb-2">{authorName}</h1>
                <p className="font-mono text-xs text-ink/60 uppercase tracking-widest">
                    Universitas Darussalam Gontor
                </p>
            </div>

            <p className="font-serif text-ink/80 italic max-w-2xl leading-relaxed">
                "Seorang akademisi yang gemar menuangkan gagasan melalui tulisan. Berkomitmen untuk menghidupkan dialektika intelektual di lingkungan kampus."
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 pt-4 border-t border-dashed border-ink/20">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white border border-ink/10 rounded-sm">
                        <BookOpen size={20} className="text-ink-light" />
                    </div>
                    <div>
                        <span className="block font-serif text-2xl font-bold text-ink">{authorOpinions.length}</span>
                        <span className="block font-mono text-[10px] uppercase text-ink/50">Artikel</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white border border-ink/10 rounded-sm">
                        <Award size={20} className="text-ink-light" />
                    </div>
                    <div>
                        <span className="block font-serif text-2xl font-bold text-ink">Aktif</span>
                        <span className="block font-mono text-[10px] uppercase text-ink/50">Status</span>
                    </div>
                </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-white border border-ink/10 rounded-sm">
                        <PenTool size={20} className="text-ink-light" />
                    </div>
                    <div>
                        <span className="block font-serif text-2xl font-bold text-ink">
                            {authorOpinions.length > 0 ? authorOpinions[0].category : "-"}
                        </span>
                        <span className="block font-mono text-[10px] uppercase text-ink/50">Minat Utama</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="mb-8">
         <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-ink/20 flex-grow"></div>
            <span className="font-mono text-sm uppercase tracking-widest text-ink/60 font-bold bg-white px-4">
                Arsip Tulisan
            </span>
            <div className="h-px bg-ink/20 flex-grow"></div>
        </div>
        
        {authorOpinions.length > 0 ? (
            <OpinionList 
                opinions={authorOpinions} 
                onRead={onRead} 
                onAuthorClick={() => {}} // No need to click author again here
            />
        ) : (
            <div className="text-center py-12 border-2 border-dashed border-ink/10 rounded-lg">
                <p className="font-serif text-ink/40 italic">Belum ada artikel yang diterbitkan.</p>
            </div>
        )}
      </div>

    </div>
  );
};