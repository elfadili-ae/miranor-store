import React from "react";
import ProductCard from "./ProductCard";
import { WixClientServer } from "@/lib/WixClientServer";
import { products } from "@wix/stores";
import Pagination from "./Pagination";

const ProductsList = async ({
  categoryID,
  limit = 20,
  latest = false,
  searchParams,
}: {
  categoryID: string;
  limit?: number;
  latest?: boolean;
  searchParams?: any;
}) => {
  const wixClient = await WixClientServer();

  const resQuery = wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryID)
    .ge("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 99999)
    .startsWith("name", searchParams?.name || "")
    .skip(searchParams?.page ? parseInt(searchParams.page) * limit : 0)
    .limit(limit);

  if (searchParams?.sortby) {
    const [sortType, sortBy] = searchParams.sortby.split(" ");
    if (sortType === "asc") {
      resQuery.ascending(sortBy);
    }

    if (sortType === "desc") {
      resQuery.descending(sortBy);
    }
  } else if (latest) {
    resQuery.ascending("lastUpdated");
  }
  const response = await resQuery.find();

  return (
    <div className="w-full flex gap-x-4 gap-y-6 flex-wrap justify-center">
      {response.items.map((item: products.Product) => {
        return (
          <ProductCard
            key={item._id!}
            name={
              item.name?.length! > 30
                ? `${item.name?.slice(0, 27)}...`
                : item.name!
            }
            description={`${item.description?.slice(0, 66)!}...`}
            price={item.priceData?.price!}
            currency={item.priceData?.currency!}
            media={item.media!}
            link={`/product/${item._id}`}
          />
        );
      })}
      <Pagination
        currentPage={response.currentPage!}
        hasNext={response.hasNext()}
        hasPrev={response.hasPrev()}
      />
    </div>
  );
};

export default ProductsList;
