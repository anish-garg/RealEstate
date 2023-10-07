import { FaSearchLocation } from "react-icons/fa";
import CountUp from 'react-countup'

const Header = () => {
    return (
        <>
            <header>
                <div className="flex items-center justify-around bg-lightblue">
                    <div className="space-y-7">
                        <div className="h-16 w-16 bg-gradient-to-r from-blue-900 ... rounded-full absolute left-[22rem] top-16"></div>
                        <div className="text-brightblue text-6xl font-semibold ">
                            Explore <br /> The Best <br /> Property Now
                        </div>
                        <div className="text-lg">
                            Find a variety of properties that suit you very easilty <br />
                            Forget all difficulties in finding a residence for you
                        </div>
                        <div className="bg-white flex justify-between py-3 px-3  items-center rounded-lg shadow-custom shadow-black ">
                            <FaSearchLocation color="#00ABE4" size={23} />
                            <input type="text" className="outline-none border-none" />
                            <button className="bg-brightblue rounded-md px-4 transition-all ease-in  hover:scale-125 duration-300 text-white h-8">Search</button>
                        </div>
                        <div className="flex justify-around space-x-5">
                            <div className="place-content-start">
                                <span className="text-3xl font-medium">
                                    <span><CountUp start={8800} end={9000} duration={2} /></span>
                                    <span className="text-4xl">+</span>
                                </span><br />
                                <span className="text-brightblue">Premium Properties</span>
                            </div>
                            <div className="place-content-start">
                                <span className="text-3xl font-medium">
                                    <span><CountUp start={3800} end={4000} duration={2} /></span>
                                    <span className="text-4xl">+</span>
                                </span><br />
                                <span className="text-brightblue">Happy Customers</span>
                            </div>
                            <div className="place-content-start">
                                <span className="text-3xl font-medium">
                                    <span><CountUp end={50} duration={2} /></span>
                                    <span className="text-4xl">+</span>
                                </span><br />
                                <span className="text-brightblue">Awards Winning</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 border-8 border-brightblue rounded-tl-[210px] rounded-tr-[210px] overflow-hidden">
                        <img src="../../public/hero-image.png" alt="hero-image" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header