"use client"
import React, { useState } from "react";

const useWishlist = () => {
  // Load wishlist from local storage
  const getWishlistFromStorage = () => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  };

  return {

    getWishlistFromStorage,

  };
};

export default useWishlist;
