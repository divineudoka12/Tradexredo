import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.section
    viewport={{once: true}}
    initial={{scaley: 0, y: 100, opacity: 0}}
    whileInView={{scaley: 1, y: 0, opacity: 1}}
    transition={{duration: 0.9, ease: 'easeOut'}}
    className="lg:px-14 md:px-6 px-4  bg-herobg">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-24 pt-[75px] py-28">
            <div className="text-white lg:w-[50%]">
                <h1 className="font-bold font-fontUbuntu lg:text-7xl md:text-6xl text-[28px] leading-[110%]">
                    Buy & Sell Digital Assets In The Tradex
                </h1>
                <p className="lg:my-8 my-4 text-white_50 font-fontUbuntu text-base md:text-2xl lg:text-xl">Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.</p>
                <div className="lg:pt-7 pt-4">
                    <a href="" className="bg-bluecrayola font-fontUbuntu rounded-3xl font-bold px-7 py-3 hover:bg-white hover:text-black hover:transition hover:duration-300 hover:ease-in-out">
                        Get started now
                    </a>
                </div>
            </div>
            <div className="lg:w-[50%]">
                <Image src="/assets/hero-banner.png" width={540} height={100} className="w-full md:max-w-xl md:m-auto" alt="hero banner"/>
            </div>
        </div>
    </motion.section>
  )
}

export default Hero