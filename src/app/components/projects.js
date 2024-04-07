"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    imageSrc: "green.png", // Replace with your image source
    description:
      "Plant searching app , powered by Next.js Tailwind Framer-motion and Mongoose",
    link: "/project1", // Replace with your project link
  },
  {
    id: 2,
    imageSrc: "ingenier.jpeg",
    description:
      " Engineer portfolio , powered by Next.js Tailwind Framer-motion ",
    link: "/project2",
  },
  {
    id: 2,
    imageSrc: "norkay.jpeg",
    description:
      " Local construction company wep app , powered by Next.js Tailwind Framer-motion ",
    link: "/project2",
  },
  {
    id: 2,
    imageSrc: "lowyer.png",
    description: " Lawyer portfolio build with html, css,js ",
    link: "/project2",
  },

  // Add more projects as needed
];

export default function Projects() {
  return (
    <div
      className="h-[auto] bg-white pt-20 flex flex-col items-center justify-center gap-5 "
      id="projects"
    >
      {/* <div className=" flex flex-col-reverse md:flex-row gap-5 items-center justify-around">
        <p className="text-[16px] font-normal w-[100%] md:w-[40%] px-5 leading-relaxed text-[#080f1b]">
          The first project is a plant search and details about plants, powered
          by Next.js, Mongoose, Tailwind CSS, and Framer Motion, hinting at the
          future of plant scanning. Additionally, an engineer&apos;s portfolio
          and a local construction company&apos;s site, both built with the same
          cutting-edge stack, showcase expertise and services. Finally, a
          lawyer&apos;s portfolio, developed using HTML, CSS, and JavaScript,
          offers a professional representation of legal practice.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center  h-[300px] md:w-[30%] md:h-[300px] md:ml-[10%] projects"
        >
          <p className="text-[25px] text-[#40c183] font-bold">
            RECENT PROJECTS
          </p>
        </motion.div>
      </div> */}

      <section className="text-gray-600 body-font">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center  h-[300px] md:w-[100%] md:h-[300px]  projects"
        ></motion.div>
        <div className="container flex flex-wrap px-5  md:px-[10%]   mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              My current projects
            </h1>
            <p className="leading-relaxed text-base">
              The first project is a plant search and details about plants,
              powered by Next.js, Mongoose, Tailwind CSS, and Framer Motion,
              hinting at the future of plant scanning. Additionally, an
              engineer&apos;s portfolio and a local construction company&apos;s
              site, both built with the same cutting-edge stack, showcase
              expertise and services. Finally, a lawyer&apos;s portfolio,
              developed using HTML, CSS, and JavaScript, offers a professional
              representation of legal practice.
            </p>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              TECHNOLOGY USE
            </h2>
            <nav className="flex flex-row list-none -mb-1 justify-around ">
              <div className="px-10">
                <li className="lg:w-1/1 mb-1 w-1/1">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Html
                  </a>
                </li>
                <li className="lg:w-1/1 mb-1 w-1/1">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Css
                  </a>
                </li>
              </div>
              <div className="px-10">
                <li className="lg:w-1/1 mb-1 w-1/1">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    JavasCript
                  </a>
                </li>
                <li className="lg:w-1/1 mb-1 w-1/1">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Next.js
                  </a>
                </li>
              </div>
              <div className="px-10">
                <li className="lg:w-1/1 mb-1 w-1/1">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Node.js
                  </a>
                </li>
                <li className="lg:w-1/1 mb-1 w-1/1">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Firebase
                  </a>
                </li>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-10 w-[90%]  md:w-[80%] ">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            className="relative overflow-hidden rounded-lg shadow-lg "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={project.imageSrc}
              alt="Project"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
              <p className="text-white text-center">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
