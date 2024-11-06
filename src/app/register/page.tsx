"use client";

import Logo from "@/components/Logo";
import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const wixClient = useWixClient();
  const route = useRouter();

  const isLoggedIn = wixClient.auth.loggedIn();

  if (isLoggedIn) {
    route.push("/");
  }
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateData = () => {
    if (username === "") {
      setError("Username is missing!");
    } else if (username.length <= 3) {
      setError("Username must be more than 3 characters!");
    } else if (email === "") {
      setError("Email is missing!");
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError("Email format is invalid!");
    } else if (password === "") {
      setError("Password is missing!");
    } else if (password.length <= 5) {
      setError("Password must be more than 5 characters!");
    } else {
      return true;
    }
    return false;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateData();

    if (!isValid) return;
    setIsLoading(true);
    setError("");

    try {
      const registerResult = await wixClient.auth.register({
        email,
        password,
        profile: { nickname: username },
      });
      const status = registerResult?.loginState;

      switch (status) {
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          route.push("/email-verification");
          break;
        case LoginState.FAILURE:
          const err = JSON.parse(registerResult.error || "{}");
          setError(err.message ? err.message : "Something went wrong");
          break;
      }
    } catch (error) {
      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative flex flex-col h-full md:w-1/2 justify-center py-10 items-center bg-white">
        <div className="absolute pl-4 pt-3 top-0 left-0 w-full flex md:hidden">
          <Logo />
        </div>
        <form className="bg-white" onSubmit={handleFormSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello there!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

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
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
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
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="block w-full bg-indigo-600 disabled:bg-indigo-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            {isLoading ? "Loading" : "Register"}
          </button>
        </form>
        {error !== "" && <p className="text-red-500 text-sm">{error}</p>}
        <Link
          href="/login"
          className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
        >
          You already have an account ?
        </Link>
      </div>
      <div className="relative overflow-hidden w-1/2 md:flex hidden">
        <div className="absolute w-full h-full z-[1] flex flex-col items-center justify-center">
          <div className="text-center w-full bg-black/40 py-4">
            <h1 className="text-white font-bold text-4xl font-sans">
              Miranor Store
            </h1>
            <p className="text-white mt-1">
              Sign Up & Start Shopping – Where Every Deal is Made for You!
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="shopping"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
