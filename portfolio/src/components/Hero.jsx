import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Hero() {
  const [heroTitle, setHeroTitle] = useState("UI Developer");
  useEffect(() => {
    const titleList = [
      "Arya Rajput",
      "a Software Developer",
      "a Engineer",
      "a Problem Solver",
      "a UI Developer",
    ];
    let index = 0;
    let titeListSize = titleList.length;
  const t1 = setInterval(() => {
      setHeroTitle(titleList[index]);
      index = (index + 1) % titeListSize;
    }, 5000);

    return () =>{
      clearInterval(t1)
    }
  }, []);
  return (
    // <div className="bg-white min-h-screen flex justify-center items-center">
    //   <div className="flex flex-col items-center space-y-4">
    //     <div className="flex items-center flex-col space-y-1 p-8 ">
    //       <motion.h1
    //       initial={{opacity:0.5,}}
    //       animate={{opacity:1,scale:1.2}}
    //       transition={{delay:0.3}}
    //       className="text-4xl text-green-700 font-bold font-serif">
    //         Arya Rajput
    //       </motion.h1>
    //       <p className="text-xl font-semibold text-green-700 duration-300">{heroTitle}</p>
    //       <div className="max-w-xl text-center text-sm text-gray-600">
    //         I am a web developer. I am proficient in React and Vue, and have a
    //         strong understanding of front-end development principles and
    //         practices.
    //       </div>
    //     </div>
    //     <div className="flex space-x-6 justify-center items-center text-4xl text-green-700">
    //       <a  href="https://github.com/AryaRajput1">
    //         <BsGithub />
    //       </a>
    //       <a href="https://www.linkedin.com/in/aryarajput/">
    //         <BsLinkedin />
    //       </a>
    //       <a href="https://www.instagram.com/_rajarya/">
    //         <BsInstagram />
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-dark text-light p-5 p-lg-0 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="d-flex flex-column justify-content-between align-items-center align-items-sm-start">
            <h1>
              I am <span className="text-primary">{heroTitle}.</span>

            </h1>
            <p className="lead my-4">
              I am a web developer. I am proficient in React and Vue, and have a
              strong understanding of front-end development principles and
              practices.
            </p>
            <a rel="noreferrer" href="https://drive.google.com/file/d/1P2-MdTwZHR3-9TkBMvT6SQAE7zDxOabS/view?usp=share_link" target="_blank" className="btn btn-primary btn-lg">Download CV</a>
          </div>
          <div className="w-50 text-center">
            <img
              className="img-fluid w-100 d-none d-sm-block"
              src="https://avatars.githubusercontent.com/u/102477210?v=4"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
