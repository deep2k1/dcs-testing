import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoCaretBackSharp } from "react-icons/io5";

const ErrorPage = () => {
  const navigate = useNavigate();

  const HandleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
        404
      </h1>

      <p className="text-2xl md:text-3xl font-bold mt-6 text-gray-700">
        Oops! Page not found
      </p>
      <p className="mt-4 text-gray-500 text-base md:text-lg max-w-md">
        The page you are looking for doesn’t exist or has been moved. Don’t
        worry — let’s get you back on track!
      </p>
      <div className="flex gap-4">
        <Link
          to=""
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-2xl shadow hover:bg-blue-700 transition"
        >
          <FaHome className="text-xl" />
          Back to Home
        </Link>
        <button
          onClick={HandleGoBack}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-2xl shadow hover:bg-blue-700 transition"
        >
          <IoCaretBackSharp className="text-xl" />
          Back to Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
