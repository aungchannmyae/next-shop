import WishlistSection from "@/features/wishlist/components/WishlistSection";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <WishlistSection />
      </Suspense>
    </>
  );
};

export default page;
