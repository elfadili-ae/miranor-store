import Filters from "@/components/Filters";
import OfferBanner from "@/components/OfferBanner";
import ProductsList from "@/components/ProductsList";
import { WixClientServer } from "@/lib/WixClientServer";
import React from "react";

const Products = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await WixClientServer();
  const response = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  return (
    <div className="flex flex-col px-4 md:px-8 lg:px-16">
      <OfferBanner />
      <Filters />
      <ProductsList
        categoryID={
          response.collection?._id || process.env.ALL_PRODUCTS_CATEGORY_ID!
        }
        searchParams={searchParams}
      />
    </div>
  );
};

export default Products;
