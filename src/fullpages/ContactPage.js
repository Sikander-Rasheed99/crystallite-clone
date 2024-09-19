"use client";

import AboutBanner from "@/components/AboutBanner";
import Footer from "@/components/Footer";
import ReactFullpage from "@fullpage/react-fullpage";

///
import ContactImage from "public/images/contact-banner.png";

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
                      <span className="txtgredent fw600 f-67">Contact Us</span>
                    </h1>
                  </>
                }
                para="Connecting you to a new world of possibilities."
                image={ContactImage}
              />
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
