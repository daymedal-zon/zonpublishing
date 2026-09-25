import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { analytics } from '../lib/analytics';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      analytics.trackEvent('contact_form_submitted', {
        name: formData.name,
        email: formData.email
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-rainforest-600">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-silver-200 max-w-3xl mx-auto">
            Have a question or ready to start your publishing journey? We would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-charcoal-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-silver-800">
                <div className="bg-rainforest-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-neon-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:cam@zonpublishing.co.uk" className="text-silver-300 hover:text-neon-500 transition-colors">
                    cam@zonpublishing.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-charcoal-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-silver-800">
                <div className="bg-rainforest-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-neon-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+447960740227" className="text-silver-300 hover:text-neon-500 transition-colors">
                    +44 7960 740 227
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-charcoal-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-silver-800">
                <div className="bg-rainforest-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-neon-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Address</h3>
                  <p className="text-silver-300">
                    123 Publishing Lane<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-charcoal-800 p-6 rounded-xl shadow-md border border-silver-800">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-silver-300">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-charcoal-800 p-8 rounded-xl shadow-lg border border-silver-800">
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-silver-200 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-700 border border-silver-700 text-white rounded-lg focus:ring-2 focus:ring-neon-500 focus:border-transparent transition-all placeholder-silver-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-silver-200 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-700 border border-silver-700 text-white rounded-lg focus:ring-2 focus:ring-neon-500 focus:border-transparent transition-all placeholder-silver-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-silver-200 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-charcoal-700 border border-silver-700 text-white rounded-lg focus:ring-2 focus:ring-neon-500 focus:border-transparent transition-all resize-none placeholder-silver-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="bg-rainforest-800 border border-rainforest-600 text-rainforest-200 px-4 py-3 rounded-lg">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-charcoal-900 border border-error-500 text-error-100 px-4 py-3 rounded-lg">
                  {errorMessage || 'Something went wrong. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-neon-500 text-charcoal-900 px-6 py-4 rounded-lg font-semibold hover:bg-neon-400 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-charcoal-900"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
