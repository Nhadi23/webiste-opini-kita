import React, { useState, useEffect } from 'react';
import { Opinion, AIFeedback, User } from '../types';
import { reviewOpinion } from '../services/geminiService';
import { Send, Sparkles, RefreshCw, Lock } from 'lucide-react';

interface OpinionFormProps {
  currentUser: User;
  onSubmit: (opinion: Omit<Opinion, 'id'>) => void;
  onCancel: () => void;
}

export const OpinionForm: React.FC<OpinionFormProps> = ({ currentUser, onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Pendidikan');
  const [content, setContent] = useState('');
  
  const [isReviewing, setIsReviewing] = useState(false);
  const [feedback, setFeedback] = useState<AIFeedback | null>(null);

  const handleReview = async () => {
    if (!title || !content) return;
    setIsReviewing(true);
    const result = await reviewOpinion(title, content);
    setFeedback(result);
    setIsReviewing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      author: currentUser.name, // Use logged in user's name
      category,
      content,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      summary: feedback?.summary
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border-2 border-ink shadow-[8px_8px_0px_0px_rgba(45,42,38,0.15)] p-8 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-ink opacity-10"></div>
      
      <h2 className="font-serif text-3xl font-bold mb-6 border-b-2 border-ink pb-2">
        Kirim Opini Baru
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">Judul Artikel</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-paper border-b-2 border-ink/20 focus:border-accent outline-none px-3 py-2 font-serif text-lg placeholder-ink/30 transition-colors"
              placeholder="Contoh: Tantangan Moralitas..."
            />
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink-light flex items-center gap-1">
                Penulis <Lock size={10} className="text-ink/40" />
            </label>
            <div className="w-full bg-ink/5 border-b-2 border-ink/10 px-3 py-2 font-serif text-ink/60 cursor-not-allowed">
                {currentUser.name}
            </div>
            <p className="text-[10px] font-mono text-ink/40">*Nama diambil dari data login</p>
          </div>
        </div>

        <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">Kategori</label>
            <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-paper border-b-2 border-ink/20 focus:border-accent outline-none px-3 py-2 font-mono text-sm"
            >
                <option>Pendidikan</option>
                <option>Sosial & Politik</option>
                <option>Keislaman</option>
                <option>Sastra & Budaya</option>
                <option>Teknologi</option>
            </select>
        </div>

        <div className="space-y-2">
          <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">Isi Opini</label>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={12}
            className="w-full bg-paper border border-ink/10 p-4 font-serif text-base leading-relaxed focus:border-accent outline-none resize-none shadow-inner"
            placeholder="Tuliskan pemikiran Anda di sini..."
          />
        </div>

        {/* AI Assistant Section */}
        <div className="bg-sepia/20 border border-dashed border-ink/30 p-4 rounded-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-mono text-sm font-bold flex items-center gap-2">
              <Sparkles size={14} className="text-accent" />
              Asisten Redaksi AI
            </h3>
            {!feedback && (
                <button
                type="button"
                onClick={handleReview}
                disabled={isReviewing || !content || !title}
                className="text-xs font-bold text-accent hover:underline disabled:opacity-50 disabled:no-underline flex items-center gap-1"
                >
                {isReviewing ? <RefreshCw className="animate-spin" size={12}/> : null}
                {isReviewing ? 'Sedang Menganalisis...' : 'Minta Ulasan'}
                </button>
            )}
            {feedback && (
                 <button
                 type="button"
                 onClick={handleReview}
                 disabled={isReviewing}
                 className="text-xs text-ink-light hover:text-ink flex items-center gap-1"
                 >
                 <RefreshCw size={10}/> Ulas Ulang
                 </button>
            )}
          </div>

          {feedback ? (
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase min-w-[60px]">Nada:</span>
                <span className="text-xs bg-white px-2 py-0.5 rounded border border-ink/10">{feedback.tone}</span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase block mb-1">Saran Perbaikan:</span>
                <ul className="text-sm list-disc pl-5 space-y-1 text-ink/80">
                  {feedback.suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/50 p-2 border-l-2 border-accent text-xs italic text-ink/70">
                "AI Summary: {feedback.summary}"
              </div>
            </div>
          ) : (
            <p className="text-xs text-ink/50 italic">
              Klik "Minta Ulasan" untuk mendapatkan masukan tata bahasa dan ringkasan otomatis sebelum mengirim.
            </p>
          )}
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-ink text-paper font-serif font-bold py-3 hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform active:scale-95 duration-150"
          >
            <Send size={18} />
            Terbitkan Opini
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 border-2 border-ink text-ink font-serif font-bold hover:bg-ink/5 transition-colors"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};