import React from "react";
import styles from "../../styles/Btn.module.css";
import Link from "next/link";
import Image from "next/image";

////
import rightArrow from "public/images/right-arrow.png";

const Btn = (props) => {
  return (
    <>
      <div>
        <Link
          href="#"
          className={`f-20 fw600 poppins d-flex align-items-center ${styles.btn}`}
        >
          {props.desc}
          <Image
            src={rightArrow}
            alt="right-arrow"
            className={styles.rightArrow}
          />
        </Link>
      </div>
    </>
  );
};

export default Btn;
