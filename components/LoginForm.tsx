import React, { useState } from 'react';
import { User } from '../types';
import { KeyRound, School, BookUser } from 'lucide-react';

interface LoginFormProps {
  onLogin: (user: User) => void;
  onSwitchToGuest: () => void;
  onCancel: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSwitchToGuest, onCancel }) => {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && nim) {
      onLogin({ 
          name, 
          id: nim,
          role: 'MAHASISWA'
      });
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 relative animate-in zoom-in-95 duration-300">
      {/* Decorative vintage card effect */}
      <div className="bg-[#fcfbf9] p-8 border-4 border-double border-ink/20 shadow-[8px_8px_0px_0px_rgba(45,42,38,0.15)] relative overflow-hidden transform rotate-1">
        
        {/* Stamp mark decoration */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-full flex items-center justify-center transform rotate-12 opacity-50 pointer-events-none">
          <span className="font-mono text-[10px] text-accent/50 uppercase text-center leading-tight">
            Universitas<br/>Darussalam<br/>Verified
          </span>
        </div>

        <div className="text-center mb-8 border-b border-ink/10 pb-4">
          <School className="w-12 h-12 mx-auto text-ink mb-2" />
          <h2 className="font-serif text-2xl font-bold text-ink uppercase tracking-wider">Kartu Tanda Masuk</h2>
          <p className="font-mono text-xs text-ink-light mt-1">Sistem Opini Mahasiswa UNIDA</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">Nomor Induk Mahasiswa (NIM)</label>
            <input
              type="text"
              required
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              className="w-full bg-paper border-b-2 border-ink/20 focus:border-accent outline-none px-3 py-2 font-mono text-lg text-ink placeholder-ink/20 transition-colors"
              placeholder="Contoh: 40201..."
            />
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">Nama Lengkap</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-paper border-b-2 border-ink/20 focus:border-accent outline-none px-3 py-2 font-serif text-xl text-ink placeholder-ink/20 transition-colors"
              placeholder="Nama sesuai KTM"
            />
          </div>

          <div className="pt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-ink text-paper font-serif font-bold py-3 hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <KeyRound size={18} />
              Tanda Tangan & Masuk
            </button>
          </div>
          
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-dashed border-ink/10">
            <button
                type="button"
                onClick={onSwitchToGuest}
                className="w-full text-center text-sm font-serif font-bold text-ink hover:text-accent flex items-center justify-center gap-2 p-2 rounded hover:bg-ink/5 transition-colors"
            >
                <BookUser size={14} />
                Bukan Mahasiswa? Isi Buku Tamu
            </button>
            <button
                type="button"
                onClick={onCancel}
                className="w-full text-center text-xs font-mono text-ink/40 hover:text-accent underline decoration-dotted"
            >
                Kembali ke Beranda
            </button>
          </div>
        </form>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full border border-ink/5 -rotate-2 -z-10 bg-white"></div>
    </div>
  );
};