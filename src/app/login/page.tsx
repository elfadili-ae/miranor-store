"use client";

import Logo from "@/components/Logo";
import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const wixClient = useWixClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const isLoggedIn = wixClient.auth.loggedIn();

  if (isLoggedIn) {
    route.push("/");
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const loginResult = await wixClient.auth.login({
        email,
        password,
      });
      console.log(loginResult);
      const status = loginResult?.loginState;
      switch (status) {
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          route.push("/email-verification");
          break;
        case LoginState.FAILURE:
          if (loginResult.errorCode) {
            switch (loginResult.errorCode) {
              case "invalidEmail":
                setError("This email is not registred.");
                break;
              case "invalidPassword":
                setError("The password entered is not correct.");
                break;
              case "resetPassword":
                setError("You need to reset the password.");
                break;
              default:
                setError("Something went wrong. Try again later");
                break;
            }
          } else {
            setError("Something went wrong. Try again later");
          }
          break;
        case LoginState.SUCCESS:
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            loginResult.data.sessionToken!
          );

          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          route.push("/");
          break;
        default:
          setError("Something went wrong. Try again later");
          break;
      }
    } catch (error) {
      setError("Something went wrong. Try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden w-1/2 md:flex hidden">
        <div className="absolute w-full h-full z-[1] flex flex-col items-center justify-center">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Miranor Store
            </h1>
            <p className="text-white mt-1">Your Shopping Adventure Awaits!</p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="shopping"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative flex h-full md:w-1/2 justify-center py-10 items-center bg-white">
        <div className="absolute pl-4 pt-3 top-0 left-0 w-full flex md:hidden">
          <Logo />
        </div>
        <form className="bg-white" onSubmit={handleSubmitForm}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
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
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
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
              autoComplete="current-password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
          <button
            type="submit"
            className={`block w-full ${
              isLoading ? "bg-indigo-400" : "bg-indigo-600"
            } mt-4 py-2 rounded-2xl text-white font-semibold mb-2`}
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Login"}
          </button>
          {error !== "" && <p className="text-red-500 text-sm">{error}</p>}
          <Link
            href="/register"
            className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
          >
            You don&apos;t have an account? Register.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
