"use client";

import Logo from "@/components/Logo";
import { useWixClient } from "@/hooks/useWixClient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const wixClient = useWixClient();
  const route = useRouter();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const verificationResult = await wixClient.auth.processVerification({
        verificationCode: code,
      });
      console.log(verificationResult);
      if (verificationResult.loginState) {
        setError("Something went wrong, try again later.");
      } else {
        route.push("/login");
      }
    } catch (error) {
      setError("Something went wrong, try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full relative flex justify-center py-10 items-center bg-white">
      <div className="absolute pl-4 pt-3 top-0 left-0 w-full flex">
        <Logo />
      </div>
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">
          Enter Verification Code
        </h1>
        <p className="text-sm font-normal text-gray-600 mb-7">
          Enter the code we sent to your email.
        </p>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            autoComplete="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 16 16">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-382.000000, -7721.000000)"
                fill="currentColor"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M332,7571 L336,7571 L336,7567 L332,7567 L332,7571 Z M342,7567 L342,7565 L338,7565 L338,7561 L336,7561 L336,7565 L332,7565 L332,7561 L330,7561 L330,7565 L326,7565 L326,7567 L330,7567 L330,7571 L326,7571 L326,7573 L330,7573 L330,7577 L332,7577 L332,7573 L336,7573 L336,7577 L338,7577 L338,7573 L342,7573 L342,7571 L338,7571 L338,7567 L342,7567 Z"></path>
                </g>
              </g>
            </g>
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="code"
            id="code"
            placeholder="Verification code"
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className={`block w-full ${
            isLoading ? "bg-indigo-400" : "bg-indigo-600"
          } mt-4 py-2 rounded-2xl text-white font-semibold mb-2`}
          disabled={isLoading}
        >
          {isLoading ? "Loading" : "Verify"}
        </button>
      </form>
      {error !== "" && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default page;
