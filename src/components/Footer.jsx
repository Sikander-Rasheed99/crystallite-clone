import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaBuilding, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

/////
import rightArrow from "public/images/right-arrow.png";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="f-65 fw400 sf_regular mb-2">
                Let's Get <br />
                <span className="txtgredent lettspa2 f-60"> Started</span>
              </h3>
              <p className="f-20 sf_light line1 mb-2 paragraph">
                Some of the greatest things in life start with a{" "}
                <br className="d-md-block d-none" />
                simple conversation. We welcome you to call,
                <br className="d-md-block d-none" />
                email, or simply use the magic form to the right.
              </p>
              <ul className="p-0 mt-2 mt-lg-5">
                <li className="mb-2 mb-lg-3">
                  <Link
                    href="mailto:;"
                    className="f-17 lettspa paragraph poppins"
                  >
                    <span className="me-2">
                      <MdEmail className="f-20 " />
                    </span>
                    info@crystal-lite.net
                  </Link>
                </li>
                <li className="mb-2 mb-lg-3">
                  <Link
                    href="mailto:;"
                    className="f-17 lettspa paragraph poppins"
                  >
                    <span className="me-2">
                      <MdEmail className="f-20 " />
                    </span>
                    hr@crystal-lite.net
                  </Link>
                </li>
                <li className="mb-2 mb-lg-3">
                  <Link href="tel:;" className="f-17 lettspa paragraph poppins">
                    <span className="me-2">
                      <FaPhoneAlt className="f-17 fw700" />
                    </span>
                    021-111 22 55 77
                  </Link>
                </li>
                <li className="mb-2 mb-lg-3">
                  <Link
                    href="#"
                    className="f-17 lettspa paragraph poppins d-flex"
                  >
                    <span className="me-2">
                      <FaBuilding className="f-20 " />
                    </span>
                    1210,1212 , National IT Park, Main Shahrah-e-Faisal, 74200,
                    Karachi-Pakistan.
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <form action="#">
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 mt-lg-3"
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="mt-2 mt-lg-3"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="mt-2 mt-lg-3"
                  required
                />
                <textarea
                  placeholder="Message"
                  className="mt-2 mt-lg-3"
                ></textarea>
                <button
                  type="submit"
                  className={`f-20 fw600 poppins d-flex align-items-center ${styles.btn}`}
                >
                  Submit
                  <Image
                    src={rightArrow}
                    alt="right-arrow"
                    className={styles.rightArrow}
                  />
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
