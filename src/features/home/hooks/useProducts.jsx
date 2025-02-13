"use client";
import useProductStore from "@/store/useProductStore";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useProducts = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef();
  const { selectedCategory } = useProductStore();
  const [searchParamsString, setSearchParamsString] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory) {
      params.set("categoryId", selectedCategory);
    } else {
      params.delete("categoryId");
    }

    // Only set the search input value if the ref is available
    if (searchRef.current) {
      if (params.get("title")) {
        searchRef.current.value = params.get("title");
      } else {
        searchRef.current.value = "";
      }
    }

    // Update the URL
    router.push(`?${params.toString()}`);
    setSearchParamsString(params.toString());
  }, [searchParams, selectedCategory, router]);

  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("title", e.target.value);
      router.push(`/?${params.toString()}`);
      setSearchParamsString(params.toString());
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("title");
      router.push(`/?${params.toString()}`);
      setSearchParamsString(params.toString());
    }
  }, 1000);

  const fetchUrl = `https://api.escuelajs.co/api/v1/products${
    searchParamsString ? `?${searchParamsString}` : ""
  }`;

  const { data, error, isLoading } = useSWR(fetchUrl, fetcher, {
    revalidateOnFocus: false,
  });
  const productLength = data?.length;

  return {
    data,
    error,
    isLoading,
    productLength,
    searchRef,
    handleSearchInput,
  };
};

export default useProducts;
