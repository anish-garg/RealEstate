const Footer = () => {
    return (
        <footer id="footer">
            <div className="flex justify-between h-48 items-center">
                <div className="flex flex-col flex-wrap gap-3 items-center justify-end">
                    <div className="h-10 w-10 bg-gradient-to-r from-yellow-500 ... rounded-full relative left-[7rem] top-[2.25rem] -z-10"></div>
                    <span className="text-3xl text-brightblue font-bold">
                        Vintage Realty
                    </span>
                    <div className="ml-10">Our vision is to make all people
                        the <br /> best place to live for them.
                    </div>
                </div>
                <div className="flex flex-col justify-end gap-5">
                    <div className="flex flex-col">
                        <span className="text-3xl text-brightblue font-bold">
                            Information
                        </span>
                        <span>
                            140 Rohini, Delhi,India
                        </span>
                    </div>
                    <div className="flex gap-11 text-lg">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer