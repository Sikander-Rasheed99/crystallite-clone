"use client";

import CareerBanner from "@/components/CareerBanner";
import CareerPackages from "@/components/CareerPackages";
import Footer from "@/components/Footer";
import ReactFullpage from "@fullpage/react-fullpage";

const FullPage = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation
      render={() => {
        return (
          <>
            <div className="section">
              <CareerBanner />
            </div>
            <div className="section">
              <CareerPackages />
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
