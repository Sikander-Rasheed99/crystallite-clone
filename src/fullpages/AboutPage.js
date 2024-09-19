"use client";

import About from "@/components/About";
import AboutBanner from "@/components/AboutBanner";
import Footer from "@/components/Footer";
import ReactFullpage from "@fullpage/react-fullpage";

///
import AboutImage from "public/images/about-banner.png";

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
                      <span className="txtgredent fw600 f-67">About Us</span>
                    </h1>
                  </>
                }
                para="Connecting you to a new world of possibilities."
                image={AboutImage}
              />
            </div>
            <div className="section">
              <About />
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
