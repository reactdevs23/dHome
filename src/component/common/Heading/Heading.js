import React from "react";
import classes from "./Heading.module.css";
import clsx from "clsx";

const Heading = ({
  className,
  xl6,
  xl,
  xl2,
  xl4,
  base0,
  base300,
  semiBold,
  textBase,
  textCenter,
  children,
}) => {
  return (
    <h2
      className={clsx(
        className,
        classes.heading,
        textBase && classes.textBase,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl4 && classes.xl4,
        xl6 && classes.xl6,
        base0 && classes.base0,
        base300 && classes.base300,
        semiBold && classes.semiBold,
        textCenter && classes.textCenter
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
