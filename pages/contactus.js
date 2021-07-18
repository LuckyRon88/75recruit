import React from "react";
import Preloader from "../components/Preloader";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Contact from "../components/Contact";


const ContactUs = () => (
    <div>
        <Preloader />

        <Layout pageTitle="75Recruit - Contact">
            <Header
                btnClass="main-nav__btn-two"
                extraClassName="site-header-one__fixed-top"
            />
            <MobileMenu />
            <FAQ />
            <Team />
            <Contact />
            <Footer />
        </Layout>
        </div>
)

export default ContactUs;