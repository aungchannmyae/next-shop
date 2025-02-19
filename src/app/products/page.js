import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>page</Suspense>
    </>
  );
};

export default page;
