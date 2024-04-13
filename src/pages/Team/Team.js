import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import classes from "./Team.module.css";
import {
  PandiyrajanP,
  SanjeevanR,
  MAkshayaValarmathi,
  JagadheeshKumarM,
  KViswanathan,
  ASNallasivam,
  NChandraSekar,
  SPalanisamy,
  ARavichandran,
  SSaravanaKumar,
  SJagadheeshKumar,
  GovindaRajV,
  PerumalG,
  ASathya,
  TRThangavelu,
  CGanesan,
  ANithya,
  TMohanKumar,
  KKrishnamoorthi,
  PVijayaKanth,
  VChinnasamy,
  ASabapathi,
  PKathiravan,
  NNatrayan,
  MPerumal,
  GKrittinan,
  MGanavel,
  GRangasamy,
  MuthusamyKM,
  SanmugumVG,
} from "../../images";
import clsx from "clsx";
import { Heading, Highlight, Text } from "../../component/common";
import Faq from "../../component/Faq/Faq";

const Team = () => {
  const teamMembers = [
    {
      img: PandiyrajanP,
      name: "Pandiyrajan P",
      designation: "Group Manager",
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
      img: SanjeevanR,
      name: "Sanjeevan R",
      designation: "CMO",
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
      img: MAkshayaValarmathi,
      name: "M. Akshaya Valarmathi",
      designation: "Agriculture (Hydroponic Farming) ",
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
      img: JagadheeshKumarM,
      name: "Jagadheesh Kumar M",
      designation: "Energies (Solar Power Plants & Wind Mills)",
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
      img: KViswanathan,
      name: "K. Viswanathan",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: ASNallasivam,
      name: "A.S. Nallasivam",
      designation: "CLA",
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
      img: NChandraSekar,
      name: "N Chandra Sekar",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: SPalanisamy,
      name: "S. Palanisamy",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: ARavichandran,
      name: "A. Ravichandran",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: SSaravanaKumar,
      name: "S Saravana Kumar",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: SJagadheeshKumar,
      name: "S. Jagadheesh Kumar",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: GovindaRajV,
      name: "Govinda Raj V",
      designation: "Energies (Solar Power Plants & Wind Mills)",
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
      img: PerumalG,
      name: "Perumal. G",
      designation: "Energies (Solar Power Plants & Wind Mills)",
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
      img: ASathya,
      name: "A Sathya",
      designation: "Energies (Solar Power Plants & Wind Mills)",
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
      img: TRThangavelu,
      name: "T.R. Thangavelu",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: CGanesan,
      name: "C Ganesan",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: ANithya,
      name: "A Nithya",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: TMohanKumar,
      name: "T Mohan Kumar",
      designation: "Crypto Exchange",
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
      img: KKrishnamoorthi,
      name: "K Krishnamoorthi",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: PVijayaKanth,
      name: "P. VijayaKanth",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: VChinnasamy,
      name: "V Chinnasamy",
      designation: "Energies (Solar Power Plants & Wind Mills)",
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
      img: ASabapathi,
      name: "A. Sabapathi",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: PKathiravan,
      name: "P Kathiravan",
      designation: "Energies (Solar Power Plants & Wind Mills)",
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
      img: NNatrayan,
      name: "N. Natrayan",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: MPerumal,
      name: "M. Perumal",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: GKrittinan,
      name: "G. Krittinan",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: MGanavel,
      name: "M. Ganavel",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: GRangasamy,
      name: "G Rangasamy",
      designation: "Agriculture (Hydroponic Farming)",
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
      img: MuthusamyKM,
      name: "Muthusamy K M",
      designation: "Advisor (Agriculture)",
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
      img: SanmugumVG,
      name: "Sanmugum V G",
      designation: "Advisor ( Exchange)",
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
    <>
      <div className={classes.wrapper}>
        <div className={clsx("container", classes.container)}>
          <div className={classes.header}>
            <Heading base900 textCenter>
              <Highlight>UNS</Highlight>Core Team Member
            </Heading>
            <Text xl base600 textCenter>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
          </div>
          <div className={classes.allTeamMember}>
            {teamMembers.map((el, i) => (
              <div className={classes.teamMember} key={i}>
                <img src={el.img} className={classes.img} alt={el.name} />
                <div className={classes.infoContainer}>
                  <div className={classes.nameAndDesignation}>
                    <Heading textBase base900 semiBold className={classes.name}>
                      {el.name}
                    </Heading>
                    <Text sm base600>
                      {el.designation.slice(0, 30)}
                      {el.designation.length > 30 && "..."}
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
            ))}
          </div>
        </div>
      </div>
      <Faq bg />
    </>
  );
};

export default Team;
