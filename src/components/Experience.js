import React from "react";

const Experience = ({ info }) => {
  return (
    <div id="WorkExperience" className="p-6">
      <div className="w-full">
        <h3 className="pb-6 text-2xl font-bold">WORK EXPERIENCE</h3>
      </div>
      {info.workExperience.map((work) => (
        <div
          key={work.year}
          className="company-detail lg:flex  justify-between"
        >
          <div className="company w-full lg:w-1/3 lg:border-r-2">
            <div className="hidden lg:flex md:bg-gray-50 mt-1.5 rounded-full w-3 h-3 float-right -mr-1.5"></div>
            <time className="font-bold">{work.year}</time>
          </div>
          <div className="details w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
            <h4 className=" font-bold">{work.companyName}</h4>
            <p className="">
              <ul className="list-none">
                {work.jobs.map((job) => (
                  <li key={job}>{job}</li>
                ))}
              </ul>
              <br />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
