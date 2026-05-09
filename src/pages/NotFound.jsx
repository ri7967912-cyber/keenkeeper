import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="font-display text-8xl font-bold text-[#244D3F] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page not found</h2>
      <p className="text-gray-500 mb-8 max-w-sm">Looks like this page has drifted away. Let's get you back to your connections.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#244D3F] text-white px-6 py-3 rounded-full hover:bg-[#1a3a2e] transition-colors font-medium"
      >
        <Home size={18} /> Back to Home
      </Link>
    </div>
  );
}
