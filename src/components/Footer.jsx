import React from "react";
import "../scss/components/_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__link">
        <h3>START SHOPPING RIGHT NOW</h3>
        <button>
          <h2>Start shopping</h2>
        </button>
      </div>
      <div className="footer__nav">
        <h3>PAGES</h3>
        <h3>Catalog</h3>
        <h3>About Us</h3>
        <h3>Main</h3>
      </div>
      <div className="footer__nav">
        <h3>CONTACTS</h3>
        <h3>Contacts</h3>
        <h3>Profile</h3>
      </div>
    </div>
  );
};

export default Footer;
