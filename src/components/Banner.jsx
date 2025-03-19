import React from "react";
import ban1 from "../assets/img/ban1.svg";
import ban2 from "../assets/img/ban2.svg";
import "../scss/components/_banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_text">
        <h2>100% natural</h2>
        <h1>Sustainability for modern consumers</h1>
        <h2>
          Discover CO2: friendly fashion. Shop now for sustainable clothing that
          waits for ypur style
        </h2>
        <button>
          <h3>Catalog</h3>
        </button>
      </div>
      <div className="banner_img">
        <div>
          <img src={ban1} alt="" />
        </div>
        <div>
          <img src={ban2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
