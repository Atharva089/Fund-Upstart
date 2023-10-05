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
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
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
    <div>
      <button type="button" onClick={handleButtonClick}>
        Checkout
      </button>
    </div>
  );
}
