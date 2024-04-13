import React, { useState } from "react";
import classes from "./Faq.module.css";
import clsx from "clsx";
import { SectionHeading, Heading, Highlight, Button, Text } from "../common";

const Faq = ({ bg }) => {
  const [activeFaq, setActiveFaq] = useState(1);
  const faqs = [
    {
      question: "What is UNS token?",
      answer:
        "UNS token is a BEP-20 token with a vision to become a multisector utility token. ",
    },
    {
      question: "What is the competitive advantage of UNS token?",
      answer:
        "UNS token is a BEP-20 token with a vision to become a multisector utility token. As a first step towards building its ecosystem, UNS token will have its own Cryptocurrency Exchange called as UNS Exchange, in which UNS token will be the governing native token followed by partnering with various projects in 4 different sectors of Education, Healthcare, Agriculture and Energy. ",
    },
    {
      question: "Why UNS token is called multi sector utility token?",
      answer:
        "UNS token is a BEP-20 token with a vision to become a multisector utility token. As a first step towards building its ecosystem, UNS token will have its own Cryptocurrency Exchange called as UNS Exchange ",
    },
    {
      question: "Where can I get UNS token?",
      answer:
        "UNS token is a BEP-20 token with a vision to become a multisector utility token.",
    },
    {
      question: "What is the price of UNS token ?",
      answer:
        "UNS token is a BEP-20 token with a vision to become a multisector utility token. As a first step towards building its ecosystem, UNS token will have its own Cryptocurrency Exchange called as UNS Exchange, in which UNS token will be the governing native token followed by partnering with various projects in 4 different sectors of Education, Healthcare, Agriculture and Energy. ",
    },
    {
      question: "Where can I use UNS token?",
      answer:
        "UNS token is a BEP-20 token with a vision to become a multisector utility token. ",
    },
  ];

  return (
    <section className={bg && classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        {" "}
        <div className={classes.header}>
          <SectionHeading>FAQ’s</SectionHeading>
          <div className={classes.headingAndButtons}>
            <Heading className={classes.heading}>
              Everything you need <br /> to know about UNS
              <Highlight> UNS</Highlight> 
            </Heading>
            <div className={classes.buttonContainer}>
              {/* if you want to go any page you have to pass "to="/" or you want to use link you can use href */}
              <Button to="/">See more</Button>
              <Button transparent onClick={() => {}}>
                Connect
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.allQuestion}>
            {faqs.map((faq, i) => (
              <div
                onClick={() => setActiveFaq(i)}
                className={clsx(
                  classes.faq,
                  i === activeFaq && classes.activeFaq
                )}
                key={i}
              >
                <Text base900 lg semiBold className={classes.question}>
                  {faq.question}
                </Text>{" "}
                {i === activeFaq && (
                  <Text base600 lg className={classes.answer}>
                    {faq.answer}
                  </Text>
                )}
              </div>
            ))}
          </div>

          <div className={classes.questionAndAnswer}>
            <Text base900 lg semiBold className={classes.myQuestion}>
              {faqs[activeFaq].question}
            </Text>{" "}
            <Text base600 lg>
              {faqs[activeFaq].answer}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
