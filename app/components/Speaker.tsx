import Image from "next/image";
import Link from "next/link";

export default function Speaker() {
  return (
    <div className="min-h-screen w-full bg-[#0F0D18] text-white pt-10 relative z-20">
          <h1 className="uppercase md:text-4xl text-2xl tracking-wide md:px-10 px-5 py-5 font-medium">
            Guest Speakers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:px-10 px-5">
          {/* Card 1*/}
          <div className="rounded-lg p-2 text-left border border-gray-700">
            <div className="bg-black h-[50vh] rounded-lg w-full overflow-hidden relative">
              <Image alt="" src={'/atul.jpg'} fill priority quality={75} className="object-cover object-center"/>
            </div>
            <h2 className="uppercase pt-5 tracking-wider font-medium text-xl">atul khola</h2>
            <h3 className="text-zinc-400 text-sm uppercase tracking-wider pb-5">Design & Product at CRED | Founded DesignDrug.co | 50K+ on Linkedin</h3>
            
            <div className="lg:flex lg:flex-row flex flex-col w-full gap-2 items-center">
              <Link href={'https://www.linkedin.com/in/atulkhola/?originalSubdomain=in'}  className="w-full lg:w-fit bg-transparent border text-center border-zinc-700 rounded-full px-6 py-2 text-sm hover:bg-white hover:text-gray-900 transition">
              VISIT LINKEDIN
            </Link>
            <Link href={'/https://www.instagram.com/pixelandpump?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} className="w-full lg:w-fit bg-transparent border border-zinc-700 text-center rounded-full px-6 py-2 text-sm hover:bg-white hover:text-gray-900 transition">
              VISIT INSTAGRAM
            </Link>
            </div>
          </div>

          {/* Card 2 */}
           <div className="rounded-lg p-2 text-left border border-gray-700">
            <div className="bg-black h-[50vh] rounded-lg w-full overflow-hidden relative">
              <Image alt="" src={'/saptarshiPrakash.jpg'} fill priority quality={75} className="object-cover object-center"/>
            </div>
            <h2 className="uppercase pt-5 tracking-wider font-medium text-xl">saptarshi Prakash</h2>
            <h3 className="text-zinc-400 text-sm uppercase tracking-wider pb-5">AVP of Design at Swiggy | 400K+ on Instagram | 100K+ on Youtube</h3>
            
            <div className="lg:flex lg:flex-row flex flex-col w-full gap-2 items-center">
              <Link href={'https://www.linkedin.com/in/saptarshipr/?originalSubdomain=in'}  className="w-full lg:w-fit bg-transparent border border-zinc-700 text-center rounded-full px-6 py-2 text-sm hover:bg-white hover:text-gray-900 transition">
              VISIT LINKEDIN
            </Link>
            <Link href={'https://www.instagram.com/saptarshiux?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} className="w-full lg:w-fit bg-transparent border border-zinc-700 text-center rounded-full px-6 py-2 text-sm hover:bg-white hover:text-gray-900 transition">
              VISIT INSTAGRAM
            </Link>
            </div>
          </div>

          {/* Card 3: Speakers */}
          <div className="rounded-lg p-2 text-left border border-gray-700 hidden md:block">
            <div className="bg-black h-[50vh] rounded-lg w-full overflow-hidden relative">
              <Image alt="" src={'/blur.jpg'} fill priority quality={75} className="object-cover object-center"/>
            </div>
           <h1 className="uppercase tracking-wider md:text-[2vw] text-2xl pt-5">STILL WAITING FOR THE conformation...</h1>
          </div>
        </div>
        </div>
  )
}
