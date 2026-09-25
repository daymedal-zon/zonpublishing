import { BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-neon-500' : 'text-silver-300 hover:text-neon-400';
  };

  return (
    <header className="bg-charcoal-800 border-b border-silver-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <BookOpen className="h-8 w-8 text-neon-500 group-hover:scale-110 transition-transform" />
            <h1 className="text-3xl font-bold text-white">Zon Publishing</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors font-medium`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors font-medium`}>
              About
            </Link>
            <Link to="/services" className={`${isActive('/services')} transition-colors font-medium`}>
              Services
            </Link>
            <Link to="/authors" className={`${isActive('/authors')} transition-colors font-medium`}>
              Authors
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors font-medium`}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
