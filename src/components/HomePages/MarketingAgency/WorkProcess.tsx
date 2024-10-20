// "use client";

// import React from "react";
// import Image from "next/image";

// const workProcessData = [
//   {
//     title: "Our Work Process",
//     shortText:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image: "/images/man-with-mobile.png",
//     circleImage: "/images/circle.png",

//     list: [
//       {
//         iconName: "pe-7s-display1",
//         title: "",
//         text: "AI-Powered Email CustomerSupport",
//         aosDelay: "100",
//       },
//       {
//         iconName: "pe-7s-display2",
//         title: "",
//         text: "Refund/Return Management Using AI",
//         aosDelay: "200",
//       },
//       {
//         iconName: "pe-7s-airplay",
//         title: "",
//         text: "Correct and Automatic Email Routing to the Right POC",
//         aosDelay: "300",
//       },
//       {
//         iconName: "pe-7s-note2",
//         title: "",
//         text: "Automated Email Reminders and Follow-ups",
//         aosDelay: "400",
//       },
//       {
//         iconName: "pe-7s-light",
//         title: "",
//         text: "Sales Order Management through Email",
//         aosDelay: "500",
//       },
//       {
//         iconName: "pe-7s-sun",
//         title: "Implement",
//         text: "Launch/Analyze",
//         aosDelay: "600",
//       },
//     ],
//   },
// ];

// const WorkProcess2: React.FC = () => {
//   return (
//     <>
//       {workProcessData &&
//         workProcessData.map((value, i) => (
//           <section className="work-process-area ptb-100" key={i}>
//             <div className="container">
//               <div className="section-title">
//                 <h2>{value.title}</h2>
//                 <p>{value.shortText}</p>
//               </div>

//               <div className="work-process">
//                 <div
//                   data-aos="zoom-in"
//                   data-aos-duration="1000"
//                   data-aos-delay="600"
//                 >
//                   <Image src={value.image} alt="image" width={492} height={941} />
//                 </div>

//                 <div
//                   className="work-process-list"
//                   style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "20px",
//                   }}
//                 >
//                   {value.list.slice(0, 6).map((item, i) => (
//                     <div
//                       className="single-work-process"
//                       key={i}
//                       data-aos="fade-in"
//                       data-aos-duration="1000"
//                       data-aos-delay={item.aosDelay}
//                       style={{
//                         flex: "1 1 200px",
//                         maxWidth: "300px",
//                         minWidth: "200px",
//                         textAlign: "center",
//                         padding: "20px",
//                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                         borderRadius: "8px",
//                         wordWrap: "break-word",
//                         whiteSpace: "normal",
//                       }}
//                     >
//                       <div className="icon">
//                         <i className={item.iconName}></i>
//                       </div>
//                       <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
//                         {item.title}
//                       </h3>
//                       <span
//                         style={{
//                           fontSize: "16px",
//                           color: "#555",
//                           lineHeight: "1.5",
//                           display: "block",
//                           wordWrap: "break-word",
//                         }}
//                       >
//                         {item.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <Image
//                   src={value.circleImage}
//                   className="rotateme circle-image"
//                   alt="image"
//                   width={905}
//                   height={908}
//                 />
//               </div>
//             </div>
//           </section>
//         ))}
//     </>
//   );
// };
"use client";

import React from "react";
import Image from "next/image";

const workProcessData = [
  {
    title: "Our Work Process",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/man-with-mobile.png",
    circleImage: "/images/circle.png",

    list: [
      {
        iconName: "pe-7s-display1",
        title: "",
        text: "AI-Powered Email CustomerSupport",
        aosDelay: "100",
      },
      {
        iconName: "pe-7s-display2",
        title: "",
        text: "Refund/Return Management Using AI",
        aosDelay: "200",
      },
      {
        iconName: "pe-7s-airplay",
        title: "",
        text: "Correct and Automatic Email Routing to the Right POC",
        aosDelay: "300",
      },
      {
        iconName: "pe-7s-note2",
        title: "",
        text: "Email Interaction Analytics",
        aosDelay: "400",
      },
      {
        iconName: "pe-7s-light",
        title: "",
        text: "Sales Order Management through Email",
        aosDelay: "500",
      },
      {
        iconName: "pe-7s-sun",
        title: "",
        text: "Automated Email Reminders and Follow-ups",
        aosDelay: "600",
      },
    ],
  },
];

const WorkProcess2: React.FC = () => {
  return (
    <>
      {workProcessData &&
        workProcessData.map((value, i) => (
          <section className="work-process-area ptb-100" key={i}>
            <div className="container">
              <div className="section-title">
                <h2>{value.title}</h2>
                <p>{value.shortText}</p>
              </div>

              <div className="work-process">
                {/* Blurred image with 20% opacity */}
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  style={{
                    filter: "blur(5px)",
                    opacity: "0.95", // Adjusting to 20% blur effect
                  }}
                >
                  <Image src={value.image} alt="image" width={492} height={941} />
                </div>

                <div
                  className="work-process-list"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  {value.list.slice(0, 6).map((item, i) => (
                    <div
                      className="single-work-process"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay={item.aosDelay}
                      style={{
                        flex: "1 1 200px",
                        maxWidth: "300px",
                        minWidth: "200px",
                        textAlign: "center",
                        padding: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                      <div className="icon">
                        <i className={item.iconName}></i>
                      </div>
                      {/* Bold text for title and description */}
                      <h3
                        style={{
                          fontSize: "18px",
                          marginBottom: "10px",
                          fontWeight: "bold", // Making title bold
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#555",
                          lineHeight: "1.5",
                          display: "block",
                          wordWrap: "break-word",
                          fontWeight: "bold", // Making description bold
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Image
                  src={value.circleImage}
                  className="rotateme circle-image"
                  alt="image"
                  width={905}
                  height={908}
                />
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default WorkProcess2;


//export default WorkProcess2;
