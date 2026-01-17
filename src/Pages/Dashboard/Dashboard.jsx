import React, { useState, useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import {
  Menu,
  X,
  Home,
  LayoutGrid,
  Star,
  PlusCircle,
  ShieldCheck,
  LogOut,
  User,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/dashboard', icon: <Home size={18} /> },
    {
      name: 'My Services',
      path: '/dashboard/myService',
      icon: <LayoutGrid size={18} />,
    },
    {
      name: 'My Reviews',
      path: '/dashboard/myReview',
      icon: <Star size={18} />,
    },
    {
      name: 'Add Service',
      path: '/dashboard/addService',
      icon: <PlusCircle size={18} />,
    },
  ];

  if (user?.isAdmin) {
    navigation.push({
      name: 'Admin Panel',
      path: '/dashboard/admin',
      icon: <ShieldCheck size={18} />,
    });
  }

  const menuItems = (
    <ul className="flex flex-col space-y-2">
      {navigation.map(item => {
        const isActive = location.pathname === item.path;
        return (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                isActive
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-400 hover:bg-slate-50 hover:text-[#0B1D51]'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span className="text-sm uppercase tracking-wider">
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8FAFC]">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex md:flex-col w-72 bg-[#0B1D51] text-white p-6 sticky top-0 h-screen shadow-2xl">
        <div className="mb-10 px-4">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter flex items-center gap-1"
          >
            <span>MEDI</span>
            <span className="text-blue-400">SERVICE</span>
          </Link>
          <p className="text-[10px] font-bold text-blue-300/50 uppercase tracking-[0.2em] mt-2">
            Patient Portal v2.0
          </p>
        </div>

        <nav className="flex-1">{menuItems}</nav>

        {/* Sidebar Footer User Profile */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-2 mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-blue-400/30 p-0.5">
              <img
                src={user?.photoURL || 'https://via.placeholder.com/150'}
                className="w-full h-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">
                {user?.displayName || 'Patient'}
              </p>
              <p className="text-[10px] text-blue-300/60 truncate uppercase">
                {user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={signOutUser}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all font-bold text-xs uppercase tracking-widest"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden bg-[#0B1D51] text-white flex justify-between items-center p-5 sticky top-0 z-[110] shadow-lg">
        <h2 className="text-xl font-black tracking-tighter">
          MEDI<span className="text-blue-400">SERVICE</span>
        </h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-white/10 rounded-lg"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-200 p-6 absolute top-16 left-0 w-full z-[105] shadow-2xl"
          >
            {menuItems}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar inside main content */}
        <div className="hidden md:flex items-center justify-between px-10 py-6 bg-white border-b border-slate-100">
          <h2 className="text-xl font-bold text-[#0B1D51]">
            {navigation.find(n => n.path === location.pathname)?.name ||
              'Welcome Back'}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase">
              Today:{' '}
              {new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
              })}
            </span>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <User size={14} />
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
