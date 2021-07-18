import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Preloader from "../Preloader";
import Layout from "../Layout";
import Header from "../Header";
import MobileMenu from "../MobileMenu";
import PageHeader from "../PageHeader";
import Footer from "../Footer";
import Image from "next/image";
import React from "react";
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import LogoImage from "../../assets/images/logo-1-1.png"
import Contact from "../Contact";

const BlogPost = ({ blok }) => (
    <SbEditable content={blok} key={blok._uid}>
    <Layout pageTitle="75Recruit - JobDetail">
        <Preloader />
        <Header btnClass="main-nav__btn-two" />
        <MobileMenu />
        {/*<PageHeader pageHeading={blok.title} />*/}

        <section className="blog-details">
            <Container>
                <Row>
                    <Col lg={10} xs={12}>
                        <div className="blog-details__main">

                            <Col lg={5} xs={12}>
                            <div className="blog-details__image">
                                {/*<img src={blok.image} alt="" />*/}
                                <Image src={"http:" + blok.image} layout="responsive" width={370} height={200}/>
                            </div>
                    </Col>


                            <div className="blog-details__content">
                                <div className="blog-one__meta">
                                    <a href="#">
                                        <i className="fas fa-city"/> {blok.location}
                                    </a>
                                    <a href="#">
                                        <i className="fas fa-yen-sign"></i>  {blok.salary_range}
                                    </a>
                                </div>
                                <h3>{blok.title}</h3>
                                <p>{render(blok.long_text)}</p>
                            </div>
                            <div className="blog-author">
                                <div className="blog-author__image">
                                    {/*<img src={AuthorImage} alt="" />*/}
                                    <Image src={LogoImage} width={1111} height={414}></Image>
                                </div>
                                <div className="blog-author__content">
                                    <h3>Ashley@75Recruit.com</h3>
                                    <p>
                                        The chinese job market for foreign teachers moves quite fast and a lot of times, we simply dont have enough time to put all the ads on our website - the best way to find out if we have the position you are looking for us is to contact us and we will look through our database to see if we have something that suits you well. Email us at Ashley@75Recruit.com

                                    </p>
                                </div>
                            </div>
                            <Contact/>
                            {/*<div className="comment-form">*/}
                            {/*    <h3 className="comment-one__block-title">Leave a Comment</h3>*/}
                            {/*    <form className="contact-form-validated contact-one__form">*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-lg-6">*/}
                            {/*                <input type="text" placeholder="Name" name="name" />*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-6">*/}
                            {/*                <input type="text" placeholder="Email Address" name="email" />*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-6">*/}
                            {/*                <input type="text" placeholder="Website" name="website" />*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-6">*/}
                            {/*                <input type="text" placeholder="Subject" name="subject" />*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-12">*/}
                            {/*                <textarea placeholder="Write Message" name="message"></textarea>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-12 text-left">*/}
                            {/*                <button type="submit" className="thm-btn contact-one__btn">*/}
                            {/*                    <span>Submit Comment</span>*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                            {/*<div className="blog-details__meta">*/}
                            {/*  <div className="blog-details__tags">*/}
                            {/*    <span>Tags: </span> <a href="#">Business,</a>{" "}*/}
                            {/*    <a href="#">Agency,</a> <a href="#">Technology</a>*/}
                            {/*  </div>*/}
                            {/*  <div className="blog-details__share">*/}
                            {/*    <a href="#">*/}
                            {/*      <i className="fab fa-facebook-square"></i>*/}
                            {/*    </a>*/}
                            {/*    <a href="#">*/}
                            {/*      <i className="fab fa-twitter"></i>*/}
                            {/*    </a>*/}
                            {/*    <a href="#">*/}
                            {/*      <i className="fab fa-instagram"></i>*/}
                            {/*    </a>*/}
                            {/*    <a href="#">*/}
                            {/*      <i className="fab fa-pinterest-p"></i>*/}
                            {/*    </a>*/}
                            {/*  </div>*/}
                            {/*</div>*/}
                        </div>

                    </Col>
                    {/*<Col lg={4}>*/}
                    {/*    <BlogSidebar />*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </section>

        <Footer />
    </Layout>
    </SbEditable>

);

export default BlogPost;
