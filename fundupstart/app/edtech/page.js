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
              EduMentor Prodigy <br />
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
            <YouTube videoId="sTnm5jvjgjM" opts={opts} />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              LearnHub Connect <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Ed-Tech
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              LearnHub Connect is an EdTech startup dedicated to bridging the
              gap between educators and students by offering a versatile,
              virtual learning environment. The platform empowers teachers to
              create and deliver immersive online courses while providing
              students with a platform to access high-quality educational
              content. In addition to live classes and on-demand lessons,
              LearnHub Connect fosters a vibrant community where students can
              collaborate and seek help from peers and educators. The startup
              aims to enhance the e-learning experience and inspire a love for
              learning in students of all ages.
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
            <YouTube videoId="sTnm5jvjgjM" opts={opts} />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              SkillEdu Pro <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Ed-Tech
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              SkillEdu Pro is an EdTech startup that specializes in skill-based
              education and professional development. This platform provides a
              comprehensive range of courses, certifications, and career
              resources, empowering learners to acquire practical skills that
              are highly sought after in today's job market. SkillEdu Pro
              collaborates with industry experts and leading organizations to
              ensure that their courses align with real-world demands. The
              startup is committed to helping learners gain the knowledge and
              expertise they need to advance their careers and achieve their
              professional goals.
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
            <YouTube videoId="sTnm5jvjgjM" opts={opts} />
          </div>
        </div>
      </section>
    </div>
  );
}
