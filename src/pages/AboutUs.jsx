import React from "react";
import "../scss/app.scss";
import about from "../assets/img/aboutus.svg";

function AU() {
  return (
    <div className="about">
      <h1 className="title">About Us</h1>

      <div className="about__desc">
        <div className="about__desc_text">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            magna ipsum. Aliquam in fermentum lectus. Praesent cursus quis odio
            ac luctus. Duis vehicula quis quam facilisis sollicitudin. Donec
            purus metus, laoreet molestie dolor quis, bibendum blandit lorem.
            Curabitur cursus leo ac felis interdum, a aliquet eros maximus.
            Integer euismod sagittis lacus sit amet lobortis. Fusce varius
            vehicula lorem, ut fringilla turpis consequat vel.
          </h3>
          <h3>
            Quisque eu erat nec dui cursus placerat. Duis accumsan dignissim
            venenatis. Donec sit amet erat facilisis justo euismod ullamcorper
            ut ultrices nulla. Sed hendrerit vitae ante ut lobortis. Vivamus
            aliquam felis et congue pretium. Ut luctus diam diam, ut pretium
            enim malesuada vitae. Vivamus non augue in dui pellentesque
            consectetur a condimentum metus.
          </h3>
          <ul>
            <li>
              Quisque porttitor tincidunt turpis, in vehicula neque scelerisque
              sed.
            </li>
            <li>
              Vivamus facilisis erat varius suscipit pulvinar. Aliquam ut tempus
              neque.
            </li>
            <li>
              Vivamus cursus eros massa, commodo facilisis arcu scelerisque
              suscipit.
            </li>
          </ul>
          <h3>
            Cras lobortis, dui vel cursus faucibus, magna urna hendrerit massa,
            et ornare lacus urna sit amet orci. Maecenas pretium ante vitae
            fringilla sagittis. Fusce hendrerit erat sed nulla faucibus, a
            pharetra mi sollicitudin. Fusce non bibendum ex.
          </h3>
        </div>
        <div>
          <img src={about} alt="" />
        </div>
      </div>

      <div className="about__block">
        <h1 className="about__block_rotate">
          Advantages and Distinctive Features
        </h1>
        <div className="about__block_desc">
          <div>
            <h1>1% for the Planet</h1>
            <h2>
              Since its founding, the company has donated over $100 million (as
              mentioned earlier) to environmental organizations around the world
              through its 1% for the Planet program
            </h2>
            <h1>Fair Trade certification</h1>
            <h2>
              More than 70% of Astro's products have Fair Trade certification,
              which guarantees fair pay for factory workers.
            </h2>
            <h1>Astro</h1>
            <h2>
              Fashionable clothes for your style. Express your uniqueness with
              our collection. Convenient search, fast delivery. Buy with
              pleasure!
            </h2>
          </div>
          <div className="about__block_side">
            <div>
              <h1>4.8 out of 5</h1>
              <h2>average product rating</h2>
            </div>
            <div>
              <h1>10%</h1>
              <h2>discount for new customers</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <p>rsgsdknsdlkksldgsggsd</p> */}
    </div>
  );
}

export default AU;
