import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Authors() {
  const authors = [
    {
      name: 'Sarah Mitchell',
      genre: 'Mystery & Thriller',
      books: 5,
      testimonial: 'Working with Zon Publishing transformed my writing career. Their expertise in editing and marketing made all the difference. My books have reached audiences I never dreamed possible.',
      color: 'from-rainforest-400 to-rainforest-600'
    },
    {
      name: 'James Peterson',
      genre: 'Science Fiction',
      books: 3,
      testimonial: 'The team at Zon Publishing understood my vision and helped me bring it to life. Their attention to detail and professional approach exceeded my expectations at every turn.',
      color: 'from-charcoal-600 to-charcoal-800'
    },
    {
      name: 'Emily Rodriguez',
      genre: 'Romance',
      books: 8,
      testimonial: 'From manuscript to marketing, Zon Publishing supported me every step of the way. They truly care about their authors and it shows in the quality of their work.',
      color: 'from-silver-400 to-silver-600'
    },
    {
      name: 'Michael Chen',
      genre: 'Non-Fiction',
      books: 4,
      testimonial: 'Publishing my first book seemed daunting until I found Zon Publishing. They made the process smooth and enjoyable. I would not trust anyone else with my work.',
      color: 'from-rainforest-500 to-rainforest-700'
    },
    {
      name: 'Lisa Anderson',
      genre: 'Young Adult',
      books: 6,
      testimonial: 'The editorial feedback I received was invaluable. Zon Publishing helped me grow as a writer while maintaining my unique voice. My readers notice the difference.',
      color: 'from-neon-500 to-neon-700'
    },
    {
      name: 'David Thompson',
      genre: 'Historical Fiction',
      books: 7,
      testimonial: 'After years of rejection, Zon Publishing believed in my work and helped me reach bestseller status. Their marketing strategies are second to none.',
      color: 'from-rainforest-300 to-rainforest-500'
    }
  ];

  return (
    <div className="min-h-screen bg-rainforest-600">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured Authors
          </h1>
          <p className="text-xl text-silver-200 max-w-3xl mx-auto">
            Meet the talented writers we have had the privilege to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {authors.map((author, index) => (
            <div
              key={index}
              className="bg-charcoal-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border border-silver-800"
            >
              <div className={`h-32 bg-gradient-to-br ${author.color} relative`}>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 bg-charcoal-700 rounded-full border-4 border-charcoal-700 shadow-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-neon-500">
                      {author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-16 px-6 pb-6">
                <h3 className="text-2xl font-bold text-center text-white mb-1">
                  {author.name}
                </h3>
                <p className="text-neon-500 text-center font-semibold mb-2">
                  {author.genre}
                </p>
                <p className="text-silver-400 text-center text-sm mb-4">
                  {author.books} {author.books === 1 ? 'Book' : 'Books'} Published
                </p>
                <div className="bg-rainforest-800 rounded-lg p-4 relative">
                  <Quote className="h-6 w-6 text-neon-500 absolute -top-2 -left-2" />
                  <p className="text-silver-300 text-sm italic leading-relaxed pl-4">
                    {author.testimonial}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-charcoal-800 rounded-2xl shadow-xl p-12 text-center border border-silver-800">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Community of Authors
          </h2>
          <p className="text-xl text-silver-300 mb-8 max-w-2xl mx-auto">
            Become part of our growing family of successful authors. Let us help you achieve your publishing goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-neon-500 text-charcoal-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-400 transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
