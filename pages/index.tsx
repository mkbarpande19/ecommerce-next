import { InferGetStaticPropsType } from "next";
import React from "react";

import getAllProducts from "../framework/shopify/product/get-all-products";

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  getAllProducts();
  return (
    <div>
      <span>{JSON.stringify(products)} </span>
    </div>
  );
}
