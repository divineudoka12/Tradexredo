import Trend from "./Trend";
import { motion } from "framer-motion";

export default function TrendList({ filteredCoins }) {
    return (
        <section className=" lg:px-14 md:px-6 px-4 z-10 -mt-12">

            <motion.div
                viewport={{ once: true }}
                initial={{scaleY: 0, y: 100, opacity: 0 }}
                whileInView={{ scaleY: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                className="bg-Trendbg border-raisinblack rounded-xl border">
                <div className="px-6">
                    <div className="py-5 border-b-raisinblack border-b-2">
                        <ul className="text-white text-sm md:text-lg items-center font-fontUbuntu flex lg:flex-row flex-wrap md:gap-7 gap-3 ">

                            <li>
                                <button className="bg-bluecrayola px-3 py-1 rounded-full">Crypto</button>
                            </li>

                            <li>
                                <button class="tab-btn">Crypto</button>
                            </li>

                            <li>
                                <button class="tab-btn">DeFi</button>
                            </li>

                            <li>
                                <button class="tab-btn">BSC</button>
                            </li>

                            <li>
                                <button class="tab-btn">NFT</button>
                            </li>

                            <li>
                                <button class="tab-btn">Metaverse
                                </button>
                            </li>

                            <li>
                                <button class="tab-btn">Polkadot</button>
                            </li>

                            <li>
                                <button class="tab-btn">Solana</button>
                            </li>

                            <li>
                                <button class="tab-btn">Opensea</button>
                            </li>

                            <li>
                                <button class="tab-btn">Makersplace
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-7 py-7">
                    {
                        filteredCoins.map((coin) => {
                            return (
                                <Trend
                                    key={coin.id}
                                    name={coin.name}
                                    id={coin.id}
                                    price={coin.current_price}
                                    symbol={coin.symbol}
                                    image={coin.image}
                                    priceUpdate={coin.price_change_percentage_24h}
                                    ath={coin.ath}
                                />
                            )
                        })
                    }
                </div>
            </motion.div>

        </section>

    );
}
