import clsx from "clsx";
import { GoArrowUpRight } from "react-icons/go";
import classes from "./Button.module.css";

const Button = ({
  to,
  onClick,
  className,
  href,
  children,
  mlAuto,
  transparent,
  ...rest
}) => {
  const classname = clsx(
    className,
    classes.btn,
    transparent && classes.transparent,
    mlAuto && classes.mlAuto,
    ""
  );

  if (to)
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classname}
        to={to}
        {...rest}
      >
        {children} {transparent && <GoArrowUpRight className={classes.arrow} />}
      </a>
    );

  if (onClick)
    return (
      <button className={classname} onClick={onClick} {...rest}>
        {children} {transparent && <GoArrowUpRight className={classes.arrow} />}
      </button>
    );

  return (
    <button className={classname} {...rest}>
      {children} {transparent && <GoArrowUpRight className={classes.arrow} />}
    </button>
  );
};

export default Button;
