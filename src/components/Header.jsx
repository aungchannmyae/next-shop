"use client";

import React from "react";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import useProducts from "@/features/home/hooks/useProducts";
const Header = () => {
  const { searchRef, handleSearchInput } = useProducts();
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        {/* Main Icon on the Left */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-black">
            Next Shop
          </span>
        </Link>

        {/* Search Bar and Dropdown on the Right */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <form className="hidden md:block">
            <div className=" group relative">
              <input
                type="text"
                id="search-navbar"
                className="block w-72 p-2 ps-4 text-sm text-gray-900 border-2 border-purple-300 focus:border-purple-500 focus:ring-purple-500 focus:outline-none rounded-lg bg-purple-50  "
                placeholder="Search..."
                ref={searchRef}
                onChange={handleSearchInput}
              />
              <button
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <svg
                  className=" active:scale-125 duration-100 w-4 h-4 text-purple-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Dropdown */}
          <Dropdown
            label=""
            inline
            placement="bottom-end"
            className=" w-32"
            renderTrigger={() => (
              <button className="w-28 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 active:ring-4 active:ring-purple-200 duration-75">
                Profile
              </button>
            )}
          >
            <Dropdown.Item as={Link} href="/cart">
              Cart
            </Dropdown.Item>
            <Dropdown.Item as={Link} href="/wishlist">
              Wishlists
            </Dropdown.Item>
            <Dropdown.Item as={Link} href="#">
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} href="#">
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Header;
