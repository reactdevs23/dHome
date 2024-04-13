import React, { useState } from "react";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./EductionalCourses.module.css";
import "./EductionalCourses.css";
import clsx from "clsx";
import { placeHolder } from "../../images";
import { Text } from "../common";
import VideoWrapper from "./VideoWrapper/VideoWrapper";

const EductionalCourses = ({ url }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderData = [
    {
      img: placeHolder,
      title: "EDUCATIONAL  </br> <b>COURSES</b>",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      img: placeHolder,
      title: "EDUCATIONAL  </br> <b>COURSES</b>",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      img: placeHolder,
      title: "EDUCATIONAL </br> <b>COURSES</b>",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
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
    <div className={classes.wrapper} id="educationalCourses">
      <div className={clsx(classes.container)}>
        <Slider {...settings}>
          {sliderData.map((el, i) => (
            <div key={i}>
              <div className={classes.card}>
                <img src={el.img} alt="#" className={classes.img} />
                <div className={classes.infoContainer}>
                  <h3
                    className={classes.title}
                    dangerouslySetInnerHTML={{ __html: el.title }}
                  ></h3>
                  <Text sm base600>
                    {el.info}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <VideoWrapper />
    </div>
  );
};

export default EductionalCourses;
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
