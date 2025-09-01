import React, { useState, useEffect } from "react";

const Dnp = () => {
  return (
    <div>
      <div className="max-w-[1240px] m-auto relative z-0 py-10">
        <div className="flex gap-4 flex-col md:grid grid-cols-3 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-semibold ">
            Great Attention To Detail
          </h1>
          <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
            A descriptive paragraph that tells clients how precise your drawings
            are and proves that you are the best choice they’ve made. This
            paragraph is also for those who are looking out for a reliable
            architecture drafter. You can use a few enticing words and highlight
            your expertise in architectural plans, construction drawings, and
            CAD drafting that will attract future clients and encourage them to
            hire you right away.
          </p>
          <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
            A descriptive paragraph that tells clients how good you are and
            proves that you are the best choice that they’ve made. This
            paragraph is also for those who are looking out for a reliable
            interior designer. You can use a few enticing words and flaunt your
            capabilities that will attract future clients and encourage them to
            hire you right away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dnp;
