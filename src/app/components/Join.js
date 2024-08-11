"use client"

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzOvqtzO1S7dCXizNUNtia0FF5kWd6cHPY5NndYqw3XLv9TdJDUt7W0y_A3uo0KMfs/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Thanks for Joining Us!";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  }, []);

  

  return (
    <div id="join" className='mt-10'>
      <div className="w-full flex justify-center items-center mx-auto m-4 mt-[90px]" data-aos="fade-up" data-aos-delay="100">
        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} name="submit-to-google-sheet">
          {/* Form fields */}
          <div className="flex">
            {/* Name field */}
            <div className="mb-4 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              {/* Name input */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                name="name"
              />
            </div>
            {/* Email field */}
            <div className="mb-4 ml-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              {/* Email input */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
              />
            </div>
          </div>
          <div className="flex">
            {/* Phone field */}
            <div className="mb-4 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              {/* Phone input */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                name="phone"
              />
            </div>
            {/* Location field */}
            <div className="mb-4 ml-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              {/* Location input */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                name="location"
              />
            </div>
          </div>
          {/* Submit button */}
          <div className="flex items-center justify-center">
            <button
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Join Us
            </button>
          </div>
        </form>
        
      </div>
      <span id="msg" className='text-center text-green-700 ml-[685px]'></span>
      <hr className='mt-10 w-full'/>
    </div>
  );
};

export default UserForm;