import React from 'react';
import About from './About';

const MissionSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <div className="bg-gradient-to-r from-white via-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed md:text-lg">
            To provide fast, compassionate and professional medical & emergency
            services with modern facilities and a patient-first approach. We
            constantly improve clinical outcomes through training, technology
            and community outreach — ensuring every patient receives timely,
            respectful and evidence-based care.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#EAF7FF] flex items-center justify-center text-blue-700 font-bold">
                1
              </div>
              <div>
                <div className="font-semibold text-gray-800">
                  Rapid Response
                </div>
                <div className="text-sm text-gray-500">
                  Ambulance & emergency dispatch 24/7
                </div>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#FFF6EA] flex items-center justify-center text-[#FF9B10] font-bold">
                2
              </div>
              <div>
                <div className="font-semibold text-gray-800">
                  Trusted Specialists
                </div>
                <div className="text-sm text-gray-500">
                  Experienced doctors across departments
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="order-first md:order-last">
          <img
            src="https://i.ibb.co.com/tPDs0ddS/image.png"
            alt="mission"
            className="w-full rounded-2xl shadow-lg object-cover h-64 md:h-96"
          />
        </div>
      </div>
    </div>
  </section>
);

const VisionSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <div className="rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-[#0f172a] text-white p-8 lg:p-12">
          <h4 className="text-2xl font-extrabold mb-3">Our Vision</h4>
          <p className="text-gray-200 leading-relaxed">
            A healthier community where timely care is available to everyone — built on innovation, education and collaboration.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-gray-300">Staff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-sm text-gray-300">Lives Touched</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 p-6 md:p-12 bg-white">
          <h5 className="text-lg font-semibold text-gray-800">How we get there</h5>
          <ol className="mt-4 space-y-4 list-decimal list-inside text-gray-600">
            <li><strong>Community Programs:</strong> Free screening camps and health education.</li>
            <li><strong>Training:</strong> Continuous upskilling of staff and emergency drills.</li>
            <li><strong>Technology:</strong> Investing in modern diagnostics and telehealth services.</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

const FacilitiesSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <div className="bg-gradient-to-r from-white to-[#f7fbff] rounded-2xl shadow-xl p-6 md:p-12">
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">Facilities & Specialities</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Emergency Care', desc: '24/7 ambulance & ER', iconBg: 'bg-[#ffeede]' },
          { title: 'Surgery', desc: 'Advanced OT suites', iconBg: 'bg-[#eef7ff]' },
          { title: 'Diagnostics', desc: 'Modern labs & imaging', iconBg: 'bg-[#f0fff6]' },
          { title: 'Mental Health', desc: 'Counseling & therapy', iconBg: 'bg-[#f6f0ff]' },
        ].map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white shadow hover:shadow-2xl transition">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${f.iconBg} mb-4`}>
              <svg className="w-6 h-6 text-[#FF9B10]" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 10l-2 10h16l-2-10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h6 className="font-semibold text-gray-800">{f.title}</h6>
            <p className="text-sm text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutUs = () => {
  return (
    <div className="space-y-12">
      <About />
      <MissionSection />
      <VisionSection />
      <FacilitiesSection />

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-[#FFFBF7] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-2xl font-extrabold text-gray-900">Ready to get care?</h4>
            <p className="text-gray-600 mt-2">Call our 24/7 hotline or book an appointment online. We are here for you.</p>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-[#FF9B10] text-white font-semibold">Contact Us</a>
            <a href="#services" className="px-5 py-3 rounded-lg border border-gray-200 text-gray-700">View Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
