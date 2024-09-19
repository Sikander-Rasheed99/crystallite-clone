import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/CareerBanner.module.css";
import Btn from "./Btn";

////
import CareerImage from "public/images/career-banner.png";
import Image from "next/image";

const CareerBanner = () => {
  return (
    <>
      <section className={styles.CareerBanner}>
        <Container>
          <Row className={styles.txt}>
            <Col md={6}>
              <div className={styles.BannerContent}>
                <h1 className="f-65 text-black fw300 line11 sf_regular">
                  Our
                  <br className="d-lg-block d-none"/>
                  <span className="txtgredent fw600 f-67"> Careers</span>
                </h1>
                <p className="fw500 poppins line26 f-18">
                  Connecting you to a new world of possibilities.
                </p>
                <Btn desc="Join Us" />
              </div>
            </Col>
            <Col md={6}>
              <Image
                src={CareerImage}
                alt="CareerImage"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CareerBanner;
