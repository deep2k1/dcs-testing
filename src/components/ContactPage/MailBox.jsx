import React, { useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";

const MailBox = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
      .get("http://localhost:4000/", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <div>
      <h2 className="text-lg pb-10 md:text-2xl font-semibold">
        Send Me a Message
      </h2>
      <div className="float-start w-full">
        <input
          type="email"
          placeholder="EMAIL"
          className="mb-4 border-1 border-dotted bg-white p-2 w-[90%]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="SUBJECT"
          className="mb-4 border-1 border-dotted bg-white p-2 w-[90%]"
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          type="text"
          className=" h-40 mb-4 border-1 border-dotted bg-white p-2 w-[90%] focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="MESSAGE"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <button onClick={sendMail} className="cursor-crosshair hover:text-blue-600 ">
            <p className="text-xl">
              <span className=" flex items-center content-center font-bold border-b-2 w-fit ">
                <span>
                  <FaLongArrowAltRight className="mx-2" />
                </span>
                <span className="mx-2">Send Message</span>
              </span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailBox;
