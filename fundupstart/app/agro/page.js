"use client";
import React from "react";
import YouTube from "react-youtube";

export default function Agro() {
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
              AgriTech Innovators <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Agricultural
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              AgriTech Innovators is a forward-thinking startup committed to
              revolutionizing the agricultural industry through cutting-edge
              technology. Our platform harnesses the power of data analytics,
              IoT (Internet of Things), and smart sensors to empower farmers
              with real-time insights into crop health, soil conditions, and
              weather patterns. By providing actionable data and precision
              farming tools, we enable farmers to optimize their yields, reduce
              resource wastage, and make environmentally sustainable decisions.
              AgriTech Innovators is dedicated to driving the future of
              agriculture, where technology and innovation work hand-in-hand
              with traditional farming practices.
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
              GreenHarvest Solutions <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Agricultural
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              GreenHarvest Solutions is an eco-conscious startup that
              specializes in sustainable agriculture and organic farming. We
              provide a range of eco-friendly products, including organic
              fertilizers, pest control solutions, and innovative irrigation
              systems, aimed at promoting healthy crop growth while minimizing
              environmental impact. Our mission is to support farmers in
              adopting environmentally responsible practices and producing
              high-quality, chemical-free produce. GreenHarvest Solutions
              envisions a world where sustainable agriculture and organic
              farming become the norm, ensuring a greener and healthier future.
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
              FarmConnect Pro <br />
              <button
                disabled={true}
                className="inline-flex text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm"
              >
                Agricultural
              </button>
            </h1>
            <p className="mb-8 leading-relaxed">
              FarmConnect Pro is a startup that bridges the gap between farmers
              and consumers by offering a digital platform for farm-to-table
              transactions. Our platform connects local farmers with consumers,
              restaurants, and markets, facilitating direct sales of fresh
              produce and other agricultural products. With a focus on
              transparency and traceability, we empower consumers to make
              informed choices while supporting local agriculture. FarmConnect
              Pro's vision is to promote sustainability and bolster local
              economies by revitalizing the connection between producers and
              consumers in the agricultural ecosystem.
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
