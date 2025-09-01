import React, { useState, useEffect } from "react";

const Details = () => {
  return (
    <div>
      <div className="max-w-[1240px] m-auto relative z-0 py-10">
        <div className="grid gap-8 flex-cols px-4">
          <div className="">
            <h1 className="py-2 text-3xl md:text-4xl font-semibold ">
              Great Attention To Detail
            </h1>
            <h2 className="text-lg py-2 md:text-2xl font-semibold">
              I Innovate And Bring New Possibilities In The Architecture
              Drafting Of Each Project
            </h2>
            <p className="pt-8 text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
              A descriptive paragraph that tells clients how accurate and
              detailed your drafting skills are and proves that you are the best
              choice they’ve made. This paragraph is also for those who are
              looking out for a reliable architecture drafter. You can use a few
              enticing words and highlight your technical skills that will
              attract future clients and encourage them to hire you right away.
            </p>
          </div>
          <div className="grid grid-col-3 md:grid-rows-1 md:grid-cols-3 px-4 md:px-0">
            <img
              src="https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/elementor/thumbs/office-table-otr1izq7cq253rqbfpkwawrp9vzojy2aovovpdyc9s.jpg"
              alt=""
              srcset=""
              className="w-full"
            />
            <img
              src="https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/elementor/thumbs/bathtub-otr1ir9nn7qk7a2lt3x96gwjxf5dmo4pnptidwavts.jpg"
              alt=""
              srcset=""
              className="w-full"
            />
            <img
              src="https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/elementor/thumbs/white-wall-otr1ir9nn7qk7a2lt3x96gwjxf5dmo4pnptidwavts.jpg"
              alt=""
              srcset=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
