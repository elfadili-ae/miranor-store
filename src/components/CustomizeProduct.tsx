"use client";

import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import AddQuantity from "./AddQuantity";

const CustomizeProduct = ({
  productID,
  productOptions,
  variants,
}: {
  productID: string;
  productOptions: products.ProductOption[];
  variants: products.Variant[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {productOptions &&
        productOptions.map((productOption: products.ProductOption) => {
          return (
            <div className="w-full" key={productOption.name}>
              <h3 className="text-lg font-semibold">
                Choose a {productOption.name}:
              </h3>
              <ul className="w-full flex gap-4 mt-2">
                {productOption.choices?.map((choice) => {
                  const disabled = !isVariantInStock({
                    ...selectedOptions,
                    [productOption.name!]: choice.description!,
                  });

                  const selected =
                    selectedOptions[productOption.name!] === choice.description;

                  const clickHandler = disabled
                    ? undefined
                    : () =>
                        handleOptionSelect(
                          productOption.name!,
                          choice.description!
                        );

                  return productOption.name === "Color" ? (
                    <li
                      className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                      style={{
                        backgroundColor: choice.value,
                        cursor: disabled ? "not-allowed" : "pointer",
                      }}
                      onClick={clickHandler}
                      key={choice.description}
                    >
                      {selected && (
                        <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                      {disabled && (
                        <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </li>
                  ) : (
                    <li
                      className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                      style={{
                        cursor: disabled ? "not-allowed" : "pointer",
                        backgroundColor: selected
                          ? "#f35c7a"
                          : disabled
                          ? "#FBCFE8"
                          : "white",
                        color: selected || disabled ? "white" : "#f35c7a",
                        boxShadow: disabled ? "none" : "",
                      }}
                      key={choice.description}
                      onClick={clickHandler}
                    >
                      {choice.description}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

      <AddQuantity
        productID={productID}
        variantID={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stock={selectedVariant?.stock?.quantity || 0}
      />
    </div>
  );
};

export default CustomizeProduct;
