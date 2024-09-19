"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Services.module.css";
import Image from "next/image";

/// Images
import SEO from "public/images/seo.png";
import SMM from "public/images/smm.png";
import PRoofR from "public/images/proofreading.png";
import Keyword from "public/images/keyword.png";
import LinkBuild from "public/images/linkbuild.png";
import OnPage from "public/images/onpage.png";
import OffPage from "public/images/offpage.png";
import Trancription from "public/images/transcription.png";
import Editing from "public/images/editing.png";
import SeoColor from "public/images/seo-1.png";
import SmmColor from "public/images/smm-1.png";
import ProofColor from "public/images/proofreading-1.png";
import Btn from "./Btn";

const DigitalService = () => {
  const [activeTab1, setActiveTab1] = useState("tab1");
  function fun1(tabs1) {
    setActiveTab1(tabs1);
  }

  function handleTabChange(event) {
    const selectedTab = event.target.value;
    setActiveTab1(selectedTab);
  }

  return (
    <>
      <section className={`${styles.services} d-flex align-items-center`}>
        <Container>
          <Row className="">
            <Col lg={6} className="d-lg-block d-none">
              <div className={styles.analpost}>
                <Row className="justify-content-center">
                  <Col lg={9}>
                    <div
                      className={activeTab1 == "tab1" ? styles.active : ""}
                      onClick={() => fun1("tab1")}
                      href="#"
                    >
                      <div
                        className={`${styles.card} h-100 ${styles.digitalCards}`}
                      >
                        <Image
                          src={SEO}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw500 f-16 text-center poppins mb-2 mt-3">
                          Search Engine Optimization
                        </h5>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab2" ? styles.active : ""}
                      onClick={() => fun1("tab2")}
                      href="#"
                    >
                      <div
                        className={`${styles.card} h-100 ${styles.digitalCards}`}
                      >
                        <Image
                          src={SMM}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw500 f-16 text-center poppins mb-2 mt-3">
                          Social Media Marketing
                        </h5>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab3" ? styles.active : ""}
                      onClick={() => fun1("tab3")}
                      href="#"
                    >
                      <div
                        className={`${styles.card} h-100 ${styles.digitalCards}`}
                      >
                        <Image
                          src={PRoofR}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw500 f-16 text-center poppins mb-2 mt-3">
                          Content Writing Services
                        </h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} className="d-lg-block d-none">
              {activeTab1 == "tab1" && (
                <div>
                  <div className="content">
                    <Image
                      src={SeoColor}
                      alt="Seo-Image"
                      className={`${styles.seoColor} img-fluid`}
                    />
                    <h3 className="poppins fw700 mb-3 f-40 line13">
                      Search Engine <br className="d-lg-block d-none" />{" "}
                      Optimization
                    </h3>
                    <p className=" f-15 fw400 poppins line22 pt-1">
                      Crystallite’s expertise lies in building, publishing, and
                      marketing engaging content that will grow your client
                      base, increase customer retention and achieve your
                      ultimate goal of sales. We formulate strategies in such a
                      way that they make your social presence consistent and
                      interesting.
                    </p>

                    <Btn desc="Read More" />
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div>
                  <div className="content">
                    <Image
                      src={SmmColor}
                      alt="Seo-Image"
                      className={`${styles.seoColor} img-fluid`}
                    />
                    <h3 className="poppins fw700 mb-3 f-40 line13">
                      Social Media
                      <br className="d-lg-block d-none" /> Marketing
                    </h3>
                    <p className=" f-15 fw400 poppins line22 pt-1">
                      In today’s world, People don’t want to know what you are
                      selling because a thousand others are doing that too. The
                      audience wants much more than just products. They want
                      Entertainment, Commitment, and Efforts. We know social
                      media strategies should not just pitch your product
                      because selling has become quite a negative word. So after
                      deeply analyzing your business, our Social Media
                      Management team comes up with Strategies and Engaging
                      Content that develop a sense of honesty, care, and loyalty
                      between you and your customers. Increasing ROI is not our
                      plan rather, it is a part of the overall plan of building
                      a relationship with your customers.
                    </p>

                    <Btn desc="Read More" />
                  </div>
                </div>
              )}

              {activeTab1 == "tab3" && (
                <div>
                  <div className="content">
                    <Image
                      src={ProofColor}
                      alt="Seo-Image"
                      className={`${styles.seoColor} img-fluid`}
                    />
                    <h3 className="poppins fw700 mb-3 f-40 line13">
                      Content Writing Services
                    </h3>
                    <p className=" f-15 fw400 poppins line22 pt-1">
                      A simply written piece is far better than a complicated
                      paragraph that only a few can understand. Crystallite has
                      a team of well-versed and Creative Writers who can make
                      your content look attractive to your audience. Whatever
                      industry you work in, you need professional writers. Be it
                      the Content on your Website, Blogs on Trending Topics,
                      Descriptions for your products, or Content for Social
                      Media Posts. Our writers can build everything from scratch
                      using the relevant Keywords to rank your content higher in
                      SEO results and drag quality traffic towards your website.
                      Before writing anything, we deeply understand your
                      Business, its Vision, Values and Goals, and Competitive
                      Advantage. Blending all this information with the
                      knowledge and skills of our writers we give your audience
                      something worth reading.
                    </p>

                    <Btn desc="Read More" />
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
                </select>
              </div>
            </Col>
            <Col lg={12} className="d-lg-none d-block mt-3 mt-md-5">
              {activeTab1 == "tab1" && (
                <div>
                  <div className="content">
                    <Image
                      src={SeoColor}
                      alt="Seo-Image"
                      className={`${styles.seoColor} img-fluid`}
                    />
                    <h3 className="poppins fw700 mb-3 f-40 line13">
                      Search Engine <br className="d-lg-block d-none" />{" "}
                      Optimization
                    </h3>
                    <p className=" f-15 fw400 poppins line22 pt-1">
                      Crystallite’s expertise lies in building, publishing, and
                      marketing engaging content that will grow your client
                      base, increase customer retention and achieve your
                      ultimate goal of sales. We formulate strategies in such a
                      way that they make your social presence consistent and
                      interesting.
                    </p>

                    <Btn desc="Read More" />
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div>
                  <div className="content">
                    <Image
                      src={SmmColor}
                      alt="Seo-Image"
                      className={`${styles.seoColor} img-fluid`}
                    />
                    <h3 className="poppins fw700 mb-3 f-40 line13">
                      Social Media
                      <br className="d-lg-block d-none" /> Marketing
                    </h3>
                    <p className=" f-15 fw400 poppins line22 pt-1">
                      In today’s world, People don’t want to know what you are
                      selling because a thousand others are doing that too. The
                      audience wants much more than just products. They want
                      Entertainment, Commitment, and Efforts. We know social
                      media strategies should not just pitch your product
                      because selling has become quite a negative word. So after
                      deeply analyzing your business, our Social Media
                      Management team comes up with Strategies and Engaging
                      Content that develop a sense of honesty, care, and loyalty
                      between you and your customers. Increasing ROI is not our
                      plan rather, it is a part of the overall plan of building
                      a relationship with your customers.
                    </p>

                    <Btn desc="Read More" />
                  </div>
                </div>
              )}

              {activeTab1 == "tab3" && (
                <div>
                  <div className="content">
                    <Image
                      src={ProofColor}
                      alt="Seo-Image"
                      className={`${styles.seoColor} img-fluid`}
                    />
                    <h3 className="poppins fw700 mb-3 f-40 line13">
                      Content Writing Services
                    </h3>
                    <p className=" f-15 fw400 poppins line22 pt-1">
                      A simply written piece is far better than a complicated
                      paragraph that only a few can understand. Crystallite has
                      a team of well-versed and Creative Writers who can make
                      your content look attractive to your audience. Whatever
                      industry you work in, you need professional writers. Be it
                      the Content on your Website, Blogs on Trending Topics,
                      Descriptions for your products, or Content for Social
                      Media Posts. Our writers can build everything from scratch
                      using the relevant Keywords to rank your content higher in
                      SEO results and drag quality traffic towards your website.
                      Before writing anything, we deeply understand your
                      Business, its Vision, Values and Goals, and Competitive
                      Advantage. Blending all this information with the
                      knowledge and skills of our writers we give your audience
                      something worth reading.
                    </p>

                    <Btn desc="Read More" />
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

export default DigitalService;
