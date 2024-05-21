"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-rocket bg-13c4a1",
    title: "Automation",
    shortText:
      "Streamline your operations and boost efficiency with our cutting-edge automation solutions.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-diamond bg-6610f2",
    title: "Cybersecurity and Infrastructure",
    shortText:
      "Safeguard your digital assets with our robust cybersecurity and infrastructure services.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Data-Driven Decision Making",
    shortText:
      "Unlock actionable insights and drive growth with our advanced data-driven decision-making tools.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-target bg-fc3549",
    title: "Business Process Digitisation and Automation",
    shortText:
      " Transform your business processes with our customizable SaaS solutions leveraging microsoft and other low code platforms",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-film bg-00d280",
    title: "Consultation and Advisory",
    shortText:
      "Navigate complex challenges with confidence, guided by our expert consultation and advisory services.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  // {
  //   iconName: "pe-7s-users bg-ff612f",
  //   title: "Workshops",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  //   viewDetails: "/services/service-details/",
  //   aosDelay: "600",
  // },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-6 
                  col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg border">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;