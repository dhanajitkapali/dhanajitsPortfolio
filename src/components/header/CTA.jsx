import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="dhanajitKapaliCV.pdf"
        className="btn"
        download="dhanajitKapaliCV.pdf"
      >
        Resume
      </a>

      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
