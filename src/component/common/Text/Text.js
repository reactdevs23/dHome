import React from "react";
import clsx from "clsx";
import classes from "./Text.module.css";

const Text = ({
  className,
  xs,
  sm,
  xl,
  textBase,
  lg,
  primaryDefault,
  base0,
  base300,
  base400,
  base500,
  base600,
  base700,
  base800,
  base900,
  semiBold,
  textCenter,
  children,
}) => {
  return (
    <p
      className={clsx(
        className,
        classes.text,
        sm && classes.sm,
        xs && classes.xs,
        xl && classes.xl,
        lg && classes.lg,
        textBase && classes.textBase,
        primaryDefault && classes.primaryDefault,
        base0 && classes.base0,
        base300 && classes.base300,
        base400 && classes.base400,
        base500 && classes.base500,
        base600 && classes.base600,
        base700 && classes.base700,
        base800 && classes.base800,
        base900 && classes.base900,
        semiBold && classes.semiBold,
        textCenter && classes.textCenter
      )}
    >
      {children}
    </p>
  );
};

export default Text;
