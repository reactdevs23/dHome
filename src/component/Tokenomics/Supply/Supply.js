import React from "react";
import classes from "./Supply.module.css";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import { Text } from "../../common";

const Supply = () => {
  const data = [
    { title: "ICO", percentage: 10 },
    { title: "Airdrop", percentage: 15 },
    { title: "Community Reward", percentage: 10 },
    { title: "Product Marketing", percentage: 20 },
    { title: "Foundation", percentage: 15 },
    { title: "Partnership & Ecosyst", percentage: 30 },
  ];
  const maxPercentage = Math.max(...data.map((item) => item.percentage));
  return (
    <div className={classes.container}>
      <div className={classes.supplyContainer}>
        {data.map((item, index) => (
          <div className={classes.supply} key={index}>
            <Text xs base500 className={classes.title}>
              {item.title}
            </Text>
            <ProgressBar
              progress={(item.percentage / maxPercentage) * 100}
              percentage={item.percentage}
            />
          </div>
        ))}
      </div>

      <div className={classes.totalSupply}>
        <Text sm base500>
          Maximum Supply:
        </Text>
        <Text sm base800 className={classes.value}>
          {" "}
          1 Billion
        </Text>
      </div>
    </div>
  );
};

export default Supply;
