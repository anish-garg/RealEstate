import { FaSearchLocation } from "react-icons/fa";
import CountUp from 'react-countup'
import { motion, spring } from 'framer-motion'

const Header = () => {
    return (
        <>
            <header>
                <div className="flex items-center justify-around bg-lightblue">
                    <div className="space-y-7 z-10">
                        <div className="h-16 w-16 bg-gradient-to-r from-yellow-500 ... rounded-full absolute left-[21rem] top-[4.75rem] -z-10"></div>
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: spring }}
                        >
                            <div className="text-brightblue text-6xl font-semibold">
                                Explore <br /> The Best <br /> Property Now
                            </div>
                        </motion.h1>
                        <div className="text-lg">
                            Find a variety of properties that suit you very easilty <br />
                            Forget all difficulties in finding a residence for you
                        </div>
                        <div className="bg-white flex justify-between py-3 px-3  items-center rounded-lg shadow-custom1 shadow-blue-300 ">
                            <FaSearchLocation color="#00ABE4" size={23} />
                            <input type="text" className="outline-none border-none text-sm" placeholder="Search by title/city/country" />
                            <button className="bg-brightblue rounded-md px-4 transition-all ease-in  hover:scale-125 duration-300 text-white h-8">Search</button>
                        </div>
                        <div className="flex justify-around space-x-5">
                            <div className="place-content-start">
                                <span className="text-3xl font-medium">
                                    <span><CountUp start={8800} end={9000} duration={4} /></span>
                                    <span className="text-4xl">+</span>
                                </span><br />
                                <span className="text-brightblue">Premium Properties</span>
                            </div>
                            <div className="place-content-start">
                                <span className="text-3xl font-medium">
                                    <span><CountUp start={3800} end={4000} duration={4} /></span>
                                    <span className="text-4xl">+</span>
                                </span><br />
                                <span className="text-brightblue">Happy Customers</span>
                            </div>
                            <div className="place-content-start">
                                <span className="text-3xl font-medium">
                                    <span><CountUp end={50} duration={4} /></span>
                                    <span className="text-4xl">+</span>
                                </span><br />
                                <span className="text-brightblue">Awards Winning</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 border-8 border-brightblue rounded-tl-[210px] rounded-tr-[210px] overflow-hidden">
                        <motion.h1
                            initial={{ x: "7rem", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, type: spring }}
                        >
                            <img src="./hero-image.png" alt="hero-image" />
                        </motion.h1>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header