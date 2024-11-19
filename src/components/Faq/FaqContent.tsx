"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../../public/images/faq-img.jpg";
import Link from "next/link";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={800} height={534} />
              </div>
            </div>

            <div className="col-lg-6 pt-5">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How long does an SAP S/4HANA migration typically take?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Migration timelines vary from 6 to 18 months based on
                        system complexity, with a focus on minimizing downtime.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can your SAP services be customized for specific
                        industries?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we tailor our SAP solutions to meet the unique
                        needs of various industries.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you provide ongoing SAP support after implementation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we offer full post-implementation support,
                        including maintenance, upgrades, and user assistance.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  {/* <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What kind of support do you offer after implementation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We provide ongoing support, including regular updates,
                        troubleshooting, and access to our dedicated customer
                        service team.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can your system integrate with our existing platform?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely! Our AI solutions are designed to integrate
                        seamlessly with popular email platforms to enhance your
                        current workflows.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem> */}
                </Accordion>
              </div>
            </div>
          </div>

          <div className="container flex flex-col items-center justify-center text-center">
            <Link
              href="https://calendly.com/dhruv-aii/30mins"
              className="btn btn-primary mt-5"
            >
              Book a 1:1 Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
