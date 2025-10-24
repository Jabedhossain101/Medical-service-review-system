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
      // Dummy send - replace with real API call (e.g., fetch('/api/contact', {...}))
      await new Promise(resolve => setTimeout(resolve, 900));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      console.error('Form submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
     {' '}
      <div className="bg-gray-50/70 rounded-3xl p-6 md:p-10 shadow-xl shadow-gray-200/50 dark:shadow-none">
        {' '}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           {/* Left: Contact info */} {' '}
          <div className="space-y-8">
           {' '}
            <span className="inline-block bg-[#FF9B10]/10 text-[#FF9B10] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider">
               Get In Touch{' '}
            </span>
           {' '}
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
               Have Questions? We're Here to Help.{' '}
            </h2>
           {' '}
            <p className="text-lg max-w-lg">
               For appointments, general inquiries, or
              non-emergency support, please use the contact details or form
              below.{' '}
            </p>
           {' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {' '}
              {/* The info boxes are now softer with no background */} 
               {' '}
              <div className="p-4 rounded-xl border border-gray-100 shadow-md transition duration-300 hover:shadow-md">
                  <p className="text-sm text-gray-500">Phone</p>
                {' '}
                <a
                  href="tel:+880123456789"
                  className="font-bold text-lg text-gray-800 block mt-1"
                >
                  +880 1234 567 89
                </a>
                 {' '}
                <p className="text-xs text-gray-500 mt-1">
                  24/7 Emergency Hotline
                </p>
                {' '}
              </div>
              {' '}
              <div className="p-4 rounded-xl border border-gray-100 shadow-md transition duration-300 hover:shadow-md">
                  <p className="text-sm text-gray-500">Email</p>
                {' '}
                <a
                  href="mailto:info@medicalservice.example"
                  className="font-bold text-lg block mt-1"
                >
                  info@service.example
                </a>
                 {' '}
                <p className="text-xs text-gray-500 mt-1">
                  General Support & Billing
                </p>
                {' '}
              </div>
             {' '}
            </div>
             {' '}
          </div>
            {/* Right: Contact form and Map */} {' '}
          <div className="space-y-6">
            {/* Form Section */}  {' '}
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700"
            >
              {' '}
              <p className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Send us a message
              </p>
              {' '}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {' '}
                <div>
                 {' '}
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                 {' '}
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border px-4 py-2 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF9B10] ${
                      errors.name
                        ? 'border-red-400'
                        : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                 {' '}
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-500 mt-1">
                      {errors.name}
                    </p>
                  )}
                   {' '}
                </div>
                 {' '}
                <div>
                 {' '}
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                 {' '}
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border px-4 py-2 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF9B10] ${
                      errors.email
                        ? 'border-red-400'
                        : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                 {' '}
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}
                   {' '}
                </div>
                 {' '}
                <div className="sm:col-span-2">
                 {' '}
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Phone (optional)
                  </label>
                 {' '}
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border px-4 py-2 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF9B10] border-gray-200 dark:border-slate-600"
                    placeholder="+880 1XXXXXXXXX"
                  />
                   {' '}
                </div>
                 {' '}
                <div className="sm:col-span-2">
                 {' '}
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Message
                  </label>
                 {' '}
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className={`mt-1 block w-full rounded-lg border px-4 py-2 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF9B10] ${
                      errors.message
                        ? 'border-red-400'
                        : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="How can we help you?"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                  />
                 {' '}
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                   {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                 {' '}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-3 rounded-xl bg-[#FF9B10] text-white font-bold text-lg shadow-md shadow-[#FF9B10]/50 hover:brightness-95 transition duration-200 disabled:opacity-50"
                  disabled={status === 'sending'}
                >
                 {' '}
                  {status === 'sending' ? (
                    <svg
                      className="w-5 h-5 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                       {' '}
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeOpacity="0.2"
                      />
                       {' '}
                      <path
                        d="M22 12a10 10 0 00-10-10"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      {' '}
                    </svg>
                  ) : null}
                 {' '}
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {' '}
                </button>
                 {' '}
                <div className="text-sm">
                 {' '}
                  {status === 'success' && (
                    <p className="text-green-600 font-medium">
                      🎉 Message sent successfully!
                    </p>
                  )}
                 {' '}
                  {status === 'error' && (
                    <p className="text-red-600 font-medium">
                      ❌ Error sending message. Please call us.
                    </p>
                  )}
                   {' '}
                </div>
                {' '}
              </div>
             {' '}
            </form>
            {/* Map Embed */}  {' '}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700">
              {' '}
              <iframe
                title="Our Location"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy" // REMINDER: Replace the placeholder source below with your actual Google Maps embed URL
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522.680678859942!2d90.41031649999999!3d23.774438300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c18d18b3d%3A0x633d7197a1d7f6c3!2sDhaka!5e0!3m2!1sen!2sbd!4v1687515000000!5m2!1sen!2sbd"
                allowFullScreen=""
              ></iframe>
             {' '}
            </div>
             {' '}
          </div>
          {' '}
        </div>
       {' '}
      </div>
       {' '}
    </section>
  );
};

export default Contact;
