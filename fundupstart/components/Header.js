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
        <header class="text-indigo-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-indigo-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Fund Upstart</span>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900" href="/">
                Home
              </a>

              <Link class="mr-5 hover:text-gray-900" href="/startup">
                For Start Ups
              </Link>
              {/* <a class="mr-5 hover:text-gray-900">For Start Ups</a> */}

              <Link class="mr-5 hover:text-gray-900" href="/investor">
                For Investors
              </Link>
              {/* <a class="mr-5 hover:text-gray-900">For Investors</a> */}

              <Link class="mr-5 hover:text-gray-900" href="/contact">
                Contact Us
              </Link>
              {/* <a class="mr-5 hover:text-gray-900">Contact Us</a> */}
            </nav>

            {/* This are the 2 buttons 👇 */}
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
              class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={() => {
                console.log("Login button clicked");
                navigate("/login");
              }}
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-0 h-0 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>

            <button
              type="button"
              class="inline-flex items-center bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={() => navigate("/signup")}
            >
              Sign Up
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-0 h-0 ml-1"
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
