import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-screen-xl mx-auto py-4 md:py-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
