import React from "react";

const Website = ({ info }) => {
  return (
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
  );
};

export default Website;
