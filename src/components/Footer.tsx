import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white py-12 border-t border-silver-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6 text-neon-500" />
            <span className="text-xl font-bold">Zon Publishing</span>
          </div>
          <p className="text-silver-400">© {new Date().getFullYear()} Zon Publishing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
