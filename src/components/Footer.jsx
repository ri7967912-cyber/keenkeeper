import { Twitter, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#244D3F' }} className="text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="font-display text-3xl font-bold mb-2">KeenKeeper</h2>
        <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Social Links</p>
        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Github size={16} />
          </a>
          <a href="#" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Instagram size={16} />
          </a>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3">
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
