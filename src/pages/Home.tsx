import { Link } from 'react-router-dom';
import { Feather, BookOpen, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-rainforest-600">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Bringing Stories to Life
          </h2>
          <p className="text-xl text-silver-200 mb-8 max-w-3xl mx-auto">
            Your trusted partner in publishing excellence. We transform manuscripts into masterpieces,
            guiding authors from conception to publication with expertise and passion.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-neon-500 text-charcoal-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Submit Your Manuscript
          </Link>
        </div>
      </section>

      <section className="bg-charcoal-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-rainforest-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-rainforest-700">
              <Feather className="h-12 w-12 text-neon-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Editorial Services</h3>
              <p className="text-silver-300 mb-4">
                Professional editing, proofreading, and manuscript development to ensure your story shines.
              </p>
              <Link to="/services" className="text-neon-500 font-semibold hover:text-neon-400">
                Learn more →
              </Link>
            </div>
            <div className="bg-rainforest-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-rainforest-700">
              <BookOpen className="h-12 w-12 text-neon-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Publishing</h3>
              <p className="text-silver-300 mb-4">
                Full-service publishing including design, formatting, and distribution across all major platforms.
              </p>
              <Link to="/services" className="text-neon-500 font-semibold hover:text-neon-400">
                Learn more →
              </Link>
            </div>
            <div className="bg-rainforest-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-rainforest-700">
              <Award className="h-12 w-12 text-neon-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Marketing</h3>
              <p className="text-silver-300 mb-4">
                Strategic marketing campaigns to help your book reach its target audience and achieve success.
              </p>
              <Link to="/services" className="text-neon-500 font-semibold hover:text-neon-400">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Publish Your Book?</h2>
          <p className="text-xl text-silver-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful authors who have brought their stories to life with Zon Publishing.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-neon-500 text-charcoal-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-400 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
