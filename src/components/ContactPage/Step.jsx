import React from "react";
import { FaBuilding } from "react-icons/fa";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const stepsData = [
  {
    title: "Step 01: Inquiry & Consultation",
    points: [
      "Initial inquiry from client",
      "Response within 24 hours",
      "Schedule a discovery call to understand goals",
    ],
    img: "https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/2020/06/gray-dining-table-under-pendant-lamps.jpg",
  },
  {
    title: "Step 02: Requirement Analysis",
    points: [
      "Deep-dive into project needs",
      "Identify challenges, budget, and timeline",
      " Create tailored proposal with clear solutions",
    ],
    img: "https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/2020/06/gray-dining-table-under-pendant-lamps.jpg",
  },
  {
    title: "Step 03: Pricing & Engagement",
    points: [
      "Transparent pricing breakdown",
      "Flexible engagement models",
      "Approval & finalization of terms",
    ],
    img: "https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/2020/06/gray-dining-table-under-pendant-lamps.jpg",
  },
  {
    title: "Step 04: Agreement & Kickoff",
    points: [
      "Contract signing & official onboarding",
      "Assign project manager & technical lead",
      "Project officially begins with kickoff meeting",
    ],
    img: "https://websitedemos.net/interior-designer-02/wp-content/uploads/sites/275/2020/06/gray-dining-table-under-pendant-lamps.jpg",
  },
];

const Step = () => {
  return (
    <div className="bg-transparent pt-20">
      <div className="max-w-[1240px] m-auto relative z-0">
        <div className="flex flex-col gap-y-30">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className={`step gap-8 flex items-center flex-col md:grid md:grid-rows-1 md:grid-cols-2 px-4`}
            >
              {/* alternate image/text position */}
              {index % 2 === 0 ? (
                <>
                  {/* Text Section */}
                  <div>
                    <div className="py-2">
                      <FaBuilding
                        size={60}
                        className="text-white bg-orange-400 border-orange-400 border-2 shadow-2xl shadow-[#5a5a5a] p-2"
                      />
                    </div>
                    <h1 className="py-2 text-3xl md:text-4xl font-semibold">
                      {step.title}
                    </h1>
                    {step.points.map((point, i) => (
                      <div key={i} className="pt-4 flex items-start">
                        <TbArrowBadgeRightFilled className="my-1" />
                        <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Image Section */}
                  <div>
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full max-h-[600px] object-cover"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image first */}
                  <div>
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full max-h-[600px] object-cover"
                    />
                  </div>
                  {/* Text second */}
                  <div>
                    <div className="py-2">
                      <FaBuilding
                        size={60}
                        className="text-white bg-orange-400 border-orange-400 border-2 shadow-2xl shadow-[#5a5a5a] p-2"
                      />
                    </div>
                    <h1 className="py-2 text-3xl md:text-4xl font-semibold">
                      {step.title}
                    </h1>
                    {step.points.map((point, i) => (
                      <div key={i} className="pt-4 flex items-start">
                        <TbArrowBadgeRightFilled className="my-1" />
                        <p className="text-[#5a5a5a] text-xs md:text-base tracking-wide font-light">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;
