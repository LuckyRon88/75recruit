import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Thumbs, Controller } from "swiper";
SwiperCore.use([Pagination, Thumbs, Controller]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import TestiQoute from "../assets/images/shapes/testi-qoute-1-1.png";
import Image from "next/image";
import TestiImageOne from "../assets/images/resources/testi-1-1.jpg";
import TestiImageTwo from "../assets/images/resources/testi-1-2.jpg";
import TestiImageThree from "../assets/images/resources/testi-1-3.jpg";

const Testimonials = (props) => {
  const paramsTwo = {
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-one__pagination-wrap .swiper-pagination",
      clickable: true,
    },
  };

  const paramsOne = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1400,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="testimonials-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap  d-none d-lg-block ">
              <div className="testimonials-one__icon">
                <div className="testimonials-one__icon-inner ">
                  <img src={TestiQoute} alt="" />
                </div>
              </div>
              <div className="testimonials-one__thumb-carousel ">
                <Swiper {...paramsOne}>
                  <div className="swiper-slide">
                    {/*<div className="testimonials-one__image">*/}
                    {/*  <img src={TestiImageOne} alt="Awesome Image" />*/}
                    {/*</div>*/}
                    <div className="testimonials-one__image">
                      <Image src={TestiImageOne} width={496} height={496}/>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    {/*<div className="testimonials-one__image">*/}
                    {/*  <img src={TestiImageTwo} alt="Awesome Image" />*/}
                    {/*</div>*/}
                    <div className="testimonials-one__image">
                      <Image src={TestiImageTwo} width={496} height={496}/>
                    </div>

                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <Image src={TestiImageThree} width={496} height={496}/>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto">
              <BlockTitle
                textAlign="left"
                paraText="Feedback"
                titleText={`From Previous\n  Teachers`}
              />
              <span style={{'fontSize': '9px'}}>Names and pictures changed for privacy reasons</span>
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        [My rep from 75Recruit] was from the US and it was nice to be guided fully in English but also someone who understood the real situation on the ground and could explain to me both the good and bad things about living in China. He was very much straight to the point and no fluff.
                      </p>

                      <h3 className="testimonials-one__title">David K. [Canada]</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        [My Rep from 75Recruit] was a Canadian guy with a lot of energy. He was so good at describing the situation in China that by the time that I landed, I felt like I was already a local.
                      </p>

                      <h3 className="testimonials-one__title">Darren F. [USA]</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        What I enjoyed the most about working with you was the fact that you told me positive and negative things (you weren't afraid to tell me things that others might hide out of fear of me not accepting the job). Thanks!
                      </p>

                      <h3 className="testimonials-one__title">Kelly M. [USA]</h3>
                    </div>
                  </div>
                </Swiper>
                <div className="testimonials-one__pagination-wrap">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
