"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { collections } from "@wix/stores";

const CategoryList = ({
  categories,
}: {
  categories: collections.Collection[];
}) => {
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
        {categories.map((cat: collections.Collection) => {
          if (["Featured", "All Products"].includes(cat.name!)) return;
          return (
            <Link
              key={cat._id}
              href={`/products?cat=${cat.slug}`}
              className="relative h-60 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group flex-shrink-0"
            >
              <Image
                src={cat.media?.mainMedia?.image?.url || "/product.png"}
                alt={`${cat.slug} category`}
                fill
                sizes="25vw"
                className="object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 py-1 text-center text-white bg-black w-full group-hover:bottom-1/2 transition-all ease-in-out duration-500">
                {cat.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
