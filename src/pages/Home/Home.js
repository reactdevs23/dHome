import React from "react";
import Roadmap from "../../component/Roadmap/Roadmap";
import Tokenomics from "../../component/Tokenomics/Tokenomics";
import HeroSection from "../../component/HeroSection/HeroSection";

import EductionalCourses from "../../component/EductionalCourses/EductionalCourses";
import clsx from "clsx";
import TeamLeaderAndMembers from "../../component/TeamLeaderAndMembers/TeamLeaderAndMembers";
import TokenUtility from "../../component/TokenUtility/TokenUtility";
import Projects from "../../component/Projects/Projects";
import AboutUns from "../../component/AboutUns/AboutUns";
import Services from "../../component/Services/Services";
import Faq from "../../component/Faq/Faq";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUns />{" "}
      <div className={clsx(classes.tokenomicsAndCourses, "container")}>
        <div className={classes.content}>
          <Tokenomics />
        </div>
        <div className={classes.content}>
          <EductionalCourses />
        </div>
      </div>
      <TeamLeaderAndMembers />
      <TokenUtility />
      <Projects />
      <Services />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Home;
