"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../../public/images/case-studies/c7.jpg";

const PortfolioDetailsContent: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="pd-preview-img">
            <Image
              src={portfolioDedailsImg}
              alt="Portfolio Img"
              width={1320}
              height={100}
            />

            {/* <div className="video-box">
              <div onClick={() => setToggler(!toggler)} className="video-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div> */}
          </div>

          <div className="service-details-info">
            {/* <div className="single-info-box">
              <h4>Client</h4>
              <span>James Anderson</span>
            </div> */}

            <div className="single-info-box">
              <h4>Category</h4>
              <span>Bussiness Process Digitization</span>
            </div>

            <div className="single-info-box">
              <h4>Sector</h4>
              <span>Compliance</span>
            </div>

            <div className="single-info-box">
              <h4>Date</h4>
              <span>February 28, 2022</span>
            </div>

            {/* <div className="single-info-box">
              <h4>Share</h4>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-info-box">
              <a href="#" className="default-btn" target="_blank">
                Live Preview
              </a>
            </div> */}
          </div>

          <div className="portfolio-desc style-2">
            <h3>Problem</h3>

            <p>
            Modern Indian companies face challenges in keeping up with regulatory requirements and ensuring compliance. Manual tracking of regulatory updates and compliance statuses is inefficient and prone to errors.


            </p>

            <h3>Solution</h3>
            <p>
            Mastork developed ComplyAssist, an AI-powered compliance assistant platform. It uses various APIs to gather up-to-date information on regulatory requirements and alerts users about missing or pending compliance actions. The platform also includes collaboration features to facilitate communication and task management among compliance teams.


            </p>

            {/* <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                At vero eos et accusamus et iusto odio dignissimos ducimus
              </li>
              <li>On the other hand, we denounce with righteous indignation</li>
            </ul> */}

            <h3>Conclusion</h3>
            <p>
            ComplyAssist has significantly improved the compliance management process for Indian companies. By automating regulatory tracking and providing real-time alerts, the platform ensures that companies stay compliant with minimal effort and reduced risk of penalties.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
