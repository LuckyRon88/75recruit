import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Frequently Asked Questions"
          titleText={`Here are some of the most common \n Questions that we get`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="Do you hire Non-native english speakers? (Passport not from the US, Ireland, Canada, UK, NZ, Aus, or SA)"
            content="It is no lie that there are a lot of people working illegaly in China but we do not get involved with that side of the industry. That being said, some schools/provinces can legally get a real teaching visa for non-native speakers if they have a degree from one of the 7 countries listed above. Contact us below to get direct answers"
            status={false}
          />
          <AccordionItem
            title="What are the requirements to teach in China with a proper work visa?"
            content="You must have 3 main things: 1) Bachelors degree in any subject and 2) Clean criminal background 3) Passport from one of the 7 countries and/or degree from one of those countries."
            status={true}
          />
          <AccordionItem
            title="I have no work experience since I just recently finished University - can I still get a job?"
            content="Yes, we have entry level positions. The nice thing about us is that we have entry level positions in public/private schools and a few universities."
            status={false}
          />
          <AccordionItem
            title="Is there support once I come to China or will I be all alone?"
            content="We partner with schools based on the support that they provide teachers (or in the cases where they don't have good support like Chinese Universities then we'll be very upfront about what to expect). For the most part, we will go out of our way to make your first 3 months in China as smooth as possible (teaching you how to handle work situations, bank account, Chinese Apps/life, etc). We are always here for questions and the schools that we pick to work with are generally well known for support."
            status={false}
          />
          <AccordionItem
            title="What jobs do you have?"
            content="Check out our Job page 75Recruit.com/positions"
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
