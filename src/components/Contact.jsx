// ...existing code...
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) err.email = 'Valid email required';
    if (!form.message.trim()) err.message = 'Message is required';
    return err;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;
    setStatus('sending');

    try {
      // Dummy send - replace with real API call
      await new Promise(resolve => setTimeout(resolve, 900));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-start">
          {/* Left: Contact info */}
          <div className="space-y-6">
            <span className="inline-block bg-[#FFFBF0] text-[#FF9B10] px-3 py-1 rounded-full text-sm font-semibold">
              Contact Us
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              We're here to help — get in touch
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              For emergencies call our hotline. For appointments and general inquiries use the form or the contact details below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-blue-50/60">
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+880123456789" className="font-semibold text-gray-800 block mt-1">+880 1234 567 89</a>
                <p className="text-xs text-gray-500 mt-1">24/7 hotline</p>
              </div>

              <div className="p-4 rounded-lg bg-green-50/60">
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:info@medicalservice.example" className="font-semibold text-gray-800 block mt-1">info@medicalservice.example</a>
                <p className="text-xs text-gray-500 mt-1">Support & billing</p>
              </div>

              <div className="p-4 rounded-lg bg-yellow-50/60">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold text-gray-800 mt-1">123 Health Ave, Dhaka, Bangladesh</p>
              </div>

              <div className="p-4 rounded-lg bg-purple-50/60">
                <p className="text-sm text-gray-500">Hours</p>
                <p className="font-semibold text-gray-800 mt-1">Open 24/7</p>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <a href="#services" className="inline-block px-4 py-2 rounded-lg bg-[#FF9B10] text-white font-medium">View Services</a>
              <a href="#faq" className="inline-block px-4 py-2 rounded-lg border border-gray-200 text-gray-700">FAQ</a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Phone (optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 border-gray-200"
                    placeholder="+880 1XXXXXXXXX"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="How can we help you?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <p id="message-error" className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF9B10] text-white font-semibold hover:brightness-95"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" />
                      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  ) : null}
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                <div className="text-sm">
                  {status === 'success' && <p className="text-green-600">Message sent. We will contact you soon.</p>}
                  {status === 'error' && <p className="text-red-600">Something went wrong. Try again.</p>}
                </div>
              </div>
            </form>

            {/* Small map / visual placeholder */}
            <div className="mt-6 rounded-lg overflow-hidden border border-gray-100">
              <div className="w-full h-40 bg-gradient-to-r from-[#e6f4ff] to-[#fff4e6] flex items-center justify-center text-gray-600">
                <svg className="w-12 h-12 text-[#FF9B10]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 11 7 11s7-5.8 7-11c0-3.9-3.1-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="ml-3 font-medium">Our location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// ...existing code...