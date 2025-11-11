"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const heroContent = {
  text: {
    subheading: "Welcome to Gazing Calvary",
    heading: "Christ Centered, Bible Truth, Mission Oriented",
    description:
      "At Gazing Calvary, we are firmly rooted in biblical truth and passionately focused on our God assigned mission. We seek to emulate Christ's love, grace, and compassion in serving others. Guided by the Scriptures, we diligently spread the gospel, transform lives, and equip believers to fulfill their God-given purpose.",
  },
  images: {
    img1: "/Images/image 2.png",
    img5: "/Images/image 3.jpg",
    img3: "/Images/Galleryimg1.jpg",
    img4: "/Images/image 4.jpg",
    img2: "/Images/Galleryimg6.jpg",
  },
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  }, []);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span
                className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                data-aos="fade-up"
              >
                {heroContent.text.subheading}
              </span>
            )}
            {heroContent.text.heading && (
              <h1
                className="text-4xl lg:text-5xl font-bold text-heading mb-7"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p
                className="leading-relaxed text-black mb-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {heroContent.text.description}
              </p>
            )}
            <div className="flex space-x-3">
              <Link
                href="#join"
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-0.5"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Join Us
              </Link>
              <Link
                href="#believe"
                className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0 hover:-top-0.5"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                What we Believe
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="worship"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="sermon"
                        className="object-cover h-full w-full rounded-2xl "
                        data-aos="fade-down"
                        data-aos-delay="100"
                      />
                    </div>
                  )}
                  <div className="bg-blueLight rounded-2xl rounded-tr-[200px]"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="Bible reading"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-left"
                      data-aos-delay="100"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                  {heroContent.images.img4 && (
                    <div>
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        alt="praise"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-5/12">
                {heroContent.images.img5 && (
                  <Image
                    src={heroContent.images.img5}
                    width={446}
                    height={495}
                    alt="sermon"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
