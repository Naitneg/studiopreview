import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./services.css";
import { MdPhotoCamera, MdDesignServices } from "react-icons/md";
import { ImVideoCamera } from "react-icons/im";
import { RiVoiceprintFill } from "react-icons/ri";

export default function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div className="services">
      <Slider
        asNavFor={nav2}
        ref={slider1Ref}
        draggable={true}
        arrows={false}
        swipeToSlide={true}
      >
        <div className="pari">
          <img
            src="https://www.dpreview.com/files/p/articles/3252233813/JLG_2022_1115_064.jpeg"
            alt="camera"
          />
        </div>
        <div className="pari">
          <img
            src="https://d9pfvpeevxz0y.cloudfront.net/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/05/52119_Blog-1200x673.png.webp"
            alt=""
          />
        </div>
        <div className="pari">
          <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_537311951_100178.jpg"
            alt=""
          />
        </div>
        <div className="pari">
          <img
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/the-ultimate-guide-to-digital-marketing-61726311bf393-sej-760x400.webp"
            alt=""
          />
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider2Ref}
        slidesToShow={3}
        focusOnSelect={true}
        autoplay={true}
        arrows={true}
        pauseOnFocus={true}
        pauseOnHover={true}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        <div className="pari-posht">
          <div className="icon">
            <MdPhotoCamera />
          </div>
          <h2>Photography</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.
          </p>
        </div>
        <div className="pari-posht">
          <div className="icon">
            <ImVideoCamera />
          </div>
          <h2>Video</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.
          </p>
        </div>
        <div className="pari-posht">
          <div className="icon">
            <MdDesignServices />
          </div>
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.
          </p>
        </div>
        <div className="pari-posht">
          <div className="icon">
            <RiVoiceprintFill />
          </div>
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.
          </p>
        </div>
      </Slider>
    </div>
  );
}
