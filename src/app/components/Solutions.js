"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const solutionContent = {
  text: {
    headingSubTitle: "Our Programs",
    headingTitle:
      "Transforming lives through the power of the Gospel, spreading God's love and grace to all people.",
    description:
      "We strive to be a beacon of hope, inspiring individuals to encounter Jesus Christ, experience His transformative love, and walk in the fullness of His purpose. Guided by faith, we seek to serve and empower communities, bringing healing, restoration, and reconciliation to a broken world. ",
    features: [
      {
        title: "Sermons",
      },
      {
        title: "Spirit of Prophecy",
      },
      {
        title: "Podcasts",
      },
      {
        title: "Bible Studies",
      },
    ],
    cta: {
      btn1: {
        href: "#join",
        label: "Join Us",
      },
      btn2: {
        href: "#testify",
        label: "Testify",
      },
    },
  },
  images: {
    img1: "/Images/group.jpg",
    img2: "/Images/Galleryimg5.jpg",
    img3: "/Images/Galleryimg2.jpg",
  },
  experience: {
    year: "20+ years",
    label: "of our team ministry involvement",
  },
};

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });

  return (
    <section className="py-32 bg-light overflow-x-hidden" id="believe">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={solutionContent.images.img1}
                    width={626}
                    height={640}
                    className="object-cover h-full w-full rounded-lg"
                    alt="Bible Reading"
                    data-aos="fade-down"
                    data-aos-delay={100}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                    </div>
                  </div>
                  <div className="w-6/12 flex">
                    <Image
                      src={solutionContent.images.img3}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg alt='worship'"
                      alt="image"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    />
                  </div>
                </div>
              </div>
              {/*end col */}
              <div className="mt-auto">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>
                  </div>
                  <div>
                    <Image
                      className="object-cover h-full w-full rounded-lg shadow-2xl"
                      src={solutionContent.images.img2}
                      width={547}
                      height={573}
                      data-aos="fade-left"
                      data-aos-delay={100}
                      alt="image"
                    />
                  </div>
                  {solutionContent.experience.label && (
                    <div>
                      <div
                        className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <strong className="block font-bold text-primary text-xl lg:text-5xl">
                          {solutionContent.experience.year}
                        </strong>
                        <span>{solutionContent.experience.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="lg:w-5/12 relative z-10"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {solutionContent.text.headingSubTitle && (
              <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {solutionContent.text.headingSubTitle}
              </span>
            )}

            {solutionContent.text.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {solutionContent.text.headingTitle}
              </h2>
            )}

            {solutionContent.text.description && (
              <p className="text-body leading-relaxed mb-10">
                {solutionContent.text.description}
              </p>
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
              {solutionContent.text.features.map((feature, idx) => (
                <li
                  className="flex flex-grow items-center space-x-5"
                  key={feature.title}
                >
                  <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <BiCheck className="text-white text-xl" />
                  </span>
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>

            <div className="flex space-x-3">
              <Link
                href={solutionContent.text.cta.btn1.href}
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-0.5"
              >
                {solutionContent.text.cta.btn1.label}
              </Link>
              <Link
                href={solutionContent.text.cta.btn2.href}
                className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0 hover:-top-0.5"
              >
                {solutionContent.text.cta.btn2.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
