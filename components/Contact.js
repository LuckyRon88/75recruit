
import BlockTitle from "./BlockTitle";
import React, { useState } from 'react';

import { useForm } from '@formcarry/react';
const Contact = () => {
  // const [show, setShow] = useState(false);
  //
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const {state, submit} = useForm({
    id: 'vm25FX26qn'
  });

  if (state.submitted) {
    return <div>Thank you! We received your submission. We will be in contact in 24 hours or less.</div>;
  }
  // function handleSubmit(event) {
  //   alert("Thank you for submitting");
  //   event.preventDefault();
  // }

  return (
    <section className="contact-one">
      {/*<Head crossOrigin="anonymous">*/}
      {/*  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8378442.js"/>*/}

      {/*</Head>*/}
      {/*<img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />*/}
      <div className="container mx-auto">
        <div className="row mx-auto">
          <div className="col-lg-12">
            <form onSubmit={submit} className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Have Question? Write \n a Message [Anything!]`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" name="name" />
                </div>
                <div className="col-lg-6">
                  <input id="email" type="email" placeholder="Email Address" name="email" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Subject" name="subject" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Phone Number" name="phone" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message and please tell us the best way to contact you (Skype/WhatsApp/Email/Phone/Telegram)"
                    name="message"
                  ></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Send Message</span>
                  </button>
                  {/*<button type="submit" className="thm-btn contact-one__btn"/></div>*/}
                </div>
              </div>
            </form>

          </div>
          {/*<div*/}
          {/*  className="col-lg-5 d-flex wow fadeInRight"*/}
          {/*  data-wow-duration="1500ms"*/}
          {/*>*/}
          {/*  <div className="my-auto">*/}
          {/*    <div className="testimonials-one__image">*/}
          {/*      <Image src={TestiImageTwo} width={496} height={496}/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default Contact;
