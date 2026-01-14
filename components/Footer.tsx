import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onChangeView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onChangeView }) => {
  return (
    <footer className="mt-20 border-t border-ink/10 pt-16 pb-16 bg-ink/5">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Brand & Quote */}
                <div className="text-center md:text-left space-y-4">
                    <div>
                        <h4 className="font-serif text-2xl font-bold text-ink">Opini Kita</h4>
                        <p className="font-mono text-xs text-ink/50 mt-1 uppercase tracking-widest">
                            Universitas Darussalam Gontor
                        </p>
                    </div>
                    <p className="font-serif text-ink/70 italic leading-relaxed max-w-md mx-auto md:mx-0">
                        "Menghidupkan budaya literasi, menajamkan nalar, dan mengokohkan adab di lingkungan kampus nan penuh berkah."
                    </p>
                </div>

                {/* Important Links */}
                <div className="text-center md:text-left md:pl-12 border-l-0 md:border-l border-ink/10">
                    <h5 className="font-mono text-xs uppercase tracking-widest text-ink/40 font-bold mb-6">
                        Tautan Eksternal
                    </h5>
                    <ul className="space-y-3 font-serif text-sm">
                        <li>
                            <a 
                                href="https://unida.gontor.ac.id/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group flex items-center gap-2 justify-center md:justify-start text-ink hover:text-accent transition-colors"
                            >
                                <span className="w-1.5 h-1.5 bg-ink/30 rounded-full group-hover:bg-accent transition-colors"></span>
                                Website UNIDA Gontor
                                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://dema.unida.gontor.ac.id/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group flex items-center gap-2 justify-center md:justify-start text-ink hover:text-accent transition-colors"
                            >
                                <span className="w-1.5 h-1.5 bg-ink/30 rounded-full group-hover:bg-accent transition-colors"></span>
                                DEMA UNIDA Gontor
                                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            {/* Updated link behavior to switch view */}
                            <button 
                                onClick={() => onChangeView(ViewState.ABOUT_DEPT)}
                                className="group flex items-center gap-2 justify-center md:justify-start text-ink hover:text-accent transition-colors text-left"
                            >
                                <span className="w-1.5 h-1.5 bg-ink/30 rounded-full group-hover:bg-accent transition-colors"></span>
                                Dept. Riset & Diskusi
                                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity text-[10px] ml-1 bg-ink/10 px-1 rounded">Internal</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-dashed border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-ink/40">
                <p>&copy; 2024 Opini Kita. All rights reserved.</p>
                <div className="flex gap-4">
                    <span>Est. 2014</span>
                    <span>•</span>
                    <span>Ponorogo, Indonesia</span>
                </div>
            </div>
        </div>
      </footer>
  );
};