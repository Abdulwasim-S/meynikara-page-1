import React from "react";

const ProductsPage = () => {
  return (
    <div className="row bg-white mt-3 py-5">
      <div className="home-text-para col-md-8 px-5 fw-medium mb-5">
        At Meynikara, we have developed a curated list of products that
        addresses pressing business problems that could be solved by leveraging
        XR technologies.
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center mb-5">
        <div className="h-100 d-flex">
          <span className="empty-span"></span>
        </div>
        <h1 className="home-text px-5 fw-bold">
          Our <span className="text-cyan">Products</span>
        </h1>
      </div>
    </div>
  );
};

export default ProductsPage;
