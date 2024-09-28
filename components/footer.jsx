'use client'
import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"

const footer = () => {
    return (
        <footer>
            <motion.div 
                    viewport={{once: true}}
                    initial={{scaley: 0, y: 100, opacity: 0}}
                    whileInView={{scaley: 1, y: 0, opacity: 1}}
                    transition={{duration: 0.9, delay: 0.2, ease: 'easeOut'}}
            className="lg:px-14 md:px-6 px-4 py-24">
                <div class="grid lg:grid-cols-customgrid gap-8 md:grid-cols-3">

                    <div className="flex flex-col w-[80%]">

                        <a href="#" className="flex items-center text-4xl text-white font-fontUbuntu font-medium">
                            <Image src="/assets/logo.svg" width={50} height={50} alt="logo" />
                            TradEx
                        </a>

                        <h2 className="py-5 text-white font-fontUbuntu text-2xl font-medium">Let's talk! 🤙</h2>

                        <a href="tel:+2349045988451" className="text-white_50 font-fontUbuntu">+234 904 598 8451</a>

                        <a href="mailto:hello.divineudoka48@gmail.com" className="text-white_50 pt-2 font-fontUbuntu">hello.divineudoka48@gmail.com</a>

                        <address className="text-white_50 pt-2 font-fontUbuntu">
                            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                        </address>

                    </div>

                    <ul className="font-fontUbuntu flex flex-col gap-1">

                        <li>
                            <p className="text-white font-medium uppercase">Products</p>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Spot</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Inverse Perpetual</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">USDT Perpetual</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Exchange</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Launchpad</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Binance Pay</a>
                        </li>

                    </ul>

                    <ul className="font-fontUbuntu flex flex-col gap-1">

                        <li>
                            <p className="text-white font-medium uppercase">Services</p>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Buy Crypto</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Markets</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Tranding Fee</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Affiliate Program</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Referral Program</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">API</a>
                        </li>

                    </ul>

                    <ul className="font-fontUbuntu flex flex-col gap-1">

                        <li>
                            <p className="text-white font-medium uppercase">Support</p>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Bybit Learn</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Help Center</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">User Feedback</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Submit a request</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">API Documentation</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Trading Rules</a>
                        </li>

                    </ul>

                    <ul className="font-fontUbuntu flex flex-col gap-1">

                        <li>
                            <p className="text-white font-medium uppercase">About Us</p>
                        </li>

                        <li>
                            <a href="#" className="text-white2">About Bybit</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Authenticity Check</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Careers</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Business Contacts</a>
                        </li>

                        <li>
                            <a href="#" className="text-white2">Blog</a>
                        </li>

                    </ul>

                </div>
            </motion.div>
            <div className="lg:px-14 px-6 py-4 bg-herobg">
                <div className="flex md:flex-row flex-col justify-between items-center">

                    <p className="text-bro font-fontUbuntu text-lg text-center md:pb-0 pb-5">
                        &copy; 2022 TradEx All Rights Reserved by <a href="#" className="text-bluecrayola">DivineUdoka</a>
                    </p>

                    <ul className="flex gap-4 text-bro">

                        <li>
                            <a href="#" class="social-link">
                                <FaFacebook size={18} />
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <FaTwitter size={18} />
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <FaInstagram size={18} />
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <FaLinkedin size={18} />
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default footer