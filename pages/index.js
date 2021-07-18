import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Contact from "../components/Contact";

import FunFact from "../components/FunFact";

import Testimonials from "../components/Testimonials";
import React from "react";
import AdvantageSection from "../components/AdvantageSection";


const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="75Recruit - Home">
      <Header
        btnClass="main-nav__btn-two"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Banner />

<AdvantageSection/>
        <FunFact />
        <Testimonials />
        <Contact />
        <Footer />
      {/*divaybe here - we can develop a second page abut China where you talk about the cities taht you operate in, etc*/}
      {/*  <CTATwo />*/}
      {/*<Services />*/}
      {/*<CTAOne />*/}

      {/*<Pricing />*/}

      {/*<Clients />*/}
      {/*<Team />*/}
      {/*<VideoOne />*/}
      {/*<AppScreen />*/}
      {/*<FAQ />*/}
      {/*<BlogHome />*/}

      {/*<CTAThree />*/}

    </Layout>
  </div>
);

export default HomePage;
