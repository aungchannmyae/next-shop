import React from "react";

const ProductCategoryLoader = () => {
  return (
    <>
      
    {[...Array(8)].map((_, index) => (
        <div key={index} class="flex flex-col space-y-5 w-28 p-4 rounded-lg bg-white animate-pulse">
            <div class="h-8 w-8 bg-gray-200 rounded"></div>
            <div class="h-4 w-1/4 bg-gray-200 rounded"></div>
        </div>
    ))}
    </>
  );
};

export default ProductCategoryLoader;
