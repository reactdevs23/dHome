import React, { useEffect, useState } from "react";
import classes from "./ProgressBar.module.css";
import Text from "../Text/Text";

const ProgressBar = ({ progress, percentage }) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progressValue.toFixed(0) + "%";

  const progressStyle = {
    width: progressPercentage,
  };
  useEffect(() => {
    setProgressValue(progress);
  }, [progress]);
  return (
    <>
      <div className={classes.progressBar}>
        <div className={classes.progress} style={progressStyle}>
          <Text className={classes.value} base0 sm semiBold>
            {percentage}%
          </Text>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
