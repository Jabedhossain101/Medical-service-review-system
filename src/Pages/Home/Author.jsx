import React from 'react';

const Author = () => {
  const authors = [
    {
      name: 'Dr. Mahabubur Rahman',
      role: 'Chief Medical Officer',
      bio: 'Dr. Mahabubur Rahman leads our medical team with over 20 years of experience in emergency and general healthcare services.',
      image: 'https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg',
    },
    {
      name: 'Dr. James Lee',
      role: 'Senior Surgeon',
      bio: 'Specialized in trauma and critical surgeries, Dr. Lee brings global expertise and precision-driven care.',
      image: 'https://i.ibb.co/8DJrh88D/image.png',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Clinical Psychologist',
      bio: 'Sarah provides compassionate counseling for anxiety, emotional trauma, and mental well-being.',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold mb-2">
            Our Medical Professionals
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
            Meet Our Experts
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Our experienced and certified healthcare professionals are dedicated
            to delivering trusted and high-quality medical services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {authors.map((author, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-lg border border-slate-100 rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-36 h-36 mx-auto">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full rounded-full object-cover border-4 border-blue-500"
                />
                <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></span>
              </div>

              {/* Info */}
              <h3 className="mt-6 text-xl font-heading font-semibold text-slate-900">
                {author.name}
              </h3>
              <p className="text-blue-600 font-medium mt-1">{author.role}</p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {author.bio}
              </p>

              {/* Footer */}
              <div className="mt-6 text-xs font-semibold text-green-600 bg-green-50 inline-block px-4 py-1 rounded-full">
                ✔ Verified Professional
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Author;
