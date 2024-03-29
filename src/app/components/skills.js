"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="h-[auto] bg-white flex flex-col items-center  justify-center">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center  justify-center w-[80%] lg:w-[500px] h-[300px]  md:h-[300px] md:ml-[10%] tech"
        id="skills"
      >
        <p className="text-[25px] text-[#40c183] font-bold">TECH STACK</p>
      </motion.div>
      <br />
      <br />

      <div className="h-[auto] bg-white flex flex-col  md:flex-row justify-center items-between gap-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-[100%] h-[auto] md:w-[40%] lg:h-[50vh]   flex flex-col justify-center px-5 py-5 cardbac"
        >
          <div className="flex justify-start items-center gap-2">
            <p className="text-[#1dff92] text-[25px] font-semibold ">HTML</p>
            <img src="/html.png" alt="linked" className="w-[30px] h-[30px]" />
          </div>
          <p className="text-slate-500 text-[25px]">From Basic To Advance</p>
          <div className="flex items-center justify-between">
            <div className="w-[90%] h-[6px] bg-white my-5 flex items-center justify-between">
              <div className="w-[75%] h-[6px] bg-[#40c183] "></div>
            </div>
            <span className="text-[#38bc73] font-bold">85%</span>
          </div>
          <p className="text-[13px] font-light text-slate-400">
            Proficient in HTML from basic to advanced topics, I can create
            structured web pages, utilize semantic elements for improved
            accessibility and SEO, and implement complex features such as forms,
            multimedia embedding, and responsive design using HTML5
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-[100%] h-[auto] md:w-[40%] lg:h-[50vh]    flex flex-col justify-center px-5 py-5  cardbac"
        >
          <div className="flex justify-start items-center gap-2">
            <p className="text-[#1dff92] text-[25px] font-semibold ">CSS</p>
            <img src="/css.png" alt="linked" className="w-[30px] h-[30px]" />
          </div>
          <p className="text-slate-500 text-[25px]">From Basic To Advance</p>
          <div className="flex items-center justify-between">
            <div className="w-[90%] h-[6px] bg-white my-5 flex items-center justify-between">
              <div className="w-[70%] h-[6px] bg-[#76a08b] "></div>
            </div>
            <span className="text-[#76a08b] font-bold">80%</span>
          </div>
          <p className="text-[13px] font-light text-slate-400">
            Proficient in CSS from basic to advanced concepts, I can style web
            pages with precision, leverage CSS grid and flexbox for layout,
            apply animations and transitions for enhanced user experience, and
            implement responsive design techniques to ensure compatibility
            across devices and screen sizes and i can use TAILWIND and FRAMER
            MOTION and basic of sass.
          </p>
        </motion.div>
      </div>
      <div className="h-[auto] bg-white flex flex-col  md:flex-row justify-center gap-10 px-5 mt-10">
        <motion.iv
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-[100%] h-[auto] md:w-[40%] lg:h-[50vh]   flex flex-col justify-center px-5 py-5  cardbac "
        >
          <div className="flex justify-start items-center gap-2">
            <p className="text-[#1dff92] text-[25px] font-semibold ">
              JAVASCRISPT
            </p>
            <img
              src="/javascript.png"
              alt="linked"
              className="w-[30px] h-[30px]"
            />
          </div>
          <p className="text-slate-500 text-[25px]">
            From Basic To Intermediary
          </p>
          <div className="flex items-center justify-between">
            <div className="w-[90%] h-[6px] bg-white my-5 flex items-center justify-between">
              <div className="w-[70%] h-[6px] bg-[#c0c75b] "></div>
            </div>
            <span className="text-[#c0c75b] font-bold">75%</span>
          </div>
          <p className="text-[13px] font-light text-slate-400">
            Skilled in JavaScript from basic to intermediary levels, I can
            manipulate DOM elements dynamically, handle user interactions with
            event listeners, implement algorithms and data structures, utilize
            AJAX for asynchronous requests, and create interactive web
            applications with frameworks like REACT , NEXT.JS and NODE.JS .
          </p>
        </motion.iv>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-[100%] h-[auto] md:w-[40%] lg:h-[50vh]  flex flex-col justify-center px-5 py-5  cardbac"
        >
          <div className="flex justify-start items-center gap-2">
            <p className="text-[#1dff92] text-[25px] font-semibold ">
              DATABASE
            </p>
            <img
              src="/database.png"
              alt="linked"
              className="w-[30px] h-[30px]"
            />
          </div>
          <p className="text-slate-500 text-[25px]">
            From Basic To Intermediary
          </p>
          <div className="flex items-center justify-between">
            <div className="w-[90%] h-[6px] bg-white my-5 flex items-center justify-between">
              <div className="w-[55%] h-[6px] bg-[#383835] "></div>
            </div>
            <span className="text-[#7e7e75] font-bold">65%</span>
          </div>
          <p className="text-[13px] font-light text-slate-400">
            Proficient in databases from basic to intermediary levels, I can
            design and query MongoDB databases using MONGOOSE for Node.js
            applications, ensuring efficient data storage and retrieval.
            Additionally, I am adept at integrating FIREBASE, leveraging its
            real-time database and authentication features to build responsive
            and scalable web applications.
          </p>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
