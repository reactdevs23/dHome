import React from "react";
import Supply from "./Supply/Supply";
import { tokenomics } from "../../../images";
import classes from "./Tokenomics.module.css";
import clsx from "clsx";
import { Heading, Text } from "../../common";

const Tokenomics = () => {
  return (
    <div className={clsx(classes.container)}>
      <div className={classes.iconContainer}>
        <img src={tokenomics} alt="#" className={classes.icon} />
      </div>

      <div className={classes.headingContainer}>
        <Heading xl2 semiBold>
          UNS Tokenomics
        </Heading>
        <Text textBase base600 textCenter>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </div>
      <Supply />
    </div>
  );
};

export default Tokenomics;
