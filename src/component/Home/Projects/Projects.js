import React from "react";
import { SectionHeading, Heading, Highlight, Button, Text } from "../../common";
import classes from "./Projects.module.css";
import clsx from "clsx";
import { placeHolder } from "../../../images";

const Projects = () => {
  const data = [
    {
      img: placeHolder,
      title: "Hydroponic Pilot Project Near Bangalore",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: placeHolder,
      title: "Hydroponic Pilot Project Near Bangalore",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: placeHolder,
      title: "Hydroponic Pilot Project Near Bangalore",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        {" "}
        <div className={classes.header}>
          <SectionHeading>Projects</SectionHeading>
          <div className={classes.headingAndButtons}>
            <Heading className={classes.heading}>
              Collections of <br /> our recent <Highlight> projects</Highlight> 
            </Heading>
            <div className={classes.buttonContainer}>
              {/* if you want to go any page you have to pass "to="/" or you want to use link you can use href */}

              <Button transparent onClick={() => {}}>
                Connect
              </Button>
            </div>
          </div>
        </div>{" "}
        <div className={classes.facilitites}>
          {data.map((el, i) => (
            <div
              className={clsx(
                classes.facility,
                (i + 1) % 2 === 0 && classes.reverseFacility
              )}
              key={i}
            >
              {" "}
              <img src={el.img} alt="#" className={classes.img} />
              <div className={classes.infoContainer}>
                <Heading base900 xl2 semiBold>
                  {el.title}
                </Heading>
                <Text textBase base600>
                  {el.info}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
