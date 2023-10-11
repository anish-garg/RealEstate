const GetStarted = () => {
    return (
        <section id="getstarted">
            <div className="flex justify-center mt-12">
                <div className="bg-blue-500 text-white w-[80rem] h-[14rem] border-8 border-blue-600 rounded-2xl flex justify-center items-center">
                    <div className="flex flex-col items-center gap-6">
                        <span className="text-3xl font-bold">
                            Get Started With Vintage Realty
                        </span>
                        <div className="flex flex-col items-center text-lightblue text-[16px]">
                            <span>Subscribe and find super attractive price quotes from us.</span>
                            <span>Find your residence soon</span>
                        </div>
                        <a href="mailto:anishgarg5914@gmail.com" className="bg-blue-400 border-2 border-white text-white p-2 w-32 rounded-xl flex justify-center transition-all ease-in duration-300 hover:scale-110"><button>Get Started</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStarted