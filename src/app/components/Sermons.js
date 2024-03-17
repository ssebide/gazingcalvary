"use client"

import React, { useRef, useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const sermonContent = {
  heading: {
    headingSubTitle: 'Our Religious literature',
    headingTitle: 'Explore sermons, articles, devotionals, podcasts and the daily verse.',
    description:
      "We prioritize heartfelt worship, discipleship, and the demonstration of Christ's love and compassion to all people. We value unity and actively engaging in evangelism and missions to bring others into a saving relationship with Jesus.",
  },
  recentBlog: [
    // ...
  ],
  cta: {
    href: '#_',
    label: 'To view all posts',
    labelSuffix: 'click here',
  },
};

const Sermons = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      setIsEnd(sliderRef.current.swiper.isEnd);
      setIsBeginning(sliderRef.current.swiper.isBeginning);
    }
  }, []);

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0" data-aos="fade-up" data-aos-delay={100}>
            {sermonContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading mt-5 font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {sermonContent.heading.headingSubTitle}
              </span>
            )}

            {sermonContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {sermonContent.heading.headingTitle}
              </h2>
            )}

            {sermonContent.heading.description && (
              <p className="text-body leading-relaxed">{sermonContent.heading.description}</p>
            )}
          </div>
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3">
              <div
                onClick={prevHandler}
                className={`${
                  isBeginning == true ? 'opacity-30 bg-[#E1E7EA] cursor-auto' : 'opacity-100 hover:bg-primary'
                }group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group:hover:text-white ${
                    isBeginning == true ? 'group-hover:!text-primary' : 'group-hover:text-white'
                  }`}
                />
              </div>

              <div
                onClick={nextHandler}
                className={`${
                  isEnd == true ? 'opacity-30 bg-[#E1E7EA] cursor-auto' : 'opacity-100 hover:bg-primary'
                }group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group:hover:text-white ${
                    isEnd == true ? 'group-hover:!text-primary' : 'group-hover:text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1366: {
              width: 1366,
              slidesPerView: 3,
            },
          }}
          ref={sliderRef}
          speed={700}
          spaceBetween={40}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:contnt-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
        >
          {sermonContent.recentBlog.map((blog, idx) => (
            <SwiperSlide className="overflow-visible h-full" key={blog.title}>
              <div className="p-5 rounded-lg bg-white relative mt-10" data-aos="fade-up" data-aos-delay={100}>
                <Link href={blog.permalink} className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4">
                  <Image src={blog.featuredImg} width={782} height={467} />
                </Link>

                <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                  <Link className="relative text-heading" href={blog.permalink}>
                    {blog.title}
                  </Link>
                </h2>

                <p className="relative mb-6">{blog.description}</p>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image src={blog.author.img} width={50} height={50} className="rounded-full object-cover w-14 h-14" />
                  </div>
                  <div className="leading-5">
                    <strong className="text-primary">{blog.author.name}</strong>
                    <span className="block text-sm">{blog.author.titleRole}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mx-auto flex items-center justify-center" data-aos="fade-right" data-aos-delay={100}>
          <Link
            href={sermonContent.cta.href}
            className="duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            {sermonContent.cta.label}
            <strong className="text-primary pl-1 font-semibold">{sermonContent.cta.labelSuffix}</strong>
            <span className="text-gray-300"></span>
            <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sermons;