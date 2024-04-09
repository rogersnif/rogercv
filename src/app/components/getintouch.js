"use client";

import { motion } from "framer-motion";

export default function Getintouch() {
  return (
    <>
      {/* <div className="bg-white flex flex-col items-center  justify-center">
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
              <p className="text-[17px] lg:text-[20px] leading-relaxed  text-gray-700">
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
       
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div> */}

      <section
        className="text-gray-600 body-font relative bg-white pt-52 "
        id="getintouch"
      >
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center  justify-center w-[100%] lg:w-[100%] h-[200px]  md:h-[200px] md:ml-[10%] getintouch "
          id="skills"
        >
          <p className="text-[25px] text-[#40c183] font-bold">GET IN TOUCH</p>
        </motion.div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative getintouchbac bg-[#172b4e]">
            <div className=" flex flex-col  items-between  h-[auto]  w-[100%] lg:h-[auto]  justify-between  lg:px-[0%] ">
              <div className=" w-[100%] md:bg-slate-900 p-3">
                <p className="text-[17px] lg:text-[20px] leading-relaxed  text-slate-400">
                  Excited to contribute as a junior developer, equipped with
                  skills in HTML, CSS, JavaScript, React, Next, MongoDB,
                  Mongoose, and Firebase. Let&apos;s embark on a journey of
                  innovation and growth together.
                </p>
                <br />
              </div>

              {/* <button className="w-[100%] py-5 bg-[#080f1b] mt-[30%] text-white">
                Hire me
              </button> */}

              <div className="bg-white  flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <div className="mt-1">
                    <p>23 Simpson Road </p>
                    <p>Athlone </p>
                    <p>Cape town South africa</p>
                  </div>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:example@email.com"
                    className="text-green-600 leading-relaxed"
                  >
                    rogerbanze@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+27 81-3681-791</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please feel free to reach out to me with any feedback or
              inquiries. I&apos;m here to listen and assist however I can.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:green-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:green-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              SUBMIT
            </button>

            <div className=" mt-[10%]  w-[100%]">
              <a
                href="/Roger_CV.pdf"
                download
                className=" py-1  text-gray-800  underline font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
