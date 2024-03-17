"use client"
import React, {  useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Image from 'next/image';

const blogContent = {
  heading: {
    headingSubTitle: "Our Ministry literature",
    headingTitle: "Discover our latest sermons, articles, podcasts and the spirit of prophecy",
    description: "Our church ministry literature is a collection of faith-based materials designed to educate, inspire, and transform lives. It offers informative and biblical content that is uplifting, thought-provoking, and worshipful. With a focus on outreach, discipleship, and community, our literature aims to empower and support individuals on their spiritual journey. Through diverse and inclusive perspectives, we strive to provide impactful resources that foster compassion, prayerfulness, and a God-centered perspective.",
  },
  images: {
    img1: '/Images/sermon.jpg',
    img5: '/Images/img6.jpg',
    img3: '/Images/img7.jpg',
    img4: '/Images/img8.jpg',
    img2: '/Images/img9.jpg',
  }
}

const BlogSection = () => {

  
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  },[]);

 

  return (
    <section className="py-20 bg-light">
      <div className='container px-4 mx-auto'>
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-5/12 mb-10 lg:mb-0">
            {blogContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:-z-10">{blogContent.heading.headingSubTitle}</span>
            )}

            {blogContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {blogContent.heading.headingTitle}
              </h2>
            )}

            {blogContent.heading.description && (
              <p className="text-body leading-relaxed">
                {blogContent.heading.description}
              </p>
            )}
        </div>
      <div className='lg:w-6/12 space-y-2'>
            <div className='flex space-x-2 items-stretch'>
              <div className='w-8/12'>
                {blogContent.images.img1 && (
                  <Image src={blogContent.images.img1} width={397} height={406} alt="worship" className='object-cover h-full w-full rounded-2xl' data-aos="fade-right" data-aos-delay="100" />
                )}
              </div>
              <div className='w-4/12 self-end space-y-2'>
                <div className='grid grid-cols-2 gap-2'>
                  {blogContent.images.img2 && (
                    <div>
                      <Image src={blogContent.images.img2} width={437} height={437} alt="sermon" className='object-cover h-full w-full rounded-2xl ' data-aos="fade-down" data-aos-delay="100" />
                    </div>
                  )}
                  <div className='bg-blueLight rounded-2xl rounded-tr-[200px]'></div>
                </div>
                {blogContent.images.img3 && (
                  <div>
                    <Image src={blogContent.images.img3} width={374} height={392} alt="Bible reading" className='object-cover h-full w-full rounded-2xl' data-aos="fade-left" data-aos-delay="100" />
                  </div>
                )}
              </div>
            </div>
           <div className='flex space-x-2'>
              <div className='w-4/12'>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='bg-greenLight rounded-2xl rounded-bl-[200px]'></div>
                  {blogContent.images.img4 && (
                    <div>
                      <Image src={blogContent.images.img4} width={394} height={394} alt="praise" className="object-cover h-full w-full rounded-2xl" data-aos="fade-up" data-aos-delay="100" />
                    </div>
                  )}
                </div>
              </div>
              <div className='w-5/12'>
                {blogContent.images.img5 && (
                  <Image src={blogContent.images.img5} width={446} height={495} alt="sermon" className='object-cover h-full w-full rounded-2xl' data-aos="fade-up" data-aos-delay="100" />
                )}
              </div>
            </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default BlogSection;