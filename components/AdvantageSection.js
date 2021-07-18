import React from "react";
import CTAImage1 from "../assets/images/team/team.jpg";
import BlockTitle from "./BlockTitle";
import Image from "next/image";
import Link from "next/link";
const CTATwo = () => {
    return (
        <section className="advantages">
          <div className="container">
<div className="row">
    <div className="col-lg-6">

        <div className="cta-one__content">
            <BlockTitle
                textAlign="left"
                paraText="Advantages"
                titleText={`Why 75Recruit?`}
            />
            <div className="cta-one__text">
                <p>
                    Easy transition into China and expat representatives who will support you every step of the way.
                </p>
            </div>
            <ul className="list-unstyled cta-one__list">
                <li>
                    <i className="gg-check-o"></i>
                    You will work with one of our reps (an expat just like you) who will guide you through a process that they follow on a daily basis.
                </li>
                <li>
                    <i className="gg-check-o"></i>
                    We answer your questions. No funny games or misleading answers.
                </li>
                <li>
                    <i className="gg-check-o"></i>
                    Our Chinese team members will negotiate for you behind the scenes and help you communicate with your school if there are any issues.
                </li>
            </ul>
            <Link href="/contactus">
                <a className="thm-btn cta-one__btn">
                <span>I want to talk to a Representative</span>
            </a>
            </Link>

        </div>

    </div>
    <div className="col-lg-6 d-none d-lg-block my-auto">

        <Image src={CTAImage1} className="wow fadeInUp mx-auto d-block rounded-pill " data-wow-duration="1500ms" width={640} height={427}/>
        {/*<img*/}
        {/*    src={CTAImage1}*/}
        {/*    className="wow fadeInUp mx-auto d-block "*/}
        {/*    data-wow-duration="1500ms"*/}
        {/*    alt=""*/}
        {/*/>*/}
    </div>
</div>
          </div>
        </section>
    );
};

export default CTATwo;
