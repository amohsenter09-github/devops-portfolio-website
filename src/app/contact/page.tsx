"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/siteConfig";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    // Client-side validation
    if (!formData.name.trim()) {
      setError('Name is required');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      setStatus('error');
      return;
    }

    if (!formData.message.trim()) {
      setError('Message is required');
      setStatus('error');
      return;
    }

    try {
      // Replace with your actual Formspree endpoint or backend API
      const response = await fetch('https://formspree.io/f/mvvbjgkn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Contact Form Submission',
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset form after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Contact</h1>
            
            <div className="mt-6 max-w-4xl mx-auto">
              <p className="text-gray-700 leading-7 mb-8 text-center">
                Ready to transform your infrastructure and accelerate your development workflow? 
                I&apos;d love to discuss how my expertise in AWS, Kubernetes, and DevOps automation 
                can help your organization achieve its goals.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">Get In Touch</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                      <a 
                        href={`mailto:${site.contact.email}`} 
                        className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                        aria-label={`Send email to ${site.contact.email}`}
                      >
                        {site.contact.email}
                      </a>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                      <a 
                        href={`tel:${site.contact.phone}`} 
                        className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                        aria-label={`Call ${site.contact.phone}`}
                      >
                        {site.contact.phone}
                      </a>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">{site.contact.location}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">LinkedIn</h3>
                      <a 
                        href={site.contact.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                        aria-label="Visit LinkedIn profile"
                      >
                        linkedin.com/in/amrfathy
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">Send a Message</h2>
                  <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input 
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white transition-colors" 
                        placeholder="Your Name" 
                        required
                        aria-required="true"
                        aria-invalid={error && !formData.name.trim() ? 'true' : 'false'}
                        aria-describedby={error && !formData.name.trim() ? "name-error" : undefined}
                      />
                      {error && !formData.name.trim() && (
                        <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{error}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white transition-colors" 
                        placeholder="your.email@example.com" 
                        required
                        aria-required="true"
                        aria-invalid={error && formData.email ? 'true' : 'false'}
                        aria-describedby={error && formData.email ? "email-error" : undefined}
                      />
                      {error && formData.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{error}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input 
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white transition-colors" 
                        placeholder="Subject (optional)" 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white transition-colors resize-vertical" 
                        placeholder="How can I help you with your DevOps needs?" 
                        rows={4}
                        required
                        aria-required="true"
                        aria-invalid={error && !formData.message.trim() ? 'true' : 'false'}
                        aria-describedby={error && !formData.message.trim() ? "message-error" : undefined}
                      />
                      {error && !formData.message.trim() && (
                        <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">{error}</p>
                      )}
                    </div>
                    {status === 'error' && error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm" role="alert">
                        {error}
                      </div>
                    )}
                    {status === 'success' && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm" role="alert">
                        Message sent successfully! I&apos;ll get back to you soon.
                      </div>
                    )}
                    <button 
                      className="w-full rounded bg-gray-900 px-4 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                      type="submit"
                      disabled={status === 'loading'}
                      aria-busy={status === 'loading'}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 text-center">What I Can Help With</h2>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <ul className="space-y-2">
                    <li>• AWS Infrastructure Design & Migration</li>
                    <li>• Kubernetes & Container Orchestration</li>
                    <li>• CI/CD Pipeline Implementation</li>
                    <li>• Infrastructure as Code (Terraform, CDK)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Observability & Monitoring Setup</li>
                    <li>• Security & Compliance Implementation</li>
                    <li>• Legacy System Modernization</li>
                    <li>• DevOps Process Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
