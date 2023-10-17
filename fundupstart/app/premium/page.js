import React from "react";

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
              />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                1 Month Subscription
              </h2>
              <p className="leading-relaxed">
                Get the monthly premium subscription of FundUpStart and get
                access to more insights of the startups you are interested in.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <p className="text-gray-500">
                <a href="/monthly">Get Now</a>
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
              />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                6 Months Subscription
              </h2>
              <p className="leading-relaxed">
                Get the half-yearly premium subscription of FundUpStart and get
                access to more insights of the startups you are interested in.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <p className="text-gray-500">
                <a href="/halfyearly">Get Now</a>
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
              />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Annual Subscription
              </h2>
              <p className="leading-relaxed">
                Get the annual premium subscription of FundUpStart and get
                access to more insights of the startups you are interested in.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <p className="text-gray-500">
                <a href="/annually">Get Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
