import useCartStore from "@/store/useCartStore";
import Link from "next/link";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useCartStore();

  return (
    <div className=" overflow-hidden bg-white border border-gray-200 rounded-xl shadow-l  hover:scale-105 duration-300 active:border-2 active:border-purple-700">
      <Link
          href={`/products/${product.id}`}

      >
        <div className=" p-5">
          {product.images ? (
            <img
              className=" w-64 h-64 rounded-lg"
              src={product.images[0]}
              alt="product image"
            />
          ) : (
            <img
              className=" rounded-lg"
              src="/imageEmpty.png"
              alt="product image"
            />
          )}
        </div>

        <div className="px-5 pb-5 flex flex-col gap-3">
          <h5 className=" line-clamp-2 text-xl font-semibold tracking-tight text-gray-900 text-wrap overflow-hidden">
            {product.title}
          </h5>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-purple-600">
              $ {product.price}
            </span>
            <span className=" flex gap-2 capitalize items-center text-sm font-bold text-black">
              <BiSolidCategory className=" size-4 text-red-600" />{" "}
              {product.category.name}
            </span>
          </div>
        </div>
      </Link>
      <div className=" w-full flex justify-center items-center px-5 pb-5">
        <button
          onClick={() => {
            addToCart(product);
          }}
          className=" hover:scale-105 duration-300 active:scale-95 w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          {cart.some((item) => item.id === product.id)
            ? "Added"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <div className="flex items-center mt-2.5 mb-5">
  <div className="flex items-center space-x-1 rtl:space-x-reverse">
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  </div>
  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-purple-200 dark:text-purple-800 ms-3">
    5.0
  </span>
</div> */
}
