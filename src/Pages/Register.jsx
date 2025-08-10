import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../assets/register.json';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
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
          title: 'Your account has been saved',
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: error.message,
        });
      });
  };

  return (
    <div>
      <div className="h-16"></div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
        <div className="h-16"></div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 p-8 bg-gradient-to-tr from-purple-100 via-purple-50 to-white flex justify-center items-center">
            <Lottie
              className="w-full max-w-md"
              animationData={registerLottie}
              loop
            />
          </div>

          {/* Registration Form */}
          <div className="w-full lg:w-1/2 p-10 sm:p-14">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
              Create Account
            </h1>

            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block mb-1 text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-semibold">
                  Photo URL
                </label>
                <input
                  name="PhotoURL"
                  type="text"
                  placeholder="Enter photo URL"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-semibold">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-800"
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$"
                  title="Password must contain at least 6 characters, including uppercase, lowercase, and a number"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-gray-600 mt-8">
              Already have an account?
              <Link
                to="/login"
                className="text-orange-500 font-semibold ml-1 hover:underline"
              >
                Sign in
              </Link>
            </p>

            <div className="flex items-center my-8">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-3 text-gray-400 font-semibold">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 btn py-3 bg-base-400 text-black rounded-lg font-semibold shadow-md transition duration-300"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="rounded-full"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
