// import React, { useState } from "react";
import { SFooter } from "./Footer.styled";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  // const [getState, setState] = useState();

  return (
    <SFooter className="d-flex justify-content-center align-items-center fixed-bottom">
      <div id="social-wrapper">
        {/* <a href="#"> */}
        <FontAwesomeIcon icon={faFacebook} className="mx-4 my-3 social-icon" />
        {/* </a> */}
        {/* <a href="#"> */}
        <FontAwesomeIcon icon={faInstagram} className="mx-4 my-3 social-icon" />
        {/* </a> */}
        {/* <a href="#"> */}
        <FontAwesomeIcon
          icon={faCode}
          color="white"
          className="mx-4 my-3 social-icon"
        />
        {/* </a> */}
      </div>
    </SFooter>
  );
};

export default Footer;
