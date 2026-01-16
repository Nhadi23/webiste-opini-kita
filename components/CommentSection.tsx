import React, { useState } from 'react';
import { Comment, User } from '../types';
import { MessageSquare, Send, Lock, User as UserIcon } from 'lucide-react';

interface CommentSectionProps {
  comments: Comment[];
  currentUser: User | null;
  onAddComment: (content: string) => void;
  onLoginRequest: () => void;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments, currentUser, onAddComment, onLoginRequest }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-16 pt-10 border-t-4 border-double border-ink/10">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare size={24} className="text-accent" />
        <h3 className="font-serif text-2xl font-bold text-ink">Diskusi & Tanggapan</h3>
        <span className="bg-ink/10 text-ink text-xs font-mono px-2 py-1 rounded-full font-bold">
            {comments.length}
        </span>
      </div>

      {/* Comment Form */}
      <div className="mb-12 bg-paper border border-ink/10 p-6 rounded-sm shadow-sm">
        {currentUser ? (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mb-3">
               <span className="text-xs font-mono uppercase text-ink-light">Berkomentar sebagai:</span>
               <span className="font-bold font-serif text-ink">{currentUser.name}</span>
               <span className="text-[10px] px-1 border border-ink/20 rounded text-ink/50 uppercase">
                 {currentUser.role}
               </span>
            </div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-4 bg-white border border-ink/20 focus:border-accent outline-none font-serif text-sm min-h-[100px] mb-3 shadow-inner resize-none"
              placeholder="Tuliskan tanggapan Anda yang beradab..."
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-ink text-paper px-6 py-2 font-serif font-bold text-sm hover:bg-accent transition-colors flex items-center gap-2 shadow-md"
              >
                <Send size={14} />
                Kirim Tanggapan
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6">
            <Lock className="w-8 h-8 mx-auto text-ink/30 mb-3" />
            <p className="font-serif text-ink italic mb-4">
              "Silakan masuk ke dalam sistem untuk berpartisipasi dalam diskusi ini."
            </p>
            <button
              onClick={onLoginRequest}
              className="inline-flex items-center gap-2 px-6 py-2 border-2 border-ink text-ink font-bold font-serif hover:bg-ink hover:text-paper transition-all uppercase tracking-wider text-xs"
            >
              Masuk atau Daftar Tamu
            </button>
          </div>
        )}
      </div>

      {/* Comment List */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="group flex gap-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex-shrink-0 mt-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-ink/10 ${comment.authorRole === 'MAHASISWA' ? 'bg-ink/5' : 'bg-accent/5'}`}>
                   <UserIcon size={16} className={comment.authorRole === 'MAHASISWA' ? 'text-ink' : 'text-accent'} />
                </div>
              </div>
              <div className="flex-grow">
                <div className="bg-white border-l-2 border-ink/10 p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] group-hover:border-accent/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="font-bold font-serif text-ink block">{comment.author}</span>
                        <span className="text-[10px] font-mono text-ink/40 uppercase tracking-wider">
                            {comment.authorRole === 'MAHASISWA' ? 'Mahasiswa' : 'Tamu'}
                        </span>
                    </div>
                    <span className="text-xs font-mono text-ink/30">{comment.date}</span>
                  </div>
                  <p className="font-serif text-sm text-ink/80 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-ink/10">
            <p className="font-serif text-ink/40 italic">Belum ada tanggapan untuk artikel ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};