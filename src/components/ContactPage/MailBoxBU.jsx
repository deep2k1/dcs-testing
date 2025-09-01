import React, { useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";

const MailBox = () => {
  // const [name, setName] = useState;
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
      .post("http://localhost:4000/", {
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

  // const handleSubmit = async () => {
  //   e.preventDefault();

  //   const dataToSend = {
  //     // name,
  //     email,
  //     subject,
  //     message,
  //   };
  //   try {
  //     const response = await axios.post("http://localhost:8800", dataToSend);
  //     alert(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <h2 className="text-lg pb-10 md:text-2xl font-semibold">
        Send Me a Message
      </h2>
      <div className="float-start w-full">
        {/* <form onSubmit={handleSubmit}> */}
        {/* <input
            type="text"
            placeholder="NAME"
            className="mb-4 border-1 border-dotted bg-white p-2 w-[90%]"
            onChange={(e) => setName(e.target.value)}
          /> */}
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
          <button onClick={sendMail} className="bg-red-500 cursor-crosshair ">
            Send Mail
          </button>
          {/* <p className="text-[0.8rem] ">
              <span className=" flex items-center content-center font-bold border-b-2 w-fit ">
                <span>
                  <FaLongArrowAltRight className="mx-2" />
                </span>
                <span className="mx-2">Send Message</span>
              </span>
            </p> */}
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default MailBox;
