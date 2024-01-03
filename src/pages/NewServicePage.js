/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import iconoir_delivery_32V from "./assets/iconoir-delivery-2mK.png";
import cil_happy_phb from "./assets/cil-happy-phb.png";
import iconoir_globe from "./assets/iconoir-globe.png";
import codicon_vr from "./assets/codicon-vr.png";
import material from "./assets/material-symbols-developer-mode-tv-outline-sharp.png";
import clarity from "./assets/clarity-building-line.png";

const NewServicePage = () => {
  return (
    <div className="row text-light p-5 justify-content-evenly">
      <div className="col-sm-6 col-md-4 col-lg-3 spinner-x-box">
        <div className="spinner-x-border"></div>
        <div className="spinner-x">
          <img
            className="iconoir-delivery-ErZ spinner-x-img"
            src={iconoir_delivery_32V}
          />
          <p className="spinner-x-num">240</p>
          <p className="spinner-x-text">Projects Delivered</p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 spinner-x-box">
        <div className="spinner-x-border"></div>
        <div className="spinner-x">
          <img
            className="iconoir-delivery-ErZ spinner-x-img"
            src={cil_happy_phb}
          />
          <p className="spinner-x-num">40</p>
          <p className="spinner-x-text">Clients Made Happy</p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 spinner-x-box">
        <div className="spinner-x-border"></div>
        <div className="spinner-x">
          <img
            className="iconoir-delivery-ErZ spinner-x-img"
            src={iconoir_globe}
          />
          <p className="spinner-x-num">7</p>
          <p className="spinner-x-text">Countries Catered</p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 spinner-x-box">
        <div className="spinner-x-border"></div>
        <div className="spinner-x">
          <img
            className="iconoir-delivery-ErZ spinner-x-img"
            src={codicon_vr}
          />
          <p className="spinner-x-num">10</p>
          <p className="spinner-x-text">
            Years in VR,AR
            <br /> Metaverse & S/W
            <br /> Developement
          </p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 spinner-x-box">
        <div className="spinner-x-border"></div>
        <div className="spinner-x">
          <img className="iconoir-delivery-ErZ spinner-x-img" src={material} />
          <p className="spinner-x-num">6</p>
          <p className="spinner-x-text">
            Modules <br />
            Developed Across
            <br /> Industries
          </p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 spinner-x-box">
        <div className="spinner-x-border"></div>
        <div className="spinner-x">
          <img className="iconoir-delivery-ErZ spinner-x-img" src={clarity} />
          <p className="spinner-x-num">10</p>
          <p className="spinner-x-text">
            Industires <br />
            Catered Including
            <br /> Government
            <br /> Organisations
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewServicePage;
