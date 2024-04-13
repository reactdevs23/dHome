import clsx from "clsx";
import React from "react";
import classes from "./Highlight.module.css";

const Highlight = ({ className, children }) => {
  return <span className={clsx(className, classes.highlight)}>{children}</span>;
};

export default Highlight;
