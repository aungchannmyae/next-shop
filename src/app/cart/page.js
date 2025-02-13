import Container from "@/components/Container";
import CartSection from "@/features/cart/components/CartSection";
import Link from "next/link";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <CartSection />
      </Suspense>
    </>
  );
};

export default page;
