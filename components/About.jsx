import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="lg:px-14 md:px-6 px-4">
            <motion.div
                viewport={{ once: true }}
                initial={{ scaley: 0, y: 100, opacity: 0 }}
                whileInView={{ scaley: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                className="flex lg:flex-row flex-col justify-between py-8 gap-16">
                <div className="">
                    <Image src="/assets/about-banner.png" width={748} height={436} />
                </div>
                <div className="justify-end lg:w-[50%]">

                    <h2 className="text-white lg:text-5xl text-3xl font-fontUbuntu font-medium">What Is Tradex</h2>

                    <p className="text-white_50 md:text-lg text-base font-fontUbuntu">
                        Experience a variety of trading on Bitcost. You can use various types of coin
                        transactions such as Spot
                        Trade, Futures
                        Trade, P2P, Staking, Mining, and margin.
                    </p>

                    <ul className="">

                        <li className="">
                            <div className="flex items-center gap-2 pb-5">
                                <FaCheckCircle size={25} className="text-bluecrayola" />

                                <h3 className="text-2xl text-white font-fontUbuntu font-medium">View real-time cryptocurrency prices</h3>
                            </div>

                            <p className="text-white_50 md:text-lg text-base font-fontUbuntu pb-5">
                                Experience a variety of trading on Bitcost. You can use various types of coin
                                transactions such as Spot
                                Trade, Futures
                                Trade, P2P, Staking, Mining, and margin.
                            </p>
                        </li>


                        <li className="">
                            <div className="flex items-center gap-2 pb-5">
                                <FaCheckCircle size={25} className="text-bluecrayola" />

                                <h3 className="text-2xl text-white font-fontUbuntu font-medium">Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
                            </div>

                            <p className="text-white_50 md:text-lg text-base font-fontUbuntu pb-7">
                                Experience a variety of trading on Bitcost. You can use various types of coin
                                transactions such as Spot
                                Trade, Futures
                                Trade, P2P, Staking, Mining, and margin.
                            </p>
                        </li>

                    </ul>

                    <a href="#" className="bg-bluecrayola font-fontUbuntu font-semibold text-white rounded-full px-7 py-3">Explore More</a>

                </div>
            </motion.div>
        </section>
    )
}

export default About