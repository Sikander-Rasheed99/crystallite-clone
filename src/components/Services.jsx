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
import Monitor from "public/images/monitoring.png";
import Operate from "public/images/operating-system.png";
import AppSupport from "public/images/app-support.png";
import Trancription from "public/images/transcription.png";
import Editing from "public/images/editing.png";
import Health from "public/images/health.png";
import Financial from "public/images/financial.png";
import Retail from "public/images/retail.png";
import Manufacturing from "public/images/manufacturing.png";
import Tech from "public/images/tech.png";
import Sector from "public/images/sector.png";
import ServiceTxt from "public/images/service-text.png";
import DottImage from "public/images/services-doted.png";

const Services = (props) => {
  const [activeTab1, setActiveTab1] = useState("tab1");
  function fun1(tabs1) {
    setActiveTab1(tabs1);
  }

  function handleTabChange(event) {
    const selectedTab = event.target.value;
    setActiveTab1(selectedTab);
  }

  const {
    title,
    para,
    iconOne,
    iconTwo,
    iconThree,
    iconFour,
    iconFive,
    iconSix,
    digiMarketingOne,
    digiMarketingTwo,
    digiMarketingThree,
    digiMarketingFour,
    digiMarketingFive,
    digiMarketingSix,
    digiParaOne,
    digiParaTwo,
    digiParaThree,
    digiParaFour,
    digiParaFive,
    digiParaSix,

    contentHeadingOne,
    contentParaOne,
    contentHeadingTwo,
    contentParaTwo,
    contentHeadingThree,
    contentParaThree,
    contentHeadingFour,
    contentParaFour,
    contentHeadingFive,
    contentParaFive,
    contentHeadingSix,
    contentParaSix,
  } = props.content;

  return (
    <>
      <section className={styles.services}>
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              {/* <h2 className='text-center f-60 fw400 sf_regular mb-2'>Our <span className='txtgredent'>Services</span></h2> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `<h2>${title}</h2>`,
                }}
              />

              <p className="f-16 text-center fw500 poppins line22 mx-w-7xl mb-lg-4 pb-3 pb-sm-4">
                {para}
              </p>
            </Col>

            <Col lg={6} className="d-lg-block d-none">
              <div className={styles.analpost}>
                <Row>
                  <Col lg={6}>
                    <div
                      className={activeTab1 == "tab1" ? styles.active : ""}
                      onClick={() => fun1("tab1")}
                      href="#"
                    >
                      <div className={`${styles.card}`}>
                        <Image
                          src={iconOne}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw600 f-14 text-center poppins mb-2 mt-3">
                          {digiMarketingOne}
                        </h5>

                        <p className="text-center f-12 poppins mb-0 fw400">
                          {digiParaOne}
                        </p>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab2" ? styles.active : ""}
                      onClick={() => fun1("tab2")}
                      href="#"
                    >
                      <div className={`${styles.card}`}>
                        <Image
                          src={iconThree}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw600 f-14 text-center poppins mb-2 mt-3">
                          {digiMarketingThree}
                        </h5>

                        <p className="text-center f-12 poppins mb-0 fw400">
                          {digiParaThree}
                        </p>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab3" ? styles.active : ""}
                      onClick={() => fun1("tab3")}
                      href="#"
                    >
                      <div className={`${styles.card}`}>
                        <Image
                          src={iconFive}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw600 f-14 text-center poppins mb-2 mt-3">
                          {digiMarketingFive}
                        </h5>

                        <p className="text-center f-12 poppins mb-0 fw400">
                          {digiParaFive}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div
                      className={activeTab1 == "tab4" ? styles.active : ""}
                      onClick={() => fun1("tab4")}
                      href="#"
                    >
                      <div className={`${styles.card}`}>
                        <Image
                          src={iconTwo}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw600 f-14 text-center poppins mb-2 mt-3">
                          {digiMarketingTwo}
                        </h5>

                        <p className="text-center f-12 poppins mb-0 fw400">
                          {digiParaTwo}
                        </p>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab5" ? styles.active : ""}
                      onClick={() => fun1("tab5")}
                      href="#"
                    >
                      <div className={`${styles.card}`}>
                        <Image
                          src={iconFour}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw600 f-14 text-center poppins mb-2 mt-3">
                          {digiMarketingFour}
                        </h5>

                        <p className="text-center f-12 poppins mb-0 fw400">
                          {digiParaFour}
                        </p>
                      </div>
                    </div>

                    <div
                      className={activeTab1 == "tab6" ? styles.active : ""}
                      onClick={() => fun1("tab6")}
                      href="#"
                    >
                      <div className={`${styles.card}`}>
                        <Image
                          src={iconSix}
                          width={63}
                          height={63}
                          alt="Icons1"
                          className="d-block m-auto"
                        />

                        <h5 className="lettspa fw600 f-14 text-center poppins mb-2 mt-3">
                          {digiMarketingSix}
                        </h5>

                        <p className="text-center f-12 poppins mb-0 fw400">
                          {digiParaSix}
                        </p>
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
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingOne}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaOne}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row>
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={SEO}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Search Engine <br /> Optimization
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={SMM}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Social Media Marketing{" "}
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={PRoofR}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Content Writing Services
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingTwo}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaTwo}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row className="justify-content-center">
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Keyword}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Tailored to your Business <br /> needs
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={LinkBuild}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Operating System{" "}
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={OnPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Guaranteed SLA
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={OffPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            High Competent Staff
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab3" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingThree}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaThree}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row>
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Trancription}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            TRANSCRIPTION
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={Editing}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            EDITING
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={PRoofR}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            PROOFREADING
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab4" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingFour}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaFour}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row className="justify-content-center">
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Keyword}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Facebook Advertising <br /> Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={LinkBuild}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Youtube Advertising <br /> Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={OnPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Instagram Advertising
                            <br /> Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={OffPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Twitter Advertising
                            <br /> Services
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab5" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingFive}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaFive}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row>
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Monitor}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            24/7 System Monitoring
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={Operate}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Security And Performance
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={AppSupport}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Unlimited Onsite & Remote <br /> Support.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab6" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingSix}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaSix}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row className="justify-content-center">
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Health}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Healthcare
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={Financial}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Financial Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={Retail}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Retail
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={Manufacturing}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Manufacturing
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={Tech}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            High Tech
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={Sector}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Public Sector
                          </p>
                        </div>
                      </Col>
                    </Row>
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
                  <option value="tab5">Transcription</option>
                  <option value="tab6">Business Intelligence</option>
                </select>
              </div>
            </Col>
            <Col lg={12} className="d-lg-none d-block mt-3 mt-md-5">
              {activeTab1 == "tab1" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingOne}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaOne}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row>
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={SEO}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Search Engine <br /> Optimization
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={SMM}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Social Media Marketing{" "}
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={PRoofR}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Content Writing Services
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingTwo}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaTwo}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row className="justify-content-center">
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Keyword}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Tailored to your Business <br /> needs
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={LinkBuild}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Operating System{" "}
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={OnPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Guaranteed SLA
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={OffPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            High Competent Staff
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab3" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingThree}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaThree}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row>
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Trancription}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            TRANSCRIPTION
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={Editing}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            EDITING
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={PRoofR}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            PROOFREADING
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab4" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingFour}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaFour}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row className="justify-content-center">
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Keyword}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Facebook Advertising <br /> Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={LinkBuild}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Youtube Advertising <br /> Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={OnPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Instagram Advertising
                            <br /> Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={OffPage}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Twitter Advertising
                            <br /> Services
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab5" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingFive}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaFive}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row>
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Monitor}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            24/7 System Monitoring
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={Operate}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Security And Performance
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={AppSupport}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Unlimited Onsite & Remote <br /> Support.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {activeTab1 == "tab6" && (
                <div>
                  <div className="content">
                    <h3 className="poppins fw700 text-center mb-3 f-34">
                      {contentHeadingSix}
                    </h3>
                    <p className="text-center f-15 fw400 poppins line21">
                      {contentParaSix}
                    </p>
                  </div>

                  <div className={styles.packages}>
                    <Row className="justify-content-center">
                      <Col lg={4} className="px-0">
                        <div className="seo">
                          <Image
                            src={Health}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Healthcare
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="smm">
                          <Image
                            src={Financial}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Financial Services
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0">
                        <div className="proofr">
                          <Image
                            src={Retail}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Retail
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={Manufacturing}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Manufacturing
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={Tech}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            High Tech
                          </p>
                        </div>
                      </Col>
                      <Col lg={4} className="px-0 mt-4">
                        <div className="proofr">
                          <Image
                            src={Sector}
                            alt="seo"
                            className="m-auto d-block"
                          />
                          <p className="fw600 mb-0 poppins f-15 text-center line16 pt-3">
                            Public Sector
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <Row>
          <Col lg={6}>
            <Image
              src={ServiceTxt}
              alt="Service"
              width={1366}
              height={229}
              className={styles.ServiceTxt}
            />
            <Image
              src={DottImage}
              alt="Service_Dotted"
              className={styles.ServicesDot}
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Services;
