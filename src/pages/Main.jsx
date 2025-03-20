import React from "react";
import Banner from "../components/Banner";
import "../scss/app.scss";
import arrow from "../assets/img/arrow.svg";
import feat from "../assets/img/feat.svg";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Banner />
      <div className="title">
        <h1>New products</h1>
      </div>
      <div>
        <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
      </div>

      <div className="main__categories">
        <div className="main__categories_text">
          <h1>Categories</h1>
          <h2>Create your own unique look</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            nulla feugiat, posuere ipsum et, rutrum nulla. Quisque nunc nibh,
            condimentum mollis neque in, laoreet auctor odio. Duis in mi enim.
            Nam quis risus eros. Quisque odio justo, tincidunt eget dictum
            lacinia, rutrum ut justo. 
          </h3>
        </div>

        <div className="main__categories_link">
          <ul>
            <li>
              <Link to="/catalog">
                <h3>T-Shirts</h3>
                <img src={arrow} alt="" />
              </Link>
              <hr />
            </li>
            <li>
              <Link to="/catalog">
                <h3>Jackets</h3>
                <img src={arrow} alt="" />
              </Link>
              <hr />
            </li>
            <li>
              <Link to="/catalog">
                <h3>Hoodies</h3>
                <img src={arrow} alt="" />
              </Link>
              <hr />
            </li>
            <li>
              <Link to="/catalog">
                <h3>Accessories</h3>
                <img src={arrow} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="title">
        <h1>Popular products</h1>
      </div>
      <div className="main__popular">
        <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
      </div>

      <div className="title">
        <h1>Product Features</h1>
      </div>

      <div className="main__features">
        <div>
          <ul className="main__features_list1">
            <h3>Materials:</h3>
            <li>
              <h3>
                Technological Fabrics: Use of recycled materials,
                moisture-wicking and quick-drying fabrics, fabrics with UV
                protection, possibly even fabrics with antimicrobial properties.
              </h3>
            </li>
            <li>
              <h3>
                Minimalism: Limited color palette, mainly neutrals (gray, black,
                white, blue, silver) with accents of bright, neon colors.
              </h3>
            </li>
            <li>
              <h3>
                Sustainable Production: Whenever possible, using organic cotton,
                recycled materials (e.g., from ocean plastic), and other
                environmentally friendly options.
              </h3>
            </li>
          </ul>
          <ul className="main__features_list2">
            <h3>Product Quality:</h3>
            <li>
              <h3>
                Durability: Clothing must be hard-wearing and withstand an
                active lifestyle.
              </h3>
            </li>
            <li>
              <h3>
                Comfort: Materials should be pleasant to the touch and provide
                good breathability.
              </h3>
            </li>
            <li>
              <h3>
                Functionality: Clothing should be comfortable for everyday wear
                and sports.
              </h3>
            </li>
            <li>
              <h3>
                Quality of Construction: Neat seams, no loose threads, strong
                fastenings.
              </h3>
            </li>
          </ul>
        </div>
        <div>
          <img src={feat} alt="" />
        </div>
        <div>
          <ul className="main__features_list3">
            <h3>Design:</h3>
            <li>
              <h3>
                Minimalist Cut: Clean lines, simple silhouettes, functional
                details (pockets, zippers, adjustable elements).
              </h3>
            </li>
            <li>
              <h3>
                Unisex: Many models can be unisex to emphasize the idea of equal
                opportunity and freedom.
              </h3>
            </li>
            <li>
              <h3>
                Space-Inspired Elements: Use of patterns resembling the starry
                sky, constellations, or abstract forms inspired by cosmic
                phenomena.
              </h3>
            </li>
            <li>
              <h3>
                Technological Elements: Reflective elements for safety at night,
                built-in mounts for gadgets, hidden pockets.
              </h3>
            </li>
          </ul>
          <ul className="main__features_list4">
            <h3>Production:</h3>
            <li>
              <h3>
                Precise Cutting: Using computer modeling and laser cutting to
                ensure a perfect fit and minimize fabric waste.
              </h3>
            </li>
            <li>
              <h3>
                High-Quality Hardware: Reliable zippers, buttons, and fasteners
                that will withstand heavy use.
              </h3>
            </li>
            <li>
              <h3>
                Thorough Quality Control: Checking each detail for compliance
                with brand standards.
              </h3>
            </li>
          </ul>
        </div>
      </div>

      <button className="main__btn">
        <Link>
          <h2>LEARN MORE</h2>
        </Link>
      </button>

      <div className="main__sign">
        <button>
          <Link>
            <h2>Sign Up To Astro</h2>
          </Link>
        </button>
        <button>
          <Link>
            <h2>Sign In To Astro</h2>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Main;
