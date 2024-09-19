import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Journey.module.css";
import Image from "next/image";

///
import JourneyImage from "public/images/journey_bg.svg";

const Journey = () => {
  return (
    <>
      <section
        className={`d-flex align-items-center justify-content-center ${styles.journey}`}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <Image
                src={JourneyImage}
                alt="Journey_Image"
                className="w-100 h-100"
                width={100}
                height={100}
                quality={80}
              />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Journey;
