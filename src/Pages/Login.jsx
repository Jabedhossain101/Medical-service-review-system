import React, { use } from 'react';
import loginLottie from '../assets/Login.json';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Context/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {
  const { signInUser } = use(AuthContext);
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
        console.log(result.user);
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
            animationData={loginLottie}
            loop={true}
          />
        </div>

        <div className="w-full lg:w-1/2 bg-base-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Login Now
          </h1>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full bg-[#e9edf1]"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full bg-[#e9edf1]"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn w-full btn-neutral mt-4 rounded-tr-[20px] rounded-bl-[20px] bg-[#687FE5] text-white"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Create an account?
            <Link to={'/register'} className="link link-primary ml-1">
              Please Register
            </Link>
          </p>

          <div className="divider">OR</div>

          <div className="flex justify-center">
            <SocialLogin from={from} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
