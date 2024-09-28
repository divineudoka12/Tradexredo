import Markettable from "./markettable"
import { motion } from "framer-motion"

export default function market({ filteredData }) {
    return (
        <motion.section 
        viewport={{once: true}}
        initial={{scaley: 0, y: 100, opacity: 0}}
        whileInView={{scaley: 1, y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.2, ease: 'easeOut'}}
        className="lg:px-14 md:px-6 px-4 py-20">
            <div className="text-white font-fontUbuntu flex items-center justify-between">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold">Market Update</h1>
                <p className="font-bold md:text-lg text-sm hover:underline hover:text-bluecrayola">See All Coins</p>
            </div>
            <div className="overflow-x-auto md:overflow-x-auto lg:overflow-x-auto overscroll-x-auto">

                <div className="flex flex-row text-lg  py-4 gap-12 text-white font-fontUbuntu items-center">
                    <div  className="bg-bluecrayola px-6 py-1 rounded-full">
                        <p className="flex gap-2">View<span>All</span></p>
                    </div>

                    <div>
                        <p>Metaverse</p>
                    </div>

                    <div>
                        <p>Entertainment</p>
                    </div>

                    <div>
                        <p>Energy</p>
                    </div>

                    <div>
                        <p>NFT</p>
                    </div>

                    <div>
                        <p>Gaming</p>
                    </div>

                    <div className="bg-bluecrayola px-6 py-1 rounded-full">
                        <p>Music</p>
                    </div>

                </div>

                <table className="w-full">
                    <thead className="border-b-white py-2 border-b-2">
                        <tr className=" whitespace-nowrap">
                            <th className="p-3 tracking-wide text-left text-white font-medium text-xl font-fontUbuntu"></th>
                            <th className="p-3 tracking-wide text-left text-white font-medium text-xl font-fontUbuntu">#</th>
                            <th className="p-3 tracking-wide text-left text-white font-medium text-xl font-fontUbuntu">Name</th>
                            <th className="p-3 tracking-wide text-left text-white font-medium text-xl font-fontUbuntu">Last Price</th>
                            <th className="p-3 tracking-wide text-left text-white font-medium text-xl font-fontUbuntu">24h %</th>
                            <th className="p-3 tracking-wide text-left text-white font-medium text-xl font-fontUbuntu">Market Cap</th>
                            <th className="p-3 tracking-wide text-left text-white font-medium text-xl font-fontUbuntu">Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((mar, index) => {
                                return (
                                    <Markettable
                                        key={mar.id}
                                        name={mar.name}
                                        id={mar.id}
                                        symbol={mar.symbol}
                                        image={mar.image}
                                        marketcap={mar.market_cap}
                                        price={mar.current_price}
                                        priceChangePercentage={mar.price_change_percentage_24h}
                                        number={index + 1} // Add a number prop to each Markettable component
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </motion.section>
    )
}

