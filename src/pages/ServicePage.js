import React from "react";
import { Image } from "react-bootstrap";
import sc from "../images/sc.png";
import vr from "../images/vr.png";
import ar from "../images/ar.png";
import { Flex } from "@chakra-ui/react";

const ServicePage = () => {
  return (
    <div className="service-page bg-light">
      <div className="row">
        <div className="main-card col-md-4 text-center p-5">
          <div className="service-card bg-white">
            <Flex justifyContent={"center"}>
              <Image
                className="card-imgs"
                src={ar}
                alt="img-ar"
                width={"100px"}
              />
            </Flex>
            <h1 className="service-heading">XR</h1>
            <p className="service-para">
              Building end-to-end turnkey, immersive applications using AR, VR &
              MR
            </p>
          </div>
        </div>
        <div className="main-card col-md-4 text-center p-5">
          <div className="service-card bg-white">
            <Flex justifyContent={"center"}>
              <Image
                className="card-imgs"
                src={vr}
                alt="img-ar"
                width={"100px"}
              />
            </Flex>
            <h1 className="service-heading">AI + XR</h1>
            <p className="service-para">
              Building intelligence into your XR applications to achive business
              objectives
            </p>
          </div>
        </div>
        <div className="main-card col-md-4 text-center p-5">
          <div className="service-card bg-white">
            <Flex justifyContent={"center"}>
              <Image
                className="card-imgs"
                src={sc}
                alt="img-ar"
                width={"100px"}
              />
            </Flex>
            <h2 className="service-heading">Spatial computing</h2>
            <p className="service-para">
              Leverageing spatial computing to build XR applications
            </p>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center p-3">
        <p className="home-text fw-bold py-3">
          Our <span className="text-cyan">Services</span>
        </p>
        <p className="home-text-para">
          XR can improve worker training by simulating complex processes,
          Increasing safety, and reducing the risk of errors. XR can also assist
          in product design and prototyping, enhancing collaboration, and
          reducing development time. Additionally, XR can provide remote
          support, enabling experts to assist on-site technicians in real-time,
          Improving efficiency, and reducing downtime.
        </p>
        <Flex justifyContent={"center"}>
          <button className="butn py-2 w-50">
            <span className="butn-text px-3">Reach Us</span>
            <i className="arrow bg-light p-2 text-dark rounded-circle fa-solid fa-arrow-right"></i>
          </button>
        </Flex>
      </div>
    </div>
  );
};

export default ServicePage;
