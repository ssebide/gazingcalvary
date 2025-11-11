"use client";
import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import quote from "../../../public/Images/qoute.png";

const Testimonial = () => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const handleShareTestimony = useCallback(() => {
    const message = encodeURIComponent("My Testimony is: " + whatsappMessage);
    window.open(`https://wa.me/+256755073651?text=${message}`, "_blank");
    setWhatsappMessage("");
  }, [whatsappMessage]);

  const testimonialContent = {
    heading: {
      headingSubTitle: "Testimonies",
      headingTitle: "Let's Share God's Amazing Work.",
      description:
        "From heartfelt testimonies to an amazing God's working, these voices embody the trust and faith our congregation places in our church. Let their words resonate with you and discover the extraordinary spiritual journey that awaits you at Gazing Calvary",
      cta: {
        cta_href: "#_",
        cta_label: "Share Yours",
      },
    },
    testimonials: [
      {
        img: "/Images/Matthew.jpg",
        name: "Revelation 14:12-14",
        verse:
          "Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.",
      },
      {
        img: "/Images/timothy.jpg",
        name: "Matthew 24:14",
        verse:
          "And this Gospel of the Kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.",
      },
      {
        img: "/Images/john.jpg",
        name: "John 3:16",
        verse:
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });

  return (
    <section className="py-20 bg-light" id="testify">
      <div className="container px-4 mx-auto mt-[-130px]">
        <div className="lg:flex justify-between items-center">
          <div
            className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {testimonialContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading mt-5 font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {testimonialContent.heading.headingSubTitle}
              </span>
            )}

            {testimonialContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {testimonialContent.heading.headingTitle}
              </h2>
            )}

            {testimonialContent.heading.description && (
              <p className="test-body leading-relaxed mb-10">
                {testimonialContent.heading.description}
              </p>
            )}

            {testimonialContent.heading.cta.cta_label && (
              <div>
                <input
                  type="text"
                  value={whatsappMessage}
                  onChange={(e) => setWhatsappMessage(e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-lg mb-4 mr-4"
                  placeholder="Enter your testimony"
                />
                <button
                  onClick={handleShareTestimony}
                  className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-0.5"
                >
                  {testimonialContent.heading.cta.cta_label}
                </button>
              </div>
            )}
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0">
                {testimonialContent.testimonials.map((testimonial, idx) => {
                  if (idx == 2) return null;

                  return (
                    <div
                      key={idx} // Add key prop for the element in the iterator
                      className={`bg-white p-7 rounded-lg w-full ${
                        idx == 1 ? "" : "mb-6"
                      }`}
                      data-aos="fade-right"
                      data-aos-delay={100}
                    >
                      <div className="flex space-x-4 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={testimonial.img}
                            width={579}
                            height={720}
                            className="object-cover h-14 w-14 rounded-full"
                            alt="Bible"
                          />
                          <span className="absolute bottom-0 -right-2 w-6 h-4 rounded-full items-center justify-center">
                            <Image
                              src={quote}
                              width={14}
                              height={9}
                              alt="quote"
                            />
                          </span>
                        </div>
                        <div className="leading-3">
                          {testimonial.name && (
                            <strong className="block text-heading text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>&quot;{testimonial.verse}&quot;</blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6"></div>
                  <div
                    className="bg-white p-7 rounded-lg w-full mb-6"
                    data-aos="fade-left"
                    data-aos-delay={100}
                  >
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={testimonialContent.testimonials[2].img}
                          width={579}
                          height={720}
                          className="object-cover h-14 w-14 rounded-full"
                          alt="image"
                        />
                        <span className="absolute bottom-0 -right-2 w-6 h-4 rounded-full items-center justify-center">
                          <Image
                            src={quote}
                            width={14}
                            height={9}
                            alt="quote"
                          />
                        </span>
                      </div>
                      <div className="leading-3">
                        {testimonialContent.testimonials[2].name && (
                          <strong className="block text-heading text-lg">
                            {testimonialContent.testimonials[2].name}
                          </strong>
                        )}
                      </div>
                    </div>
                    <div>
                      <blockquote>
                        &quot;{testimonialContent.testimonials[2].verse}&quot;
                      </blockquote>
                    </div>
                  </div>
                  <div className="bg-[#F27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
