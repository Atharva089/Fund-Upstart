"use client";
import React from "react";
import YouTube from "react-youtube";

export default function Edtech() {
  const opts = {
    height: "300",
    width: "500",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Company ABC <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Ed-Tech
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              EduMentor Prodigy is an innovative EdTech startup that focuses on
              personalized learning experiences for K-12 students. By leveraging
              AI-driven assessments, the platform tailors educational content to
              individual student needs, ensuring that learners receive the
              support and challenges they require to excel academically. The
              startup offers a wide array of interactive lessons, quizzes, and
              engaging activities across various subjects. EduMentor Prodigy is
              committed to making quality education accessible to every student,
              regardless of their geographical location, through an easy-to-use
              online platform.
            </p>
            <div className="flex justify-center">
              <button
                disabled={true}
                className="inline-flex text-black bg-indigo-400 border-0 py-1 px-3 font-semibold focus:outline-none hover:bg-indigo-300 rounded text-sm"
              >
                <a href="/payments">Fund the Idea</a>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <YouTube
              videoId="sTnm5jvjgjM"
              opts={opts}
              //   onReady={this.onReady}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">Ed-Tech</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  ABC
                </h2>
                <p className="leading-relaxed">
                  This is company number 1 in ed Tech startups category and has
                  a very unique way of teaching students.
                </p>
                <a
                  href="/payments"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Fund the Idea
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">Ed-Tech</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  PQR
                </h2>
                <p className="leading-relaxed">
                  We made coaching in India affordable and accessible to all.
                </p>
                <a
                  href="/payments"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Fund the Idea
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">Ed-Tech</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  XYZ
                </h2>
                <p className="leading-relaxed">
                  We are the most profitable company in the ed Tech startups.
                </p>
                <a
                  href="/payments"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Fund the Idea
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
