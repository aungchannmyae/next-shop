"use client";
import Container from "@/components/Container";
import React, { useEffect } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import useSWR from "swr";
import useProductStore from "@/store/useProductStore";
import Spinner from "@/components/Spinner";
import ProductCategoryLoader from "./ProductCategoryLoader";
import { useSearchParams } from "next/navigation";
const ProductCategory = () => {
  const { setSelectedCategory } = useProductStore();
  const { data, error, isLoading } = useCategories();
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryId = searchParams.get("categoryId");
    if (categoryId) {
      setSelectedCategory(Number(categoryId)); // Convert string to number since IDs are numeric
    }
  }, [searchParams, setSelectedCategory]);

  const { productLength, isLoading: productLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const categoryChange = (id) => {
    setSelectedCategory(id); // Updates Zustand store
  };
  return (
    <Container className={` overflow-visible`}>
      {isLoading ? (
        <section className=" flex flex-row flex-wrap gap-5 mb-3 ">
          <ProductCategoryLoader />
        </section>
      ) : (
        <section className=" flex flex-row flex-wrap gap-5 mb-3 ">
          <div
            onClick={() => categoryChange(null)}
            className=" flex flex-col space-y-5 w-fit p-4 rounded-lg bg-white hover:scale-105 duration-300 active:scale-95 shadow-lg"
          >
            <LuLayoutGrid className=" size-8 text-purple-700" />
            <div className=" flex flex-col gap-0">
              <p className=" text-black text-base font-bold">All</p>
            </div>
          </div>
          {data?.map((category) => (
            <div
              onClick={() => categoryChange(category.id)}
              key={category.id}
              className=" flex flex-col space-y-5 w-fit p-4 rounded-lg bg-white hover:scale-105 duration-300 active:scale-95 shadow-lg"
            >
              <LuLayoutGrid className=" size-8 text-purple-700" />
              <div className=" flex flex-col gap-0">
                <p className=" text-black text-base font-bold capitalize">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
      <div>
        <span className=" text-black text-sm inline-flex items-center gap-1">
          Total ({productLoading ? <Spinner /> : productLength}) Items
        </span>
      </div>
    </Container>
  );
};

export default ProductCategory;
