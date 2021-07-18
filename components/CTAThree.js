import React, {useState} from "react";
import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Cta3Shape1 from "../assets/images/shapes/cta-three-bg-1-1.png";
import Cta3Shape2 from "../assets/images/shapes/cta-three-bg-1-2.png";

const CTAThree = () => {
  const [open1, setOpen1] = useState({
    isOpen1: false,
  });
  const openModal1 = () => {
    setOpen1({
      isOpen1: true,
    });
  };
  return (
    <section className="cta-three">
      <img src={Cta3Shape1} className="cta-three__bg-1" alt="" />
      <img src={Cta3Shape2} className="cta-three__bg-2" alt="" />
      <Container className="text-center">
        <h3>
          China is an exciting place to live with high <br /> economic growth and low cost of living
        </h3>
        <p>But don't take our word on it, check out these external sources about cost of living and expats discussing their lives in China </p>
        <div className="cta-three__btn-wrap">
          <a target="_blank" href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=China" className="cta-three__btn">
            <i className="gg-credit-card"></i>
            <span>Cost of</span>
            <b>Living</b>
          </a>
          {/*<a target="_blank" href="https://www.youtube.com/watch?v=8YClzbvT_Gg" className="cta-three__btn">*/}
          {/*  <i className="gg-film"></i>*/}
          {/*  <span>Expats in</span>*/}
          {/*  <b>China</b>*/}
          {/*</a>*/}
          <div style={{'cursor':'pointer'}} onClick={openModal1} className="cta-three__btn">
            <i className="gg-film"></i>
            <span>Expats in</span>
            <b>China</b>
          </div>
          <div>
            <ModalVideo
                channel="youtube"
                isOpen={open1.isOpen1}
                videoId="8YClzbvT_Gg"
                onClose={() => setOpen1({ isOpen1: false })}
            />

          </div>



        </div>
      </Container>
    </section>
  );
};

export default CTAThree;
