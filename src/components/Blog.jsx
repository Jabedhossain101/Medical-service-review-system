import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    title: 'When to Call an Ambulance: A Practical Guide for Families',
    date: '2025-10-01',
    author: 'Dr. Mahabubur Rahman',
    tags: ['Emergency', 'Guide', 'Family'],
    image:
      'https://images.unsplash.com/photo-1587502536263-12b2f6f9b3b9?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Knowing when to call an ambulance can save lives. This article breaks down clear signs, practical steps to take while help is on the way, and how to communicate with emergency dispatchers effectively.',
    content: [
      `Recognizing life-threatening conditions quickly is essential. Call an ambulance immediately if you observe severe breathing difficulties, unresponsiveness, heavy bleeding that cannot be controlled, chest pain lasting more than a few minutes, signs of stroke (face drooping, arm weakness, speech difficulty), severe head injury, or seizures that do not stop.`,
      `While waiting for emergency responders: ensure the person is in a safe position (for example, place an unconscious but breathing person on their side), stop visible bleeding using firm pressure and clean cloths, start CPR if trained and the person is not breathing, and stay calm while providing the dispatcher with exact location, age and condition of the patient, any known allergies and medications, and events leading up to the incident.`,
      `Preventive tips: keep important medical information easily accessible (medication list, allergies, chronic conditions), teach basic first-aid and CPR to household members, and maintain a working phone with emergency numbers saved. Understanding these measures increases survival chance and reduces complications.`
    ],
  },
  {
    id: 2,
    title: 'Preparing for Surgery: What Patients Should Know',
    date: '2025-09-18',
    author: 'Dr. James Lee',
    tags: ['Surgery', 'Patient Care'],
    image:
      'https://images.unsplash.com/photo-1580281657521-3c6a3b7a6c3d?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Surgery can be daunting. This long-form post explains pre-operative steps, how to manage medications, realistic recovery expectations, and questions to ask your surgical team.',
    content: [
      `Before surgery, a thorough assessment helps reduce risks. Attend pre-op evaluations, disclose all medications (including supplements), and follow fasting instructions carefully. Some blood-thinning medicines may need temporary stopping — only change medications under physician guidance.`,
      `On the day of surgery: arrive early, bring a responsible person to accompany you, and have a clear plan for post-anesthesia transport. Discuss pain control options and rehabilitation plans with your team. Recovery varies by procedure — minor procedures may allow same-day discharge while major operations require multi-day inpatient care and structured physiotherapy.`,
      `Emotional preparation is equally important. Anxiety is normal; ask your provider about what to expect, rehabilitation timelines, and warning signs of complications. Planning home support (groceries, transport, childcare) minimizes stress and speeds recovery.`
    ],
  },
  {
    id: 3,
    title: 'Mental Health First Aid: Supporting Someone in Crisis',
    date: '2025-08-05',
    author: 'Sarah Mitchell',
    tags: ['Mental Health', 'Support'],
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'This article provides concrete steps to support someone experiencing an acute mental health episode, how to de-escalate safely, and when to involve professional emergency services.',
    content: [
      `When someone is in a mental health crisis — showing extreme agitation, confusion, self-harm behavior, or thoughts of suicide — prioritize safety. Speak calmly, use short sentences, and listen without judgement. Remove objects that could be used for self-harm if it is safe to do so.`,
      `If the person poses an immediate danger to themselves or others, call emergency services. Provide clear information: current behavior, known diagnoses, medications, and any triggers. If they refuse help but are at risk, trained dispatchers and responders can assess and provide appropriate interventions.`,
      `Longer-term support includes connecting the person to counseling, psychiatric evaluation, peer support, and crisis hotlines. Encourage follow-up care, and ensure caregivers have resources and boundaries to avoid burnout.`
    ],
  },
  {
    id: 4,
    title: 'Telemedicine & You: Best Practices for Remote Consultations',
    date: '2025-07-22',
    author: 'Clinical Team',
    tags: ['Telehealth', 'Tips'],
    image:
      'https://images.unsplash.com/photo-1580281340086-6f6e3d6d1d2b?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Telemedicine is an important tool for timely care. Learn how to prepare for a successful virtual visit, what information to have on hand, and the types of conditions well-suited to remote care.',
    content: [
      `Prepare a quiet, well-lit space with a charged device and a stable internet connection. Have your medication list, recent vitals (temperature, blood pressure if available), and a brief symptom timeline ready. This helps clinicians make accurate remote assessments.`,
      `Telemedicine works well for follow-ups, medication reviews, mental health counseling, triage for acute minor illnesses, and simple dermatology checks. However, it is not suitable for severe emergencies, uncontrolled bleeding, or conditions requiring immediate hands-on assessment.`,
      `Privacy: use a secure platform recommended by your provider, and avoid public Wi-Fi for sensitive consultations. If the clinician requests in-person follow-up or tests, treat that recommendation seriously to avoid missed diagnoses.`
    ],
  },
];

const Blog = () => {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
     <div className='mt-16'></div>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Health & Care Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          In-depth articles, practical guides and professional tips from our medical team — written to help patients, families and caregivers make informed decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map(post => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition"
          >
            <div className="h-44 md:h-56 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="font-medium text-gray-700">{post.author}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>

              <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>

              {openId === post.id ? (
                <div className="prose max-w-none text-gray-700 mb-4">
                  {post.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : null}

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setOpenId(openId === post.id ? null : post.id)}
                  className="text-sm font-medium text-[#FF9B10] hover:underline"
                  aria-expanded={openId === post.id}
                >
                  {openId === post.id ? 'Read less' : 'Read more'}
                </button>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:underline"
                  onClick={e => e.preventDefault()}
                >
                  Share
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="inline-block px-6 py-3 rounded-lg bg-[#FF9B10] text-white font-semibold shadow hover:brightness-95"
          >
            Load more posts
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="inline-block px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium"
          >
            Show less
          </button>
        )}
      </div>
    </section>
  );
};

export default Blog;
