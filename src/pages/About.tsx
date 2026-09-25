import { Users, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-rainforest-600">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Zon Publishing
          </h1>
          <p className="text-xl text-silver-200 max-w-3xl mx-auto">
            A decade of excellence in bringing authors' dreams to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-silver-300 mb-4 text-lg leading-relaxed">
              Founded with a passion for storytelling, Zon Publishing has been helping authors achieve their
              dreams for over a decade. Our team of experienced editors, designers, and marketing professionals
              work tirelessly to ensure every book we publish meets the highest standards of quality.
            </p>
            <p className="text-silver-300 mb-6 text-lg leading-relaxed">
              We believe in the power of words to change lives, inspire minds, and connect communities.
              Whether you're a first-time author or a seasoned writer, we provide the support and expertise
              you need to succeed in today's competitive publishing landscape.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-neon-500 text-charcoal-900 px-6 py-3 rounded-lg font-semibold hover:bg-neon-400 transition-all shadow-lg hover:shadow-xl"
            >
              Work With Us
            </Link>
          </div>
          <div className="bg-charcoal-800 p-8 rounded-xl shadow-lg border border-silver-800">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-rainforest-800 transition-colors">
                <Users className="h-10 w-10 text-neon-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">500+ Authors</h3>
                  <p className="text-silver-300">Trusted by hundreds of writers worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-rainforest-800 transition-colors">
                <BookOpen className="h-10 w-10 text-neon-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">1000+ Books</h3>
                  <p className="text-silver-300">Published across all genres and formats</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-rainforest-800 transition-colors">
                <Award className="h-10 w-10 text-neon-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Award-Winning</h3>
                  <p className="text-silver-300">Multiple industry awards and recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-charcoal-800 rounded-2xl shadow-xl p-12 border border-silver-800">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-charcoal-900 font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-silver-300">
                We maintain the highest standards in every aspect of publishing, from editing to design.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-charcoal-900 font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Partnership</h3>
              <p className="text-silver-300">
                We work closely with our authors, treating each project as a collaborative journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-charcoal-900 font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-silver-300">
                We embrace new technologies and strategies to give our authors every advantage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
