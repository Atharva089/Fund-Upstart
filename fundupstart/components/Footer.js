import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 FUND UPSTART —
              <a href="/aboutus" className="text-gray-600 ml-1" target="_blank">
                @About FundUpstart
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
