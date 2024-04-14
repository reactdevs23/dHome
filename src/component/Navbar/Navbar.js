import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import classes from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { logo } from "../../images";
import clsx from "clsx";

const Navbar = () => {
  const navItems = [
    { navItem: "About", to: "/about" },
    { navItem: "Whitepaper", to: "/whitepaper" },
    { navItem: "Shop", to: "/shop" },
    { navItem: "Stake", to: "/stake" },
    { navItem: "Buy UNS", to: "/buyuns" },
    { navItem: "Partner with us", to: "/partner" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleConnect = () => {};
  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <Link
          to="/"
          className={[classes.navItem, classes.logoContainer].join(" ")}
          onClick={() => setSidebar((prev) => !prev)}
        >
          <img src={logo} alt="#" className={classes.logo} />
          <h1 className={classes.logoText}>
            Brand <span className={classes.bold}>Logo</span>
          </h1>
        </Link>

        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          {navItems.map((el, i) => (
            <Link
              key={i}
              className={classes.navItem}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </Link>
          ))}{" "}
          <button
            className={clsx(classes.button, classes.mobileButton)}
            onClick={handleConnect}
          >
            Contact Us <GoArrowUpRight className={classes.arrow} />
          </button>{" "}
        </div>
        <div className={classes.buttonContainer}>
          <button className={clsx(classes.button)} onClick={handleConnect}>
            Contact Us <GoArrowUpRight className={classes.arrow} />
          </button>
          {sidebar ? (
            <div className={classes.iconContainer}>
              {" "}
              <IoMdClose
                className={classes.icon}
                onClick={() => setSidebar((prev) => !prev)}
              />
            </div>
          ) : (
            <div className={classes.iconContainer}>
              <GiHamburgerMenu
                className={classes.icon}
                onClick={() => setSidebar((prev) => !prev)}
              />{" "}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
