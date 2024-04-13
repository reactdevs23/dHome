import React from "react";
import classes from "./Services.module.css";
import clsx from "clsx";
import { placeHolder } from "../../images";
import { Heading, Text } from "../common";

const Services = () => {
  const data = [
    {
      img: placeHolder,
      title: "Healthcare",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      img: placeHolder,
      title: "Crypto Exchange",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        {" "}
        {data.map((el, i) => (
          <div
            className={clsx(
              classes.card,
              (i + 1) % 2 === 0 && classes.reverseCard
            )}
            key={i}
          >
            <div className={classes.infoContainer}>
              <Heading
                base900
                semiBold
                xl4
                textCenter
                className={classes.title}
              >
                {el.title}
              </Heading>{" "}
              <Text base600 textBase textCenter>
                {el.info}
              </Text>
            </div>{" "}
            <div className={classes.imgContainer}>
              <img src={el.img} alt="#" className={classes.img} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
