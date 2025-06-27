import React from 'react';

const Author = () => {
  const authors = [
    {
      name: 'Dr. Lisa Carter',
      role: 'Chief Medical Officer',
      bio: 'Dr. Carter leads our medical team with over 20 years of experience in general and emergency care. Her focus is on patient-centered solutions.',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Dr. James Lee',
      role: 'Senior Surgeon',
      bio: 'Specializing in critical and trauma surgeries, Dr. Lee brings international experience to ensure the best outcomes for patients.',
      image: 'https://i.ibb.co/8DJrh88D/image.png',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Clinical Psychologist',
      bio: 'Sarah provides therapy and counseling support to patients coping with stress, anxiety, and emotional trauma.',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Meet Our Experts
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {authors.map((author, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl text-center shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-400"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {author.name}
              </h3>
              <p className="text-blue-500 font-medium">{author.role}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {author.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Author;
