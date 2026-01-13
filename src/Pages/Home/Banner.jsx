import React from 'react';

const ReviewHighlightSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background Subtle Elements - Match with Hero */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: Visual Representation */}
        <div className="relative order-2 lg:order-1">
          {/* Main Image with Frame */}
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-xl border-[12px] border-slate-50">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
              alt="Medical Consultation"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Floating Trust Card 1 - Verification */}
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 z-20 flex items-center gap-3 animate-bounce-slow">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">
                Verified Reviews
              </p>
              <p className="text-xs text-slate-500">100% Authentic</p>
            </div>
          </div>

          {/* Floating Trust Card 2 - Satisfaction */}
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-blue-50 z-20 hidden md:block">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-800 italic">
              "Highly Recommended!"
            </p>
            <p className="text-xs text-slate-500 mt-1">— Happy Patient</p>
          </div>
        </div>

        {/* RIGHT SIDE: Content & Stats */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Community Trust
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Empowering Patients with <br />
            <span className="text-blue-600 italic">Transparent Reviews</span>
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed text-lg">
            Beyond just medical care, we believe in the power of shared
            experiences. Our platform connects you with the right specialists
            based on real feedback from people who have been there.
          </p>

          {/* Modern Stats Grid */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <h3 className="text-3xl font-extrabold text-blue-600">10k+</h3>
              <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">
                Patient Stories
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <h3 className="text-3xl font-extrabold text-blue-600">99%</h3>
              <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">
                Accuracy Rate
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button className="group flex items-center gap-3 text-slate-900 font-bold hover:text-blue-600 transition-colors">
              <span>See how our review system works</span>
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewHighlightSection;
