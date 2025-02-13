"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import OrderSummary from "@/components/OrderSummary";
import useProducts from "@/features/home/hooks/useProducts";
import useCartStore from "@/store/useCartStore";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const CartSection = () => {
  const { cart, removeFromCart, clearCart, addCartQuantity, subCartQuantity } =
    useCartStore();
  const { data, isLoading } = useProducts();

  const productAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const addingCartQuantity = (cartId) => {
    addCartQuantity(cartId);
  };

  const subbingCartQuantity = (cartId) => {
    subCartQuantity(cartId);
  };

  return (
    <>
      <Container>
        <Breadcrumb
          title={"Shopping Cart"}
          links={[
            { title: "Product Detail", path: "" },
            { title: "Shopping Cart", path: "" },
          ]}
        />
      </Container>
      <section className=" pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className=" flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Shopping Cart
            </h2>
            {isLoading ? (
              <p>loading...</p>
            ) : cart.length === 0 ? (
              <button
                disabled
                className=" opacity-50 text-white bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 "
              >
                Clear All
              </button>
            ) : (
              <button
                onClick={() => {
                  clearCart();
                }}
                className=" hover:scale-105 duration-300 active:scale-95 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:grid lg:grid-cols-5 lg:items-start xl:gap-8">
            <div className=" col-span-3 flex flex-col gap-5">
              {isLoading ? (
                <p>loading...</p>
              ) : cart.length === 0 ? (
                <p className=" my-5 w-full flex justify-center items-center font-semibold text-xl text-gray-900 lg:max-w-2xl xl:max-w-4xl">
                  There is No Item In your Cart.
                </p>
              ) : (
                cart?.map((item) => {
                  const productExist = data?.find(
                    (product) => product.id === item.id
                  );

                  if (!productExist) {
                    removeFromCart(item.id);
                    return toast.error("Product Not Found");
                  }
                  return (
                    <div
                      key={item.id}
                      className=" w-full flex-none lg:max-w-2xl xl:max-w-4xl"
                    >
                      <div className="space-y-6">
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
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
                              <div className="flex items-center">
                                <button
                                  onClick={() => {
                                    subbingCartQuantity(item.id);
                                  }}
                                  type="button"
                                  id="decrement-button"
                                  data-input-counter-decrement="counter-input"
                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                >
                                  <svg
                                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 1h16"
                                    />
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  id="counter-input"
                                  data-input-counter
                                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                  placeholder=""
                                  value={item.quantity}
                                  readOnly
                                  required
                                />
                                <button
                                  onClick={() => {
                                    addingCartQuantity(item.id);
                                  }}
                                  type="button"
                                  id="increment-button"
                                  data-input-counter-increment="counter-input"
                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                >
                                  <svg
                                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 1v16M1 9h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className=" inline-flex justify-center md:w-32">
                                <p className="text-base font-bold text-gray-900 dark:text-white">
                                  $ {item.price.toFixed(2)}
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
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

                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                              <Link
                                href={`/products/${item.id}`}
                                className="text-base line-clamp-2 font-medium text-gray-900 hover:underline dark:text-white"
                              >
                                {item.title}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className=" col-span-2 mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <OrderSummary btnName={"Proceed to Checkout"} link={"/order-checkout"} />

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartSection;
