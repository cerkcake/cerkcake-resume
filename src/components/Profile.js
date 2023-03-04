import React from 'react'

const Profile = ({info}) => {
  return (
    <>{/* START IMAGE */}
    <div className="p-5">
      <div className="mx-5 sm:mx-20 p-3 md:m-5 md:p-2 xl:p-3  bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg">
        <img className="rounded-full shadow-lg" src={info.image} />
      </div>
    </div>

    {/* END IMAGE */}
    {/* START NAME */}
    <div className="px-2 pb-10 font-bold text-4xl sm:text-5xl text-center md:text-4xl xl:text-5xl w-full">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{`${info.fname} ${info.lname}`}</div>
    </div>
    {/* END NAME */}
    {/* START TOOLS */}
    <div className="">
      <div className="px-20 md:px-10">
        <img src="./mystack.png" />
      </div>
    </div>

    {/* END TOOLS */}

    {/* START ABOUT ME */}
    <div id="AboutMe">
      <div className="px-6 py-6 border-b-2 border-b-gray-100">
        <h2 className="text-2xl font-bold">ABOUT ME</h2>
        <p className="text-md">{info.aboutMe}</p>
      </div>
    </div>

    {/* END ABOUT ME */}</>
  )
}

export default Profile