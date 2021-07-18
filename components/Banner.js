import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Head from "next/head";
import BannerShape from "../assets/images/banner/banner-5-1-min.png";
import Image from 'next/image'
import Link from "next/link";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
      <section className="banner-one" id="home">

        <div className="banner-one__bg-shape-1"><Image src={BannerShape} width={667} height={900} /></div>

        {/*<img loading="lazy"  src={BannerShape} className="banner-one__bg-shape-1" alt="" />*/}
        {/*<div className="banner-one__bg-shape-1"> <Image src={BannerShape} width={600} height={900} className="banner-one__bg-shape-1" alt=""/></div>*/}

        <div
            className="banner-one__bg "
            // style={{ backgroundImage: `url(${BannerBG})` }}
        ></div>
        <div className="container ">
          <ModalVideo
              channel="youtube"
              isOpen={open.isOpen}
              videoId="45X0Q1d6Jwk"
              onClose={() => setOpen({ isOpen: false })}
          />
          <div onClick={openModal} className="banner-one__video video-popup">
            {/*<i className="fa fa-play"></i>*/}
            <i className="gg-play-button"></i>

          </div>
          {/*<div className="banner-one__moc">*/}
          {/*  <img*/}
          {/*      src={BannerMoc}*/}
          {/*      className="wow fadeInUp"*/}
          {/*      data-wow-duration="1500ms"*/}
          {/*      alt=""*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="row">
            <div className="col-lg-7">
              <div className="banner-one__content">
                {/*<form*/}
                {/*    className="banner-one__mc-form mc-form"*/}
                {/*    data-url="MAILCHIMP__POPUP__FORM__URL"*/}
                {/*>*/}
                {/*  <input type="text" name="email" placeholder="Email address" />*/}
                {/*  <button type="submit" className="thm-btn banner-one__mc-btn">*/}
                {/*    <span>Free Trial</span>*/}
                {/*  </button>*/}
                {/*</form>*/}
                <div className="mc-form__response"></div>
                <h3>
                  Start Your <br /> China <br /> Adventure
                </h3>
                <p>
                  We are the recruiting agency that we{" "}
                  <br /> wished existed when we first came to China {" "}<br/>

                </p>
                <Link href="/positions"  style={{'padding':'10px'}} >
                  <a className="thm-btn banner-one__btn">
                    <span>Jobs</span>
                  </a>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Banner;
