import React from "react";

const Our = () => {
  return (
    <div className=" py-10 pt-20">
      <div className="max-w-[1240px] m-auto relative z-0 ">
        <div className="flex gap-4 flex-col items-center md:grid grid-cols-3 px-4 md:px-0">
          <div className="">
            <img
              src="https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/elementor/thumbs/office-table-otr1izq7cq253rqbfpkwawrp9vzojy2aovovpdyc9s.jpg"
              alt=""
              srcset=""
              className="h-full w-full"
            />
          </div>
          <div className="col-span-2">
            <div className="grid gap-4">
              <h1 className="text-3xl md:text-4xl font-bold pb-4">
                Drafting Solutions You Can Rely On
              </h1>
              <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                No matter the complexity of your project, our team provides
                accurate and high-quality architectural drafting services that
                ensure efficiency, safety, and smooth project execution from
                concept to completion.
              </p>
            </div>
            <div className="flex gap-4 flex-col xl:grid grid-cols-2 pt-6">
              <div>
                <h2 className="text-lg py-2 md:text-2xl font-semibold">
                  Our Mission
                </h2>
                <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                  To deliver innovative, precise, and cost-effective design and
                  drafting solutions that empower clients to bring their
                  construction visions to life. We are committed to quality,
                  accuracy, and on-time delivery while building trusted
                  partnerships that drive long-term success.
                </p>
              </div>
              <div>
                <h2 className="text-lg py-2 md:text-2xl font-semibold">
                  Our Vision
                </h2>
                <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                  To be a leading global partner in construction design and
                  drafting, recognized for excellence, innovation, and
                  reliability—shaping the future of infrastructure with
                  sustainable and smart solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
