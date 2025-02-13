'use client'
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useCategories = () => {
  const [fetchUrl, setFetchUrl] = useState(
    "https://api.escuelajs.co/api/v1/categories"
  );

  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  // console.log(data);

  return {
    data,
    error,
    isLoading
  };
};

export default useCategories;
