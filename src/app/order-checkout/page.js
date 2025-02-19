import CheckoutSection from "@/features/orderCheckout/components/CheckoutSection";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <CheckoutSection />
      </Suspense>
    </>
  );
};

export default page;
