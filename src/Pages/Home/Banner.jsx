import React from 'react';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Gradient Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Trusted Healthcare Platform
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Better Care Starts with <br />
            <span className="text-blue-600">Better Reviews</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Discover verified doctors, trusted clinics, and real patient
            reviews. Make confident healthcare decisions in minutes.
          </p>

          {/* Search Box */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-xl border">
            <input
              type="text"
              placeholder="Search doctors, hospitals, services..."
              className="flex-1 px-4 py-3 rounded-xl outline-none text-slate-700 bg-transparent"
            />
            <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Explore
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">10k+</h3>
              <p className="text-sm text-slate-500">Verified Reviews</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">500+</h3>
              <p className="text-sm text-slate-500">Specialist Doctors</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">98%</h3>
              <p className="text-sm text-slate-500">Patient Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative flex justify-center">
          {/* Doctor Image */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80"
              alt="Doctor"
              className="w-[380px] md:w-[420px] object-cover"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-10 -left-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-slate-800">
              ✔ Verified Doctors
            </p>
            <p className="text-xs text-slate-500">Government Approved</p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 -right-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-slate-800">
              ⭐ 4.9 Rating
            </p>
            <p className="text-xs text-slate-500">From Real Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
