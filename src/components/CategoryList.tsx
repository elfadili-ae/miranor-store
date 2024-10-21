"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CategoryList = () => {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const scrollAnimation = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const scrollElement = categoriesRef.current;

    if (scrollElement) {
      const maxScrollLeft =
        scrollElement.scrollWidth - scrollElement.clientWidth;

      // Initialize GSAP animation for horizontal scrolling
      scrollAnimation.current = gsap.to(scrollElement, {
        scrollLeft: maxScrollLeft,
        duration: 10,
        ease: "linear",
        repeat: -1,
        paused: true,
        yoyo: true,
      });

      scrollAnimation.current.play();

      // Cleanup function to kill the animation on unmount
      return () => {
        scrollAnimation.current?.kill();
      };
    }
  }, []);

  const handlePauseAnimation = () => {
    if (scrollAnimation.current) {
      scrollAnimation.current.pause();
    }
  };

  const handleResumeAnimation = () => {
    if (scrollAnimation.current) {
      scrollAnimation.current.resume();
    }
  };

  return (
    <div
      ref={categoriesRef}
      className="flex overflow-x-scroll hide-scrollbar px-4"
      onMouseEnter={handlePauseAnimation}
      onMouseLeave={handleResumeAnimation}
    >
      <div className="flex w-full gap-2 md:gap-6">
        <Link
          href="/products"
          className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
            fill
            sizes="25vw"
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
            Woman
          </div>
        </Link>
        <Link
          href="/products"
          className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
            fill
            sizes="25vw"
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
            Woman
          </div>
        </Link>
        <Link
          href="/products"
          className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
            fill
            sizes="25vw"
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
            Woman
          </div>
        </Link>
        <Link
          href="/products"
          className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
            fill
            sizes="25vw"
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
            Bags
          </div>
        </Link>
        <Link
          href="/products"
          className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
            fill
            sizes="25vw"
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
            Accessories
          </div>
        </Link>
        <Link
          href="/products"
          className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
            fill
            sizes="25vw"
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
            Kids
          </div>
        </Link>
        <Link
          href="/products"
          className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
            fill
            sizes="25vw"
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
            Man
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
