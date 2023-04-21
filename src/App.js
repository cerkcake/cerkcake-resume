import "./index.css";
import Resume from "./Resume";
import { BsGithub, } from "react-icons/bs";

const App = () => {
  const info = {
    image: `./cake.jpg`,
    fname: `KUNLANIS`,
    lname: `YOONUCH`,
    tools: `./mystack.png`,
    aboutMe: `
    A Civil Engineer who's tired of manually input and calculations on  
    Excel, I'd been trying to minimize and shorten the very repeatedly 
    work process, and I finally found out that coding could help. That 's 
    the point where I start  learning coding.`,

    websites: [
      {
        url: "https://github.com/cerkcake",
        name: `GitHub`,
        icon: `https://cdn.iconscout.com/icon/free/png-256/github-156-675764.png?f=webp&w=256`,
      },
      {
        url: "https://www.facebook.com/yoonuch",
        name: "Facebook",
        icon: `https://cdn.iconscout.com/icon/free/png-512/facebook-270-789828.png?f=avif&w=256`,
      },
      {
        url: "https://www.linkedin.com/in/kunlanis-yoonuch/",
        name: "LinkedIn",
        icon: `https://cdn.iconscout.com/icon/free/png-512/linkedin-194-789838.png?f=avif&w=256`,
      },
    ],

    location: `Saimai, Bangkok`,
    contactInfo: { tel: `091-234-5678`, mail: `yoo.kunlanis@gmail.com` },
    qualify: `Assc. Engineer No.69903`,
    educations: [
      {type:`Short Course`,
        name: `SprintTech Academy, Bangkok`,
        details: [`- A 3-month course of Fullstack Developer`],
      },
      {type:`University`,
        name: `KING MONGKUT'S UNIVERSITY OF TECHNOLOGY THONBURI, Bangkok`,
        details: [`- Bachelor of Civil Engineering`],
      },
      {type:`School`,
        name: `RITTIYA WANNALAI, Bangkok`,
        details: [`- Science-Mathematics`],
      },
    ],
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
