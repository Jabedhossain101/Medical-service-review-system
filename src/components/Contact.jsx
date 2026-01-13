import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      err.email = 'Valid email required';
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: Contact Information (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] leading-tight">
                Let's Start a <br />
                <span className="text-blue-500 italic">Conversation.</span>
              </h2>
              <p className="mt-6 text-slate-600 text-lg">
                Have questions about our services or need medical assistance?
                Our team is ready to support you 24/7.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <FaPhoneAlt />,
                  label: 'Call Us',
                  val: '+880 1234 567 89',
                  sub: '24/7 Emergency Support',
                  color: 'bg-blue-500',
                },
                {
                  icon: <FaEnvelope />,
                  label: 'Email Us',
                  val: 'info@mediservice.com',
                  sub: 'General & Billing Inquiries',
                  color: 'bg-[#0B1D51]',
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: 'Location',
                  val: 'Dhaka, Bangladesh',
                  sub: 'Visit our main clinic',
                  color: 'bg-indigo-500',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                >
                  <div
                    className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center text-xl shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-[#0B1D51] group-hover:text-blue-600 transition-colors">
                      {item.val}
                    </p>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Form (7 Columns) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-50 relative overflow-hidden">
              {/* Decorative circle inside form */}
              <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B1D51]">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Md Jabed Hossain"
                      className={`w-full px-5 py-4 rounded-xl bg-slate-50 border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        errors.name
                          ? 'border-red-400'
                          : 'border-slate-100 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B1D51]">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rafsan@example.com"
                      className={`w-full px-5 py-4 rounded-xl bg-slate-50 border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        errors.email
                          ? 'border-red-400'
                          : 'border-slate-100 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1D51]">
                    Phone Number (Optional)
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+880 1234 567 890"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1D51]">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="How can we assist you today?"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      errors.message
                        ? 'border-red-400'
                        : 'border-slate-100 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#0B1D51] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-3 group disabled:opacity-70"
                >
                  {status === 'sending' ? 'Processing...' : 'Send Message'}
                  <FaPaperPlane
                    className={`text-sm transition-transform ${
                      status === 'sending'
                        ? ''
                        : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                    }`}
                  />
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-green-600 font-bold"
                  >
                    ✓ Thank you! We will get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
