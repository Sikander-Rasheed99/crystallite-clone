import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Career.module.css";
import Image from "next/image";

////
import careerImage from "public/images/career_bg.png";
import rightArrow from "public/images/right-arrow.png";
import Link from "next/link";
import Btn from "./Btn";

const Career = () => {
  return (
    <>
      <section className={styles.CareerSec}>
        <Row className="align-items-center">
          <Col lg={7}>
            <Image src={careerImage} alt="career-Image" />
          </Col>
          <Col lg={5} className="p-0">
            <div className={styles.content}>
              <h3 className="f-60 fw400 sf_regular mb-2">
                Career & <br />
                <span className="txtgredent lettspa2">Opportunities</span>
              </h3>
              <p className="f-24 sf_light text-black">
                Join our team to create the best <br />
                digital solutions.
              </p>

              <Link
                href="#"
                className={`f-20 fw600 poppins d-flex align-items-center ${styles.btn}`}
              >
                Apply Now
                <Image
                  src={rightArrow}
                  alt="right-arrow"
                  className={styles.rightArrow}
                />
              </Link>
              {/* <Btn desc="Apply Now" /> */}
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Career;
