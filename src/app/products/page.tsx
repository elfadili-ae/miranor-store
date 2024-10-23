import Filters from "@/components/Filters";
import OfferBanner from "@/components/OfferBanner";
import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col px-4 md:px-8 lg:px-16">
      <OfferBanner />
      <Filters />
    </div>
  );
};

export default Products;
