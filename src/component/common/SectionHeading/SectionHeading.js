import React from "react";
import classes from "./SectionHeading.module.css";
import clsx from "clsx";
import Text from "../Text/Text";

const SectionHeading = ({ children, className }) => {
  return (
    <div className={clsx(classes.container, className)}>
      {" "}
      <div className={classes.line}></div>
      <Text semiBold primaryDefault textBase>
        {children}
      </Text>
    </div>
  );
};

export default SectionHeading;
