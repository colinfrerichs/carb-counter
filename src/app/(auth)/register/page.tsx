"use client";

import Link from "next/link";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <form
        // onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 rounded-lg bg-white p-8 border border-gray-200 shadow-md"
      >
        <div>
          <h1 className="text-3xl font-semibold">Create an account</h1>
          <p className="text-sm text-gray-400 pt-2">
            Already have an account?{" "}
            <Link href="/login" className="underline text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div className="inline-flex items-center">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-2"
          >
            <input
              type="checkbox"
              //   checked={checked}
              //   onChange={handleCheck}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
              id="check-2"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-slate-600 text-xs"
            htmlFor="check-2"
          >
            You accept the terms of use
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700"
        >
          Register
        </button>
        <hr className="my-6 border-t border-gray-300" />
        <p className="text-xs text-gray-700">Or login using your account:</p>
        <div className="flex grid-cols-3 gap-3 items-center justify-center">
          <div>
            <button className="bg-blue-500 p-4">G</button>
          </div>
          <div>
            <button className="bg-blue-500 p-4">G</button>
          </div>
          <div>
            <button className="bg-blue-500 p-4">G</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
