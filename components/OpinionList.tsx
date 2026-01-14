import React from 'react';
import { Opinion } from '../types';
import { User, Calendar, ArrowRight } from 'lucide-react';

interface OpinionListProps {
  opinions: Opinion[];
  onRead: (opinion: Opinion) => void;
  onAuthorClick?: (authorName: string) => void;
}

export const OpinionList: React.FC<OpinionListProps> = ({ opinions, onRead, onAuthorClick }) => {
  
  const handleAuthorClick = (e: React.MouseEvent, author: string) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (onAuthorClick) {
        onAuthorClick(author);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {opinions.map((op) => (
        <article 
          key={op.id} 
          className="group relative flex flex-col bg-white border border-ink/10 shadow-[4px_4px_0px_0px_rgba(45,42,38,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(140,58,58,0.15)] hover:border-accent/30 transition-all duration-300 cursor-pointer overflow-hidden"
          onClick={() => onRead(op)}
        >
          {/* Aesthetic Image Header */}
          {op.imageUrl && (
            <div className="h-48 w-full overflow-hidden relative border-b border-ink/10">
              <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={op.imageUrl} 
                alt={op.title}
                className="w-full h-full object-cover filter sepia-[0.5] contrast-[0.9] grayscale-[0.3] group-hover:sepia-0 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20 z-20 pointer-events-none"></div>
            </div>
          )}

          <div className="p-6 flex flex-col flex-grow">
            <div className="absolute top-4 right-4 bg-paper/90 backdrop-blur-sm px-2 py-1 border border-ink/10 text-[10px] font-mono uppercase tracking-widest text-ink-light z-20 shadow-sm">
              {op.category}
            </div>

            <div className="mb-4">
              <h3 className="font-serif text-2xl font-bold leading-tight text-ink group-hover:text-accent transition-colors line-clamp-2">
                {op.title}
              </h3>
            </div>

            <p className="font-serif text-ink-light text-sm leading-relaxed line-clamp-3 mb-6 flex-grow border-l-2 border-sepia pl-3 italic">
              {op.summary || op.content.substring(0, 150) + "..."}
            </p>

            <div className="mt-auto border-t border-dashed border-ink/20 pt-4 flex items-center justify-between font-mono text-xs text-ink-light">
              <button 
                onClick={(e) => handleAuthorClick(e, op.author)}
                className="flex items-center gap-2 hover:text-accent transition-colors z-20"
                title="Lihat Profil Penulis"
              >
                <User size={12} />
                <span className="font-bold border-b border-transparent hover:border-accent">{op.author}</span>
              </button>
              <div className="flex items-center gap-2">
                <Calendar size={12} />
                <span>{op.date}</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent">
            <ArrowRight size={16} />
          </div>
        </article>
      ))}
    </div>
  );
};