"use client";

import AOS from "aos";
import { useEffect, useState, useCallback } from "react";
import "aos/dist/aos.css";

const Donate = () => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const donation = useCallback(() => {
    const message = encodeURIComponent(
      "I want to donate to this Ministry, how do i send my donation?: " +
        whatsappMessage
    );
    window.open(`https://wa.me/+256765718630?text=${message}`, "_blank");
    setWhatsappMessage("");
  }, [whatsappMessage]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  }, []);

  return (
    <div id="donate">
      <div className="flex flex-col items-center justify-between h-80 mb-5">
        <hr className="mt-10 w-full" />
        <h1
          className="text-center mt-10 text-5xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          EXPRESS YOUR <br /> GENEROSITY
        </h1>
        <p
          className="text-center mt-10"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          Join our church ministry and make a difference in the lives of others
          through your generous donation.
          <br /> Together, we spread love, hope, and compassion.
        </p>
        <button
          className="border-black text-black bg-white hover:bg-black hover:text-white border-2 rounded-xl mt-7 w-[120px] px-4 py-2"
          data-aos="fade-down"
          data-aos-delay="100"
          onClick={donation}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default Donate;
