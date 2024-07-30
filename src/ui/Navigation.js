"use client"

import React, { useEffect, useState } from 'react';
import logo from '../../public/Images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { HiBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import { BiChevronRight } from 'react-icons/bi';

const Navigation = () => {
  const navigationMenu = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '#donate',
      label: 'Donate',
    },
    {
      href: '#sermons',
      label: 'Sermons',
    },
    {
      href: '#testimony',
      label: 'Testimonies',
    },
    {
      href: '#activities',
      label: 'Activities',
    },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
  });

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    if (typeof window !== 'undefined') {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <>
      <header className="py-7 mt-5">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={logo} width={156} height={31} alt="Gazing Calvary logo" className="border-none" priority="true"/>
              </Link>
            </div>
            {/*Menu */}
            <div className={dimensions.width > 640 ? "lg:block max-lg " : "hidden"}>
              <ul className="flex space-x-7">
                {dimensions.width > 640 && navigationMenu.map((item, idx) => (
                  <li key={item.label} className='p-2 max-sm:hidden'>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/**cta */}
            <div>
             <div className={dimensions.width > 640 ? "lg:block max-lg " : "hidden"}>
            <Link href="#join" className="px-5 py-4 bg-primary text-white rounded-lg max-sm:hidden lg:block">
              Join Us
            </Link>
            </div> 

              <button className={dimensions.width <= 640 ? "max-lg:hidden max-sm:block max-md:hidden" : "hidden"} onClick={mobileMenuHandler}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/*phone*/}
      <div className={navOpen ? "py-0 block fixed w-screen z-[9999]" : "py-0 hidden fixed w-screen z-[9999]"}>
        <div className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50" onClick={mobileMenuHandler}></div>
          <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
            <div className="h-14 px-10 border-b flex items-center">
              <button className="flex items-center space-x-3" onClick={mobileMenuHandler}>
                <GrClose />
                <span>Close</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
              <ul className="block mb-7">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link href={item.href} className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary">
                      <span>{item.label}</span>
                      <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                        <BiChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Navigation;