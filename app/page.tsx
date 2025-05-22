"use client";

import Image from "next/image";
import InfiniteCarousel from "./components/InfiniteCarousel";
import EventHighlights from "./components/EventHighlights";
import Speaker from "./components/Speaker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MdArrowOutward } from "react-icons/md";
import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function Home() {
  const [mobileHeight, setMobileHeight] = useState<string | undefined>();

  useEffect(() => {
    // Set --vh
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      // Set inline style ONLY if screen is small (simulate < md)
      if (window.innerWidth < 768) {
        setMobileHeight(`calc(var(--vh, 1vh) * 85)`);
      } else {
        setMobileHeight(undefined);
      }
    };

    setVH();
    window.addEventListener("resize", setVH);

    // Lenis setup
    const lenis = new Lenis({ autoRaf: true });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", setVH);
    };
  }, []);

  return (
    <div className="">
      <div
        style={mobileHeight ? { height: mobileHeight } : {}}
        className="relative md:h-[100vh] text-white font-clash overflow-hidden bg-[#0F0D18]"
      >
        <Image
          src="/bgimg.webp"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <Navbar />
        <div className="bg-[#0F0D18] w-[85%] md:w-[82%] h-fit absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <h1 className="text-[13vw] leading-none font-semibold text-center py-5">
            REFLUX &apos;25
          </h1>
          <div className="flex items-start lg:px-14 md:px-8 px-5 md:pb-10">
            <div className="max-w-1/2">
              <h3 className="lg:text-5xl text-xl md:text-3xl">
                Workshop / Webinar
              </h3>
              <h5 className="lg:text-[1.3vw] text-[#B7B6BA] pt-2 hidden md:flex">
                The UX Club of VIT Bhopal University proudly presents ReflUX,
                5-day online sprint designed to bridge the gap between UX design
                and technical execution
              </h5>
              <button className="lg:block cursor-pointer hidden mt-6 px-8 py-3 lg:text-[2.2vw] md:text-[2.5vw] text-2xl leading-none rounded-full border border-gray-800 hover:bg-white hover:text-black transition font-medium">
                <a href="#workshop-highlights">EXPLORE EVENTS</a>
              </button>
              <button className="cursor-pointer lg:hidden mt-6 px-8 py-3 lg:text-[2.2vw] md:text-[2.5vw] text-2xl leading-none rounded-full border border-gray-800 hover:bg-white md:flex hover:text-black transition hidden font-medium">
                <a
                  href="#workshop-highlights"
                  className="flex items-center justify-between gap-2"
                >
                  BUY E-TICKETS
                  <span className="text-xl">
                    <MdArrowOutward />
                  </span>
                </a>
              </button>
            </div>
            <div className="w-1/2 text-left flex items-center">
              <div className="h-fit -rotate-90 w-fit">
                <p className="text-[#0049EF] lg:text-7xl md:text-6xl text-xl leading-none">
                  2025
                </p>
              </div>
              <div className="relative md:-left-10 -left-3 w-full">
                <h3 className="lg:text-8xl md:text-6xl text-2xl">May</h3>
                <p className="lg:text-[7vw] md:text-6xl text-2xl leading-none tracking-wide">
                  27–31
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 flex-col w-full md:hidden">
            <h5 className="text-[4vw] text-[#B7B6BA] pt-2">
              The UX Club of VIT Bhopal University proudly presents ReflUX,
              5-day online sprint designed to bridge the gap between UX design
              and technical execution
            </h5>
            <button className="hidden lg:block my-6 px-8 py-3 text-[4vw] leading-none rounded-full border border-gray-700 hover:bg-white hover:text-black transition w-full">
              <a href="#workshop-highlights">EXPLORE EVENTS</a>
            </button>
            <a
              href="https://unstop.com/p/reflux-vellore-institute-of-technology-bhopal-1482156"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-wider flex items-center justify-center gap-2 lg:hidden my-6 px-8 py-3 text-[4vw] leading-none rounded-full border border-gray-700 hover:bg-white hover:text-black transition w-full"
            >
              BUY E-TICKETS
              <span className="text-xl">
                <MdArrowOutward />
              </span>
            </a>
          </div>
        </div>
      </div>
      <InfiniteCarousel />
      <div id="about">
        <div className="min-h-screen w-full bg-[#0F0D18] text-white md:py-10 py-5 relative z-20">
          <h1 className="uppercase md:text-4xl text-2xl tracking-wide md:px-10 px-5 pt-5 pb-10 font-medium">
            Join Us for ReflUX Workshop May&apos;25
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-4 w-full md:px-10 px-5">
            {/* Card 1: Days */}
            <div className="border-zinc-800 border rounded-lg lg:px-12 lg:py-10 md:p-6 p-5 flex flex-col text-left">
              <p className="md:text-[13vw] text-9xl leading-none mb-2">5</p>
              <p className="lg:text-3xl text-xl font-medium mb-2">DAYS</p>
              <p className="text-gray-300 mb-6 lg:text-lg md:text-sm">
                Join a 5-day online sprint by The UX Club of VIT Bhopal
                University! ReflUX teaches UX design and tech skills using
                Figma, no-code tools, and web frameworks to build digital
                prototypes.
              </p>
              <a
                href="#workshop-highlights"
                className="text-center  bg-transparent border border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition"
              >
                VIEW SCHEDULE
              </a>
            </div>

            {/* Card 2: Events */}
            <div className="border-zinc-800 border rounded-lg lg:px-12 lg:py-10 md:p-6 p-5 flex flex-col text-left ">
              <p className="md:text-[13vw] text-9xl leading-none mb-2">1</p>
              <p className="lg:text-3xl text-xl font-medium mb-2">HACKATHON</p>
              <p className="text-gray-300 mb-6 lg:text-lg tmd:ext-sm">
                Compete in ReflUX’s 1-day hackathon! Team up to create
                real-world digital solutions, showcase your skills, and
                challenge yourself in a dynamic, creative setting.
              </p>
              <a
                href="https://unstop.com/p/reflux-vellore-institute-of-technology-bhopal-1482156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-transparent border border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition"
              >
                EXPLORE HACKATHON
              </a>
            </div>

            {/* Card 3: Speakers */}
            <div className="border-zinc-800 border rounded-lg lg:px-12 lg:py-10 md:p-6 p-5 flex flex-col text-left">
              <p className="md:text-[13vw] text-9xl leading-none mb-2">4</p>
              <p className="lg:text-3xl text-xl font-medium mb-2">SPEAKERS</p>
              <p className="text-gray-300 mb-6 lg:text-lg md:text-sm">
                Hear from 2 industry experts at ReflUX! They’ll share UX design
                insights, offer project feedback, and inspire you to grow as a
                designer or developer.
              </p>
              <a
                href="#speakers"
                className="text-center bg-transparent border border-zinc-800 rounded-full px-6 py-2 lg:text-2xl font-medium text-sm hover:bg-white hover:text-gray-900 transition"
              >
                VIEW SPEAKERS
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="workshop-highlights"></div>
      <EventHighlights />
      <div id="speakers">
        <Speaker />
      </div>

      {/* GET TICKET */}
      <div className="h-fit w-full bg-[#0F0D18] text-white pt-5 relative z-20 overflow-x-hidden">
        <h1 className="uppercase md:text-4xl text-2xl tracking-wide md:px-10 px-5 py-5 pt-10 md:pt-0 font-medium">
          get your ticket
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-4 w-full md:px-10 px-5">
          {/* Card 1: Days */}
          <div className="border-zinc-800 border rounded-lg lg:px-12 lg:py-10 md:p-6 p-5 flex flex-col text-left uppercase h-fit">
            <h1 className="lg:text-7xl text-4xl font-medium leading-none">
              Join
            </h1>
            <h1 className="lg:text-7xl text-4xl font-medium leading-none">
              Now
            </h1>
            <h4 className="text-zinc-400 pb-5 md:pt-0 pt-1">
              Register for the online workshop!
            </h4>
            <button className="bg-transparent border uppercase border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition">
              <a
                href="https://unstop.com/p/reflux-vellore-institute-of-technology-bhopal-1482156"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center"
              >
                get your ticket
                <span className="text-xl">
                  <MdArrowOutward />
                </span>
              </a>
            </button>
          </div>

          {/* Card 2: Events */}
          <div className="border-zinc-800 border rounded-lg lg:px-12 lg:py-10 md:p-6 p-5 flex flex-col text-left uppercase h-fit">
            <h1 className="lg:text-7xl text-4xl font-medium leading-none">
              EXPLORE
            </h1>
            <h1 className="lg:text-7xl text-4xl font-medium leading-none">
              MORE
            </h1>
            <h4 className="text-zinc-400 pb-5 md:pt-0 pt-1">
              Discover exciting sessions and speakers.lg:
            </h4>
            <a
              href="#workshop-highlights"
              className="bg-transparent text-center border uppercase border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition"
            >
              CHECK THE SCHEDULE
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
