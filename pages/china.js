import Preloader from "../components/Preloader";
import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AppScreen from "../components/AppScreen";
import VideoOne from "../components/VideoOne";
import CTAThree from "../components/CTAThree";

const China = () => (

    <div>
        <Preloader />
        <Layout pageTitle="75Recruit - Contact">
            <Header
                btnClass="main-nav__btn-two"
                extraClassName="site-header-one__fixed-top"
            />
            <MobileMenu />
            <AppScreen/>
            <VideoOne/>
            <CTAThree/>


            <Contact />
            <Footer />
        </Layout>
    </div>
);

export default China;