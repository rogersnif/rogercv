"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    imageSrc: "green.png", // Replace with your image source
    description:
      "Plant searching app , powered by Next.js Tailwind Framer-motion and Mongoose",
    link: "https://plantk.vercel.app/", // Replace with your project link
  },
  {
    id: 2,
    imageSrc: "ingenier.jpeg",
    description:
      " Engineer portfolio , powered by Next.js Tailwind Framer-motion ",
    link: "https://my-nextproject-civilengeneer.vercel.app/",
  },
  {
    id: 2,
    imageSrc: "norkay.jpeg",
    description:
      " Local construction company wep app , powered by Next.js Tailwind Framer-motion ",
    link: "https://www.norkay.co.za/",
  },
  {
    id: 2,
    imageSrc: "lowyer.png",
    description: " Lawyer portfolio build with html, css,js ",
    link: "https://coach-lemon.vercel.app/",
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
        >
          <p className="text-[25px] text-[#40c183] font-bold">
            RECENT PROJECTS
          </p>
        </motion.div>
        <div className="container   md:flex-row px-5    md:px-[10%]   mx-auto items-center">
          <div className="">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              My current projects
            </h1>
            <p className="leading-relaxed text-gray-600">
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
          <div className="w-[70%] md-[50%] py-10 text-md">
            <h2 className="text-gray-900 p-5 text-lg">TECHNOLOGY USE</h2>
            <div className="flex flex-row justify-around">
              <div className="">
                <p>Html</p>
                <p>Css</p>
                <p>tailwind</p>
              </div>
              <div className="">
                <p>JS </p>
                <p>React</p>
                <p>Next.js</p>
              </div>
              <div>
                <p>Node.js</p>
                <p>Firebase</p>
                <p>Mogodb</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-10 w-[90%]  md:w-[80%] ">
        {projects.map((project) => (
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            key={project.id}
          >
            <Link href={project.link}>
              <img
                src={project.imageSrc}
                alt="Project"
                className="w-full h-auto  "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
                <p className="text-white text-center">{project.description}</p>
              </div>
            </Link>
          </motion.div>
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
