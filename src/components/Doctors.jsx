// Doctors.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

// --- Core Values Card ---
const ValueCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-full transition duration-300 hover:shadow-lg hover:border-[#FF9B10]/30">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
    <div className="mt-4 flex justify-end">
      <div className="w-12 h-12 bg-[#FF9B10]/10 text-[#FF9B10] rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  </div>
);

// --- Core Values Section ---
const CoreValues = () => {
  const values = [
    {
      title: 'Compassionate Care',
      description:
        'Treating every patient with kindness, respect, and understanding.',
    },
    {
      title: 'Integrity & Ethics',
      description: 'Upholding the highest medical and professional standards.',
    },
    {
      title: 'Excellence in Service',
      description:
        'Delivering quality care using modern techniques and technology.',
    },
    {
      title: 'Patient-Centered',
      description:
        'Focusing on individual needs to create personalized solutions.',
    },
    {
      title: 'Continuous Innovation',
      description:
        'Adopting the latest medical advancements for better results.',
    },
    {
      title: 'Collaboration',
      description: 'Working together as a team to provide the best outcomes.',
    },
  ];

  return (
    <div className="py-16 bg-white/50">
      <div className="text-center mb-16">
        <div className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
          CORE VALUES
        </div>
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          The Principles Guiding{' '}
          <span className="text-gray-600 font-serif italic font-normal">
            Medical Services
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

// --- Main Doctors Section ---
const Doctors = () => {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const doctors = [
    {
      id: 'd1',
      name: 'Dr. Mahabubur Rahman',
      title: 'Chief Medical Officer',
      specialty: 'Emergency Medicine & General Surgery',
      experience: '22 years',
      rating: 4.9,
      patients: '12k+',
      image: 'https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg',
      bio: 'Dr. Rahman leads our emergency and critical care teams. He has extensive experience in trauma management, rapid decision-making in high-pressure situations and developing hospital emergency protocols.',
      contact: { phone: '+880123456789', email: 'mahabub@medical.example' },
    },
    {
      id: 'd2',
      name: 'Dr. James Lee',
      title: 'Senior Surgeon',
      specialty: 'Trauma & Minimally Invasive Surgery',
      experience: '18 years',
      rating: 4.8,
      patients: '8k+',
      image: 'https://i.ibb.co/8DJrh88D/image.png',
      bio: 'Dr. Lee specializes in complex trauma operations and laparoscopic surgery. He is committed to reducing recovery time through minimally invasive approaches.',
      contact: { phone: '+880198765432', email: 'james.lee@medical.example' },
    },
    {
      id: 'd3',
      name: 'Sarah Mitchell',
      title: 'Clinical Psychologist',
      specialty: 'Mental Health & Counseling',
      experience: '12 years',
      rating: 4.7,
      patients: '5k+',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      bio: 'Sarah provides therapy and counseling for stress, anxiety, trauma and family issues.',
      contact: { phone: '+880177001122', email: 'sarah.m@medical.example' },
    },
    {
      id: 'd4',
      name: 'Dr. Ayesha Karim',
      title: 'Pediatrician',
      specialty: 'Child Health & Neonatology',
      experience: '15 years',
      rating: 4.9,
      patients: '9k+',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
      bio: 'Dr. Karim focuses on newborn care, vaccination programs and developmental follow-ups.',
      contact: { phone: '+880199001234', email: 'ayesha.k@medical.example' },
    },
    {
      id: 'd5',
      name: 'Dr. Tariq Hasan',
      title: 'Cardiologist',
      specialty: 'Interventional Cardiology',
      experience: '20 years',
      rating: 4.8,
      patients: '7k+',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      bio: 'Dr. Hasan treats acute and chronic cardiac conditions, performs catheter-based interventions and manages long-term cardiac rehabilitation programs.',
      contact: { phone: '+880166002233', email: 'tariq.h@medical.example' },
    },
  ];

  const visibleDoctors = showAll ? doctors : doctors.slice(0, 4);

  const handleBooking = doctorId => {
    navigate(`/book/${doctorId}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* CORE VALUES SECTION */}
      <CoreValues />

      {/* DOCTORS SECTION */}
      <div className="text-center mb-10 pt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Meet Our Medical Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Experienced, compassionate professionals ready to deliver timely
          emergency care and specialist treatment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleDoctors.map(doc => (
          <div
            key={doc.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition duration-300 hover:shadow-xl"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute left-4 bottom-4 text-white">
                <div className="text-lg font-bold">{doc.name}</div>
                <div className="text-sm font-light">{doc.title}</div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-base font-semibold text-gray-800">
                    {doc.specialty}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Exp: {doc.experience}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-orange-600 flex items-center gap-1">
                    {doc.rating} <span className="text-yellow-500">★</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {doc.patients} patients
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {doc.bio}
              </p>

              <div className="flex items-center justify-between gap-3 border-t pt-4">
                <button
                  onClick={() => setOpenId(openId === doc.id ? null : doc.id)}
                  className="text-sm text-[#FF9B10] font-medium hover:text-orange-700 transition"
                >
                  {openId === doc.id ? 'Close Details' : 'Full Profile'}
                </button>

                <button
                  onClick={() => handleBooking(doc.id)}
                  className="px-3 py-1 text-xs bg-[#FF9B10] text-white rounded-lg font-semibold hover:brightness-90 transition"
                >
                  Book
                </button>
              </div>

              {openId === doc.id && (
                <div className="mt-4 border-t pt-4 text-sm text-gray-700 space-y-3">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    Full Bio:
                  </p>
                  <p>{doc.bio}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-gray-500">Phone</div>
                      <a
                        href={`tel:${doc.contact.phone}`}
                        className="font-medium text-gray-800 hover:text-[#FF9B10]"
                      >
                        {doc.contact.phone}
                      </a>
                    </div>
                    <div>
                      <div className="text-gray-500">Email</div>
                      <a
                        href={`mailto:${doc.contact.email}`}
                        className="font-medium text-gray-800 hover:text-[#FF9B10]"
                      >
                        {doc.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        {!showAll && doctors.length > 4 ? (
          <button
            onClick={() => setShowAll(true)}
            className="inline-block px-8 py-3 rounded-xl bg-[#FF9B10] text-white font-bold shadow-lg shadow-[#FF9B10]/40 hover:brightness-95 transition"
          >
            Show All {doctors.length} Doctors
          </button>
        ) : showAll ? (
          <button
            onClick={() => setShowAll(false)}
            className="inline-block px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-100 transition"
          >
            Show Less
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Doctors;
