"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import Link from "next/link";
import useCartStore from "@/store/useCartStore";
import useWishlistStore from "@/store/useWishlistStore";

const ProductDetail = ({ product }) => {
  const { cart, addToCart } = useCartStore();
  const { wishlist, addToWishlist } = useWishlistStore();
  return (
    <>
      <Container>
        <Breadcrumb
          title={"Product Detail"}
          links={[{ title: "Product Detail", path: "" }]}
        />
        <section className=" mt-5 grid grid-cols-2 gap-10">
          <div className=" col-span-1 ">
            <div className=" ">
              <LightGallery elementClassNames=" grid grid-cols-2 gap-5">
                {product.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className=" rounded-lg col-span-1"
                    alt=""
                  />
                ))}
              </LightGallery>
            </div>
          </div>
          <div className=" col-span-1 flex flex-col space-y-4 text-black">
            <h1 className=" text-black text-sm capitalize font-semibold flex items-center gap-1">
              <BiSolidCategory className=" size-4 text-red-600" />
              {product.category.name}
            </h1>
            <h4 className=" text-black font-bold text-4xl">{product.title}</h4>
            <span className=" text-purple-700 font-semibold text-2xl">
              $ {product.price}
            </span>
            <p className=" text-black font-medium text-base text-balance">
              {product.description}
            </p>
            {/* <button>Add to my wishlist</button> */}
            <button
              onClick={() => {
                addToWishlist(product)
              }}
              className="text-purple-700 border border-purple-700 hover:border-purple-800 active:bg-purple-800 active:text-white focus:ring-0 focus:outline-none inline-flex justify-center items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 "
            >
              {wishlist.some((item) => item.id === product.id) ? "Added" : "Add to Wishlist"}
            </button>

            {/* <button>Add to cart</button> */}
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="text-white bg-purple-700 hover:bg-purple-800 inline-flex justify-center items-center font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none active:bg-gray-200 active:text-purple-700 duration-200"
            >
              {cart.some((item) => item.id === product.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProductDetail;
