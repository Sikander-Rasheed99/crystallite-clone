import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/CareerPackages.module.css";
import Image from "next/image";

////
import TeliFixed from "public/images/tele-fixed.png";

const CareerPackages = () => {
  return (
    <>
      <section className={styles.CareerPackages}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="text-center f-60 sf_regular mb-2 mb-sm-4">Careers</h2>
              <Row>
                <Col md={6}>
                  <div className={styles.packages}>
                    <Image
                      src={TeliFixed}
                      alt="Teli-Fixed"
                      className="img-fluid"
                    />
                    <h3 className="poppins f-18 fw600 mb-0">
                      Software Engineer
                    </h3>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.packages}>
                    <Image
                      src={TeliFixed}
                      alt="Teli-Fixed"
                      className="img-fluid"
                    />
                    <h3 className="poppins f-18 fw600 mb-0">
                      Business Coordinator
                    </h3>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.packages}>
                    <Image
                      src={TeliFixed}
                      alt="Teli-Fixed"
                      className="img-fluid"
                    />
                    <h3 className="poppins f-18 fw600 mb-0">
                      Linux/Unix System
                    </h3>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.packages}>
                    <Image
                      src={TeliFixed}
                      alt="Teli-Fixed"
                      className="img-fluid"
                    />
                    <h3 className="poppins f-18 fw600 mb-0">
                      Business Consultant
                    </h3>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CareerPackages;
