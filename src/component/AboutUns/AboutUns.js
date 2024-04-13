import clsx from "clsx";
import classes from "./AboutUns.module.css";
import React from "react";
import { Heading, Highlight, SectionHeading, Text } from "../common";
import { placeHolder } from "../../images";

const AboutUns = () => {
  const data = [
    {
      title: "Powering the UNS Ecosystem",
      info: "UNS Token, a Multisector Utility BEP20 Token that enables in connecting real-life utilities to the digital world.",
      img: placeHolder,
    },
    {
      title: "Multi-Sector Utility Integrations",
      info: "UNS is focused on building partnerships with various organizations specifically in essential sectors: Agriculture through Hydroponic Farming, Education, Solar Energy, Healthcare and Crypto Exchange.",
      img: placeHolder,
    },
    {
      title: "Utility at the Core",
      info: "UNS – Bridging Digital World to Real World Utility by integrating payments through UNS Token in the essential sectors.",
      img: placeHolder,
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.header}>
          <SectionHeading>About UNS</SectionHeading>
          <Heading className={classes.heading}>
            Make a lasting <br /> first impressions with
            <Highlight> UNS </Highlight>
          </Heading>
        </div>
        <div className={classes.facilitites}>
          {data.map((el, i) => (
            <div
              className={clsx(
                classes.facility,
                (i + 1) % 2 === 0 && classes.reverseFacility
              )}
              key={i}
            >
              <div className={classes.infoContainer}>
                <Heading semiBold xl base900>
                  {el.title}
                </Heading>
                <Text textBase base600>
                  {el.info}
                </Text>
              </div>
              <img src={el.img} alt="#" className={classes.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUns;
