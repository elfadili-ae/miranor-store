import AddQuantity from "@/components/AddQuantity";
import ChooseColor from "@/components/ChooseColor";
import ChooseSize from "@/components/ChooseSize";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import { WixClientServer } from "@/lib/WixClientServer";
import { products } from "@wix/stores";
import { GetServerSidePropsContext } from "next";
import { notFound } from "next/navigation";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import SafeParagraph from "@/components/SafeParagraph";

interface ProductParams extends ParsedUrlQuery {
  productID: string;
}

const ProductPage = async (context: GetServerSidePropsContext) => {
  const { productID } = context.params as ProductParams;

  const wixClient = await WixClientServer();
  const response = await wixClient.products
    .queryProducts()
    .eq("_id", productID)
    .find();
  if (!response.items[0]) {
    return notFound();
  }

  return (
    <div className="relative flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 mt-4 gap-y-4">
      <div className="w-full h-full lg:w-1/2 lg:sticky lg:top-4 flex lg:px-4">
        <ProductImages media={response.items[0].media} />
      </div>
      <div className="w-full lg:w-1/2 lg:px-2 flex flex-col gap-4">
        <h1 className="text-2xl lg:text-4xl">{response.items[0].name}</h1>
        <SafeParagraph description={response.items[0].description!} />

        <h3 className="text-lg">
          {response.items[0].priceData?.discountedPrice! <
            response.items[0].priceData?.price! && (
            <span className="text-gray-600 line-through mr-3 align-text-bottom">
              {response.items[0].priceData?.currency}{" "}
              {response.items[0].priceData?.price}
            </span>
          )}
          <span className="text-xl font-semibold">
            {response.items[0].priceData?.currency}{" "}
            {response.items[0].priceData?.discountedPrice}
          </span>
        </h3>

        {response.items[0].productOptions && response.items[0].variants ? (
          <CustomizeProduct
            productID={response.items[0]._id!}
            productOptions={response.items[0].productOptions}
            variants={response.items[0].variants}
          />
        ) : (
          <AddQuantity
            productID={response.items[0]._id!}
            variantID={"00000000-0000-0000-0000-000000000000"}
            stock={response.items[0].stock?.quantity || 0}
          />
        )}

        <hr className="mt-1" />

        <h3 className="text-lg font-semibold">Product info:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam
          dignissimos numquam architecto exercitationem incidunt iusto, placeat
          quisquam asperiores cum animi, magni quam nobis? Delectus recusandae
          possimus reprehenderit quam fugiat? <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor est
          numquam vitae tenetur blanditiis et perspiciatis sunt nam consectetur
          deleniti? Minus repudiandae molestiae ullam totam magnam. Eius nostrum
          earum minus?
        </p>

        <h3 className="text-lg font-semibold">Return and Refund Policy:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam
          dignissimos numquam architecto exercitationem incidunt iusto, placeat
          quisquam asperiores cum animi, magni quam nobis? Delectus recusandae
          possimus reprehenderit quam fugiat?
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
