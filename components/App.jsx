import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const App = () => {
    return (
        <section className='lg:px-14 md:px-6 px-4 bg-herobg'>
            <motion.div
                viewport={{ once: true }}
                initial={{ scaley: 0, y: 100, opacity: 0 }}
                whileInView={{ scaley: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                className='flex lg:flex-row justify-between flex-col pt-16 '>

                <div className='py-6 lg:w-[45%]'>

                    <h2 className='lg:text-5xl text-4xl text-white font-fontUbuntu font-semibold leading-tight'>Free Your Money & Invest With Confident</h2>

                    <p className='text-white_50 text-base'>
                        With Crypto Trade, you can be sure your trading skills are matched
                    </p>

                    <ul className=''>

                        <li className=''>
                            <div className='flex items-center gap-3'>
                                <FaCheckCircle className='text-bluecrayola' size={22} />

                                <h3 className='text-2xl text-white font-semibold'>Buy, Sell, And Trade On The Go</h3>
                            </div>

                            <p className='mt-3 text-white_50 text-base'>
                                Manage Your Holdings From Your Mobile Device
                            </p>
                        </li>

                        <li className='mt-3'>
                            <div className='flex items-center gap-3'>
                                <FaCheckCircle className='text-bluecrayola' size={22} />

                                <h3 className='text-2xl text-white font-semibold'>Take Control Of Your Wealth</h3>
                            </div>

                            <p className='mt-3 text-white_50 text-base'>
                                Rest Assured You (And Only You) Have Access To Your Funds
                            </p>
                        </li>

                    </ul>

                    <div className='flex gap-4 mt-16'>
                        <a href="#">
                            <Image src="/assets/googleplay.png" width={130} height={130} />
                        </a>

                        <a href="#">
                            <Image src="/assets/appstore.png" width={120} height={120} />
                        </a>
                    </div>

                </div>

                <div class="app-banner relative">
                    <Image src="/assets/app-banner.png" width={600} height={500} className='' />

                    <span className='absolute md:bottom-[425px] md:-left-[10px] bottom-[230px] left-[5px] text-white font-fontUbuntu font-medium border-b-whitey border px-5 py-2 rounded-full'>Scan To Download</span>
                </div>
            </motion.div>
        </section>
    )
}

export default App