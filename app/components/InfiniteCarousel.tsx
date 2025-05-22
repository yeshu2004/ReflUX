"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
  "/clublogo.png",
  "/vitblogo.webp",
  "/iic-logo.png",
];

export default function InfiniteCarousel() {
  return (
    <div className="h-full w-full bg-[#0F0D18] text-white md:py-10 py-5 overflow-hidden relative z-10">
      <div className="relative w-full overflow-hidden">
        {/* Duplicated stripe for infinite scroll illusion */}
        <motion.div
          className="flex md:gap-24 gap-10 w-max"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((src, index) => (
            <div key={index} className="relative md:h-26 h-20 md:w-26 w-20 flex-shrink-0">
              <Image
                src={src}
                alt={`logo-${index}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
