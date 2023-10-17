"use client";
import React from "react";
import YouTube from "react-youtube";

export default function Pharma() {
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
              MediInnovate Pharmaceuticals <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Pharmaceuticals
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              MediInnovate Pharmaceuticals is a pioneering startup dedicated to
              advancing healthcare through innovative drug development. The
              company focuses on researching and developing novel
              pharmaceuticals to address unmet medical needs. With a strong
              emphasis on cutting-edge research and collaboration with leading
              medical professionals, MediInnovate is committed to improving
              patient outcomes and enhancing the quality of life. The startup
              envisions a world where breakthrough medicines lead to better
              health and well-being for all.
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
              PharmaFusion Solutions <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Pharmaceuticals
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              PharmaFusion Solutions is a pharmaceutical startup with a mission
              to enhance the efficiency and effectiveness of drug manufacturing
              processes. The company leverages state-of-the-art technology and
              data-driven insights to optimize pharmaceutical production. By
              reducing costs and time-to-market, PharmaFusion contributes to the
              affordability and accessibility of essential medicines. The
              startup aims to transform the pharmaceutical industry by promoting
              sustainability and increased availability of high-quality
              pharmaceuticals.
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
              BioGuard Therapeutics <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Pharmaceuticals
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              BioGuard Therapeutics is a bio-pharmaceutical startup specializing
              in the development of immunotherapies and biologics to combat a
              wide range of diseases, including cancer and autoimmune disorders.
              By harnessing the power of the human immune system, the company
              creates innovative treatment options. BioGuard Therapeutics is
              dedicated to improving patient lives, pushing the boundaries of
              medical science, and fostering hope for those facing complex
              health challenges. The startup envisions a future where
              personalized immunotherapies offer new horizons in healthcare.
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
