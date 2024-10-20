"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import portfolioImg1 from "../../../../public/images/portfolio/team.jpg";

const Portfolio: React.FC = () => {
  return (
    <>
      <section className="portfolio-area pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
            <p>
            Meet our expert team, dedicated to revolutionizing your email management with decades of experience in AI and automation.
            </p>
          </div>
        </div>

        <div className="container">
          <div
            className="single-portfolio"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src={portfolioImg1}
              alt="Portfolio Image"
              width={1200}  // Spread wide
              height={100}  // Adjust height as needed
            />

            <div className="portfolio-content">
              <h3>
                {/* <Link href="/portfolio/portfolio-details/">UX Workflow</Link> */}
              </h3>

              {/* <Link href="/portfolio/portfolio-details/" className="link-btn">
                <i className="pe-7s-link"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
