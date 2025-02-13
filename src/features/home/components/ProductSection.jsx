"use client";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Container from "@/components/Container";
import Link from "next/link";
import useProductStore from "@/store/useProductStore";
import useProducts from "../hooks/useProducts";
import ProductCardLoader from "./ProductCardLoader";

const ProductSection = () => {
  const { data, error, isLoading } = useProducts();

  return (
    <>
      <Container>
        <section className=" grid grid-cols-4 gap-5">
          {isLoading ? (
            <ProductCardLoader />
          ) : (
            data?.map((product) => (
              <div key={product.id} className=" col-span-1">
                <ProductCard product={product} />
              </div>
            ))
          )}
        </section>
      </Container>
    </>
  );
};

export default ProductSection;
