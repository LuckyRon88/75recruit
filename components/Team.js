import React from "react";
import BlockTitle from "./BlockTitle";

import TeamShape1 from "../assets/images/shapes/team-1-bg-1-1.png";
import TeamShape2 from "../assets/images/shapes/team-1-bg-1-2.png";
import Image from "next/image";
import RonQRCode from "../assets/images/RonSmallQR-min.jpg";
import MengQRCode from "../assets/images/MengSmallQR-min.jpg";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <img src={TeamShape1} className="team-one__bg-shape-1" alt="" />
      <img src={TeamShape2} className="team-one__bg-shape-2" alt="" />
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Team Leaders"
          titleText={`Single point contacts will \n provide a better experience for you`}
        />
        <div className="row justify-content-center">
          {/*<div className="col-lg-3 col-md-6 col-sm-12">*/}
          {/*  <div className="team-one__single">*/}
          {/*    <div className="team-one__circle"></div>*/}
          {/*    <div className="team-one__inner">*/}
          {/*      <h3>Nathaniel McKenzie</h3>*/}
          {/*      <p>App Designer</p>*/}
          {/*      <div className="team-one__image">*/}
          {/*        <img src={TeamMemeber1} alt="" />*/}
          {/*      </div>*/}
          {/*      <div className="team-one__social">*/}
          {/*        <a href="#">*/}
          {/*          <i className="fab fa-facebook-square"></i>*/}
          {/*        </a>*/}
          {/*        <a href="#">*/}
          {/*          <i className="fab fa-twitter"></i>*/}
          {/*        </a>*/}
          {/*        <a href="#">*/}
          {/*          <i className="fab fa-instagram"></i>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="col-lg-3 col-md-6 col-sm-12">*/}
          {/*  <div className="team-one__single">*/}
          {/*    <div className="team-one__circle"></div>*/}
          {/*    <div className="team-one__inner">*/}
          {/*      <h3>Ronald Parks</h3>*/}
          {/*      <p>App Designer</p>*/}
          {/*      <div className="team-one__image">*/}
          {/*        <img src={TeamMemeber2} alt="" />*/}
          {/*      </div>*/}
          {/*      <div className="team-one__social">*/}
          {/*        <a href="#">*/}
          {/*          <i className="fab fa-facebook-square"></i>*/}
          {/*        </a>*/}
          {/*        <a href="#">*/}
          {/*          <i className="fab fa-twitter"></i>*/}
          {/*        </a>*/}
          {/*        <a href="#">*/}
          {/*          <i className="fab fa-instagram"></i>*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
   {/*<div className="col-lg-3 col-md-6 col-sm-12">*/}
   {/*         <div className="team-one__single">*/}
   {/*           <div className="team-one__circle"></div>*/}
   {/*           <div className="team-one__inner">*/}
   {/*             <h3>Teachers</h3>*/}
   {/*             <p>English Speaking</p>*/}
   {/*             <h6>Apply@75Recruit.com</h6>*/}
   {/*             <h6+86-151-386-93451 <span style={{"fontSize":"8px"}}>Skype/WhatsApp</span></h6>*/}
   {/*             <h6><i className="gg-phone"></i></h6>*/}
   {/*             <div className="team-one__image">*/}
   {/*               /!*<img src={RonQRCode} alt="" />*!/*/}
   {/*               <Image src={RonQRCode} fill="cover" width={904} height={914}></Image>*/}
   {/*             </div>*/}
   {/*             /!*<div className="team-one__social">*!/*/}
   {/*             /!*  <ul>*!/*/}
   {/*             /!*    <li>hello</li>*!/*/}
   {/*             /!*    <li>hello2</li>*!/*/}
   {/*             /!*  </ul>*!/*/}
   {/*             /!*  /!*<a href="#">*!/*!/*/}
   {/*             /!*  /!*  <i className="fab fa-facebook-square"></i>*!/*!/*/}
   {/*             /!*  /!*</a>*!/*!/*/}
   {/*             /!*  /!*<a href="#">*!/*!/*/}
   {/*             /!*  /!*  <i className="fab fa-twitter"></i>*!/*!/*/}
   {/*             /!*  /!*</a>*!/*!/*/}
   {/*             /!*  /!*<a href="#">*!/*!/*/}
   {/*             /!*  /!*  <i className="fab fa-instagram"></i>*!/*!/*/}
   {/*             /!*  /!*</a>*!/*!/*/}
   {/*             /!*</div>*!/*/}
   {/*           </div>*/}
   {/*         </div>*/}
   {/*       </div>*/}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Teachers</h3>
                <p>English</p>
                <h6>Ashley@75Recruit.com</h6>
                <h6>+86-151-386-93451<span style={{"fontSize":"8px"}}>Skype/WhatsApp</span></h6>
                <h6><i className="gg-phone"></i>+86-151-386-93451</h6>
                <div className="team-one__image">
                  <Image src={MengQRCode} fill="cover" width={904} height={914}></Image>
                </div>
                {/*<div className="team-one__social">*/}
                {/*  <a href="#">*/}
                {/*    <i className="fab fa-facebook-square"></i>*/}
                {/*  </a>*/}
                {/*  <a href="#">*/}
                {/*    <i className="fab fa-twitter"></i>*/}
                {/*  </a>*/}
                {/*  <a href="#">*/}
                {/*    <i className="fab fa-instagram"></i>*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
