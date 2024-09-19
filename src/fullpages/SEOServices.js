"use client";

import AboutBanner from "@/components/AboutBanner";
import Btn from "@/components/Btn";
import Footer from "@/components/Footer";
import SocialMediaServices from "@/components/SocialMediaServices";
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

/// ============================= \\\
import DigitalMarketing from "public/images/digital-marketing-banner.png";

const FullPage = () => {
  const serviceContent = {
    title: "Our SEO Services",
    para: "Increase Your Search Rankings and Get Discovered More Online With The Best SEO Agency Ever!",
  };

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
                    <h1 className="f-65 text-black fw300 sf_regular line12">
                      Social Media <br />
                      <span className="txtgredent fw600 f-67">Marketing</span>
                    </h1>
                  </>
                }
                para="Crystallite Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth. Our SMM experts pen such stories that best narrate your BRAND."
                image={DigitalMarketing}
                secBtn={
                  <>
                    <Btn desc="Join us" />
                  </>
                }
              />
            </div>
            <div className="section">
              <SocialMediaServices content={serviceContent} />
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
