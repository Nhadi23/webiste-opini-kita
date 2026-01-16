import React from 'react';
import { Opinion, Comment, User } from '../types';
import { ArrowLeft, Share2, Printer, Bookmark, User as UserIcon } from 'lucide-react';
import { CommentSection } from './CommentSection';

interface ArticleTemplateProps {
  opinion: Opinion;
  currentUser: User | null;
  comments: Comment[];
  onBack: () => void;
  onAuthorClick?: (authorName: string) => void;
  onAddComment: (content: string) => void;
  onLoginRequest: () => void;
}

export const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ 
    opinion, 
    currentUser,
    comments,
    onBack, 
    onAuthorClick,
    onAddComment,
    onLoginRequest
}) => {
  return (
    <article className="max-w-4xl mx-auto bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] min-h-screen md:min-h-0 md:my-8 relative animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Decorative Elements */}
      <div className="h-2 bg-accent w-full top-0 sticky z-30"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 z-0"></div>
      
      <div className="p-8 md:p-16 relative z-10">
        {/* Navigation Bar inside Article */}
        <div className="flex justify-between items-center mb-12 border-b border-ink/10 pb-4">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-ink-light hover:text-accent font-mono text-sm transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Kembali
            </button>
            <div className="flex gap-2">
                 <button className="p-2 text-ink/40 hover:text-accent transition-colors" title="Simpan">
                    <Bookmark size={18} />
                 </button>
            </div>
        </div>

        {/* Article Header */}
        <header className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 border-y border-ink/20 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {opinion.category}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink mb-6 leading-[1.1] tracking-tight">
            {opinion.title}
          </h1>
          
          <div className="flex flex-col items-center gap-2 font-serif text-ink-light">
            <div className="text-lg italic flex items-center gap-2">
                <span>Oleh</span>
                <button 
                    onClick={() => onAuthorClick && onAuthorClick(opinion.author)}
                    className="font-bold text-ink not-italic border-b border-accent/30 hover:text-accent hover:border-accent transition-all flex items-center gap-1 group"
                >
                    <UserIcon size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4" />
                    {opinion.author}
                </button>
            </div>
            <div className="font-mono text-xs text-ink/40 uppercase tracking-widest mt-1">
                {opinion.date} • Universitas Darussalam Gontor
            </div>
          </div>
        </header>

        {/* Feature Image */}
        {opinion.imageUrl && (
          <div className="mb-12 relative -mx-8 md:-mx-16 shadow-lg group">
            <div className="absolute inset-0 bg-sepia mix-blend-multiply opacity-30 pointer-events-none group-hover:opacity-10 transition-opacity duration-700"></div>
            <img 
              src={opinion.imageUrl} 
              alt={opinion.title}
              className="w-full h-[350px] md:h-[500px] object-cover filter contrast-[0.95] sepia-[0.2] group-hover:sepia-0 group-hover:contrast-100 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-mono text-[10px] text-center italic">Dokumentasi Visual: Opini Kita</p>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-stone prose-lg max-w-none font-serif leading-loose text-ink/90">
            {/* Lead Paragraph Styling */}
            <p className="font-bold text-xl md:text-2xl leading-relaxed text-ink mb-8 border-l-4 border-accent pl-6 italic">
                {opinion.summary}
            </p>

            {/* Main Content with Drop Cap */}
            <div className="first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] first-letter:font-serif">
                {opinion.content.split('\n').map((paragraph, idx) => (
                    paragraph.trim() && <p key={idx} className="mb-6 indent-8 text-justify">{paragraph}</p>
                ))}
            </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-20 pt-12 border-t-2 border-double border-ink/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-xs text-ink/40 mb-1">ID ARTIKEL: {opinion.id}</p>
            <p className="font-serif text-sm italic text-ink-light">Terima kasih telah membaca.</p>
          </div>
          
          <div className="flex gap-4">
             <button className="flex items-center gap-2 px-4 py-2 bg-paper border border-ink/10 hover:border-accent hover:text-accent transition-all rounded-sm font-mono text-xs font-bold uppercase tracking-wider group">
                <Share2 size={14} />
                <span>Bagikan</span>
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-paper border border-ink/10 hover:border-accent hover:text-accent transition-all rounded-sm font-mono text-xs font-bold uppercase tracking-wider">
                <Printer size={14} />
                <span>Cetak</span>
             </button>
          </div>
        </footer>

        {/* Comment Section */}
        <CommentSection 
            comments={comments}
            currentUser={currentUser}
            onAddComment={onAddComment}
            onLoginRequest={onLoginRequest}
        />
      </div>
    </article>
  );
};