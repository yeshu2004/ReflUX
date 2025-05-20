"use client";

import Image from "next/image";

export default function EventHighlights() {
  return (
    <div className="h-full w-full bg-[#0F0D18] text-white pt-10 relative z-20">
      <h1 className="uppercase md:text-4xl text-2xl tracking-wide md:px-10 px-5 py-5 font-medium">
        Workshop Highlights
      </h1>

      <div className="h-fit w-full relative">
        <div className="w-full md:h-[80vh] h-[60vh] relative overflow-hidden">
          <Image
            alt="Highlight"
            src="/img1.jpg"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="md:h-[60vh] h-[45vh] w-[70%] z-30 bg-[#0F0D18] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute md:p-10 p-5">
            <div className="flex items-center leading-none">
                <h1 className="uppercase border-r-[1px] border-b-[1px] md:text-[8vw] text-2xl leading-none border-zinc-700 pr-5 pb-1 md:pb-0">day 1</h1>
                <h2 className="uppercase border-l-[1px] md:text-[8vw] text-2xl border-b-[1px] leading-none border-zinc-700 pl-5 pb-1 md:pb-0 text-[#0049EF]">12:00 PM</h2>
            </div>
            <h5 className="uppercase tracking-wider md:text-xl text-sm text-[#0049EF] md:py-5 py-3">opening workshop</h5>
            <h2 className="lg:text-4xl md:text-2xl text-lg tracking-wide font-medium uppercase">Introduction to UX Design: Discover how to craft user-centered interfaces.</h2>
            <button className="bg-transparent border-2 md:mt-5 mt-3 border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full md:h-[80vh] h-[60vh] relative overflow-hidden">
          <Image
            alt="Highlight"
            src="/img5.jpg"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="md:h-[60vh] h-[45vh] w-[70%] z-30 bg-[#0F0D18] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute md:p-10 p-5">
            <div className="flex items-center leading-none">
                <h1 className="uppercase border-r-[1px] border-b-[1px] md:text-[8vw] text-2xl leading-none border-zinc-700 pr-5 pb-1 md:pb-0">day 2</h1>
                <h2 className="uppercase border-l-[1px] md:text-[8vw] text-2xl border-b-[1px] leading-none border-zinc-700 pl-5 pb-1 md:pb-0 text-[#0049EF]">12:00 PM</h2>
            </div>
            <h5 className="uppercase tracking-wider md:text-xl text-sm text-[#0049EF] md:py-5 py-3">workshop</h5>
            <h2 className="lg:text-4xl md:text-2xl text-lg tracking-wide font-medium uppercase">Figma & No-Code Tools Workshop: Turn ideas into apps with zero coding</h2>
            <button className="bg-transparent border-2 md:mt-5 mt-3 border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full md:h-[80vh] h-[60vh] relative overflow-hidden">
          <Image
            alt="Highlight"
            src="/img2.jpg"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="md:h-[60vh] h-[45vh] w-[70%] z-30 bg-[#0F0D18] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute md:p-10 p-5">
            <div className="flex items-center leading-none">
                <h1 className="uppercase border-r-[1px] border-b-[1px] md:text-[8vw] text-2xl leading-none border-zinc-700 pr-5 pb-1 md:pb-0">day 3</h1>
                <h2 className="uppercase border-l-[1px] md:text-[8vw] text-2xl border-b-[1px] leading-none border-zinc-700 pl-5 pb-1 md:pb-0 text-[#0049EF]">12:00 PM</h2>
            </div>
            <h5 className="uppercase tracking-wider md:text-xl text-sm text-[#0049EF] md:py-5 py-3">workshop</h5>
            <h2 className="lg:text-4xl md:text-2xl text-lg tracking-wide font-medium uppercase">React & Tailwind CSS – Design to Code: Code a simple UI in React & Tailwind</h2>
            <button className="bg-transparent border-2 md:mt-5 mt-3 border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full md:h-[80vh] h-[60vh] relative overflow-hidden">
          <Image
            alt="Highlight"
            src="/img4.jpg"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="md:h-[60vh] h-[45vh] w-[70%] z-30 bg-[#0F0D18] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute md:p-10 p-5">
            <div className="flex items-center leading-none">
                <h1 className="uppercase border-r-[1px] border-b-[1px] md:text-[8vw] text-2xl leading-none border-zinc-700 pr-5 pb-1 md:pb-0">day 4</h1>
                <h2 className="uppercase border-l-[1px] md:text-[8vw] text-2xl border-b-[1px] leading-none border-zinc-700 pl-5 pb-1 md:pb-0 text-[#0049EF]">24 hrs</h2>
            </div>
            <h5 className="uppercase tracking-wider md:text-xl text-sm text-[#0049EF] md:py-5 py-3">Hackathon</h5>
            <h2 className="lg:text-4xl md:text-2xl text-lg tracking-wide font-medium uppercase">Hackathon Sprint (Individual): Solo challenge to build impactful tech fast</h2>
            <button className="bg-transparent border-2 md:mt-5 mt-3 border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
      <div className="h-fit w-full relative">
        <div className="w-full md:h-[80vh] h-[60vh] relative overflow-hidden">
          <Image
            alt="Highlight"
            src="/img6.jpg"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="md:h-[60vh] h-[45vh] w-[70%] z-30 bg-[#0F0D18] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute md:p-10 p-5">
            <div className="flex items-center leading-none">
                <h1 className="uppercase border-r-[1px] border-b-[1px] md:text-[8vw] text-2xl leading-none border-zinc-700 pr-5 pb-1 md:pb-0">day 5</h1>
                <h2 className="uppercase border-l-[1px] md:text-[8vw] text-2xl border-b-[1px] leading-none border-zinc-700 pl-5 pb-1 md:pb-0 text-[#0049EF]">12:00 PM</h2>
            </div>
            <h5 className="uppercase tracking-wider md:text-xl text-sm text-[#0049EF] md:py-5 py-3">GUEST WORKSHOP</h5>
            <h2 className="lg:text-4xl md:text-2xl text-lg tracking-wide font-medium uppercase">Guest Interaction & Industry Insights: Learn from experts and clear your doubts</h2>
            <button className="bg-transparent border-2 md:mt-5 mt-3 border-zinc-800 rounded-full px-6 py-2 lg:text-2xl text-sm font-medium hover:bg-white hover:text-gray-900 transition">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
    </div>
  );
}
