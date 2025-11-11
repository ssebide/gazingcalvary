"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesContent = {
  heading: {
    headingSubTitle: "Our Uplifting Activities",
    headingTitle: "Discover our Amazing Activities",
    description:
      "We passionately serve God and humanity by sharing the love of Christ, proclaiming the Gospel, and making disciples of all nations. Grounded in the teachings of Jesus Christ, we are committed to nurturing spiritual growth, fostering community, and equipping believers to live out their faith in practical ways.",
  },
  items: [
    {
      icon: "/Images/folded.png",
      title: "Prayer and Worship",
      description:
        "Engaging and transformative prayer and worship services that inspire spiritual connection, foster community, and deepen faith journeys.",
    },
    {
      icon: "/Images/user.png",
      title: "Community Outreach",
      description:
        "Compassionate and impactful community outreach services that extend love, support, and hope to those in need, fostering positive change.",
    },
    {
      icon: "/Images/boy.png",
      title: "Children Ministry",
      description:
        "Nurturing and joyful children's ministry services that provide a safe and inclusive environment for learning, growth, and faith exploration.",
    },
    {
      icon: "/Images/youth-day.png",
      title: "Youth Ministry",
      description:
        "Dynamically engaging youth ministry services that empower young individuals to grow spiritually, build meaningful relationships, and make a positive impact.",
    },
    {
      icon: "/Images/team.png",
      title: "Volunteer Programs",
      description:
        "Opportunities for selfless service, where volunteers use their unique talents to make a difference in the community and beyond.",
    },
    {
      icon: "/Images/communication.png",
      title: "Counselling Services",
      description:
        "Compassionate and confidential counselling services that provide emotional support, guidance, and healing to individuals and families in need.",
    },
  ],
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="py-20 bg-ligth" id="activities">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          {servicesContent.heading.headingSubTitle && (
            <span
              className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {servicesContent.heading.headingSubTitle}
            </span>
          )}
          {servicesContent.heading.headingTitle && (
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {servicesContent.heading.headingTitle}
            </h2>
          )}
          {servicesContent.heading.description && (
            <p
              className="text-body leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {servicesContent.heading.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesContent.items.map((item, idx) => (
            <div className="flex space-x-10" key={item.title}>
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
                  <Image
                    src={item.icon}
                    width={62}
                    height={62}
                    alt="gazingcalvary"
                    data-aos="fade-in"
                    data-aos-delay={100}
                  />
                </span>
              </div>
              <div>
                {item.title && (
                  <h3
                    className="text-heading font-bold text-md mb-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p
                    className="leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
