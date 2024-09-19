import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/AboutBanner.module.css";

////
import Image from "next/image";

const AboutBanner = (props) => {
  return (
    <>
      <section className={styles.CareerBanner}>
        <Container>
          <Row className={styles.txt}>
            <Col md={6}>
              <div className={styles.BannerContent}>
                <span>{props.content}</span>
                <p className="fw500 poppins line26 f-18 pt-1">{props.para}</p>
                <span>{props.secBtn}</span>
              </div>
            </Col>
            <Col md={6}>
              <Image
                src={props.image}
                alt="AboutImage"
                quality={80}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutBanner;
