"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const feedbacskData = [
  {
    image: "/images/digital-marketing/t1.jpg",
    name: "Sarah Taylor",
    designation: "Director",
    feedbackText:
      "Their expertise in SAP ERP automation saved us weeks of manual work!",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    image: "/images/digital-marketing/t2.jpg",
    name: "Richard Turner",
    designation: "CEO & Founder",
    feedbackText:
      "Our S/4HANA migration was smooth and cost-efficient thanks to their incredible team.",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    image: "/images/digital-marketing/t2.jpg",
    name: "Richard Turner",
    designation: "CEO & Founder",
    feedbackText:
      "Our S/4HANA migration was smooth and cost-efficient thanks to their incredible team.",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    image: "/images/digital-marketing/t2.jpg",
    name: "Richard Turner",
    designation: "CEO & Founder",
    feedbackText:
      "Our S/4HANA migration was smooth and cost-efficient thanks to their incredible team.",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="marketing-testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">TESTIMONIALS</span>
            <h2>What Our Customers Say</h2>
          </div>

          <Swiper
            // autoHeight={true}
            // navigation={true}
            autoplay={{
              delay: 3000,
              // disableOnInteraction: true,
              // pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="marketing-testimonials-slides"
          >
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="relative p-4 border border-gray-300 shadow-md rounded-md bg-white max-w-lg mx-auto ">
                    <div className="flex gap-4">
                      <div className="marketing-testimonials-image">
                        <Image
                          src={value.image}
                          alt="testimonial"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="marketing-testimonials-content">
                        <i className="icon fa-solid fa-quote-left text-gray-400"></i>
                        <p className="mt-2 text-sm text-gray-600">
                          <q>{value.feedbackText}</q>
                        </p>

                        <div className="rating mt-2 flex items-center">
                          {value.rating.map((value, i) => (
                            <i className={value.iconName} key={i}></i>
                          ))}
                        </div>

                        <div className="info mt-2">
                          <h3 className="text-base font-semibold">
                            {value.name}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {value.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

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

export default Testimonials;
