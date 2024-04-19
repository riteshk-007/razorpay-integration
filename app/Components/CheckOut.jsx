"use client";
import { useEffect } from "react";

const Checkout = ({ data }) => {
  useEffect(() => {
    // Load the Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Razorpay
    script.onload = () => {
      const options = {
        key: "rzp_test_JrRiSY1nXRJNcx",
        amount: data.amount * 100, // Convert amount to paise
        currency: "INR",
        name: "Ritesh Kumar",
        description: "Test Transaction",
        // image: "/pay.png",
        handler: function (response) {
          alert("Payment Successful");
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone,
        },
        theme: {
          color: "#3e9c35",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  }, [data]);

  return null;
};

export default Checkout;
