import React from 'react';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center p-8 md:p-14">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <span className="inline-block bg-orange-50 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Compassionate Care, <br className="hidden sm:block" />
              Fast Response — Your Health Comes First
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              We provide trusted medical and emergency services around the
              clock. From rapid ambulance response to specialist-led treatment,
              our multidisciplinary team ensures patient-first care using modern
              technology and compassionate expertise.
            </p>

            {/* FEATURES */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {[
                {
                  title: '24/7 Emergency Support',
                  desc: 'Rapid ambulance dispatch & triage',
                  bg: 'bg-blue-100 text-blue-700',
                },
                {
                  title: 'Experienced Specialists',
                  desc: 'Certified doctors across disciplines',
                  bg: 'bg-orange-100 text-orange-600',
                },
                {
                  title: 'Patient-Centered Care',
                  desc: 'Personalized treatment & follow-ups',
                  bg: 'bg-green-100 text-green-600',
                },
                {
                  title: 'Modern Facilities',
                  desc: 'Advanced diagnostic & treatment tools',
                  bg: 'bg-purple-100 text-purple-700',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold ${item.bg}`}
                  >
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition"
              >
                Contact Us
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: '24/7', label: 'Availability' },
                { value: '120+', label: 'Specialists' },
                { value: '10k+', label: 'Patients Helped' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-slate-900">
                    {s.value}
                  </div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-first md:order-last flex justify-center md:justify-end">
            <div className="relative w-full max-w-xl">
              <img
                src="https://i.ibb.co.com/gZgCgPhr/image.png"
                alt="Medical Team"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-2xl border-4 border-white"
              />

              {/* FLOATING CARD */}
              <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg w-64">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg"
                    alt="Doctor"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      Dr. Mahabub
                    </div>
                    <div className="text-xs text-slate-500">
                      Chief Medical Officer
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Delivering trusted care with 20+ years of experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
