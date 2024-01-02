import React from "react";
import { Image } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="text-light row p-5">
      <div className="col-lg-7 text-page">
        <h1 className="fw-bolder">
          We build{" "}
          <span className="text-cyan">
            Data-Driven,Customer Centric XR Applications
          </span>{" "}
          to achieve your business objectives
        </h1>
        <p className="fs-4 fw-normal">
          We take a consultative approach to all our clients requirement and
          carefully curate our products and solutions to fit their business
          objectives.
        </p>
        <button className="butn py-2 w-75">
          <span className="px-3 fs-3">Learn More</span>
          <i className="arrow bg-light p-2 text-dark rounded-circle fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="col-lg-5  image-container">
        <div className="b-center-img">
          <div className="cb-center-img">
            <Image
              className="dummy-image"
              src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2022/01/Augmented-Reality-Technology-Trends.jpg"
              alt="dummy-image"
            />
          </div>
        </div>
        <div className="left-img">
          <Image
            className="dummy-image-l"
            src="https://www.researchdive.com/blogImages/5jDlCvDgBT.jpeg"
            alt="dummy-image"
          />
        </div>
        <div className="right-img">
          <Image
            className="dummy-image-r"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--q8kVCBzp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://zealar.com.au/wp-content/uploads/2019/10/AR-in-Education-Industry-2.jpg"
            alt="dummy-image"
          />
        </div>
        <div className="b-left-img">
          <Image
            className="dummy-image-bl"
            src="https://bernardmarr.com/wp-content/uploads/2023/11/The-10-Biggest-AR-VR-And-Immersive-Internet-Trends-In-2024.jpg"
          />
        </div>
        <div className="b-right-img">
          <Image
            className="dummy-image-br"
            src="https://assets.entrepreneur.com/content/3x2/2000/1646048617-Myproject79.jpg"
            alt="dummy-image"
          />
        </div>
        <button className=" play-butn position-absolute">
          <i className="arrow text-light fa-solid fa-play"></i>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
