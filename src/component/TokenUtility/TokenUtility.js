import React from "react";
import classes from "./TokenUtility.module.css";
import { SectionHeading, Heading, Highlight, Text } from "../common";
import clsx from "clsx";
import { multisectorToken, placeHolder, security } from "../../images";

const TokenUtility = () => {
  const features = [
    {
      icon: multisectorToken,
      title: "Multi-Sector Token",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: security,
      title: "World Class Security",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <div className={clsx("container", classes.container)}>
      <div className={classes.leftSide}>
        <SectionHeading>Token Utility</SectionHeading>{" "}
        <Heading className={classes.heading}>
          Supercharge your <br /> <Highlight>tokenized</Highlight>experience
        </Heading>
        <Text base600 textBase>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>{" "}
        <div className={classes.features}>
          {features.map((feature, i) => (
            <div className={classes.feature} key={i}>
              <div className={classes.iconContainer}>
                <img src={feature.icon} alt="#" className={classes.icon} />
              </div>
              <div className={classes.infoContainer}>
                <Text lg semiBold base900>
                  {feature.title}
                </Text>{" "}
                <Text base600 xs>
                  {feature.info}
                </Text>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.imgContainer}>
          <img src={placeHolder} alt="#" className={classes.img} />
        </div>
        <div className={classes.infoContainer}>
          <Heading base900 semiBold xl4 textCenter className={classes.title}>
            Educations
          </Heading>{" "}
          <Text base600 textBase textCenter>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TokenUtility;
