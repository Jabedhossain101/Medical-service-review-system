import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaShareAlt,
} from 'react-icons/fa';

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
      'Knowing when to call an ambulance can save lives. This article breaks down clear signs and practical steps to take.',
    content: [
      `Recognizing life-threatening conditions quickly is essential. Call an ambulance immediately if you observe severe breathing difficulties, signs of stroke, or heavy bleeding.`,
      `While waiting for emergency responders: ensure the person is in a safe position, stop visible bleeding using firm pressure, and stay calm while providing the dispatcher with exact information.`,
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
      'Surgery can be daunting. This post explains pre-operative steps, medication management, and recovery expectations.',
    content: [
      `Before surgery, disclose all medications and follow fasting instructions carefully. On the day of surgery, arrive early and have a clear post-anesthesia plan.`,
      `Emotional preparation is equally important. Ask your provider about warning signs and planning home support to speed recovery.`,
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
      'Concrete steps to support someone experiencing a crisis, how to de-escalate safely, and when to call professionals.',
    content: [
      `When someone is in a mental health crisis, prioritize safety. Speak calmly, listen without judgement, and remove dangerous objects.`,
      `If there is immediate danger, call emergency services. Provide behavior details and known diagnoses to help responders assess the situation.`,
    ],
  },
  {
    id: 4,
    title: 'Telemedicine: Best Practices for Remote Consultations',
    date: '2025-07-22',
    author: 'Clinical Team',
    tags: ['Telehealth', 'Tips'],
    image:
      'https://images.unsplash.com/photo-1580281340086-6f6e3d6d1d2b?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Learn how to prepare for a successful virtual visit, information to have on hand, and conditions suited to remote care.',
    content: [
      `Prepare a quiet space and have your symptoms timeline ready. Telemedicine works well for follow-ups and minor illnesses.`,
      `Treat telemedicine seriously. If a clinician requests in-person follow-up or tests, treat that recommendation as a priority.`,
    ],
  },
];

const Blog = () => {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section className="bg-white py-24 overflow-hidden relative">
      {/* Background Decorative Accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 rounded-full"
          >
            Medical Blog & News
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] leading-tight"
          >
            Health & <span className="text-blue-500 italic">Care Insights</span>
          </motion.h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            Practical guides and professional tips from our medical team to help
            you make informed healthcare decisions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visiblePosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-slate-50 flex flex-col group transition-all duration-500 hover:shadow-2xl hover:border-blue-100"
            >
              {/* Post Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-blue-500" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0B1D51] mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <AnimatePresence>
                  {openId === post.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-slate-100 pt-4 mb-4"
                    >
                      <div className="prose prose-sm text-slate-600 space-y-4 font-medium italic">
                        {post.content.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                  <button
                    onClick={() =>
                      setOpenId(openId === post.id ? null : post.id)
                    }
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-[#0B1D51] transition-colors"
                  >
                    {openId === post.id ? 'Read Less' : 'Read More'}
                    <FaArrowRight
                      className={`text-xs transition-transform ${
                        openId === post.id ? 'rotate-[-90deg]' : ''
                      }`}
                    />
                  </button>

                  <button className="text-slate-300 hover:text-blue-500 transition-colors">
                    <FaShareAlt size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-10 py-4 rounded-2xl font-bold transition-all shadow-xl ${
              showAll
                ? 'border-2 border-slate-100 text-[#0B1D51] hover:bg-slate-50'
                : 'bg-[#0B1D51] text-white shadow-blue-900/20 hover:bg-blue-900'
            }`}
          >
            {showAll ? 'Show Less' : 'Load More Insights'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
