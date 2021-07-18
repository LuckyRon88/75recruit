import StoryblokService from "../../utils/storyblok-service";
import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import PageHeader from "../../components/PageHeader";
import {Col, Container, Row} from "react-bootstrap";

import PostPagination from "../../components/PostPagination";
import Footer from "../../components/Footer";
import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import Preloader from "../../components/Preloader";
import BlogCard from "../../components/BlogCard";


function BlogMainPage ({posts}) {


    // static async getInitialProps({ query }) {
    //     StoryblokService.setQuery(query);
    //
    //     const res = await StoryblokService.get("cdn/stories", {
    //
    //         starts_with: "positions/",
    //         // per_page: 3,
    //         // page: 1,
    //     });
    //
    //
    //     return {
    //         res,
    //     };
    // }
    //
    // static async getInitialProps({ query }) {
    //     StoryblokService.setQuery(query);
    //
    //     const res = await StoryblokService.get("cdn/stories", {
    //
    //         starts_with: "positions/",
    //         // per_page: 3,
    //         // page: 1,
    //     });
    //
    //
    //     return {
    //         res,
    //     };
    // }

    // componentDidMount() {
    //     StoryblokService.initEditor(this);
    // }




        return (
            <Layout pageTitle="75Recruit | Jobs">

                <Preloader />
                <Header btnClass="main-nav__btn-two"/>
                <MobileMenu/>
                {/*<PageHeader pageHeading='My Site'/>*/}

                <Container className="job_header">
                    <Row>
        <Col lg={10} xs={12}>
            <h1>Some of our Jobs</h1>
            <p>The job market for expats in China moves quite fast and at times, we don't have time to update the website with ALL of the positions that we have available. The best is to contact us on <Link href="/contactus"><a>our contact page</a></Link>  to speak with one of our agents about what specifically you are looking or if you any special requirements or email us at Ashley@75Recruit.com </p>
        </Col>
                    </Row>
                </Container>


                <section className="blog-grid">
                    <Container>
                        <Row>
                            {posts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    post={post}
                    //                 postImage={post.content.image}
                    //                 postTitle={post.content.title}
                    //                 postIntro={post.content.intro}
                    //                 postDate={`
                    // ${new Date(post.created_at).getDay()}.
                    // ${new Date(post.created_at).getMonth()}.
                    // ${new Date(post.created_at).getFullYear()}`}
                    //                 postCommentCount="2 comments"
                    //                 postLink={`/${post.full_slug}`}
                                />
                            ))}
                        </Row>
                        {/*<PostPagination/>*/}
                    </Container>
                </section>

                <Footer/>

            </Layout>
        );

}
export async function getStaticProps({query}) {
    // StoryblokService.setQuery(query);    // StoryblokService.setQuery(query);
    const res = await StoryblokService.get("cdn/stories", {

                starts_with: "positions/",
                // per_page: 3,
                // page: 1,
            });


            return {
                props:{
                    posts: res.data.stories,
                }

            };

}

export default  BlogMainPage;