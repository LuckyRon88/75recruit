import React from "react";
import { Container, Row } from "react-bootstrap";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";
import Image from "next/image";

import appImage1 from "../assets/images/app-shots/bike.png";
import appImage2 from "../assets/images/app-shots/didi.png";
import appImage3 from "../assets/images/app-shots/dianping.jpg";
import appImage4 from "../assets/images/app-shots/taobao.png";
import appImage5 from "../assets/images/app-shots/wechat.png";

const AppScreen = (props) => {
  const params = {
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
    slidesPerView: 5,
    rebuildOnUpdate: true,
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      767: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      991: {
        slidesPerGroup: 2,
        slidesPerView: 3,
      },
      1499: {
        slidesPerGroup: 5,
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="app-shot-one" id="screens">
      <Container fluid>
        <BlockTitle
          textAlign="center"
          paraText="Your Phone can truly do anything in China"
          titleText={`Some of the Apps that \n you'll be using on your daily life`}
          text="Everything in China is truly digital. Everything. It's a cashless society (most people don't carry cash/coins/credit cards) but rather pay with popular mobile Apps. Public bicycles/ebikes? Food delivery? Paying for the subway? Entering your building? Maid service? Movie tickets? Groceries delivered to your home? There is an App at identical prices as going to the store. We cannot stress enough how convenient life is in China."
        />
        <div className="app-shot-one__carousel">
          <Swiper {...params}>
            <div className="item">
              {/*<img src={appImage1} alt="Awesome Image" />*/}
              <Image src={appImage1} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage2} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage3} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage4} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage5} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage1} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage2} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage3} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage4} alt="public bikes are common" width={278} height={471}/>
            </div>
            <div className="item">
              <Image src={appImage5} alt="public bikes are common" width={278} height={471}/>
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default AppScreen;
