import React from "react";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { Text, Heading } from "../common";
import {
  bitcoin,
  bottomLeft,
  bottomRight,
  five,
  four,
  one,
  probit,
  three,
  topLeft,
  topRight,
  two,
  verichains,
} from "../../images";
import { FiArrowUpRight } from "react-icons/fi";

const HeroSection = () => {
  const features = [
    {
      logo: probit,
      label: "Listed in",
      title: "ProBit",
    },
    {
      logo: verichains,
      label: "Audited by",
      title: "Verichains",
    },
  ];
  const customers = [one, two, three, four, five];
  return (
    <section className={clsx("container", classes.heroSection)}>
      <img src={topLeft} alt="#" className={classes.topLeft} />
      <img src={topRight} alt="#" className={classes.topRight} />
      <img src={bottomLeft} alt="#" className={classes.bottomLeft} />
      <img src={bottomRight} alt="#" className={classes.bottomRight} />
      <div className={classes.container}>
        <Heading xl6 textCenter>
          UNS Token <br /> with Multisector Utility
        </Heading>
        <Text xl textCenter>
          UNS Token is a BEP20 utility token with a multifaceted purpose. It
          serves as a bridge, linking real-world utilities to the digital realm.
        </Text>
        <div className={classes.features}>
          {features.map((feature, i) => (
            <div className={classes.feature} key={i}>
              <img src={feature.logo} alt="#" className={classes.logo} />
              <div>
                <Text sm base500 className={classes.label}>
                  Listed in
                </Text>
                <Heading xl>{feature.title}</Heading>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.secure}>
          <Text semiBold base900>
            Secure Payment Platform
          </Text>
          <Text sm>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sed mauris a ex posuere luctus.
          </Text>
          <Text sm primaryDefault className={classes.link}>
            <a href="#/" target="_blank" rel="noreferrer">
              Our Shop is Live
            </a>{" "}
            <FiArrowUpRight className={classes.arrow} />
          </Text>
        </div>

        <img src={bitcoin} alt="#" className={classes.bitCoin} />
        <div className={classes.customers}>
          <div className={classes.customersImages}>
            {customers.map((image, i) => (
              <img
                src={image}
                alt="#"
                key={i}
                className={classes.customerImage}
                style={{ marginLeft: `-${i + 1 * 10}px` }}
              />
            ))}
          </div>
          <Text semiBold base900 xl2>
            800K+ Customers
          </Text>
          <Text sm>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
