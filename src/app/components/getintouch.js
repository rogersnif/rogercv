"use client";

import { motion } from "framer-motion";

export default function Getintouch() {
  return (
    <>
      <div className="bg-white flex flex-col items-center  justify-center">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center  justify-center w-[80%] lg:w-[500px] h-[300px]  md:h-[300px] md:ml-[10%] getintouch"
          id="skills"
        >
          <p className="text-[25px] text-[#40c183] font-bold">GET IN TOUCH</p>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-evenly items-between   ">
          <div className=" flex flex-col  items-between  h-[auto]  lg:w-[40%] lg:h-[500px]  justify-between px-[5%] lg:px-[0%]">
            <div className=" w-[100%]">
              <p className="text-[18px] lg:text-[23px]">
                Excited to contribute as a junior developer, equipped with
                skills in HTML, CSS, JavaScript, React, Next, MongoDB, Mongoose,
                and Firebase. Let&apos;s embark on a journey of innovation and
                growth together.
              </p>
              <br />
              <p className="text-[18px] text-[#1f5b3e]">rogerbanze@gmail.com</p>
            </div>

            <button className="w-[100%] py-5 bg-[#080f1b] mt-[30%] text-white">
              Hire me
            </button>
          </div>

          <div className=" flex flex-col  items-center md:items-start h-[auto]  lg:w-[40%] lg:h-[500px] justify-between px-[5%] lg:px-[0%] mt-[20%] lg:mt-[0%]">
            <div className="   flex flex-col gap-5">
              <p className="text-[18px] text-black font-bold">
                WHERE TO FIND ME
              </p>
              <div className="text-[15px] lg:text-[17px]">
                <p>23 Simpson Road </p>
                <p>Athlone </p>
                <p>Cape town South africa</p>
              </div>
              <p className="text-[18px] text-black font-bold">Contact Number</p>
              <p
                className="text-[15px] lg:text-[17px]
              "
              >
                +27 8136 81 791
              </p>
            </div>
            <br />
            <br />
            <p className="text-[18px] text-black font-bold">
              Send me a message
            </p>
            <br />
            <form action="" className="w-[100%]">
              <input
                type="text"
                placeholder="   Email"
                className=" py-5 w-[100%] lg:w-[75%] bg-[#dfe4ee]  text-slate-900 pl-5"
              />
              <br />
              <br />

              <input
                type="text"
                placeholder="   your message here"
                className=" py-5 w-[100%] lg:w-[75%] bg-[#dfe4ee]  text-slate-900 pl-5"
              />
              <input
                type="submit"
                name="submit"
                value={"Send"}
                className="  w-[50%] lg:w-[25%] py-5 mt-5 lg-mt-0 bg-[#40c183] text-black hover:bg-red-100 opacity-[1]"
              />
            </form>
          </div>
        </div>
        <div className=" mt-[10%]  w-[100%]">
          <a
            href="/Roger_CV.pdf"
            download
            className=" py-1 pl-5 md:pl-[7%] text-gray-800  underline font-semibold"
          >
            Download CV
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
