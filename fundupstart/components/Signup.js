"use client";
import { useState } from "react";

const SignupPage = () => {
  // Investor form state
  const [investorFirstName, setInvestorFirstName] = useState("");
  const [investorLastName, setInvestorLastName] = useState("");
  const [investorEmail, setInvestorEmail] = useState("");
  const [investorPhone, setInvestorPhone] = useState("");
  const [investorType, setInvestorType] = useState("");
  const [investorLegalName, setInvestorLegalName] = useState("");
  const [investorHasAssets, setInvestorHasAssets] = useState("");
  const [investorUsername, setInvestorUsername] = useState("");
  const [investorPassword, setInvestorPassword] = useState("");
  // Startup form state
  const [startupName, setStartupName] = useState("");
  const [startupEmail, setStartupEmail] = useState("");
  const [startupPhone, setStartupPhone] = useState("");
  const [startupLegalName, setStartupLegalName] = useState("");
  const [startupHasAssets, setStartupHasAssets] = useState("");
  const [startupUsername, setStartupUsername] = useState("");
  const [startupPassword, setStartupPassword] = useState("");

  // Handler for investor form submission
  const handleInvestorSignup = () => {
    // Handle the investor signup form submission here
    console.log("Investor Form submitted");
  };

  // Handler for startup form submission
  const handleStartupSignup = () => {
    // Handle the startup signup form submission here
    console.log("Startup Form submitted");
  };
  const [role, setRole] = useState("Startup Founder");
  const [number, setNumber] = useState(0);
  function handleRoleChange(e) {
    setRole(e.target.value);
  }
  return (
    <div>
      <div className="flex items-center flex-col">
        <h1 className="text-center text-4xl"> Select your role</h1>
        <select
          name=""
          id=""
          onChange={handleRoleChange}
          className="felx justify-center mx-auto mt-6 max-auto w-28"
        >
          <option value="Startup Founder">Startup Founder</option>
          <option value="Investor">Investor</option>
        </select>
      </div>
      <section className="text-gray-1000 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap justify-between items-center">
          {role !== "Startup Founder" ? (
            <div className="lg:w-2/5 md:w-1/2 sm:w-full md:pr-16 lg:pr-0 pr-0 mb-8 mx-auto">
              <div className="bg-gray-200 p-8 rounded-lg shadow-md mx-auto">
                <h1 className="title-font font-medium text-3xl text-gray-900 mb-8 ">
                  Signup Page - Investor
                </h1>
                <form
                  onSubmit={handleInvestorSignup}
                  action="http://localhost:3001/signupinvestor"
                  method="post"
                >
                  {/* Investor signup fields */}
                  <div className="flex flex-col mb-4">
                    <label>Startup Legal Name:</label>
                    <input
                      type="text"
                      value={startupLegalName}
                      name="legalname"
                      onChange={(e) => setStartupLegalName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>First Name:</label>
                    <input
                      type="text"
                      value={investorFirstName}
                      name="firstname"
                      onChange={(e) => setInvestorFirstName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      value={investorLastName}
                      name="lastname"
                      onChange={(e) => setInvestorLastName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={investorEmail}
                      name="email"
                      onChange={(e) => setInvestorEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      value={investorPhone}
                      name="phone"
                      onChange={(e) => setInvestorPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>What will you be investing as?</label>
                    <select
                      value={investorType}
                      onChange={(e) => setInvestorType(e.target.value)}
                      name="investortype"
                    >
                      <option value="">Select</option>
                      <option value="Individual">Individual</option>
                      <option value="Firm">Firm</option>
                    </select>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Individual's/Firm's Legal Name:</label>
                    <input
                      type="text"
                      value={investorLegalName}
                      name="investorlegalname"
                      onChange={(e) => setInvestorLegalName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>
                      Do you have assets worth over INR 2 cr apart from your
                      primary residence?
                    </label>
                    <div>
                      <input
                        type="radio"
                        id="investor-yes"
                        name="investorHasAssets"
                        value="Yes"
                        checked={investorHasAssets === "Yes"}
                        onChange={() => setInvestorHasAssets("Yes")}
                      />
                      <label htmlFor="investor-yes">Yes</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="investor-no"
                        name="investorDoesNotHaveAssets"
                        value="No"
                        checked={investorHasAssets === "No"}
                        onChange={() => setInvestorHasAssets("No")}
                      />
                      <label htmlFor="investor-no">No</label>
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Username:</label>
                    <input
                      type="text"
                      value={investorUsername}
                      name="investorUsername"
                      onChange={(e) => setInvestorUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Password:</label>
                    <input
                      type="password"
                      value={investorPassword}
                      name="investorPassword"
                      onChange={(e) => setInvestorPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                    type="submit"
                  >
                    Sign Up as Investor
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="lg:w-2/5 md:w-1/2 sm:w-full md:pl-16 lg:pl-0 pl-0 mb-8 mx-auto">
              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h1 className="title-font font-medium text-3xl text-gray-900 mb-4">
                  Signup Page - Startup
                </h1>
                <form
                  onSubmit={handleStartupSignup}
                  action="http://localhost:3001/signupstartup"
                  method="post"
                >
                  {/* Startup signup fields */}
                  <div className="flex flex-col mb-4">
                    <label>Startup Name:</label>
                    <input
                      type="text"
                      value={startupName}
                      name="startupname"
                      onChange={(e) => setStartupName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={startupEmail}
                      name="email"
                      onChange={(e) => setStartupEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      value={startupPhone}
                      name="phone"
                      onChange={(e) => setStartupPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Username:</label>
                    <input
                      type="text"
                      value={startupUsername}
                      name="startupUsername"
                      onChange={(e) => setStartupUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label>Password:</label>
                    <input
                      type="password"
                      value={startupPassword}
                      name="startupPassword"
                      onChange={(e) => setStartupPassword(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label>
                      Do you have assets worth over INR 2 cr apart from your
                      primary residence?
                    </label>
                    <div>
                      <input
                        type="radio"
                        id="startup-yes"
                        name="startupHasAssets"
                        value="Yes"
                        checked={startupHasAssets === "Yes"}
                        onChange={() => setStartupHasAssets("Yes")}
                      />
                      <label htmlFor="startup-yes">Yes</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="startup-no"
                        name="startupHasAssets"
                        value="No"
                        checked={startupHasAssets === "No"}
                        onChange={() => setStartupHasAssets("No")}
                      />
                      <label htmlFor="startup-no">No</label>
                    </div>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                    type="submit"
                  >
                    Sign Up as Startup
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
