import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Requirements = ({ text, setShow }) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-box">
          <div className="text">
            <p className="title">{text}</p>
          </div>
          <div className="modal-close">
            <button onClick={() => setShow(false)}>X</button>
          </div>
        </div>
      </div>
    </>
  );
};

Requirements.propTypes = {
  text: PropTypes.string,
  setshow: PropTypes.bool,
};

Requirements.defaultProps = {
  text: "Operation run with success!",
  setshow: false,
};
