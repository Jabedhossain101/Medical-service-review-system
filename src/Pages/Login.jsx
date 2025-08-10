import React, { useContext } from 'react';
import loginLottie from '../assets/Login.json';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Context/SocialLogin';
import Swal from 'sweetalert2';

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
          title: 'Login successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <div className="h-16"></div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section: Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 bg-gradient-to-tr from-blue-100 via-blue-50 to-white">
          <Lottie
            className="w-full max-w-md"
            animationData={loginLottie}
            loop={true}
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Welcome Back
          </h1>

          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <div className="flex justify-end mt-2">
                <a className="text-sm text-orange-500 hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-orange-400 text-white font-semibold shadow-md hover:bg-orange-600 transition duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?
            <Link
              to={'/register'}
              className="text-orange-500 font-medium hover:underline ml-1"
            >
              Create new account
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center">
            <SocialLogin from={from} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
