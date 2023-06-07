import React from "react";

const Language = () => {
  return (
    <div className="p-6 text-gray-100 border-b-2 border-gray-100 md:border-hidden">
      <div>
        <h2 className="text-2xl font-bold">LANGUAGES</h2>
      </div>

      <div className="pt-2">
        <h1 className=" text-lg font-bold">THAI : Native </h1>
      </div>

      <div className="pt-1">
        <h1 className=" text-lg font-bold ">ENGLISH : intermediate</h1>
        <p className=" text-sm"> TOEIC Score : 575 (2019) </p>
        <p className=" text-sm"> IELTS Band Score : 6 (2017)</p>
      </div>
    </div>
  );
};

export default Language;
