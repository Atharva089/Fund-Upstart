"use client";
import React from "react";
// import Image from "next/image";
import Login from "../components/Login";
import Cards from "../components/Cards";
import Img from "@/components/Img";
import Stats from "@/components/Stats";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <>
      <Img />
      <Stats />
      <Feature />
      <Login />
    </>
  );
}
