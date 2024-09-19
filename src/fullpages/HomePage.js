"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Career from "@/components/Career";
import Footer from "@/components/Footer";

//// ============================ ////
// import Icon1 from "public/images/icon-1.png";
// import Icon2 from "public/images/icon-2.png";
import Icon3 from "public/images/icon-3.png";
import Icon4 from "public/images/icon-4.png";
import Icon5 from "public/images/icon-5.png";
import Icon6 from "public/images/icon-6.png";
import SEO from "public/images/seo.png";
import SMM from "public/images/smm.png";
import PRoofR from "public/images/proofreading.png";
import Keyword from "public/images/keyword.png";
import LinkBuild from "public/images/linkbuild.png";
import OnPage from "public/images/onpage.png";
import OffPage from "public/images/offpage.png";
import Monitor from "public/images/monitoring.png";
import Operate from "public/images/operating-system.png";
import AppSupport from "public/images/app-support.png";
import Trancription from "public/images/transcription.png";
import Editing from "public/images/editing.png";
import Health from "public/images/health.png";
import Financial from "public/images/financial.png";
import Retail from "public/images/retail.png";
import Manufacturing from "public/images/manufacturing.png";
import Tech from "public/images/tech.png";
import Sector from "public/images/sector.png";
import ServiceTxt from "public/images/service-text.png";
import DottImage from "public/images/services-doted.png";
import Image from "next/image";

const FullPage = () => {
  const services = {
    title:
      "<h2 class='text-center f-60 fw400 sf_regular mb-2'>Our <span class='txtgredent'>Services</span></h2>",
    para: "Our platform provides the best of all worlds – blending public cloud with private cloud and bare metal servers into a single,unified architecture. This flexible approach enables you to tailor your setup and achieve just the right levels of cost-efficiency, security, reliability, performance and control that you need.",

    iconOne: "/images/icon-1.png",
    digiMarketingOne: "Digital Marketing",
    digiParaOne:
      "Digital Marketing is a blend of three ingredients, Passion, Creativity, and Consistency.",
    contentHeadingOne: "Digital Marketing",
    contentParaOne:
      "Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.",

    iconTwo: "/images/icon-2.png",
    digiMarketingTwo: "Search Engine Optimizaion",
    digiParaTwo:
      "Digital Marketing is a blend of three ingredients, Passion, Creativity, and Consistency.",
    contentHeadingTwo: " Managed IT Services",
    contentParaTwo:
      "Globally, IT outsourcing is a well-proven and highly successful “managed services” business model. Crystallite can help you infuse efficiency in your IT operations by providing End-to-End managed services.",

    iconThree: "/images/icon-3.png",
    digiMarketingThree: "Managed IT Services",
    digiParaThree:
      "Globally, IT outsourcing is a well-proven and highly successful 'managed services' business model.",
    contentHeadingThree: "Transcription",
    contentParaThree:
      "At Transcriber Hub, our goal is to keep your satisfaction level to highest standards through our revolutionary 3 – Tier process. Transcriber Hub takes pride of providing world-class services with surprising turnaround time in a highly affordable price.",

    iconFour: "/images/icon-4.png",
    digiMarketingFour: "Dedicated Hosting",
    digiParaFour:
      "Dedicated server hosting covers complete infrastructure management.",
    contentHeadingFour: " Search Engine Optimizaion",
    contentParaFour:
      "Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.",

    iconFive: "/images/icon-5.png",
    digiMarketingFive: "Transcription",
    digiParaFive:
      "At Transcriber Hub, our goal is to keep your satisfaction level to highest standards.",
    contentHeadingFive: "Dedicated Hosting",
    contentParaFive:
      "Dedicated server hosting covers complete infrastructure management. Crystallite takes full responsibility for the monitoring, maintenance, security, and operation of your managed solution.",

    iconSix: "/images/icon-6.png",
    digiMarketingSix: "Business Intelligence",
    digiParaSix:
      "Bridging the gap between data and real-time business analytics for promising outcomes",
    contentHeadingSix: "Business Intelligence",
    contentParaSix:
      "Crystallite will look out of your operations and documentation workloads, so you’ll focus a lot of on generating a lot of business and growth. We have a tendency to provide you with the liberty of macro managing your business. We’ve in-house time unit Specialists, Accountants and Document Coordinators.",
  };

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation
      render={() => {
        return (
          <>
            <div className="section">
              <Banner />
            </div>
            <div className="section">
              <Journey />
            </div>
            <div className="section">
              <Services content={services} />
            </div>
            <div className="section">
              <Career />
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
