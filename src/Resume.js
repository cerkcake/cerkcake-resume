import "./index.css";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import React from "react";

import Profile from "./components/Profile";

const Resume = ({ info }) => {
  return (
    <div className="bg-black">
      {/*MAIN CONTAINER*/}
      <div className="pt-[64px\] md:flex md:w-5/6 mx-auto pt-14 border-b-2 border-gray-100">
        {/* LEFT SECTION */}
        <div className="w-full pb-10 text-gray-100 md:w-1/2 lg:w-1/3 bg-black p-3">
          <Profile info={info} />

          {/* START WEBSITE */}
          <div className="p-6 border-b-2 border-b-gray-100">
            <h2 className="mb-3 text-2xl font-bold">PAGES</h2>
            <div className="flex">
              {info.websites.map((item, index) => (
                <a
                  key={`${item}-${index}`}
                  className="pr-3"
                  href={item.url}
                  target="_blank"
                >
                  <img align="center" src={item.icon} height="30" width="40" />
                </a>
              ))}
            </div>
          </div>
          {/* END WEBSITE */}

          {/* START POWER BAR SECTION*/}
          <div className="p-6 text-gray-100 border-b-2 border-gray-100 md:border-hidden">
            <div>
              <h2 className="text-2xl font-bold">LANGUAGES</h2>
            </div>
            {/* SKILL 1 */}
            <div className="pt-2">
              <h1 className=" text-lg font-bold">THAI : Native </h1>
            </div>
            {/* END SKILL 1*/}
            {/* SKILL 2 */}
            <div className="pt-1">
              <h1 className=" text-lg font-bold ">ENGLISH : intermediate</h1>
              <p className=" text-sm"> TOEIC Score : 575 (2019) </p>
              <p className=" text-sm"> IELTS Band Score : 6 (2017)</p>
            </div>
            {/* END SKILL 2 */}
          </div>
          {/* EBD POWER BAR SECTION */}
        </div>
        {/* END LEFT SECTION */}

        {/* RIGHT SECTION */}
        <div className="right-section p-3 bg-black text-gray-100 w-full md:w-1/2 lg:w-2/3">
          <div
            id="Education"
            className="px-6 pb-6 md:pt-14 border-b-2 border-gray-100"
          >
            <div className="education-head">
              <h3 className="pb-6 text-2xl font-bold">EDUCATION</h3>
            </div>
            {info.educations.map((edu) => (
              <div className="education-detail lg:flex">
                <div className="w-full lg:w-1/3 lg:border-r-2">
                  <div className="hidden lg:flex md:bg-gray-50 mt-1.5 rounded-full w-3 h-3 float-right -mr-1.5"></div>
                  <h4 className="font-bold">{edu.type}</h4>
                </div>

                <div className="w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
                  <h4 className="font-bold"> {edu.name}</h4>
                  <p>
                    <ul className="list-none">
                      {edu.details.map((detail) => (
                        <li>{detail}</li>
                      ))}
                    </ul>
                  </p>
                  <br />
                </div>
              </div>
            ))}
          </div>
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
        </div>
        {/* END RIGHT SECTION */}
      </div>
      {/* END MAIN CONTAIN */}

      {/* START CONTACT INFO */}
      <div id="Contact">
        <div className="grid grid-rows-1 grid-flow-col gap-4 place-items-center md:w-5/6 mx-auto p-6 text-md sm:text-xl bg-black text-gray-100 ">
          <div className="">
            <h4 className="flex text-center font-bold">
              <GoLocation className="mt-1 mr-1" /> Location :{" "}
            </h4>
            <p>{info.location}</p>
          </div>

          <div>
            <h4 className="flex text-center font-bold">
              <BiPhoneCall className="mt-1 mr-1" />
              Contact :{" "}
            </h4>
            <p>{info.contactInfo.tel}</p>
            <p>{info.contactInfo.mail}</p>
          </div>

          <div>
            <h4 className="flex text-center font-bold">
              <AiOutlineSafetyCertificate className="mt-1 mr-1" />
              Qualifications :
            </h4>
            <p>{info.qualify}</p>
          </div>
        </div>
      </div>

      {/* END CONTACT INFO */}
    </div>
  );
};

export default Resume;

{
  /* //ตัวอย่าง time line
          <div className="try1">
          <ol class="relative border-l border-gray-800 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &amp;
                Marketing pages.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div> */
}
