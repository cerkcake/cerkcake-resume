import "../index.css";

import React from "react";

import Profile from "./Profile";
import Website from "./Website";
import Language from "./Language";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";

const Resume = ({ info }) => {
  return (
    <div className="bg-black">
      {/*MAIN CONTAINER*/}
      <div className="pt-[64px\] md:flex md:w-5/6 mx-auto pt-14 border-b-2 border-gray-100">
        {/* LEFT SECTION */}
        <div className="w-full pb-10 text-gray-100 md:w-1/2 lg:w-1/3 bg-black p-3">
          <Profile info={info} />
          <Website info={info} />
          <Language />
        </div>
        {/* END LEFT SECTION */}

        {/* RIGHT SECTION */}
        <div className="right-section p-3 bg-black text-gray-100 w-full md:w-1/2 lg:w-2/3">
          <Education info={info} />
          <Experience info={info} />
        </div>
        {/* END RIGHT SECTION */}
      </div>
      {/* END MAIN CONTAIN */}

      {/* START CONTACT INFO */}
      <Footer info={info} />
      {/* END CONTACT INFO */}
    </div>
  );
};

export default Resume;
