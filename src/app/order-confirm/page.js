import OrderConfirmation from "@/features/orderConfirm/components/OrderConfirmation";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <OrderConfirmation />
      </Suspense>
    </>
  );
};

export default page;
