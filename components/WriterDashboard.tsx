import React from 'react';
import { User, Opinion } from '../types';
import { PenTool, FileText, Trash2, Eye, BarChart2, Calendar, Coffee } from 'lucide-react';

interface WriterDashboardProps {
  user: User;
  opinions: Opinion[];
  onWriteNew: () => void;
  onRead: (opinion: Opinion) => void;
  onDelete: (id: string) => void;
}

export const WriterDashboard: React.FC<WriterDashboardProps> = ({ user, opinions, onWriteNew, onRead, onDelete }) => {
  // Filter opinions belonging to the logged-in user
  const myOpinions = opinions.filter(op => op.author === user.name);
  
  // Calculate mock stats
  const totalWords = myOpinions.reduce((acc, curr) => acc + curr.content.split(' ').length, 0);
  const latestDate = myOpinions.length > 0 ? myOpinions[0].date : '-';

  return (
    <div className="animate-in fade-in duration-700">
      
      {/* Header Section: The Desk */}
      <div className="mb-10 bg-paper border-b-4 border-double border-ink/20 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
                <Coffee size={20} />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Meja Redaksi</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-ink mb-2">
              Ahlan Wa Sahlan, {user.name.split(' ')[0]}
            </h2>
            <p className="font-serif text-ink/60 italic">
              "Pena adalah lidah bagi pemikiran yang terkekang."
            </p>
          </div>
          
          <button 
            onClick={onWriteNew}
            className="bg-ink text-paper px-6 py-3 font-serif font-bold shadow-[4px_4px_0px_0px_rgba(140,58,58,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(140,58,58,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 group"
          >
            <PenTool size={18} className="group-hover:rotate-12 transition-transform" />
            Tulis Naskah Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Stats & Profile */}
        <div className="space-y-8">
            {/* Stats Card */}
            <div className="bg-white border border-ink/10 p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <BarChart2 size={100} />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-ink-light mb-6 border-b border-ink/10 pb-2">
                    Statistik Kontribusi
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-ink/5 rounded-full">
                            <FileText size={24} className="text-ink" />
                        </div>
                        <div>
                            <span className="block font-serif text-3xl font-bold text-ink">{myOpinions.length}</span>
                            <span className="text-xs font-mono text-ink/50 uppercase">Artikel Terbit</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-ink/5 rounded-full">
                            <BarChart2 size={24} className="text-ink" />
                        </div>
                        <div>
                            <span className="block font-serif text-3xl font-bold text-ink">{totalWords}</span>
                            <span className="text-xs font-mono text-ink/50 uppercase">Total Kata</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-ink/5 rounded-full">
                            <Calendar size={24} className="text-ink" />
                        </div>
                        <div>
                            <span className="block font-serif text-lg font-bold text-ink">{latestDate}</span>
                            <span className="text-xs font-mono text-ink/50 uppercase">Aktivitas Terakhir</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Info Card */}
            <div className="bg-[#fcfbf9] border border-ink/10 p-6 relative">
                 <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent"></div>
                 <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent"></div>
                 
                 <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-ink-light mb-4">
                    Kartu Identitas
                 </h3>
                 <div className="space-y-2 font-serif text-ink">
                    <p><span className="font-bold w-16 inline-block">Nama:</span> {user.name}</p>
                    <p><span className="font-bold w-16 inline-block">NIM:</span> {user.nim}</p>
                    <p><span className="font-bold w-16 inline-block">Role:</span> Penulis / Mahasiswa</p>
                    <p><span className="font-bold w-16 inline-block">Kampus:</span> UNIDA Gontor</p>
                 </div>
            </div>
        </div>

        {/* Right Column: Article List (Manuscripts) */}
        <div className="lg:col-span-2">
             <div className="bg-white border-2 border-ink shadow-[8px_8px_0px_0px_rgba(45,42,38,0.1)] min-h-[400px]">
                <div className="bg-ink text-paper px-6 py-4 flex justify-between items-center">
                    <h3 className="font-serif font-bold text-xl">Arsip Naskah Saya</h3>
                    <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 border border-white/20"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500 border border-white/20"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500 border border-white/20"></span>
                    </div>
                </div>

                {myOpinions.length > 0 ? (
                    <div className="p-0">
                        <table className="w-full text-left">
                            <thead className="bg-ink/5 font-mono text-xs uppercase text-ink-light">
                                <tr>
                                    <th className="px-6 py-4 font-bold tracking-wider">Judul & Kategori</th>
                                    <th className="px-6 py-4 font-bold tracking-wider">Tanggal</th>
                                    <th className="px-6 py-4 font-bold tracking-wider text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-ink/10">
                                {myOpinions.map((op) => (
                                    <tr key={op.id} className="hover:bg-accent/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <p className="font-serif font-bold text-ink text-lg group-hover:text-accent transition-colors line-clamp-1">
                                                {op.title}
                                            </p>
                                            <span className="inline-block mt-1 px-2 py-0.5 border border-ink/20 text-[10px] font-mono uppercase rounded-sm text-ink/60">
                                                {op.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-sm text-ink-light whitespace-nowrap">
                                            {op.date}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button 
                                                    onClick={() => onRead(op)}
                                                    className="p-2 text-ink-light hover:text-ink hover:bg-ink/10 rounded transition-colors"
                                                    title="Lihat Artikel"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => {
                                                        if(window.confirm('Apakah Anda yakin ingin menghapus naskah ini? Tindakan ini tidak dapat dibatalkan.')) {
                                                            onDelete(op.id);
                                                        }
                                                    }}
                                                    className="p-2 text-ink-light hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                                    title="Hapus Naskah"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 p-8 text-center">
                        <FileText size={48} className="text-ink/20 mb-4" />
                        <p className="font-serif text-ink/40 italic mb-4">Belum ada naskah yang diterbitkan.</p>
                        <button onClick={onWriteNew} className="text-accent font-bold hover:underline text-sm font-mono">
                            Mulai Menulis Sekarang
                        </button>
                    </div>
                )}
             </div>
        </div>

      </div>
    </div>
  );
};