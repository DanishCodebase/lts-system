import React from "react";
import unauthorized from "@/assets/401 Error Unauthorized-pana.svg";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div class="flex flex-col items-center justify-center w-screen h-screen gap-12 px-5 py-8 ">
      <img
        src={unauthorized}
        alt="unauthorized illustration"
        className="max-w-96"
      />
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-3xl font-medium text-center">You are not authorized</h1>
        <p class="text-xl text-center ">
          You tried to access a page you did not have prior authorization for.
        </p>
        <Link
          to="/"
          className="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
