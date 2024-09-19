"use client";

import AboutBanner from "@/components/AboutBanner";
import Btn from "@/components/Btn";
import DigitalService from "@/components/DigitalServices";
import Footer from "@/components/Footer";
import ReactFullpage from "@fullpage/react-fullpage";

///
import DigitalMarketing from "public/images/digital-marketing-banner.png";

const FullPage = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation
      render={() => {
        return (
          <>
            <div className="section">
              <AboutBanner
                content={
                  <>
                    <h1 className="f-65 text-black fw300 line11 sf_regular">
                      Digital <br />
                      <span className="txtgredent fw600 f-67">Marketing</span>
                    </h1>
                  </>
                }
                para="Digital Marketing is a blend of three ingredients, Passion, Creativity, and Consistency."
                image={DigitalMarketing}
                secBtn={
                  <>
                    <Btn desc="Join us" />
                  </>
                }
              />
            </div>
            <div className="section"> 
              <DigitalService />
            </div>
            <div className="section">
              <Footer />
            </div>
          </>
        );
      }}
    />
  );
};

export default FullPage;
