import React, { use } from 'react';
import loginLottie from '../assets/Login.json';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Context/SocialLogin';
const Login = () => {
  const { signInUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';
  console.log('location in sign in page', location);

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in user

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate(from);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <Lottie
          className="w-100 flex-col md:flex"
          animationData={loginLottie}
          loop={true}
        ></Lottie>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login Now</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input bg-[#e9edf1]"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input bg-[#e9edf1]"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-neutral mt-4 rounded-tr-[20px] rounded-bl-[20px] bg-[#687FE5]"
                >
                  Login
                </button>
              </fieldset>
            </form>
            <p className="text-center">
              Create an account?
              <Link to={'/register'} className="link link-primary">
                {' '}
                Please Register
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <div className="flex justify-center">
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
