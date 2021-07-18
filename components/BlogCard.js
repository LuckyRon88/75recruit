import React from "react";
import Link from "next/link";
import { Col, Row } from 'react-bootstrap';
import Image from "next/image";

const BlogCard = (props) => {
    // console.log(props.postImage.width);
    const content = props.post.content;

    return (


        <Col lg={4} md={6} sm={12}>

            <div className="blog-one__single">


                <a href={`/${props.post.full_slug}`}>
                    <Row>
                    <Col>
                        <div className="blog-one__image">

                            {/*<img src={props.postImage} alt="" />*/}
                            <Image className="imageForJob" src={"http:" + content.image} layout="responsive" width={370} height={200}/>

                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <div className="blog-one__content">
                            <div className="blog-one__circle"></div>
                            <div className="blog-one__content-inner">
                                <h5 className="blog-one__title">{content.title}</h5>
                                <div className="blog-one__meta " >

                                   <i className="fas fa-city"/> {content.location}


                                </div>
                                <div className="blog-one__meta " >

                                    <i className="fas fa-yen-sign"></i>  {content.salary_range}


                                </div>
                                <h6 className="blog-one__intro">

                                   { content.intro}

                                </h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                </a>






            </div>

        </Col>

    );
};

export default BlogCard;
