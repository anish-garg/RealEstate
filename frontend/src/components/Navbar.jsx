const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between items-center py-5 px-10 bg-lightblue text-brightblue">
                {/* <img src="" alt="logo" /> */}
                <div className="ml-8 text-2xl font-bold">
                    Vintage Realty
                </div>
                <div className="flex gap-12 mr-4">
                    <a href="#residencies">Residencies</a>
                    <a href="#value">Our value</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#getstarted">Get Started</a>
                    <button className="bg-brightblue rounded-md transition-all ease-in  hover:scale-125 duration-300 text-white">
                        <a href="" className="px-6 text-xl">Contact</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar