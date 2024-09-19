"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import styles from "../../styles/Banner.module.css";
import Link from "next/link";
import Image from "next/image";

////
import rightArrow from "public/images/right-arrow.png";

const Banner = () => {
  const [isActive, setIsActive] = useState();

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <section className={styles.BannerSec}>
        <div className={styles.BannerOverlay}></div>
        <div className="txt">
          <h1 className={`${styles.crysHeading} atomic`}>CRYS</h1>
        </div>
        <span className={styles.line}></span>

        <div className={`${styles.social_icons} d-flex`}>
          <Link href="#" className="text-white f-20">
            <FaFacebookF />
          </Link>

          <Link href="#" className="text-white f-20">
            <FaInstagram />
          </Link>

          <Link href="#" className="text-white f-20">
            <FaLinkedinIn />
          </Link>

          <div
            className={
              isActive
                ? `${styles.search} ${styles.active}`
                : `${styles.search}`
            }
          >
            <input type="text" className={styles.searchInp} />
            <IoIosSearch onClick={handleMenu} />
          </div>
        </div>

        <Row>
          <Col lg={12}>
            <video
              src="/images/banner__video.mp4"
              muted
              loop
              autoPlay
              typeof="video/mp4"
            ></video>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <div className={styles.content}>
                <h1 className="f-70 text-white fw300">
                  We Create <br />
                  Ultimate User <br />
                  <span className="txtgredent fw600 f-100"> Experience</span>
                </h1>

                <p className="text-white f-29">
                  Modern Life can be complicated. Simplify it with Crystallite's
                  Services!
                </p>

                <Link
                  href="#"
                  className={`f-20 fw500 text-white lettspa poppins d-flex align-items-center ${styles.btn}`}
                >
                  Contact Us
                  <Image
                    src={rightArrow}
                    alt="right-arrow"
                    className={styles.rightArrow}
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
