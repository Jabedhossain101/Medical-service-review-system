import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Context/AuthContext';
import {
  LayoutGrid,
  Star,
  Settings,
  Activity,
  Users,
  Calendar,
} from 'lucide-react';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const stats = [
    {
      title: 'My Services',
      desc: 'View, edit, and manage all your services.',
      icon: <LayoutGrid className="text-blue-500" size={24} />,
      bgColor: 'bg-blue-50',
      borderColor: 'hover:border-blue-200',
    },
    {
      title: 'My Reviews',
      desc: 'Check and respond to patient reviews.',
      icon: <Star className="text-indigo-500" size={24} />,
      bgColor: 'bg-indigo-50',
      borderColor: 'hover:border-indigo-200',
    },
    {
      title: 'Account Settings',
      desc: 'Update your profile and information.',
      icon: <Settings className="text-slate-500" size={24} />,
      bgColor: 'bg-slate-100',
      borderColor: 'hover:border-slate-300',
    },
  ];

  return (
    <div className="space-y-10">
      {/* ================= WELCOME BANNER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-[#0B1D51] to-[#102A71] rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl shadow-blue-900/20"
      >
        {/* Decorative Circles */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[-30px] left-[-30px] w-48 h-48 bg-indigo-500 rounded-full blur-[80px] opacity-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* User Photo */}
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] border-4 border-white/10 p-1 shadow-2xl">
              <img
                src={user?.photoURL || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-full h-full rounded-[1.8rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-[#0B1D51] rounded-full"></div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Welcome back, <br />
              <span className="text-blue-400 italic font-medium">
                {user?.displayName || 'Patient'}
              </span>
            </h1>
            <p className="mt-4 text-blue-100/70 max-w-lg font-medium">
              Manage your medical services, track patient feedback, and keep
              your healthcare profile up to date.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ================= QUICK STATS SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 bg-white rounded-[2rem] border border-slate-50 shadow-xl shadow-blue-900/5 transition-all duration-300 ${stat.borderColor} group cursor-pointer`}
          >
            <div
              className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              {stat.icon}
            </div>
            <h2 className="text-xl font-black text-[#0B1D51] mb-2">
              {stat.title}
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              {stat.desc}
            </p>
            <div className="mt-6 flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Manage Now <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= RECENT ACTIVITY PREVIEW (Extra) ================= */}
      <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-blue-900/5 p-8 lg:p-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-[#0B1D51] flex items-center gap-3">
            <Activity className="text-blue-500" />
            Portal Overview
          </h3>
          <span className="text-xs font-bold text-slate-400 uppercase">
            Live Updates
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-5">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500">
              <Users size={18} />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                Profile Views
              </p>
              <p className="text-lg font-black text-[#0B1D51]">1,284</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-5">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                Next Sync
              </p>
              <p className="text-lg font-black text-[#0B1D51]">
                Today, 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
