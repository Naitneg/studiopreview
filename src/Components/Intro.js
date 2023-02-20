import React, { useEffect, useState } from "react";
import Backdrop from "./Modal/Backdrop";
import Modal from "./Modal/Modal";
import "./intro.css";
import LoadingLine from "./Loading";
function Intro() {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const handleShowComponent = () => {
    setShowComponent(true);
    setShowBackdrop(true);
  };

  const handleToggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
    setShowComponent(false);
  };

  useEffect(() => {
    if (showBackdrop) {
      document.body.style.overflow = "hidden"; // prevent scrolling when backdrop is visible
    } else {
      document.body.style.overflow = "visible"; // allow scrolling when backdrop is hidden
    }
  }, [showBackdrop]);
  return (
    <div className="intro">
      <LoadingLine />
      <div className="intro-text">
        <h1>Studio PikëMEDIA</h1>
        <div className="vija"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere,
          quaerat qui provident rerum vero est officiis iure eos? Consectetur
        </p>
        <button onClick={handleShowComponent}>CONTACT US</button>
        {showBackdrop && <Backdrop onClick={handleToggleBackdrop} />}
        <Modal showComponent={showComponent} onClose={handleToggleBackdrop} />
      </div>
    </div>
  );
}

export default Intro;
