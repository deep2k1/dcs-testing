import React from "react";

const Content = ({ heading, text }) => {
  return (
    <div className="bg-[#c3c3c3]">
      <div className="max-w-[1240px] m-auto grid md:grid-cols-2 p-20 gap-6 text-black">
        <h1 className="text-3xl md:text-4xl font-bold">{heading}</h1>
        <div>
          {Array.isArray(text) ? (
            text.map((para, idx) => (
              <p
                key={idx}
                className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light"
              >
                {para}
              </p>
            ))
          ) : (
            <p className="py-2 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
