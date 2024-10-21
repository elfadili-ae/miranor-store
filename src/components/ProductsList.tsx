import Image from "next/image";
import React from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <div className="w-full flex gap-x-4 gap-y-6 flex-wrap justify-center">
      <ProductCard
        name="Product A"
        description="product description here"
        price={40}
        link="/products"
      />
      <ProductCard
        name="Product A"
        description="product description here"
        price={40}
        link="/products"
      />
      <ProductCard
        name="Product A"
        description="product description here"
        price={40}
        link="/products"
      />
      <ProductCard
        name="Product A"
        description="product description here"
        price={40}
        link="/products"
      />
    </div>
  );
};

export default ProductsList;
