import React from "react";
import { HiDownload } from "react-icons/hi";
import { Button, Heading, Text } from "../common";
import classes from "./Footer.module.css";

import {
  acnNewsWire,
  advfn,
  asiaOne,
  blogger,
  coinTelegraph,
  globeNewsWire,
  indonesianNewsWire,
  location,
  malaysiaBuzz,
  pressVietnam,
  seaChronical,
  streeInsider,
  thailandLatestNews,
  unsDigital,
  yahooFinance,
  yahooNews,
  dePresseNow,
  rectangleOne,
  mailIcon,
} from "../../images";
import clsx from "clsx";

const Footer = () => {
  const media = [
    coinTelegraph,
    yahooFinance,
    yahooNews,
    streeInsider,
    advfn,
    globeNewsWire,
    asiaOne,
    blogger,
    acnNewsWire,
    seaChronical,
    indonesianNewsWire,
    thailandLatestNews,
    pressVietnam,
    malaysiaBuzz,
    dePresseNow,
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.leftSide}>
          {" "}
          <div className={classes.locateUs}>
            <Heading xl2 semiBold className={classes.heading}>
              Locate Us
            </Heading>
            <div className={classes.locationDetails}>
              <div className={classes.box}>
                <div className={classes.iconContainer}>
                  <img src={unsDigital} alt="#" className={classes.icon} />
                </div>
                <Text textBase base300>
                  UNS Digital Technologies Private Limited
                </Text>
              </div>{" "}
              <div className={classes.box}>
                <div className={classes.iconContainer}>
                  <img src={location} alt="#" className={classes.icon} />
                </div>
                <Text textBase base300 className={classes.location}>
                  68 Circular Road, #02-01, 049422, Singapore
                </Text>
              </div>
            </div>
          </div>
          <div className={classes.mediaAboutUs}>
            {" "}
            <Heading xl semiBold className={classes.heading}>
              Media About Us
            </Heading>
            <div className={classes.media}>
              {media.map((el, i) => (
                <img src={el} alt="#" className={classes.mediaLogo} key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className={classes.rightSide}>
          {" "}
          <div className={classes.joinOurCommunity}>
            {" "}
            <Heading xl2 semiBold className={classes.heading}>
              Join Our Community
            </Heading>
            <Button>JOIN NOW</Button>
          </div>
          <div className={classes.associatePartner}>
            <div className={classes.partnerContainer}>
              <div className={classes.info}>
                <Text semiBold base0 textBase className={classes.title}>
                  Associate Partners
                </Text>

                <div className={classes.partner}>
                  <Heading xl2 base300 className={classes.heading}>
                    Rectangle One
                  </Heading>{" "}
                  <Text base400 sm className={classes.subHeading}>
                    Partner in Crypto Space
                  </Text>
                </div>
              </div>
            </div>

            <div className={classes.partnerImgContainer}>
              <img src={rectangleOne} alt="#" className={classes.partnerImg} />
            </div>
          </div>
          <div className={classes.contactUsContainer}>
            <div className={classes.contactUs}>
              <a href="mailto:info@uns.technology" className={classes.box}>
                <div className={classes.iconContainer}>
                  <img src={mailIcon} alt="#" className={classes.icon} />{" "}
                </div>
                <div>
                  <Text base400 sm>
                    For Enquiry mail us:
                  </Text>
                  <p className={classes.link}>info@uns.technology</p>
                </div>
              </a>{" "}
              <a href="mailto:info@uns.technology" className={classes.box}>
                <div
                  className={classes.iconContainer}
                  style={{ border: "none" }}
                ></div>
                <div>
                  <Text base400 sm>
                    For support mail us:
                  </Text>
                  <p
                    href="mailto:support@uns.technology"
                    className={classes.link}
                  >
                    support@uns.technology
                  </p>
                </div>
              </a>
            </div>
            <div className={classes.box}>
              {" "}
              <div
                className={clsx(classes.iconContainer, classes.buttonContainer)}
                style={{ border: "none" }}
              ></div>
              <Button className={classes.button} onClick={() => {}}>
                Disclaimer <HiDownload className={classes.downloadIcon} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("container", classes.copyRight)}>
        <Text base400 textBase textCenter>
          ©2024 UNS. All Rights Reserved.
        </Text>
      </div>
    </section>
  );
};

export default Footer;
