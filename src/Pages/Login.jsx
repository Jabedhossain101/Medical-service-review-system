import React, { useContext } from 'react';
import loginLottie from '../assets/Login.json';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Context/SocialLogin';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUserShield, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        navigate(from);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Welcome Back! Login successfully',
          showConfirmButton: false,
          timer: 1500,
          background: '#0B1D51',
          color: '#fff',
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
          confirmButtonColor: '#3b82f6',
        });
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Spacer for Fixed Navbar */}
      <div className="h-24 bg-[#0B1D51]"></div>

      {/* Top Header Area - Exact Match with Booking UI */}
      <section className="bg-[#0B1D51] pt-10 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            Secure Authentication
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Access Patient <span className="text-blue-400 italic">Portal</span>
          </h1>
        </div>
      </section>

      {/* Login Card - Using the same 5-column grid from DoctorBooking */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left Column: Visual & Info (Same style as Doctor Preview) */}
            <div className="md:col-span-2 bg-slate-50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-100">
              <div className="relative mb-6">
                <div className="w-48 h-48 flex items-center justify-center">
                  <Lottie
                    className="w-full drop-shadow-xl"
                    animationData={loginLottie}
                    loop={true}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1D51]">
                Welcome Back
              </h3>
              <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mt-2">
                Your Health, Our Priority
              </p>

              <div className="mt-8 space-y-3 w-full">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm text-xs font-bold text-slate-500 border border-slate-50 group hover:border-blue-200 transition-all">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                    <FaUserShield />
                  </div>
                  <span className="uppercase tracking-tighter text-left">
                    HIPAA Compliant Secure Login
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Login Form (Same style as Booking Form) */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-[#0B1D51]">Sign In</h2>
                <p className="text-slate-500 font-medium mt-1">
                  Please enter your credentials to proceed
                </p>
              </div>

              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                    <FaEnvelope className="text-blue-500 text-xs" /> Email
                    Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="example@mediservice.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                      <FaLock className="text-blue-500 text-xs" /> Password
                    </label>
                    <button
                      type="button"
                      className="text-xs font-bold text-blue-500 hover:underline"
                    >
                      Forgot?
                    </button>
                  </div>
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-500 hover:bg-[#0B1D51] text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.01] active:scale-95 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                  >
                    Authorize Login <FaArrowRight size={14} />
                  </button>
                </div>
              </form>

              {/* Social Login Section */}
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] bg-slate-100 flex-1"></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Partner Access
                  </span>
                  <div className="h-[1px] bg-slate-100 flex-1"></div>
                </div>
                <div className="flex justify-center">
                  <SocialLogin from={from} />
                </div>
              </div>

              <p className="mt-10 text-center text-sm font-medium text-slate-500">
                New to MediService?
                <Link
                  to="/register"
                  className="text-blue-500 font-black hover:underline ml-2"
                >
                  Join for Free
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Support Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Need login assistance? Contact IT Support
          </p>
          <a
            href="tel:+880123456789"
            className="text-[#0B1D51] font-black text-lg hover:text-blue-500 transition-colors mt-2 block"
          >
            +880 1234 567 89
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
