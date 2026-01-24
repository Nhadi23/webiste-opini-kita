import React from 'react';
import { Users, BookOpen, Scroll, ArrowLeft } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  nim: string;
  image: string;
}

// Mock data for 8 members
const MEMBERS: Member[] = [
  { name: "M. Bili Syaputra", role: "Ketua Departemen", nim: "442023231057", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBQS9nH_xNUOJQNsM_x-XR_jPyb_-Kye_MNX0SsPVrgXyi7T-Ds5SzN6MRvAAKiDfY_p_btfNdl9f5C-wylglOxLhmo6BrNBeG7BpurLywIQlOloC0z1uKoAC9DGDyP0VfOWcAjnvCOoGMUWQXEX67MKyRoUraPIQul-1bAZmi9iQHzDr-X8gRw76KyLrR/w259-h400/WhatsApp%20Image%202026-01-14%20at%2020.50.47.jpeg" },
  { name: "M. Azrul Amirullah", role: "Ketua Departemen", nim: "442023311093", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGCS5daJrLHHUJ7XGPiD1Y5JmiJX6F_p8S6i50NzSYcprEjZfIbwIvMNf2FN5GGTtdFn6nIUaqeb15IB9BYkalHSqJqYk9iU8hUUm2iXdUBNR5AtHjpJOEA56xgxeZJktRQVut4wmvMhFKdjzu2pCY4aFjST9oRfq5VMa8PY_B9JlOkmplYLrD67FtDan6/s868/WhatsApp%20Image%202026-01-14%20at%2021.12.46.jpeg" },
  { name: "Ahmad Nugrahadi", role: "Publikasi", nim: "442023611092", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgun4Y5k1rgNs4AMTn3O3AZIKpHPRw9NXd8zcv9LBa2GJUS6SVXA9QhlX8Qv5lqmRnuNxX1H9M2XPDZPMOwbOxtqiiu3oRYV6c9gdtEZ6Zi974dJfqm3Oio3TtaSyiJMd1eiXOMmAlSpm5Sz1M4WPDCkjlU_hh7FwGyMbG1sny_QxcUVTwpRshahnVX1_03/s2204/PXL_20240921_071848917.MP.jpg" },
  { name: "Najamuddin El Farabi", role: "Publikasi", nim: "40201205", image: "https://blogger.googleusercontent.com/img/a/AVvXsEh0cRemXn_dDn4oW5MjF7kckCIZ_725VtjgKUKeSdv056utUa4Sue8tEmJ95tzuErim-WKVlfB2CXpnnxbiOB-5fnOtxf78sfx3zDCJtuZ_Tbk67IvdDtx7rWYyOAAFPgDSGDZAkkw38TCGf59lNeOk9lv5CJNwrudmhpIC7Idmn75lbsQtxvkYCLrPTNhv=w340-h400" },
  { name: "Alfan Arif Rabbani", role: "Div. Kajian", nim: "40201204", image: "hhttps://blogger.googleusercontent.com/img/a/AVvXsEhOHqya75J4UjKaCJxzdljvFY07XiPxJvvWmp9wocv0xbigbGZft6gzdo8AiWWjPouOAbwvZRLfIDk1gRvmuJYQH-7lt-FVWUtVummN5PT0zRgJleiY2CJ6cHNJrCcpgR9zwONIlR0Z_JSnCYtV5bQFfQuJyvUs1sw0NNfe7qxG50t4vjDpgibEmTsx1GjD=w300-h400" },
  { name: "Muhammad Ihsan", role: "Div. Kajian", nim: "442023411098", image: "https://blogger.googleusercontent.com/img/a/AVvXsEjmHY6JQyEJ-_Wj0PV0KgzOWSNaxyZcfXRLjJUf1LLQDsSrz3JA0j8D-v7JHEtf5FWLbOWd8sfnS-N87YI3ZQlUXNcUREB11XUyLx3tIHnVHjnLGE6aC4OvmDZiL8lQ8f9_aIFOOT_HMj4qf3aL2_u93vq039jmzMS8somJb0a8M-dAdduL11yAuz11Fzrs=w267-h400" },
  { name: "Raihan M. Firdaus", role: "Div. Diskusi", nim: "452024231033", image: "https://blogger.googleusercontent.com/img/a/AVvXsEjUcju37amc-KQ6Q7LHtYbainfiyMfkZu6ZaCUlc9vb-eb1lTgdYM7Hvkcug9B2GYrtxd6JKk7g9P2leR7qxvY4DtkvCk-pgyHpLbKbUrNIb0eGZD4vqbRQJ1NLRRFv7ECPGET6IxIVdEqXkQcQOwPfYrFE820QlrBTW2sFrZ8tHb-fUy1or4A0om9LUtxZ=w225-h400" },
  { name: "M. Ali Fauzan ", role: "Div. Diskusi", nim: "452024311062", image: "https://blogger.googleusercontent.com/img/a/AVvXsEjiRAZf3CzDBFB0CG-NiUrpIKqo1cFBD7e6WGRUrNyQKhQ9LAiP9Eh2vzBCyWJGRFbvkUMR-IyYDyz0WNOrGzz_oQSki02WtR4sju4Nj5DGzNI693fBeyQc5tMLg5VcTccCw-VoJ4UB8_AmRUzNIOEHlYPfG0zF_VJoyKQnrBn3eE2rujjK6xz006xNlR7V=w327-h400" },
];

interface AboutDeptProps {
  onBack: () => void;
}

export const AboutDept: React.FC<AboutDeptProps> = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-700">
      
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-ink-light hover:text-accent mb-6 font-mono text-sm transition-colors"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Kembali ke Beranda
      </button>

      {/* Hero Section - Department Profile */}
      <div className="bg-white border-2 border-ink shadow-[8px_8px_0px_0px_rgba(45,42,38,0.15)] p-8 md:p-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <BookOpen size={120} />
        </div>
        
        <div className="relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Scroll className="text-accent" size={24} />
            <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-ink-light">Tentang Kami</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
            Departemen Riset & Diskusi
          </h1>
          
          <div className="max-w-2xl text-ink/80 font-serif text-lg leading-relaxed space-y-4">
            <p>
              <span className="text-4xl float-left mr-2 font-bold text-accent">B</span>
              erdiri sebagai garda terdepan dalam membudayakan nalar kritis di lingkungan Universitas Darussalam Gontor. 
              Kami memfasilitasi mahasiswa untuk menyelami samudra ilmu pengetahuan melalui kajian mendalam, diskusi dialektis, 
              dan publikasi ilmiah yang beradab.
            </p>
            <p className="border-l-2 border-accent/30 pl-4 italic text-ink/60 text-base">
              "Menghidupkan tradisi intelektual Islam di era kontemporer."
            </p>
          </div>
        </div>
      </div>

      {/* Organization Chart / Members Grid */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-px bg-ink/20 w-12"></div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-ink">
                <Users size={20} />
                <span>Susunan Pengurus 2025-2026</span>
            </div>
            <div className="h-px bg-ink/20 w-12"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MEMBERS.map((member, index) => (
            <div key={index} className="group bg-paper border border-ink/10 p-4 text-center hover:border-accent/50 transition-all hover:-translate-y-1 duration-300">
              {/* Photo Frame */}
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full border-4 border-white shadow-md overflow-hidden group-hover:shadow-lg transition-shadow">
                 {/* Sepia Filter Overlay */}
                 <div className="absolute inset-0 bg-sepia mix-blend-color opacity-50 group-hover:opacity-0 transition-opacity z-10"></div>
                 <div className="absolute inset-0 bg-ink mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity z-10"></div>
                 
                 <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover filter contrast-[0.9] grayscale-[0.8] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                 />
              </div>

              <h3 className="font-serif text-lg font-bold text-ink mb-1 group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <div className="w-8 h-px bg-ink/20 mx-auto mb-2"></div>
              <p className="font-mono text-xs text-ink-light uppercase tracking-wider font-bold mb-1">
                {member.role}
              </p>
              <p className="font-mono text-[10px] text-ink/40">
                NIM: {member.nim}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
