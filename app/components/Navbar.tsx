"use client";

import { useState, useEffect } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import Footer from "./Footer";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { x: "-100%", opacity: 1 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      x: "-100%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Animation variants for menu items
  interface Variants {
    [key: string]: {
      opacity: number;
      y: number;
      transition?: {
        delay: number;
        duration: number;
        ease: string;
      };
    };
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.9, duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="relative z-20 md:px-10 px-5 py-7 h-full w-full">
      <div>
        <div className="flex justify-between lg:items-end items-center w-full h-full">
          <h1 className="md:text-4xl text-2xl font-semibold">ReflUX</h1>
          <nav className="gap-7 text-lg lg:flex hidden">
            <a href="#workshop-highlights" className="hover:text-gray-300 transition scroll-smooth">SCHEDULE</a>
            <a href="#speakers" className="hover:text-gray-300 transition">SPEAKERS</a>
            <a href="#faqs" className="hover:text-gray-300 transition">FAQS</a>
            <a href="#about" className="hover:text-gray-300 transition">ABOUT</a>
          </nav>
          <div className="gap-4 lg:flex hidden font-medium">
            <button className="px-5 py-2 rounded-full bg-black text-white uppercase hover:bg-gray-800 transition">
              <a href="https://unstop.com/p/reflux-vellore-institute-of-technology-bhopal-1482156" target="_blank"
          rel="noopener noreferrer">
                BOOK Now
              </a>
            </button>
            <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
              <a href="https://unstop.com/p/reflux-vellore-institute-of-technology-bhopal-1482156" target="_blank"
          rel="noopener noreferrer">
                BUY TICKETS
              </a>
            </button>
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? "" : <TfiAlignJustify />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#0F0D18] z-50"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center md:px-10 py-7 px-5 ">
                <h1 className="md:text-4xl text-2xl font-semibold">ReflUX</h1>
                <motion.button initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.3, delay:0.9}}} onClick={toggleMenu} className="text-2xl">
                  <RxCross1 />
                </motion.button>
              </div>
              <nav className="flex flex-col items-center gap-6 text-xl font-medium mt-10">
                <motion.a
                  href="#workshop-highlights"
                  className="hover:text-gray-300 transition"
                  onClick={toggleMenu}
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.3, delay:0.9}}}
                  custom={0}
                >
                  SCHEDULE
                </motion.a>
                <motion.a
                  href="#speakers"
                  className="hover:text-gray-300 transition"
                  onClick={toggleMenu}
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.3, delay:0.9}}}
                  custom={1}
                >
                  SPEAKERS
                </motion.a>
                <motion.a
                  href="#faqs"
                  className="hover:text-gray-300 transition"
                  onClick={toggleMenu}
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.3, delay:0.9}}}
                  custom={2}
                >
                  FAQS
                </motion.a>
                <motion.a
                  href="#about"
                  className="hover:text-gray-300 transition"
                  onClick={toggleMenu}
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.3, delay:0.9}}}
                  custom={3}
                >
                  ABOUT
                </motion.a>
                <motion.button
                  className="px-5 py-2 rounded-full border-2 border-zinc-700 text-white hover:bg-gray-800 transition text-lg flex items-center justify-center gap-5" 
                  onClick={toggleMenu}
                  variants={itemVariants}
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.3}}}
                  custom={5}
                >
                  <a href="https://unstop.com/p/reflux-vellore-institute-of-technology-bhopal-1482156" target="_blank"
          rel="noopener noreferrer" className="flex items-center gap-2">
                    BUY TICKETS
                  <span className="text-2xl">
                    <MdArrowOutward />
                  </span>
                  </a>
                </motion.button>
              </nav>
              <div className="absolute bottom-0 left-0 w-full">
                <Footer/>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}
