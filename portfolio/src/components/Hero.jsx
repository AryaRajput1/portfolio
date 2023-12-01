import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import {motion} from 'framer-motion';

export default function Hero() {
  const [heroTitle,setHeroTitle] = useState('UI Developer')
  useEffect(()=>{
    const titleList = ['Software Developer','Engineer','Problem Solver','UI Developer']
    let index=0;
    let titeListSize=titleList.length;
    setInterval(()=>{
      setHeroTitle(titleList[index])
      index = (index + 1) % titeListSize
    },4000)
  },[])
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center flex-col space-y-1 p-8 ">
          <motion.h1 
          initial={{opacity:0.5,}}
          animate={{opacity:1,scale:1.2}}
          transition={{delay:0.3}}
          className="text-4xl text-green-700 font-bold font-serif">
            Arya Rajput
          </motion.h1>
          <p className="text-xl font-semibold text-green-700 duration-300">{heroTitle}</p>
          <div className="max-w-xl text-center text-sm text-gray-600">
            I am a web developer. I am proficient in React and Vue, and have a
            strong understanding of front-end development principles and
            practices.
          </div>
        </div>
        <div className="flex space-x-6 justify-center items-center text-4xl text-green-700">
          <a  href="https://github.com/AryaRajput1">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/aryarajput/">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/_rajarya/">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
