import React from "react";

import "./backdrop.css";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop"
      onClick={props.onClick} // this allows the backdrop to be clickable
    ></div>
  );
};

export default Backdrop;
