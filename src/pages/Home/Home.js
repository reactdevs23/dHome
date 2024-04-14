import React from "react";
import Roadmap from "../../component/Home/Roadmap/Roadmap";
import Tokenomics from "../../component/Home/Tokenomics/Tokenomics";
import HeroSection from "../../component/Home/HeroSection/HeroSection";
import EductionalCourses from "../../component/Home/EductionalCourses/EductionalCourses";
import clsx from "clsx";
import TeamLeaderAndMembers from "../../component/Home/TeamLeaderAndMembers/TeamLeaderAndMembers";
import TokenUtility from "../../component/Home/TokenUtility/TokenUtility";
import Projects from "../../component/Home/Projects/Projects";
import AboutUns from "../../component/Home/AboutUns/AboutUns";
import Services from "../../component/Home/Services/Services";
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
