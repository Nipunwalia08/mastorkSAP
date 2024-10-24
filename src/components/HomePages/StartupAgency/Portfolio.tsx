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
            At Mastork, our team consists of seasoned professionals with deep expertise in AI, automation, and customer service optimization. With decades of combined experience, our engineers, data scientists, and support specialists are dedicated to delivering innovative solutions that transform how businesses manage emails. We pride ourselves on understanding our clients unique challenges, tailoring our AI systems to fit specific workflows and industry needs. Our mission is to help businesses save time, reduce errors, and enhance customer satisfaction by automating routine tasks and providing actionable insights. From implementation to ongoing support, we are committed to your success every step of the way.
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
