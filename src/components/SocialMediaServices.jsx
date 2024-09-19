"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Services.module.css";
import Image from "next/image";

/// Images
import iconOne from "public/images/seo.png";
import iconTwo from "public/images/smm.png";
import iconThree from "public/images/proofreading.png";
import iconFour from "public/images/sector.png";
import iconFive from "public/images/seo-1.png";
import ServiceTxt from "public/images/service-text.png";
import DottImage from "public/images/services-doted.png";

const SocialMediaServices = (props) => {
  const [activeTab1, setActiveTab1] = useState("tab1");
  function fun1(tabs1) {
    setActiveTab1(tabs1);
  }

  function handleTabChange(event) {
    const selectedTab = event.target.value;
    setActiveTab1(selectedTab);
  }

  const { title, para } = props.content;

  return (
    <>
      <section className={`${styles.services} pt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="text-center f-45 fw600 sf_regular mb-2">
                {title}
              </h2>

              <p className="f-16 text-center fw400 poppins line22 mx-w-7xl mb-lg-4 pb-3 pb-sm-4">
                {para}
              </p>
            </Col>

            <Col lg={6} className="d-lg-block d-none">
              <div className={styles.analpost}>
                <Row>
                  <Col lg={6} className="px-3">
                    <div
                      className={activeTab1 == "tab1" ? styles.active : ""}
                      onClick={() => fun1("tab1")}
                      href="#"
                    >
                      <div
                        className={`${styles.card} ${styles.serviceCard} d-flex align-items-center align-center justify-content-center mb-4`}
                      >
                        <div>
                          <Image
                            src={iconOne}
                            width={72}
                            height={72}
                            alt="Icons1"
                            className="d-block m-auto"
                          />

                          <h5 className="lettspa fw500 f-16 text-center poppins mb-2 mt-3">
                            Facebook Advertising
                            <br className="d-lg-block d-none" /> Services
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab2" ? styles.active : ""}
                      onClick={() => fun1("tab2")}
                      href="#"
                    >
                      <div
                        className={`${styles.card} ${styles.serviceCard} d-flex align-items-center align-center justify-content-center mb-4`}
                      >
                        <div>
                          <Image
                            src={iconThree}
                            width={72}
                            height={72}
                            alt="Icons1"
                            className="d-block m-auto"
                          />

                          <h5 className="lettspa fw500 f-16 text-center poppins mb-2 mt-3">
                            Instagram Advertising{" "}
                            <br className="d-lg-block d-none" /> Services
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} className="px-3">
                    <div
                      className={activeTab1 == "tab4" ? styles.active : ""}
                      onClick={() => fun1("tab4")}
                      href="#"
                    >
                      <div
                        className={`${styles.card} ${styles.serviceCard} d-flex align-items-center align-center justify-content-center mb-4`}
                      >
                        <div>
                          <Image
                            src={iconTwo}
                            width={72}
                            height={72}
                            alt="Icons1"
                            className="d-block m-auto"
                          />

                          <h5 className="lettspa fw500 f-16 text-center poppins mb-2 mt-3">
                            Youtube Advertising
                            <br className="d-lg-block d-none" /> Services
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab5" ? styles.active : ""}
                      onClick={() => fun1("tab5")}
                      href="#"
                    >
                      <div
                        className={`${styles.card} ${styles.serviceCard} d-flex align-items-center align-center justify-content-center mb-4`}
                      >
                        <div>
                          <Image
                            src={iconFour}
                            width={72}
                            height={72}
                            alt="Icons1"
                            className="d-block m-auto"
                          />

                          <h5 className="lettspa fw500 f-16 text-center poppins mb-2 mt-3">
                            Twitter Advertising
                            <br className="d-lg-block d-none" /> Services
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} className="d-lg-block d-none">
              {activeTab1 == "tab1" && (
                <div>
                  <div className="content ps-4 pt-5">
                    <Image src={iconFive} alt="Facebook" className="mb-4" />
                    <h3 className="poppins fw700 mb-3 f-40">
                      Facebook Advertising <br className="d-lg-block d-none" />{" "}
                      Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      If you seek professional Facebook Advertising Services,
                      you have come to the right place.We will help you reach
                      your targeted audience using the most sought-after social
                      media platform.
                    </p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div>
                  <div className="content ps-4 pt-5">
                    <h3 className="poppins fw700 mb-3 f-40">
                      Youtube Advertising Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      If your target audience is present on YouTube, then our
                      experts cash bring you closer to your visual marketing
                      goal. We bring you subscriptions, likes, and shares on
                      your videos or channels with carefully targeted captions
                      and tags.
                    </p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab3" && (
                <div>
                  <div className="content ps-4 pt-5">
                    <h3 className="poppins fw700 mb-3 f-40">
                      Instagram Advertising Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      Instagram is home to billions of active users scrolling
                      through news feeds every day. We bring your brand closer
                      to your audience with Instagram availability with
                      thousands of daily views and interactions with potential
                      customers.
                    </p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab4" && (
                <div>
                  <div className="content ps-4 pt-5">
                    <h3 className="poppins fw700 mb-3 f-40">
                      Twitter Advertising Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      Our team of professional in-house Twitter marketing
                      experts, media strategists, and content creators drive
                      attention by building brand awareness, influencer
                      relations, and follower engagement.
                    </p>
                  </div>
                </div>
              )}
            </Col>

            <Col sm={12} className="d-lg-none d-block">
              <div className="dropdown">
                <select
                  value={activeTab1}
                  onChange={handleTabChange}
                  className={`w-100 lettspa fw600 text-black f-17 poppins ${styles.tabs}`}
                >
                  <option value="tab1">Digital Marketing</option>
                  <option value="tab2">Search Engine Optimization</option>
                  <option value="tab3">Managed IT Services</option>
                  <option value="tab4">Dedicated Hosting</option>
                </select>
              </div>
            </Col>
            <Col lg={12} className="d-lg-none d-block mt-3 mt-md-5">
              {activeTab1 == "tab1" && (
                <div>
                  <div className="content pt-2">
                    <h3 className="poppins fw700 mb-3 f-40">
                      Facebook Advertising Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      If you seek professional Facebook Advertising Services,
                      you have come to the right place.We will help you reach
                      your targeted audience using the most sought-after social
                      media platform.
                    </p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div>
                  <div className="content pt-2">
                    <h3 className="poppins fw700 mb-3 f-40">
                      Youtube Advertising Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      If your target audience is present on YouTube, then our
                      experts cash bring you closer to your visual marketing
                      goal. We bring you subscriptions, likes, and shares on
                      your videos or channels with carefully targeted captions
                      and tags.
                    </p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab3" && (
                <div>
                  <div className="content pt-2">
                    <h3 className="poppins fw700 mb-3 f-40">
                      Instagram Advertising Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      Instagram is home to billions of active users scrolling
                      through news feeds every day. We bring your brand closer
                      to your audience with Instagram availability with
                      thousands of daily views and interactions with potential
                      customers.
                    </p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab4" && (
                <div>
                  <div className="content pt-2">
                    <h3 className="poppins fw700 mb-3 f-40">
                      Twitter Advertising Services
                    </h3>
                    <p className="f-15 fw400 poppins line21">
                      Our team of professional in-house Twitter marketing
                      experts, media strategists, and content creators drive
                      attention by building brand awareness, influencer
                      relations, and follower engagement.
                    </p>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SocialMediaServices;
