import React from "react";
import classes from "./Roadmap.module.css";
import clsx from "clsx";
import { Heading, Text } from "../../common";

const Roadmap = () => {
  const data = [
    {
      date: "Q1 2023",
      title: "Simple Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Q2 2023",
      title: "Simple Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Q3 2023",
      title: "Simple Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Q4 2023",
      title: "Simple Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Q5 2023",
      title: "Simple Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "Q6 2023",
      title: "Simple Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section className={classes.wrapper}>
      {" "}
      <div className={clsx("container", classes.container)}>
        <div className={classes.header}>
          <Heading textCenter>Road Map</Heading>
          <Text xl base700 textCenter>
            UNS token roadmap is the first step towards buuilding the UNS
            utility ecosystem leading to the exchange & multisector
            partnerships.
          </Text>
        </div>
        <div className={classes.roadmap}>
          {data.map((event, i) => (
            <div
              className={clsx(
                classes.event,
                (i + 1) % 2 === 0 && classes.reverseOrder
              )}
              key={i}
            >
              <h2
                className={clsx(
                  (i + 1) % 2 === 0 ? classes.reverseDate : classes.date
                )}
              >
                {event.date}
              </h2>

              <div className={clsx(classes.details)}>
                <Text xl base900 semiBold className={classes.title}>
                  {event.title}
                </Text>
                <Text base600 textBase className={classes.description}>
                  {event.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
