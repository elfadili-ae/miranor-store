import CategoryList from "@/components/CategoryList";
import PaddingWrapper from "@/components/PaddingWrapper";
import ProductsList from "@/components/ProductsList";
import Slider from "@/components/Slider";
import { WixClientServer } from "@/lib/WixClientServer";
import React from "react";

const HomePage = async () => {
  const wixClient = await WixClientServer();

  const response = await wixClient.collections.queryCollections().find();

  return (
    <div className="relative z-0 w-full flex flex-col">
      <Slider />
      <PaddingWrapper>
        <h2 className="text-2xl lg:text-3xl mt-10 mb-2">Featured Products</h2>
      </PaddingWrapper>
      <React.Suspense>
        <ProductsList
          categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
          limit={4}
        />
      </React.Suspense>
      <PaddingWrapper>
        <h2 className="text-2xl lg:text-3xl mt-10 mb-2">Shop By Categories</h2>
      </PaddingWrapper>
      <CategoryList categories={response.items} />
      <PaddingWrapper>
        <h2 className="text-2xl lg:text-3xl mt-10 mb-2">New Products</h2>
      </PaddingWrapper>
      <ProductsList
        categoryID={process.env.ALL_PRODUCTS_CATEGORY_ID!}
        limit={8}
        latest={true}
      />
    </div>
  );
};

export default HomePage;
