import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
      {/* <img src="https://img.freepik.com/premium-photo/cartoon-character-with-glasses-backpack-is-standing-dark-background_416902-158.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697673600&semt=ais" className="w-32 h-32 object-fit rounded-full"/> */}
        <div className="flex items-center flex-col space-y-1 p-8 ">
          <h1 className="text-3xl text-green-700 font-bold font-serif">
            Arya Rajput
          </h1>
          <p className="text-xl font-semibold text-green-700">UI Developer</p>
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
