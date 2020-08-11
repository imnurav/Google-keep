import React from "react";
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <p>
          Copyright © {year} by
          <a href="https://www.facebook.com/varun.kumar9811"> Varun kumar</a>
        </p>
      </div>
    </>
  );
};
export default Footer;
