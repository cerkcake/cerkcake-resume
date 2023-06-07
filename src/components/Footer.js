import React from "react";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Footer = ({info}) => {
  return (
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
  );
};

export default Footer;
