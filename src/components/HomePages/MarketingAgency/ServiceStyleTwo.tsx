"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "../../../../public/images/services/it-service1.png";
import serviceImg2 from "../../../../public/images/services/it-service2.png";
import serviceImg3 from "../../../../public/images/services/it-service3.png";
import serviceImg4 from "../../../../public/images/saas-startup/health.jpg";
import serviceImg5 from "../../../../public/images/saas-startup/manuf.jpg";
import serviceImg6 from "../../../../public/images/saas-startup/retail.jpg";

const ServiceStyle2: React.FC = () => {
  return (
    <>
      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container  md:ml-10 lg:ml-20">
          <div className="row align-items-center ">
            <div className="col-lg-7">
              <div
                className="service-info pr-50"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="info-head">
                  <h2 className="title">What we Offer</h2>
                  <p>
                    We offer comprehensive SAP solutions to optimize your
                    business processes. From end-to-end SAP ERP implementation
                    and seamless S/4HANA migration to country-specific
                    localization services, we ensure compliance and efficiency.
                    Automate tasks like GSTR2 reconciliation, conduct detailed
                    system audits for actionable insights, and rely on expert
                    SAP support to address issues proactively and keep your
                    operations running smoothly.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      End-to-End SAP ERP Implementation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Seamless SAP S/4 HANA Migration
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Country-Specific Localization Services
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      GSTR2 Reconciliation Automation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      SAP System Study & Audit
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Expert SAP Support & Guidance
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <Link
                    href="https://calendly.com/dhruv-aii/30mins"
                    className="btn btn-primary"
                  >
                    Book a 1:1 Call
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="service-right-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Image
                  src={serviceImg1}
                  alt="Service Image"
                  width={770}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStyle2;
