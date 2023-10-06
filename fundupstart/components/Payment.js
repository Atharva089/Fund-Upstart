"use client";
import React from "react";
import Script from "next/script";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Nk7IzSEBFON0EJBUBJSTdEuns8D1cKcVCeq1927785ziBknaTz0NzNKaEYsHaCdtVwxtHlLViFTezfDzZ7HcLam00YiYPxonf"
);

export default function Payments() {
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
    // <div>
    //   <button type="button" onClick={handleButtonClick}>
    //     Checkout
    //   </button>
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Choose Payment Option</h1>

        {/* Payment Option Buttons */}
        <div className="grid grid-cols-1 gap-4">
          {/* Credit Card Option */}

          {/* Stripe Option */}
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
