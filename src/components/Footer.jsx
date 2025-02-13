import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-auto ">
        
      <div className="w-full max-w-screen-xl mx-auto py-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Next Shop
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:text-purple-500 me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-500 me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-500 me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="https://flowbite.com/" className="hover:text-purple-500">
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
