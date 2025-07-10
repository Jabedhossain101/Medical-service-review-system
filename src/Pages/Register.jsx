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
        console.log(result);
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

    createUser(email, password).then(result => {
      console.log(result.user);

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
    });
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center p-4">
      <div className="h-16"></div>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie
            className="w-full max-w-md"
            animationData={registerLottie}
            loop={true}
          />
        </div>

        {/* Registration Form */}
        <div className="w-full lg:w-1/2 bg-base-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Register Now
          </h1>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full bg-blue-100"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label className="label">Photo URL</label>
              <input
                name="PhotoURL"
                type="text"
                className="input input-bordered w-full bg-blue-100"
                placeholder="Photo URL"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full bg-blue-100"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full bg-blue-100 text-blue-800"
                placeholder="Password"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$"
                title="Password must contain at least 6 characters, including uppercase, lowercase, and a number"
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn w-full btn-neutral mt-4 rounded-tr-[20px] rounded-bl-[20px] bg-[#06923E] text-white"
            >
              Create an account
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?
            <Link to={'/login'} className="link link-primary ml-1">
              Sign in
            </Link>
          </p>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 text-black bg-[#7F55B1] border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
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
  );
};

export default Register;
