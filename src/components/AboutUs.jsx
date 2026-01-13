import React from 'react';
import About from './About';

/* ===================== MISSION ===================== */
const MissionSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-white rounded-3xl shadow-xl p-8 md:p-14 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="text-blue-600 font-semibold text-sm">
            Our Purpose
          </span>

          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-5">
            Our Mission
          </h3>

          <p className="text-slate-600 leading-relaxed text-lg">
            We deliver fast, compassionate, and professional medical & emergency
            services with a patient-first mindset. Through continuous training,
            modern technology, and community outreach, we ensure safe and
            evidence-based care for everyone.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Rapid Response',
                desc: '24/7 ambulance & emergency dispatch',
                color: 'bg-blue-100 text-blue-700',
                num: '01',
              },
              {
                title: 'Trusted Specialists',
                desc: 'Experienced doctors across departments',
                color: 'bg-orange-100 text-orange-600',
                num: '02',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${item.color}`}
                >
                  {item.num}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://i.ibb.co.com/tPDs0ddS/image.png"
            alt="Mission"
            className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ===================== VISION ===================== */
const VisionSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
      {/* Left Dark Panel */}
      <div className="bg-slate-900 text-white p-10 lg:p-14">
        <span className="text-blue-400 font-semibold text-sm">
          Looking Ahead
        </span>

        <h4 className="text-3xl font-extrabold mt-3 mb-4">Our Vision</h4>

        <p className="text-slate-300 leading-relaxed">
          A healthier community where timely, quality care is accessible to
          everyone — powered by innovation, education, and collaboration.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '24/7', label: 'Service' },
            { value: '150+', label: 'Staff' },
            { value: '10k+', label: 'Lives Touched' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:col-span-2 bg-white p-8 md:p-14">
        <h5 className="text-xl font-semibold text-slate-800 mb-6">
          How We Achieve This
        </h5>

        <ol className="space-y-5 list-decimal list-inside text-slate-600">
          <li>
            <strong>Community Programs:</strong> Free screening camps and health
            education initiatives.
          </li>
          <li>
            <strong>Continuous Training:</strong> Regular upskilling and
            emergency response drills.
          </li>
          <li>
            <strong>Technology:</strong> Investment in modern diagnostics and
            telemedicine.
          </li>
        </ol>
      </div>
    </div>
  </section>
);

/* ===================== FACILITIES ===================== */
const FacilitiesSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl p-8 md:p-14">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-sm">
          What We Offer
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
          Facilities & Specialities
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Emergency Care', desc: '24/7 ambulance & ER' },
          { title: 'Surgery', desc: 'Advanced OT suites' },
          { title: 'Diagnostics', desc: 'Modern labs & imaging' },
          { title: 'Mental Health', desc: 'Counseling & therapy' },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold">+</span>
            </div>
            <h6 className="font-semibold text-slate-800">{f.title}</h6>
            <p className="text-sm text-slate-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ===================== ABOUT US ===================== */
const AboutUs = () => {
  return (
    <div className="space-y-10">
      <About />
      <MissionSection />
      <VisionSection />
      <FacilitiesSection />

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-orange-50 to-white rounded-3xl p-10 md:p-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-3xl font-extrabold text-slate-900">
              Ready to Get Care?
            </h4>
            <p className="text-slate-600 mt-3 max-w-xl">
              Call our 24/7 hotline or book an appointment online. Our medical
              team is always ready to help you.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
