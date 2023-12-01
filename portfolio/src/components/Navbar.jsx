import { motion } from 'framer-motion';
export default function Navbar() {
  return (
    <motion.nav
    className="sticky backdrop-blur-md top-0 left-0 right-0 h-16 border flex justify-between items-center p-8 z-20">
      <div className="text-white text-xl font-bold flex justify-center items-center bg-green-700 w-12 h-12 rounded-full hover:bg-white hover:text-green-700 duration-1000">
        AR
      </div>
      <motion.a
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{delay:0.1,stiffness:50,type:'spring'}}
        href="https://drive.google.com/file/d/1P2-MdTwZHR3-9TkBMvT6SQAE7zDxOabS/view?usp=share_link" target="_blank" rel="noreferrer" className="py-2 px-9 bg-green-700 text-white hover:border rounded-md text-bold border-green-800 hover:bg-white hover:text-green-700 ">Resume
      </motion.a>

    </motion.nav>
  )
}
