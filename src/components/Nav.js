import { SlMenu } from "react-icons/sl";

const Nav = ({ toggle, setToggle }) => {
  return (
    <>
      {/* START NAV SECTION */}
      <nav className="w-full fixed text-gray-50">
        <div className="h-16 bg-gradient-to-r from-green-400 to-blue-500 md:w-5/6 shadow-md mx-auto rounded-b-xl flex items-center justify-start">
          <div className="ml-4">
            <button className="text-2xl" onClick={() => setToggle(!toggle)}>
              <SlMenu />
            </button>
          </div>
        </div>
        <div className="mx-auto md:w-5/6">
          {toggle && (
            <div className="float-left md:w-1/3 rounded-lg py-1">
              <ul className="">
                <li className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-1 mb-1">
                  <a href="#Home">Home</a>
                </li>
                <li className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-1 mb-1">
                  <a href="#AboutMe">About Me</a>
                </li>
                <li className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-1 mb-1">
                  <a href="#Education">Education</a>
                </li>
                <li className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-1 mb-1">
                  <a href="#WorkExperience">Work Experience</a>
                </li>
                <li className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-1">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      {/* END NAV SECTION */}
    </>
  );
};

export default Nav;
