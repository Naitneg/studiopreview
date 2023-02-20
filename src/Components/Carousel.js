import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Carousel.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../img/image1.jpg";
import Image2 from "../img/image2.jpg";
import { LoadingContext } from "../context/LoadingContext";
import Intro from "./Intro";
import { Element } from "react-scroll";

library.add(faArrowLeft, faArrowRight);

const NextArrow = (props) => {
  const loadCtx = useContext(LoadingContext);
  const { isLoading } = loadCtx;
  const loadinghand = () => {
    loadCtx.loadingHandler(!isLoading);
  };
  const { onClick, onKeyDown } = props;
  const handleChange = () => {
    loadinghand();
    onClick();
  };
  return (
    <div
      className="carousel-arrow next-arrow"
      onClick={handleChange}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon="arrow-right" size="2x" />
    </div>
  );
};

const PrevArrow = (props) => {
  const loadCtx = useContext(LoadingContext);
  const { isLoading } = loadCtx;
  const loadinghand = () => {
    loadCtx.loadingHandler(!isLoading);
  };
  const { onClick, onKeyDown } = props;
  const handleChange = () => {
    loadinghand();
    onClick();
  };
  return (
    <div
      className="carousel-arrow prev-arrow"
      onClick={handleChange}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon="arrow-left" size="2x" />
    </div>
  );
};

function Carousel() {
  const loadCtx = useContext(LoadingContext);
  const { isLoading } = loadCtx;

  const images = [
    {
      img: Image1,
    },
    {
      img: Image2,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    fade: true, // set fade option to true
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Element id="home" name="home">
      <div className="carousel">
        <Slider
          {...settings}
          onSwipe={() => {
            loadCtx.loadingHandler(!isLoading);
          }}
          afterChange={() => {
            loadCtx.loadingHandler(true);
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.img} alt={image.caption} />
            </div>
          ))}
        </Slider>
        <div className="clipath"></div>
        <Intro />
      </div>
    </Element>
  );
}

export default Carousel;
