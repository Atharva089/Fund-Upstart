import React from "react";

const Img = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container" style={{ position: "relative" }}>
        <img src="img.png" alt="hello" width="1500" height="1600" />
        <button
          className="btn"
          style={{
            position: "absolute",
            top: "83.3%",
            left: "20.58%",
            transform: "translate(-50%, -50%)",
          }}
        >
          SEE PLANS
        </button>
      </div>
    </section>
  );
};

export default Img;
