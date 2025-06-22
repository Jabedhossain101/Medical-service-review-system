import Lottie from 'lottie-react';
import React, { use } from 'react';

import registerLottie from '../assets/register.json';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';

const Register = () => {
  const { createUser } = use(AuthContext);
  const { signInWithGoogle } = use(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // create user
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse bg-[#fdfcfd] rounded-xl ">
        <div className="text-center lg:text-left"></div>
        <div className="flex flex-col md:flex-row md">
          <div className="flex-1 flex justify-center">
            <Lottie
              className="w-[400px]"
              animationData={registerLottie}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex-1">
            <div className="card-body border-1 rounded-xl shadow-md">
              <h1 className="text-5xl font-bold">Register Now</h1>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label ">Name</label>
                  <input
                    name="name"
                    type="email"
                    className="input bg-blue-100"
                    placeholder="Enter Your name"
                  />
                  <label className="label ">Photo</label>
                  <input
                    name="email"
                    type="email"
                    className="input bg-blue-100"
                    placeholder="Photo URL"
                  />
                  <label className="label ">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input bg-blue-100"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input bg-blue-100 text-blue-800"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-neutral mt-4 rounded-tr-[20px] rounded-bl-[20px] bg-[#06923E]"
                  >
                    Create an account
                  </button>
                </fieldset>
              </form>
              <p className="text-center">
                Already have an account?
                <Link to={'/login'} className="link link-primary">
                  {' '}
                  Sign in
                </Link>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleSignIn}
                className="btn  text-black bg-[#7F55B1] border-[#e5e5e5]"
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
      </div>
    </div>
  );
};

export default Register;
