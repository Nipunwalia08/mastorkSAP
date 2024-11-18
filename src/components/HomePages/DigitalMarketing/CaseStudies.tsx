"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const caseStudiesData = [
  {
    image: "/images/case-studies/studie1.jpg",
    title: "How a global retailer cut tax reconciliation time by 80% with SAP automation",
    category: "Web, Sales",
    detailsLink: "/portfolio/ai-email-reducing-time/",
    shapeImage: "/images/case-studies/studie-shape1.png",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    title: "Migrating to SAP S/4 HANA with zero downtime for a leading healthcare provider.",
    category: "Sales, SEO, Web",
    detailsLink: "/portfolio/automating-sales-order-using-ai-email/",
    shapeImage: "/images/case-studies/studie-shape2.png",
    aosDelay: "200",
  },
  // {
  //   image: "/images/case-studies/studie3.jpg",
  //   title: "Traffic Management",
  //   category: "Marketing",
  //   detailsLink: "/portfolio/portfolio-details/",
  //   shapeImage: "/images/case-studies/studie-shape3.png",
  //   aosDelay: "300",
  // },
];

const CaseStudies: React.FC = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>CASE STUDIES</h2>
            <p>
            See how our AI solutions have transformed businesses, reducing response times and boosting conversions.
            </p>
          </div>

          <div className="row justify-content-center">
            {caseStudiesData &&
              caseStudiesData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-case-studies"
                    style={{ backgroundImage: `url(${value.image})` }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      {/* <span>
                        <Link href={value.detailsLink}>{value.category}</Link>
                      </span> */}

                      <h3>
                        <Link href={value.detailsLink}>{value.title}</Link>
                      </h3>
                    </div>

                    <Link href={value.detailsLink} className="btn btn-primary">
                      View Case Study
                    </Link>

                    <div className="shape">
                      <Image
                        src={value.shapeImage}
                        alt="shape Image"
                        width={250}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="view-more-work">
            <Link href="https://calendly.com/dhruv-aii/30mins" className="btn btn-primary">
            Book a 1:1 Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
