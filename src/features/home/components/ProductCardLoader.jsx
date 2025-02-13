import React from "react";

const ProductCardLoader = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="col-span-1 animate-pulse bg-white border border-gray-200 rounded-xl shadow-lg"
        >
          <div className="p-5">
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="px-5 pb-5 flex flex-col gap-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="flex items-center justify-between">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="flex gap-2 capitalize items-center text-sm font-bold text-black">
                <div className="size-4 h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
            <div className="h-10 bg-gray-200 rounded w-full mt-2"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCardLoader;
