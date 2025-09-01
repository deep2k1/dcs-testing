import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import MailBox from "./MailBox";

const ContactUs = () => {
  return (
    <div className="max-w-full m-auto relative z-0 bg-transparent py-40">
      <div className="max-w-[1240px] m-auto px-4">
        <div className="w-full grid gap-10 md:gap-10 grid-rows-3 md:grid-rows-1 md:grid-cols-3">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-lg md:text-2xl font-semibold pb-6">
                Contact Details
              </h2>
              <p className="mt-4 text-[#2a2a2a] text-[15px] tracking-wide font-medium capitalize">
                Draft CAD Soulution
              </p>
              <p className="mt-2 text-[#2a2a2a] text-[15px] tracking-wide font-medium ">
                Whenther it's small detail or major question, <br /> we're
                avaliable
              </p>
              <p className="mt-4 text-[#5a5a5a] text-[15px] tracking-wide font-thin">
                Phone:
              </p>
              <p className="mt-2 text-[#2a2a2a] text-[15px] tracking-wide font-medium ">
                +91 9886 95464
              </p>
              <p className="mt-4 text-[#5a5a5a] text-[15px] tracking-wide font-thin">
                Email:
              </p>
              <p className="mt-2 text-[#2a2a2a] text-[15px] lowercase font-medium ">
                draftcadsolution@gmail.com
              </p>
            </div>
            <div>
              <h2 className="text-lg py-2 md:text-2xl font-semibold ">
                My Location
              </h2>
              <p className="py-2 text-[#5a5a5a] text-[15px] tracking-wide font-light">
                Ahmedabad, India — Serving Clients Worldwide
              </p>
            </div>
          </div>
          <div>
            <MailBox />
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842920963!2d72.41492881144384!3d23.020474101422124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1756623603754!5m2!1sen!2sin"
              frameborder="0"
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
