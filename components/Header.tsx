import React from 'react';
import { ViewState, User } from '../types';
import { PenTool, Home, LogIn, LogOut, LayoutDashboard, User as UserIcon } from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  user: User | null;
  onChangeView: (view: ViewState) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, user, onChangeView, onLogout }) => {
  return (
    <header className="border-b-4 border-double border-ink/20 bg-paper py-6 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left cursor-pointer" onClick={() => onChangeView(ViewState.HOME)}>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-ink">
            Opini Kita
          </h1>
          <p className="font-mono text-xs text-ink-light mt-1 tracking-widest uppercase">
            Suara Mahasiswa UNIDA Gontor • Est. 2014
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Navigation */}
            <nav className="flex items-center gap-2 bg-sepia/30 p-1 rounded-full border border-ink/10">
            <button
                onClick={() => onChangeView(ViewState.HOME)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-serif transition-all ${
                currentView === ViewState.HOME
                    ? 'bg-ink text-paper shadow-md'
                    : 'text-ink hover:bg-ink/5'
                }`}
            >
                <Home size={16} />
                <span className="text-sm">Beranda</span>
            </button>
            
            {user && (
                <button
                    onClick={() => onChangeView(ViewState.DASHBOARD)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-serif transition-all ${
                    currentView === ViewState.DASHBOARD
                        ? 'bg-ink text-paper shadow-md'
                        : 'text-ink hover:bg-ink/5'
                    }`}
                >
                    <LayoutDashboard size={16} />
                    <span className="text-sm">Meja Redaksi</span>
                </button>
            )}

            <button
                onClick={() => onChangeView(ViewState.WRITE)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-serif transition-all ${
                currentView === ViewState.WRITE
                    ? 'bg-ink text-paper shadow-md'
                    : 'text-ink hover:bg-ink/5'
                }`}
            >
                <PenTool size={16} />
                <span className="text-sm">Tulis</span>
            </button>
            </nav>

            {/* Auth Status */}
            <div className="flex items-center border-l-2 border-ink/10 pl-4 ml-2">
                {user ? (
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => onChangeView(ViewState.DASHBOARD)}
                            className="text-right hidden sm:block group cursor-pointer"
                        >
                            <p className="font-serif text-sm font-bold text-ink group-hover:text-accent transition-colors">{user.name}</p>
                            <p className="font-mono text-[10px] text-ink-light">{user.nim}</p>
                        </button>
                        <button 
                            onClick={onLogout}
                            className="p-2 text-ink hover:text-accent transition-colors rounded-full hover:bg-ink/5"
                            title="Keluar"
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => onChangeView(ViewState.LOGIN)}
                        className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:text-accent transition-colors"
                    >
                        <LogIn size={14} />
                        Masuk
                    </button>
                )}
            </div>
        </div>
      </div>
      <div className="w-full h-px bg-ink/10 mt-6 mx-auto max-w-5xl"></div>
    </header>
  );
};