import { Feather, BookOpen, Award, FileText, Palette, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Feather,
      title: 'Editorial Services',
      description: 'Transform your manuscript with our comprehensive editing and development services.',
      features: [
        'Developmental editing',
        'Copy editing',
        'Proofreading',
        'Manuscript assessment',
        'Style guide development'
      ]
    },
    {
      icon: BookOpen,
      title: 'Publishing',
      description: 'Full-service publishing solutions from manuscript to market.',
      features: [
        'ISBN assignment',
        'Book formatting',
        'Cover design',
        'Print-on-demand setup',
        'Digital distribution'
      ]
    },
    {
      icon: Award,
      title: 'Marketing',
      description: 'Strategic marketing to ensure your book reaches its target audience.',
      features: [
        'Book launch campaigns',
        'Social media marketing',
        'Press release distribution',
        'Book reviews coordination',
        'Author website development'
      ]
    },
    {
      icon: FileText,
      title: 'Manuscript Development',
      description: 'Professional guidance to refine your story and strengthen your narrative.',
      features: [
        'Story structure analysis',
        'Character development',
        'Plot refinement',
        'Writing coaching',
        'Genre consultation'
      ]
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Eye-catching designs that capture your story\'s essence.',
      features: [
        'Custom cover design',
        'Interior layout',
        'Typesetting',
        'Illustration services',
        'Brand identity'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Distribution',
      description: 'Get your book into the hands of readers worldwide.',
      features: [
        'Amazon KDP setup',
        'IngramSpark distribution',
        'Library distribution',
        'International markets',
        'Audiobook production'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rainforest-600">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-silver-200 max-w-3xl mx-auto">
            Comprehensive publishing solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-charcoal-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-silver-800"
              >
                <Icon className="h-12 w-12 text-neon-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-silver-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-neon-500 flex-shrink-0 mt-0.5" />
                      <span className="text-silver-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-charcoal-800 rounded-2xl shadow-xl p-12 text-center border border-silver-800">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-silver-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your publishing vision to life.
            Our team is ready to guide you through every step of the journey.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-neon-500 text-charcoal-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-400 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
