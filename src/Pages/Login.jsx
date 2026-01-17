import React, { useContext } from 'react';
import loginLottie from '../assets/Login.json';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Context/SocialLogin';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden relative z-10 border border-slate-100"
      >
        {/* Left Section: Lottie Animation & Brand Message */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 bg-[#0B1D51] relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>

          <div className="relative z-10 w-full max-w-md">
            <Lottie
              className="w-full drop-shadow-2xl mb-8"
              animationData={loginLottie}
              loop={true}
            />
            <h2 className="text-3xl font-black mb-4">Patient Portal</h2>
            <p className="text-blue-100/70 font-medium">
              Access your medical reviews, book specialists, and manage your
              health journey in one secure place.
            </p>
          </div>
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-[#0B1D51] mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-500 font-medium">
              Please enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-slate-700"
                placeholder="rafsan@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-[#0B1D51] uppercase tracking-widest">
                  Password
                </label>
                <a className="text-xs text-blue-500 font-bold hover:underline cursor-pointer">
                  Forgot?
                </a>
              </div>
              <input
                name="password"
                type="password"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-slate-700"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue-500 text-white font-black uppercase tracking-widest shadow-lg shadow-blue-500/30 hover:bg-[#0B1D51] transition-all transform active:scale-95"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8">
            <div className="flex items-center">
              <hr className="flex-grow border-t border-slate-100" />
              <span className="mx-4 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                Social Login
              </span>
              <hr className="flex-grow border-t border-slate-100" />
            </div>

            <div className="mt-6 flex justify-center">
              <SocialLogin from={from} />
            </div>
          </div>

          <p className="text-center text-sm font-medium text-slate-500 mt-10">
            Don't have an account yet?
            <Link
              to={'/register'}
              className="text-blue-500 font-black hover:underline ml-2"
            >
              Create New Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
