import logoSvg from "../assets/img/logo.svg";
import user from "../assets/img/User.svg";
import cart from "../assets/img/cart.svg";

import "../scss/components/_header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="43" height="43" src={logoSvg} alt="logo" />
          </div>
        </Link>
        <ul className="header__nav">
          <li>
            <Link to="/catalog">
              <h3>Сatalog</h3>
            </Link>
          </li>
          <li>
            <Link to="/AboutUs">
              <h3>About Us</h3>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <h3>Contacts</h3>
            </Link>
          </li>
        </ul>
        <div className="header__icons">
          <Link to="/user">
            {/* <div> */}
            <img src={user} alt="user" />
            {/* </div> */}
          </Link>
          <Link to="/cart">
            {/* <div> */}
            <img src={cart} alt="cart" />
            <h3>cart - 4</h3>
            {/* </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
