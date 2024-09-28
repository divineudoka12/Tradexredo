import Image from "next/image"
import { motion } from "framer-motion"

const Instruction = () => {
    return (
        <section className='bg-herobg py-20 lg:px-14 px-4'>
            <motion.div
                viewport={{ once: true }}
                initial={{ scaley: 0, y: 100, opacity: 0 }}
                whileInView={{ scaley: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                className="flex flex-col items-center">
                <div className='text-center'>
                    <h1 className='text-white font-fontUbuntu text-5xl font-semibold leading-normal'>How It Work</h1>
                    <p className='text-white_50 text-xl'>Stacks is a production-ready library of stackable content <br /> blocks built in React Native.</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-10">
                    <div className="items-center text-center flex flex-col md:relative">
                        <Image src="/assets/instruction-1.png" width={96} height={96} />
                        <p className="text-white_50 font-semibold">Step 1</p>
                        <h2 className="text-white font-semibold text-xl leading-loose">Download</h2>
                        <p className="text-white_50 w-[250px]">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                        <div className="absolute hidden md:block top-12 right-[-95px] w-40 h-3 bg-no-repeat bg-center">
                            <Image src="/assets/connect-line.png" width={160} height={96} />
                        </div>
                    </div>

                    <div className="items-center text-center flex flex-col md:relative">
                        <Image src="/assets/instruction-2.png" width={96} height={96} />
                        <p className="text-white_50 font-semibold">Step 2</p>
                        <h2 className="text-white font-semibold text-xl leading-loose">Connect Wallet</h2>
                        <p className="text-white_50 w-[250px]">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                        <div className="absolute lg:block hidden top-12 right-[-95px] w-40 h-3 bg-no-repeat bg-center">
                            <Image src="/assets/connect-line.png" width={160} height={96} />
                        </div>
                    </div>
                    <div className="items-center text-center flex flex-col md:relative">
                        <Image src="/assets/instruction-3.png" width={96} height={96} />
                        <p className="text-white_50 font-semibold">Step 3</p>
                        <h2 className="text-white font-semibold text-xl leading-loose">Start Trading</h2>
                        <p className="text-white_50 w-[250px]">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                        <div className="absolute hidden md:block top-12 right-[-95px] w-40 h-3 bg-no-repeat bg-center">
                            <Image src="/assets/connect-line.png" width={160} height={96} />
                        </div>
                    </div>
                    <div className="items-center text-center flex flex-col">
                        <Image src="/assets/instruction-4.png" width={96} height={96} />
                        <p className="text-white_50 font-semibold">Step 4</p>
                        <h2 className="text-white text-xl leading-loose">Earn Money</h2>
                        <p className="text-white_50 w-[250px]">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Instruction