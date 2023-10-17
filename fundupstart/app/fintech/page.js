"use client";
import React from "react";
import YouTube from "react-youtube";

export default function fintech() {
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
              WealthWise Capital <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Fin-Tech
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              WealthWise Capital is a cutting-edge Fintech startup with a focus
              on democratizing wealth management. Using advanced algorithms and
              AI-driven financial planning, the platform offers personalized
              investment solutions to clients of all backgrounds and financial
              literacy levels. Whether you're a seasoned investor or just
              starting, WealthWise Capital provides easy-to-understand
              recommendations, asset allocation strategies, and access to
              diversified investment portfolios. The startup is committed to
              making sound financial advice and wealth-building opportunities
              accessible to everyone, with transparent and affordable solutions.
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
              PayPulse Solutions <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Fin-Tech
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              PayPulse Solutions is a Fintech startup that is reshaping the
              world of payroll and employee benefits. The platform offers
              innovative solutions for businesses to streamline their payroll
              processes, ensuring timely and accurate payments to employees.
              PayPulse also provides a range of financial wellness and benefit
              options, allowing employees to make the most of their earnings and
              benefits packages. The startup envisions a future where
              compensation is simplified and enhanced, enabling companies to
              attract and retain top talent while promoting financial security
              among their workforce.
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
              CryptoMint Innovations <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Fin-Tech
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              CryptoMint Innovations is a Fintech startup at the forefront of
              the cryptocurrency and blockchain revolution. The platform offers
              a user-friendly interface for trading and investing in various
              cryptocurrencies, making it accessible to both novice and
              experienced investors. CryptoMint also provides educational
              resources to help users understand the complexities of the digital
              currency market. With a mission to make digital assets more
              mainstream, the startup is committed to enhancing the financial
              ecosystem by offering safe, secure, and efficient crypto trading
              and investment opportunities.
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
