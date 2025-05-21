export default function Footer() {
  return (
    <div className="h-fit w-full bg-[#0F0D18] text-white pt-5 relative z-20 overflow-x-hidden">
        <div className="md:px-10 px-5 flex items-center pt-10 justify-center">
          <h1 className="lg:text-[12vw] md:text-[10vw] text-[2.4rem] leading-none font-medium py-5">
            REFLUX &apos;25
          </h1>
          <div className=" text-left flex items-center">
            <div className="h-fit -rotate-90 w-fit">
              <p className="text-[#0049EF] lg:text-5xl md:text-4xl text-base leading-none">
                2025
              </p>
            </div>
            <div className="relative lg:-left-10 md:-left-6 -left-3 w-full">
              <h3 className="lg:text-6xl md:text-5xl text-2xl">May</h3>
              <p className="lg:text-[5vw] md:text-5xl text-2xl leading-none  tracking-wide">
                27–31
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:px-10 px-5 pb-5 lg:pb-5 lg:pt-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-zinc-700 pt-5 text-xs tracking-wider gap-4 text-center md:text-left">
              {/* Left Side Text */}
              <h1 className="text-zinc-400 hidden md:block">
                THIS WEBSITE WAS MADE FOR{" "}
                <span className="text-white">UX CLUB</span>. CLUB BY{" "}
                <span className="text-white">VIT BHOPAL UNIVERSITY</span>
              </h1>

              {/* Right Side Social Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 uppercase">
                <a
                  href="https://www.linkedin.com/company/uxclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/uxclub.vitb?igsh=MTl3cWE4aGM2N24yaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
                <a
                  href="https://chat.whatsapp.com/JmjCM3Kl6xhAeVGPe5dSWu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:ux_club@vitbhopal.ac.in"
                  className="hover:text-white transition"
                >
                  Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
