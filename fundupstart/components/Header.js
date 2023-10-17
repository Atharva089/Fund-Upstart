"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// used for navigating between different pages
const Header = () => {
  // const router = useRouter();
  // const navigate = (navigate) => {
  //   router.push(navigate);
  // };

  return (
    <>
      <div>
        <header className="text-indigo-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-indigo-900 mb-4 md:mb-0">
              <img src="./FundUpstart Logo.png" alt="" height={30} width={30} />
              <span className="ml-3 text-xl">Fund Upstart</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900" href="/">
                Home
              </a>

              <Link className="mr-5 hover:text-gray-900" href="/startup">
                For Start Ups
              </Link>
              {/* <a className="mr-5 hover:text-gray-900">For Start Ups</a> */}

              <Link className="mr-5 hover:text-gray-900" href="/investor">
                For Investors
              </Link>
              {/* <a className="mr-5 hover:text-gray-900">For Investors</a> */}

              <Link className="mr-5 hover:text-gray-900" href="/contact">
                Contact Us
              </Link>
              {/* <a className="mr-5 hover:text-gray-900">Contact Us</a> */}
            </nav>

            {/* This are the 2 buttons 👇 */}
            <Link
              href="/premium"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 mx-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Buy Premium👑
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 mx-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Sign Up
            </Link>
            {/* <button
              type="button"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={() => {
                console.log("Login button clicked");
                navigate("/login");
              }}
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-0 h-0 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>

            <button
              type="button"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={() => navigate("/signup")}
            >
              Sign Up
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-0 h-0 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
            {/* This are the 2 buttons 👆 */}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
