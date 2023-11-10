"use client";
import React from "react";
import Script from "next/script";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

export default function Payment1() {
  const handleButtonClick = async (event) => {
    console.log("clicked" + event);
    const stripe = await stripePromise;
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1 }],
      }),
    });
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Choose Payment Option</h1>

        <div className="grid grid-cols-1 gap-4">
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Pay with Stripe
          </button>
        </div>
      </div>
    </div>
  );
}
