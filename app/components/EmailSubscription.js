'use client';
import { useState } from "react";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage("Email is required");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setEmail("");
        setSubmissionSuccess(true);
        setErrorMessage("");

        setTimeout(() => setSubmissionSuccess(false), 5000);
      } else {
        setErrorMessage(data.message || "Subscription failed");
      }
    } catch (error) {
      setErrorMessage("Network error, try again later");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-3 flex flex-col items-center max-w-md">
      <div className="flex w-full">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-6 py-4 text-sm font-bold text-gray-700 border border-black focus:outline-none"
        />
        <button type="submit" className="bg-gray-300 text-xs sm:text-base px-4 py-3 font-bold text-gray-800 hover:bg-gray-400 border border-black">
          SIGN UP
        </button>
      </div>
      {submissionSuccess && <p className="mt-2 text-green-500 text-sm">Subscription successful!</p>}
      {errorMessage && <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>}
    </form>
  );
};

export default EmailSubscription;
