// import Image from "next/image";
// import Header from "../components/Header";
// import Login from "../components/Login";

// export default function Home() {
//   return 
//   <>
//   <Header/>;
//   <Login/>
//   </>
// }

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";
import Img from "../components/Img";
import Signup from "../components/Signup";
import Card from "@/components/Stats";
import Feature from "@/components/Feature";
import Dropdown from "@/components/Dropdown";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <Img/>
      <Stats/>
      <Feature/>
      {/* <Dropdown/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Footer/> */}
    </>
  );
}
