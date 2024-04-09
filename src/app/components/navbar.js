"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5 }}
      className="fixed flex flex-row justify-between items-center mt-5 w-[100%] px-5 md:px-20 z-50"
    >
      <div>
        <motion.button
          onClick={toggleMenu}
          className="bg-[#172b4e] text-white w-[200px] h-[50px] rounded focus:outline-none flex items-center px-5"
          whileHover={{ scale: 1.05 }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fill="currentColor"
                d="M19 12H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zM19 6H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0 12H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"
              ></path>
            ) : (
              <path
                fill="#1dff92"
                d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zM4 12h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              ></path>
            )}
          </svg>
          <span className="ml-5 font-bold text-[20px] leading-8">RESUME</span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="menu relative top-0 left-0 mt-2 w-[200px] h-[auto] bg-white shadow-md"
            >
              <Link to={"about"} smooth={true} duration={500}>
                <motion.a
                  href="#"
                  className="block py-1 px-4 text-gray-800 hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  ABOUT ME
                </motion.a>
              </Link>
              <Link to={"projects"} smooth={true} duration={1000}>
                <motion.a
                  href="#"
                  className="block py-1 px-4 text-gray-800 hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  RECENT PROJECTS
                </motion.a>
              </Link>
              <Link to={"skills"} smooth={true} duration={2000}>
                <motion.a
                  href="#"
                  className="block py-1 px-4 text-gray-800 hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  TECH STACK
                </motion.a>
              </Link>
              <Link to={"getintouch"} smooth={true} duration={3000}>
                <motion.a
                  href="#"
                  className="block py-1 px-4 text-gray-800 hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  GET IN TOUCH
                </motion.a>
              </Link>

              <a
                href="/Roger_CV.pdf"
                download
                className="block py-1 px-4 text-gray-800 hover:bg-gray-200 underline"
              >
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MenuButton;
