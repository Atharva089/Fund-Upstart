"use client";
import Cards from "@/components/Cards";
import Dashboard from "@/components/Dashboard";
import Dropdown from "@/components/Dropdown";
import Inv from "@/components/Inv";

export default function Investor() {
  const dropdown = () => {};
  return (
    <div>
      <Inv/>
      <Dropdown />
      <Cards />
    </div>
  );
}

