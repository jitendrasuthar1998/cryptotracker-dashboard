import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./styles.css";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="mailto:jitendrasuthar995@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        
        <a href="https://www.linkedin.com/in/jitendrasuthar1998/">
          <LinkedInIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
