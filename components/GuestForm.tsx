import React, { useState } from 'react';
import { User } from '../types';
import { BookUser, Feather } from 'lucide-react';

interface GuestFormProps {
  onLogin: (user: User) => void;
  onSwitchToStudent: () => void;
  onCancel: () => void;
}

export const GuestForm: React.FC<GuestFormProps> = ({ onLogin, onSwitchToStudent, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onLogin({ 
          name, 
          id: email,
          role: 'TAMU'
      });
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 relative animate-in zoom-in-95 duration-300">
      {/* Decorative Guest Book effect */}
      <div className="bg-[#f0ece2] p-8 border-l-8 border-ink/80 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] relative">
        
        <div className="text-center mb-8 border-b-2 border-ink/10 pb-4">
          <BookUser className="w-12 h-12 mx-auto text-ink mb-2" />
          <h2 className="font-serif text-2xl font-bold text-ink">Buku Tamu</h2>
          <p className="font-mono text-xs text-ink-light mt-1">Daftar untuk berkomentar dan berdiskusi</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">Alamat Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border-2 border-ink/10 focus:border-accent outline-none px-3 py-2 font-mono text-sm text-ink placeholder-ink/20 transition-colors rounded-sm"
              placeholder="email@contoh.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">Nama Panggilan</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-2 border-ink/10 focus:border-accent outline-none px-3 py-2 font-serif text-xl text-ink placeholder-ink/20 transition-colors rounded-sm"
              placeholder="Nama Anda"
            />
          </div>

          <div className="pt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-ink/90 text-paper font-serif font-bold py-3 hover:bg-ink transition-colors flex items-center justify-center gap-2 shadow hover:shadow-md"
            >
              <Feather size={18} />
              Isi Buku Tamu
            </button>
          </div>
          
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-dashed border-ink/10">
            <button
                type="button"
                onClick={onSwitchToStudent}
                className="w-full text-center text-sm font-serif font-bold text-ink hover:text-accent flex items-center justify-center gap-2 p-2"
            >
                Login Mahasiswa (NIM)
            </button>
            <button
                type="button"
                onClick={onCancel}
                className="w-full text-center text-xs font-mono text-ink/40 hover:text-accent underline decoration-dotted"
            >
                Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};