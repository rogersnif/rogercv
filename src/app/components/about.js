"use client";

// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div
//       className="h-[auto] bg-white pt-20 flex flex-col items-center md:flex-row   md:items-start justify-center gap-5 "
//       id="about"
//     >
//       {/* <div className="flex flex-col items-center md:items-start justify-start  about w-[100%] h-[100px] md:w-[300px] md:h-[300px]">
//         <p className="text-[25px] text-[#40c183] font-bold">ABOUT ME</p>

//       </div> */}

//       <motion.div
//         initial={{ opacity: 0, x: -200 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ ease: "linear", duration: 0.5 }}
//         animate={{ opacity: 1 }}
//         className="flex flex-col items-center  justify-center  w-[100%] h-[300px] md:w-[30%] md:h-[300px] md:ml-[10%] about"
//       >
//         <p className="text-[25px] text-[#40c183] font-bold">ABOUT ME</p>
//       </motion.div>
//       <div className="w-[100%] md:w-[60%] flex flex-col md:flex-row gap-5 items-center md:items-start px-5">
//         <img
//           src="/profile.jpg"
//           alt="profile"
//           className=" w-[auto] h-[auto] md:w-[auto] md:h-[300px] "
//         />
//         <div id="text">
//           <p className="text-[14px] font-light text-start leading-relaxed text-[#080f1b]">
//             My name is Roger, and my journey has been marked by resilience and
//             determination. I began my pursuit of higher education with dreams of
//             academic success, but financial constraints led me to make a
//             difficult decision. Unable to afford university fees in the
//             Democratic Republic of Congo, I sought refuge in South Africa,
//             particularly in the vibrant city of Cape Town. My initial purpose in
//             fleeing to South Africa was to find a way to finance my university
//             education and eventually complete my degree. However, fate had
//             different plans for me. Despite my best efforts, I found myself
//             unable to secure the necessary funds to pursue my academic
//             aspirations. In the midst of uncertainty, I turned to painting as a
//             means of survival. For four years, I poured my heart and soul into
//             my artwork, using it as a means to support myself financially. Yet,
//             amidst the strokes of my brush and the vibrant colors on canvas,
//             there was always a yearning for something more—a desire to break
//             free from the constraints of my circumstances and forge a brighter
//             future. During those years as a painter, I never lost sight of my
//             ultimate goal. In the pockets of time between brushstrokes and
//             commissions, I dedicated myself to self-teaching coding. With
//             determination as my compass, I delved into the world of programming,
//             learning new languages and techniques with each passing day. Though
//             the journey was challenging and the road fraught with obstacles, I
//             persevered. With each line of code I wrote, I felt myself inching
//             closer to a future filled with promise and opportunity. And as I
//             honed my skills, I began to see glimpses of the transformation I had
//             been striving for. Today, as a self-taught web developer, I stand as
//             a testament to the power of perseverance and the resilience of the
//             human spirit. My journey from university dropout to coding
//             enthusiast has been marked by trials and triumphs, but through it
//             all, I have remained steadfast in my pursuit of a better tomorrow.
//             And as I continue to chart my course in the ever-evolving world of
//             technology, I am reminded that with dedication and determination,
//             anything is possible.
//           </p>
//           {/* <button className="px-5  py-3 border-2 font-semibold mt-10 text-black border-[#515251] flex flex-row items-center justify-center gap-2 hover:border-[#1dff92]">
//             MORE ABOUT ME
//             <img src="/down.svg" alt="down" className="w-[15px] h-[15px]" />
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="h-[auto] bg-white pt-20 flex flex-col items-center md:flex-row md:items-start justify-center gap-5"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center w-[50%] h-[300px] md:w-[30%] md:h-[300px] md:ml-[10%] about"
      >
        <p className="text-[25px] text-[#40c183] font-bold">ABOUT ME</p>
      </motion.div>
      <div className="w-[100%] md:w-[60%] flex flex-col md:flex-row gap-5 items-center md:items-start px-5">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-[auto] h-[auto] md:w-[auto] md:h-[300px]"
        />
        <div id="text" style={{ transition: "max-height 0.5s ease" }}>
          <p
            className="text-[16px] font-normal text-start leading-relaxed text-[#080f1b] overflow-y-hidden"
            style={{
              maxHeight: showMore ? "none" : "250px",
              transition: "max-height 0.5s ease",
            }}
          >
            {/* Display only 100px of text */}
            My name is Roger, and my journey has been marked by resilience and
            determination. I began my pursuit of higher education with dreams of
            academic success, but financial constraints led me to drop out after
            2 years at University. due to certain circumstances in my Country
            D.R.Congo I sought refuge in South Africa , particularly in city of
            Cape Town. after that i was trying to find a way to finance my
            university education and eventually complete my degree. However,
            fate had different plans for me. Despite my best efforts, I found
            myself unable to secure the necessary funds to pursue my academic
            aspirations. In the midst of uncertainty, I turned to painting as a
            means of survival. For four years, I poured my heart and soul into
            my artwork, using it as a means to support myself financially. there
            was always a yearning for something more a desire to break free from
            the constraints of my circumstances and forge a brighter future.
            During those years as a painter, I never lost sight of my ultimate
            goal. In the pockets of time between brushstrokes and commissions, I
            dedicated myself to self-teaching coding. With determination as my
            compass, I delved into the world of programming, learning new
            languages and techniques with each passing day. Though the journey
            was challenging and the road fraught with obstacles, I persevered.
            With each line of code I wrote, I felt myself inching closer to a
            future filled with promise and opportunity. And as I honed my
            skills, I began to see glimpses of the transformation I had been
            striving for. Today, as a self-taught web developer, I stand as a
            testament to the power of perseverance and the resilience of the
            human spirit. My journey from university dropout to coding
            enthusiast has been marked by trials and triumphs, but through it
            all, I have remained steadfast in my pursuit of a better tomorrow.
            And as I continue to chart my course in the ever-evolving world of
            technology, I am reminded that with dedication and determination,
            anything is possible.
          </p>
          {/* Toggle button */}
          <button
            className="px-5 py-3  font-semibold mt-3 text-black flex flex-row items-center justify-center gap-2 hover:text-[#1dff92]"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More..."}
          </button>
        </div>
      </div>
    </div>
  );
}
