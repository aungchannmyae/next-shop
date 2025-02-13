"use client";
import React, { useState } from "react";

const useCart = () => {
  // Load cart from local storage
  const getCartFromStorage = () => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  };

  return {
    getCartFromStorage,
  };
};

export default useCart;
