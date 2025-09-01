import React from "react";
import { PiWashingMachineFill } from "react-icons/pi";
import { GiPizzaCutter } from "react-icons/gi";
import { MdDashboardCustomize } from "react-icons/md";
import { FaTeamspeak } from "react-icons/fa6";
import { RiTimerFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const featuresData = [
  {
    id: 1,
    icon: <PiWashingMachineFill size={60} />,
    title: "Precision-Driven Designs",
    description:
      "Every drawing is crafted with meticulous attention to detail for flawless outcomes.",
  },
  {
    id: 2,
    icon: <MdDashboardCustomize size={60} />,
    title: "Customized for You",
    description:
      "Solutions tailored to match your project's unique requirements and vision.",
  },
  {
    id: 3,
    icon: <GiPizzaCutter size={60} />,
    title: "Cutting-Edge Tools",
    description:
      "Leveraging the latest CAD technology to deliver innovative and efficient results.",
  },
  {
    id: 4,
    icon: <FaTeamspeak size={60} />,
    title: "Expert Team Support",
    description:
      "Skilled professionals dedicated to bringing expertise and value to every project.",
  },
  {
    id: 5,
    icon: <RiTimerFill size={60} />,
    title: "On-Time Delivery",
    description:
      "Your deadlines matter—we ensure fast, reliable turnaround without compromising quality.",
  },
  {
    id: 6,
    icon: <VscWorkspaceTrusted size={60} />,
    title: "Trusted Partnership",
    description:
      "Building long-term relationships through professionalism, consistency, and care.",
  },
];

const Expertise = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1240px] m-auto relative z-0">
        <div className="flex gap-4 flex-col md:grid grid-cols-3 px-4 md:px-0">
          <div>
            <img
              src="https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/elementor/thumbs/office-table-otr1izq7cq253rqbfpkwawrp9vzojy2aovovpdyc9s.jpg"
              alt="Office table"
              className="h-full w-full"
            />
          </div>
          <div className="col-span-2">
            <div className="grid gap-2">
              <h3 className="py-2 text-xs md:text-base">WHY CHOOSE SERVICE</h3>
              <h2 className="text-lg pb-2 md:text-2xl font-semibold">
                We Deliver Precision in Architecture Drafting & Design Support
              </h2>
              <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                No matter the complexity of your project, our team provides
                accurate and high-quality architectural drafting services that
                ensure efficiency, safety, and smooth project execution from
                concept to completion.
              </p>
            </div>

            {/* Map Features */}
            <div className="flex gap-4 flex-col xl:grid grid-cols-2 pt-3">
              {featuresData.map((item) => (
                <div key={item.id} className="flex gap-x-2 gap-y-4 items-start">
                  <div>{item.icon}</div>
                  <div className="flex flex-col">
                    <h3 className="py-1 tracking-[0.1rem] font-semibold uppercase text-xs md:text-[0.8rem]">
                      {item.title}
                    </h3>
                    <p className="py-1 leading-6 text-[0.8rem] text-[#535353]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
