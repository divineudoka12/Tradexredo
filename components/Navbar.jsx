'use client'
import Image from "next/image"
import { useState } from "react"
import { FaXmark, FaBars } from "react-icons/fa6"
import { motion } from "framer-motion"


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="w-full m-auto lg:px-14 md:px-6 px-4 bg-Navbar h-[60px] flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-2">
          <div>
            <Image src="/assets/logo.svg" width={30} height={30} />
          </div>
          <h1 className="font-bold text-[25px] font-fontUbuntu text-white">Tradex</h1>
        </div>
        {/* desktop view */}
        <ul className="lg:flex items-center hidden font-fontUbuntu">
          <li className="text-white font-bold text-[16px] bg-bluecrayola p-3">Homepage</li>
          <li className="text-white font-bold text-[16px] hover:bg-bluecrayola p-3">Buy Crypto</li>
          <li className="text-white font-bold text-[16px] hover:bg-bluecrayola p-3">Markets</li>
          <li className="text-white font-bold text-[16px] hover:bg-bluecrayola p-3">Sell Crypto</li>
          <li className="text-white font-bold text-[16px] hover:bg-bluecrayola p-3">Blog</li>
          <li className="text-white font-bold text-[16px] hover:bg-bluecrayola p-3">BITUSDT</li>
        </ul>
      </div>
      <button className="hidden lg:block border font-fontUbuntu text-white px-[14px] py-[2px] text-[17px] rounded-3xl border-whitey">wallet</button>

      {/* mobile nav */}
      <div className="flex items-center lg:hidden gap-4" onClick={toggleMenu}>
        <div>
          {isOpen ? <FaXmark className="text-white" size={30} /> : <FaBars className="text-white" size={30} />}
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`${isOpen ? 'flex' : 'hidden'} bg-Navbar w-full h-[100vh] overflow-hidden absolute top-full left-0`} onClick={closeMenu}>
          <ul className="flex flex-col font-fontUbuntu pt-2 w-full">
            <li className="border-b-white_50 border-b-[1px] px-7 py-3">
              <a href="#" className="font-semibold text-lg text-bluecrayola">Homepage</a>
            </li>
            <li className="border-b-white_50 border-b-[1px] px-7 py-3">
              <a href="#" className="text-white font-semibold text-lg hover:text-bluecrayola">Buy Crypto</a>
            </li>
            <li className="border-b-white_50 border-b-[1px] px-7 py-3">
              <a href="#" className="text-white font-semibold text-lg hover:text-bluecrayola">Markets</a>
            </li>
            <li className="border-b-white_50 border-b-[1px] px-7 py-3">
              <a href="#" className="text-white font-semibold text-lg hover:text-bluecrayola">Sell Crypto</a>
            </li>
            <li className="border-b-white_50 border-b-[1px] px-7 py-3">
              <a href="#" className="text-white font-semibold text-lg hover:text-bluecrayola">Blog</a>
            </li>
            <li className="border-b-white_50 border-b-[1px] px-7 py-3">
              <a href="#" className="text-white font-semibold text-lg hover:text-bluecrayola">BITUSDT</a>
            </li>
          </ul>
        </motion.div>
        <button className="border font-fontUbuntu text-white px-[14px] py-[2px] text-[17px] rounded-3xl border-whitey">wallet</button>
      </div>
    </nav>
  )
}

export default Navbar