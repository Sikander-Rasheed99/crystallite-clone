"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdEmail, MdPhone, MdFacebook2 } from "react-icons/md";
import { FaBuilding, FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import Styles from "../../styles/Header.module.css";
//
import Logo from "public/images/logo.svg";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isActive, setIsActive] = useState();

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const router = useRouter;

  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-between ${Styles.Header}`}
      >
        <div className={Styles.logo}>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </Link>
        </div>
        <div className={Styles.menu}>
          <svg
            onClick={handleMenu}
            widths={100}
            height={100}
            className={Styles.openMenu}
            stroke="currentColor"
            fill="#c35427"
            strokeWidth="0"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>
        <Navbar
          className={
            isActive ? `${Styles.navBar} ${Styles.active}` : `${Styles.navBar}`
          }
          expand="md"
        >
          <div className="closeBtn">
            <svg
              onClick={handleMenu}
              className={Styles.clomenu}
              stroke="currentColor"
              fill="#ffff"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path>
            </svg>
          </div>
          <Container>
            <Row className={`w-100 align-items-center ${Styles.menuList}`}>
              <Col md={6} lg={4}>
                <ul>
                  <li className="mb-2 mb-sm-3">
                    <Link href="/" className="f-24 fw600 text-white lettspa2">
                      Home
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="/career" className="f-24 fw600 text-white lettspa2">
                      Career
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      About Us
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={6} lg={5}>
                <ul>
                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Digital Marketing
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Social Media Marketing
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Seo Services
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Content Writing Services
                    </Link>
                  </li>
                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Managed IT Services
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Dedicated Hosting
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Transcription
                    </Link>
                  </li>

                  <li className="mb-2 mb-sm-3">
                    <Link href="#" className="f-24 fw600 text-white lettspa2">
                      Business Intelligence
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={6} lg={3}>
                <h3 className="f-24 fw600 text-white mb-4">GET IN TOUCH</h3>
                <ul>
                  <li className="mb-4">
                    <Link href="mailto:;" className="f-13 lettspa text-white">
                      <span className="me-2">
                        <MdEmail className="f-25" />
                      </span>
                      info@crystal-lite.net
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link href="mailto:;" className="f-13 lettspa text-white">
                      <span className="me-2">
                        <MdEmail className="f-25" />
                      </span>
                      hr@crystal-lite.net
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link href="tel:;" className="f-13 lettspa text-white">
                      <span className="me-2">
                        <MdPhone className="f-25" />
                      </span>
                      021-111 22 55 77
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link href="#" className="f-13 lettspa text-white">
                      <span className="me-2">
                        <FaBuilding className="f-25" />
                      </span>
                      1210,1212 , National IT Park, Main Shahrah-e-Faisal,
                      74200, Karachi-Pakistan.
                    </Link>
                  </li>
                </ul>
                <div
                  className={`d-flex align-items-center gap-3 pt-4 ${Styles.socialIcons}`}
                >
                  <Link href="#" className="text-white">
                    <ImFacebook2 className="f-25" />
                  </Link>
                  <Link href="#" className="text-white">
                    <FaInstagramSquare className="f-29" />
                  </Link>
                  <Link href="#" className="text-white">
                    <BsLinkedin className="f-25" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
