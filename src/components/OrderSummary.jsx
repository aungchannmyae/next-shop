"use client";
import useCartStore from "@/store/useCartStore";
import useProducts from "@/features/home/hooks/useProducts";
import Link from "next/link";
import React from "react";

const OrderSummary = ({ btnName, link }) => {
  const { cart, addCartQuantity, subCartQuantity } = useCartStore();

  const productAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const shippingFee = productAmount * 0.05;
  const tax = productAmount * 0.1;

  const totalAmount = productAmount + shippingFee + tax;
  return (
    <>
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          Order summary
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Original Product Price
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                $ {productAmount.toFixed(2)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Savings
              </dt>
              <dd className="text-base font-medium text-green-600">{0}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Shipping Fees
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                $ {shippingFee.toFixed(2)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                $ {tax.toFixed(2)}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">
              Total
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              $ {totalAmount.toFixed(2)}
            </dd>
          </dl>
        </div>
        {link && (
          <Link
            href={link}
            className="flex w-full items-center justify-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            {btnName}
          </Link>
        )}

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {" "}
            or{" "}
          </span>
          <Link
            href="/"
            title=""
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 underline hover:no-underline dark:text-purple-500"
          >
            Continue Shopping
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
