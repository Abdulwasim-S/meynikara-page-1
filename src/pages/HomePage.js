import React from "react";
import { Image } from "react-bootstrap";
import center_image from "./assets/mask-group-uoT.png";
import lt_image from "./assets/mask-group-PUh.png";
import lb_image from "./assets/mask-group-KMo.png";
import rb_image from "./assets/mask-group-9oK.png";

const HomePage = () => {
  return (
    <div className="text-light row p-5">
      <div className="col-lg-7 text-page">
        <h1 className="home-text fw-bolder">
          We build{" "}
          <span className="text-cyan">
            Data-Driven,Customer Centric XR Applications
          </span>{" "}
          to achieve your business objectives
        </h1>
        <p className="home-text-para fw-normal">
          We take a consultative approach to all our clients requirement and
          carefully curate our products and solutions to fit their business
          objectives.
        </p>
        <button className="butn">
          <span className="butn-text px-3 ">Learn More</span>
          <i className="arrow bg-light p-2 text-dark rounded-circle fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="col-lg-5  image-container">
        <div className="b-center-img">
          <div className="cb-center-img">
            <Image
              className="dummy-image"
              src={center_image}
              alt="dummy-image"
            />
          </div>
        </div>
        <div className="left-img">
          <Image className="dummy-image-l" src={lt_image} alt="dummy-image" />
        </div>
        <div className="right-img">
          <Image
            className="dummy-image-r"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--q8kVCBzp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://zealar.com.au/wp-content/uploads/2019/10/AR-in-Education-Industry-2.jpg"
            alt="dummy-image"
          />
        </div>
        <div className="b-left-img">
          <Image className="dummy-image-bl" src={lb_image} />
        </div>
        <div className="b-right-img">
          <Image className="dummy-image-br" src={rb_image} alt="dummy-image" />
        </div>
        <button className=" play-butn position-absolute">
          <i className="text-light fa-solid fa-play fa-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
