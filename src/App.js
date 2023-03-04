import "./index.css";
import Resume from "./Resume";
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const App = () => {
  const info = {
    image: `./cake.jpg`,
    fname: `KUNLANIS`,
    lname: `YOONUCH`,
    tools: `./mystack.png`,
    aboutMe: `
    A Cost & Specification Engineer who's tired of mannually input and calculations on  Excel, I'd been trying to minimize and shorten the very repeatedly work process, and i finally found out that coding could help. That 's the point where i start  learning coding.`,

    websites: [
      {
        url: "https://github.com/cerkcake",
        name: `GitHub`,
        icon: <BsGithub />,
      },
      {
        url: "https://www.facebook.com/yoonuch",
        name: "Facebook",
        icon: <BsFacebook />,
      },
      {
        url: "https://instagram.com/lotsof.cake",
        name: "Instagram",
        icon: <BsInstagram />,
      },
    ],

    location: `Saimai, Bangkok`,
    contactInfo: { tel: `091-234-5678`, mail: `yoo.kunlanis@gmail.com` },
    qualify: `Assc. Engineer No.69903`,
    schoolName: `RITTIYA WANNALAI, Bangkok`,
    schoolDetail: `- Science-Mathematics`,
    university1: `KING MONGKUT'S UNIVERSITY OF TECHNOLOGY THONBURI, Bangkok`,
    universityDetail1: `- Bachelor of Civil Engineering`,
    workExperience: [
      {
        year: "2020-2022",
        companyName: "TEAM Group Co.,Pcl",
        jobs: [
          "- Cost & Specification Engineer",
          "- Architecture & Structure Drawing Improvement",
        ],
      },
      {
        year: "2018-2019",
        companyName: "Power Line Engineering Co.,Pcl",
        jobs: [
          "- Technical Support for Site Engineer",
          "- Construction Layout Planer",
          "- Construction Man power & Machinery Planer",
        ],
      },
      {
        year: "2016-2017",
        companyName: "International Project Administration Co.,Ltd",
        jobs: [
          "- Site Engineer",
          "- Construction Progress Tracker & Report",
          "- Construction Manager Assistant",
        ],
      },
    ],
  };

  return <Resume info={info} />;
};

export default App;
