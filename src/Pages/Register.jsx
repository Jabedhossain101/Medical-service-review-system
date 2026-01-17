import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../assets/register.json';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

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
    // Ekhane 'pt-10' add kora hoyeche jate top theke 40px space thake
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 pt-10 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden relative z-10 border border-slate-100"
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 bg-[#0B1D51] relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>

          <div className="relative z-10 w-full max-w-md">
            <Lottie
              className="w-full drop-shadow-2xl mb-8 scale-110"
              animationData={registerLottie}
              loop={true}
            />
            <h2 className="text-3xl font-black mb-4">Join Our Community</h2>
            <p className="text-blue-100/70 font-medium">
              Create your secure account to start reviewing services and
              tracking your healthcare journey.
            </p>
          </div>
        </div>

        {/* Right Section: Registration Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-black text-[#0B1D51] mb-2">
              Create Account
            </h1>
            <p className="text-slate-500 font-medium text-sm">
              Start your journey with us today.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-slate-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  Photo URL
                </label>
                <input
                  name="PhotoURL"
                  type="text"
                  placeholder="Link to photo"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="rafsan@example.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-slate-700"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-slate-700"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$"
              />
              <p className="text-[10px] text-slate-400 font-medium ml-1 uppercase tracking-tighter">
                Min 6 chars, uppercase, lowercase & a number
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-blue-500/30 hover:bg-[#0B1D51] transition-all transform active:scale-95 mt-4"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8">
            <div className="flex items-center">
              <hr className="flex-grow border-t border-slate-100" />
              <span className="mx-4 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                Quick Sign Up
              </span>
              <hr className="flex-grow border-t border-slate-100" />
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 bg-white text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm group"
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

          <p className="text-center text-sm font-medium text-slate-500 mt-8">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-500 font-black hover:underline ml-2"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
