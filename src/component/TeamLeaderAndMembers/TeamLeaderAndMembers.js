import React from "react";
import classes from "./TeamLeaderAndMembers.module.css";
import clsx from "clsx";
import { MdArrowRightAlt } from "react-icons/md";

import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import { SectionHeading, Heading, Highlight, Button, Text } from "../common";
import { ceo, experts, five, four, one, three, two } from "../../images";
import { Link } from "react-router-dom";

const TeamLeaderAndMembers = () => {
  const teams = [
    {
      img: ceo,
      name: "Suresh Sathyanarayanan",
      designation: "CEO (Hon)",
      twitterHandle: "@twitter-handle",
      socialAcc: [
        {
          icon: <FaLinkedinIn className={classes.socialIcon} />,
          link: "#",
        },
        {
          icon: <FaTwitter className={classes.socialIcon} />,
          link: "#",
        },
        {
          icon: <FaFacebookF className={classes.socialIcon} />,
          link: "#",
        },
      ],
      biography:
        "[short biography] lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isCeo: true,
    },
    {
      img: one,
      name: "Munish Batra",
      designation: "Head-Learning & Development",
      twitterHandle: "@twitter-handle",
      socialAcc: [
        {
          icon: <FaLinkedinIn className={classes.socialIcon} />,
          link: "#",
        },
        {
          icon: <FaTwitter className={classes.socialIcon} />,
          link: "#",
        },
      ],
    },
    {
      img: two,
      name: "Munish Batra",
      designation: "Head-Learning & Development",
      twitterHandle: "@twitter-handle",
      socialAcc: [
        {
          icon: <FaLinkedinIn className={classes.socialIcon} />,
          link: "#",
        },
        {
          icon: <FaTwitter className={classes.socialIcon} />,
          link: "#",
        },
      ],
    },
    {
      img: three,
      name: "Munish Batra",
      designation: "Head-Learning & Development",
      twitterHandle: "@twitter-handle",
      socialAcc: [
        {
          icon: <FaLinkedinIn className={classes.socialIcon} />,
          link: "#",
        },
        {
          icon: <FaTwitter className={classes.socialIcon} />,
          link: "#",
        },
      ],
    },
    {
      img: four,
      name: "Munish Batra",
      designation: "Head-Learning & Development",
      twitterHandle: "@twitter-handle",
      socialAcc: [
        {
          icon: <FaLinkedinIn className={classes.socialIcon} />,
          link: "#",
        },
        {
          icon: <FaTwitter className={classes.socialIcon} />,
          link: "#",
        },
      ],
    },
    {
      img: five,
      name: "Munish Batra",
      designation: "Head-Learning & Development",
      twitterHandle: "@twitter-handle",
      socialAcc: [
        {
          icon: <FaLinkedinIn className={classes.socialIcon} />,
          link: "#",
        },
        {
          icon: <FaTwitter className={classes.socialIcon} />,
          link: "#",
        },
      ],
    },
  ];
  return (
    <section className={classes.wrapper}>
      {" "}
      <div className={clsx("container", classes.container)}>
        <div className={classes.header}>
          <SectionHeading>Team</SectionHeading>
          <div className={classes.headingAndButtons}>
            {" "}
            <Heading className={classes.heading}>
              Meet our <Highlight> team leader</Highlight> & awesome members
            </Heading>
            <div className={classes.buttonContainer}>
              {/* if you want to go any page you have to pass "to="/" or you want to use link you can use href */}
              <Button onClick={() => {}}>Career</Button>
              <Button transparent onClick={() => {}}>
                Connect
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.teams}>
          {teams.map((el, i) => (
            <React.Fragment key={i}>
              {el.isCeo ? (
                <div className={classes.ceo} key={i}>
                  <div className={classes.imgAndInfo}>
                    <img src={el.img} className={classes.img} alt="#" />
                    <div className={classes.infoContainer}>
                      <div className={classes.nameAndDesignation}>
                        <Heading xl2 semiBold base900 className={classes.name}>
                          {el.name}
                        </Heading>
                        <Text lg base600>
                          {el.designation}
                        </Text>
                      </div>
                      <a
                        href={el.twitterHandle}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.twitterHandle}
                      >
                        {el.twitterHandle}
                      </a>
                      <div className={classes.socialContainer}>
                        {el.socialAcc.map((social, id) => (
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            key={id}
                            className={classes.social}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Text textBase base0>
                    {el.biography}
                  </Text>
                </div>
              ) : (
                <div className={classes.teamMember} key={i}>
                  <img src={el.img} className={classes.img} alt="#" />
                  <div className={classes.infoContainer}>
                    <div className={classes.nameAndDesignation}>
                      <Heading xl base900 semiBold className={classes.name}>
                        {el.name}
                      </Heading>
                      <Text sm base600>
                        {el.designation}
                      </Text>
                    </div>

                    <div className={classes.socialContainer}>
                      <a
                        href={el.twitterHandle}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.twitterHandle}
                      >
                        {el.twitterHandle}
                      </a>
                      {el.socialAcc.map((social, id) => (
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noreferrer"
                          key={id}
                          className={classes.social}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}{" "}
          <Link to="/team" className={classes.experts}>
            <div className={classes.iconAndHeading}>
              <img src={experts} alt="#" className={classes.expertIcon} />
              <Heading xl2 semiBold base0>
                30+ Experts
              </Heading>
            </div>
            <div className={classes.allTeamMember}>
              <Heading base0 textBase>
                View UNS Full Core
              </Heading>
              <p className={classes.moreTeamMember}>
                Team Member <MdArrowRightAlt className={classes.moreArrow} />
              </p>{" "}
              <div className={classes.customersImages}>
                {teams.map((el, i) => (
                  <img
                    src={el.img}
                    alt="#"
                    key={i}
                    className={classes.customerImage}
                    style={{ marginLeft: `-${i + 1 * 10}px` }}
                  />
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamLeaderAndMembers;
