import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../assets/register.json';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaLink,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaShieldAlt,
} from 'react-icons/fa';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Google Login Successful',
          showConfirmButton: false,
          timer: 1500,
          background: '#0B1D51',
          color: '#fff',
        });
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error));
  };

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());
    const userProfile = {
      email,
      ...rest,
    };

    createUser(email, password)
      .then(result => {
        fetch('https://rafsan-service.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ userProfile }),
        })
          .then(res => res.json())
          .then(data => {
            console.log('data after register', data);
          });

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Welcome! Your account has been saved',
          showConfirmButton: false,
          timer: 1500,
          background: '#0B1D51',
          color: '#fff',
        });

        navigate(from, { replace: true });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: error.message,
          confirmButtonColor: '#3b82f6',
        });
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Spacer for Fixed Navbar */}
      <div className="h-24 bg-[#0B1D51]"></div>

      {/* Top Header Area - Consistent with Login UI */}
      <section className="bg-[#0B1D51] pt-10 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            Secure Registration
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Create Patient <span className="text-blue-400 italic">Profile</span>
          </h1>
        </div>
      </section>

      {/* Register Card - Using 5-column grid to match Login design */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Column: Visual & Info */}
            <div className="lg:col-span-2 bg-slate-50 p-8 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="relative mb-6">
                <div className="w-48 h-48 flex items-center justify-center">
                  <Lottie
                    className="w-full drop-shadow-xl scale-125"
                    animationData={registerLottie}
                    loop={true}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1D51]">
                Join Our Community
              </h3>
              <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mt-2">
                Start Your Health Journey
              </p>

              <div className="mt-8 space-y-3 w-full">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm text-xs font-bold text-slate-500 border border-slate-50 group hover:border-blue-200 transition-all">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                    <FaShieldAlt />
                  </div>
                  <span className="uppercase tracking-tighter text-left">
                    Safe & Encrypted Patient Data
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-black text-[#0B1D51]">Register</h2>
                <p className="text-slate-500 font-medium mt-1">
                  Provide your details to set up your account
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                      <FaUser className="text-blue-500 text-xs" /> Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                      <FaLink className="text-blue-500 text-xs" /> Photo URL
                    </label>
                    <input
                      name="PhotoURL"
                      type="text"
                      placeholder="https://image-link.com"
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                    <FaEnvelope className="text-blue-500 text-xs" /> Email
                    Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="example@mediservice.com"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                    <FaLock className="text-blue-500 text-xs" /> Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$"
                  />
                  <p className="text-[10px] text-slate-400 font-bold ml-1 uppercase tracking-tighter">
                    Min 6 chars, uppercase & number required
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-500 hover:bg-[#0B1D51] text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.01] active:scale-95 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                  >
                    Create Account <FaArrowRight size={14} />
                  </button>
                </div>
              </form>

              {/* Social Login Divider */}
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] bg-slate-100 flex-1"></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    One-Tap Join
                  </span>
                  <div className="h-[1px] bg-slate-100 flex-1"></div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 bg-white text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm group"
                  >
                    <svg width="20" height="20" viewBox="0 0 48 48">
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm font-medium text-slate-500">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-500 font-black hover:underline ml-2"
                >
                  Sign In Here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Support Footer */}
        <div className="mt-12 text-center pb-10">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Registration Issues? Call Emergency Tech Support
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

export default Register;
