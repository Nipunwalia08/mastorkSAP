"use client";

import React from "react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  return (
    <>
      <div 
        className="consulting-banner-area"
        style={{ 
          backgroundImage: `url(/images/business-consulting/consulting-banner-bg.jpg)` 
        }}
      >
        <div className="container">
          <div className="consulting-banner-content">
            <h1
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Navigate Complex Challenges with Expert Guidance
            </h1>

            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              In todays fast-paced and ever-changing business world, making the right decisions is more important than ever. Our Consultation and Advisory services are here to provide you with the personalized support and expert insights you need to tackle your toughest challenges and seize new opportunities.
            </p>

            <Link 
              href="/contact-us/" 
              className="default-btn-two"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Get Started <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
