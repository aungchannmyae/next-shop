import React, { Suspense } from "react";

const page = () => {
  return;
  <>
    <Suspense fallback={<p>Loading ...</p>}>Not Found .</Suspense>;
  </>;
};

export default page;
