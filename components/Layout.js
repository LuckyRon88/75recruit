import React, { useState, useEffect } from "react";
import Head from "next/head";

import StoryblokService from '../utils/storyblok-service'
import AppleTouch from "../assets/images/favicons/apple-touch-icon.png";
import Fevicon32 from "../assets/images/favicons/favicon-32x32.png";
import Fevicon16 from "../assets/images/favicons/favicon-16x16.png";
import Fevicon512 from "../assets/images/favicons/android-chrome-512x512.png";
import Fevicon192 from "../assets/images/favicons/android-chrome-192x192.png";


const Layout = (props) => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div>
      <Head crossOrigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="YQuviCmzUcnl9xkDQ74xO1P8GedBFf9szGJO-P1Fjlk" />
        <title>{props.pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} />
        <link rel="icon" type="image/png" sizes="192x192" href={Fevicon192} />
        <link rel="icon" type="image/png" sizes="512x512" href={Fevicon512} />
        {/*<link*/}
        {/*  href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"*/}
        {/*  rel="stylesheet"*/}
        {/*/>*/}
        {/*<link rel="stylesheet" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css"/>*/}

        {/*<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8378442.js"/>*/}

      </Head>

      <div className="page-wrapper">{props.children}</div>

      {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css"*/}
      {/*      integrity="sha512-3PN6gfRNZEX4YFyz+sIyTF6pGlQiryJu9NlGhu9LrLMQ7eDjNgudQoFDK3WSNAayeIKc6B8WXXpo4a7HqxjKwg=="*/}
      {/*      crossOrigin="anonymous"/>*/}
      {StoryblokService.bridge()}

    </div>
  );
};

export default Layout;
