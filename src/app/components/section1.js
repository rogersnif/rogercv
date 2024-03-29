"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Section1() {
  return (
    <>
      <section className="flex flex-col justify-between items-center h-[100vh]  py-10 section1">
        <div> </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 1, delay: 1 }}
        >
          <div className=" flex flex-col justify-center items-center  ">
            <p className="text-[6vw] md:text-[30px] text-[#1dff92] font-semibold ">
              Hello World
            </p>

            <p className="text-[8vw] md:text-[5vw]  text-slate-50 maven-pro ">
              I&apos;m Roger Banze M
            </p>
            <div className="flex flex-row justify-center items-center text-[3vw] md:text-[17px] text-slate-300 gap-2 border-l-2  border-r-2 px-2 border-[#1dff92] font-light">
              <p>JUNIOR FULLSTACK WEB DEVELOPER</p>
            </div>
            <Link to={"about"} smooth={true} duration={500}>
              <button className="px-3  py-2 md:px-5  md:py-3  border-2 font-semibold mt-10 text-white border-[#515251] flex flex-row items-center justify-center gap-2 hover:border-[#1dff92]">
                MORE ABOUT ME
                <img src="/down.svg" alt="down" className="w-[15px] h-[15px]" />
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ ease: "linear", duration: 1, delay: 1 }}
          className=" mb-10 md:mb-0 flex flex-row justify-end  md:justify-center z-50 gap-10 "
        >
          <img src="/linkedin.svg" alt="linked" className="w-[30px] h-[30px]" />
          <img src="/facebook.svg" alt="linked" className="w-[30px] h-[30px]" />
          <img src="/github.svg" alt="linked" className="w-[30px] h-[30px]" />
        </motion.div>
      </section>
    </>
  );
}
