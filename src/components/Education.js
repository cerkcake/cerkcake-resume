import React from 'react'

const Education = ({info}) => {
  return (
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
  )
}

export default Education