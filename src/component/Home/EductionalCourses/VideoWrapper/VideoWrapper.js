import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./VideoWrapper.module.css";
import "./VideoWrapper.css";
import clsx from "clsx";

const VideoWrapper = ({ url }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderData = [
    "https://www.youtube.com/watch?v=668nUCeBHyY",
    "https://www.youtube.com/watch?v=668nUCeBHyY",
  ];
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow isActive={!currentSlide} />,
    nextArrow: (
      <CustomNextArrow isActive={currentSlide === sliderData.length - 1} />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };
  return (
    <div className={clsx(classes.videoWrapper)} id="videoWrapper">
      <Slider {...settings}>
        {sliderData.map((url, i) => (
          <div className={classes.playerWrapper} key={i}>
            <ReactPlayer
              url={url}
              className={classes.reactPlayer}
              width="100%"
              height="100%"
              controls
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoWrapper;
const CustomPrevArrow = ({ isActive, onClick }) => {
  // Custom previous arrow component
  return (
    <button
      className={`${classes.previousButton} ${
        isActive ? classes.activeButton : ""
      }`}
      onClick={onClick}
    >
      <MdOutlineChevronRight className={classes.arrow} />{" "}
    </button>
  );
};

const CustomNextArrow = ({ isActive, onClick }) => {
  // Custom next arrow component
  return (
    <button
      onClick={onClick}
      className={`${classes.nextButton} ${
        isActive ? classes.activeButton : ""
      }`}
    >
      <MdOutlineChevronLeft className={classes.arrow} />
    </button>
  );
};
