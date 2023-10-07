import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto animate-fade-in">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300">
          Sign up
        </button>
      </form>
      <div className="flex flex-col mt-5">
        <p className="text-center">
          Have an account?
          <Link to="/sign-in" className="text-blue-700 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
