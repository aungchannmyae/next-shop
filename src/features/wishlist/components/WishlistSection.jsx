"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import useWishlistStore from "@/store/useWishlistStore";

const WishlistSection = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  return (
    <>
      <Container>
        <Breadcrumb
          title={"Shopping Cart"}
          links={[{ title: "Wishlist", path: "" }]}
        />
      </Container>
      <section className=" pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Your Wishlist
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className=" w-full flex-none">
              <div className="space-y-6">
                {wishlist.length === 0 ? (
                  <p className=" my-5 w-full flex justify-center items-center font-semibold text-xl text-gray-900">
                    There is No Item In your Wishlist.
                  </p>
                ) : (
                  wishlist?.map((item) => (
                    <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <div className="shrink-0 md:order-1">
                          {/* <img
                          className="h-20 w-20 dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                          alt="imac image"
                        />
                        <img
                          className="hidden h-20 w-20 dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                          alt="imac image"
                        /> */}

                          <img
                            src={item.images[0]}
                            className=" w-20 h-20"
                            alt=""
                          />
                        </div>

                        <label htmlFor="counter-input" className="sr-only">
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-between">
                          <div className=" inline-flex justify-center md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">
                              $ {item.price}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              removeFromWishlist(item.id);
                            }}
                            type="button"
                            className="inline-flex justify-center items-center rounded-md duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:hover:bg-gray-600 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              className=" h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-2xl">
                          <h1 className=" text-black text-sm capitalize font-semibold flex items-center gap-1">
                            <BiSolidCategory className=" size-4 text-red-600" />
                            {item.category.name}
                          </h1>
                          <Link
                            href={`/${item.id}`}
                            className=" line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white"
                          >
                            {item.description}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistSection;
