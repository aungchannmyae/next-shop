import ProductDetail from "@/features/productDetail/components/ProductDetail";
import React from "react";

const Page = async ({ params }) => {
  const productId = params.id;

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    return <div>Failed to load product</div>;
  }

  const product = await res.json();

  return <ProductDetail product={product} />;
};

export default Page;