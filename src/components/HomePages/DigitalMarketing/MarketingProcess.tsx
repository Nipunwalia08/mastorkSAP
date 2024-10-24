"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const marketingProcessData = [
  {
    image: "/images/digital-marketing/process1.png",
    title: "Time Drain",
    shortText:
      "Do you or your team spend long hours handling customer emails, impacting productivity?",
    aosDelay: "100",
  },
  {
    image: "/images/digital-marketing/process2.png",
    title: "Lost Emails",
    shortText:
      "Struggling to find important emails in a sea of messages?",
    aosDelay: "200",
  },
  {
    image: "/images/digital-marketing/process3.png",
    title: "Email Overload",
    shortText:
      "Feeling overwhelmed by the volume of customer emails and losing crucial information amid the clutter?",
    aosDelay: "300",
  },
  {
    image: "/images/digital-marketing/process1.png",
    title: "Spam Fatigue",
    shortText:
      "Fed up with endless promotional emails?",
    aosDelay: "100",
  },
  {
    image: "/images/digital-marketing/process2.png",
    title: "Routing Issues",
    shortText:
      "Is your email system failing to route messages to the right POC, missing follow-ups and reminders?",
    aosDelay: "200",
  },
];

const MarketingProcess: React.FC = () => {
  return (
    <>
      <div className="dm-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title marketing-color">MARKETING PROCESS</span>
            <h2>Are you facing these challenges?</h2>
          </div>

          <div className="row justify-content-center">
            {marketingProcessData &&
              marketingProcessData.slice(0, 5).map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="dm-process-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={280}
                      height={228}
                    />
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="row justify-content-center"><Link
    href="https://calendly.com/dhruv-aii/30mins"
    style={{
      display: "inline-block",
      height: "45px",  // Set a fixed height
      width: "200px",  // Set a fixed width
      lineHeight: "45px",  // Vertically center the text
      fontSize: "16px",
      backgroundColor: "#ff0055",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
      textAlign: "center",  // Ensure text is centered
      transition: "background-color 0.3s ease",
    }}
  >
    Book a 1:1 Call <i className="fas fa-chevron-right" style={{ marginLeft: "5px" }}></i>
  </Link></div>
        </div>
      </div>
    </>
  );
};

export default MarketingProcess;
