const Contact = () => {
    return (
        <section>
            <div className='flex items-center mt-16 justify-around'>
                <div>
                    <div className='flex flex-col mb-12 gap-3'>
                        <span className='text-2xl text-blue-950 font-bold'>Our Value</span>
                        <span className='text-4xl text-brightblue font-bold'>Value We Give to You</span>
                        <span className='text-sm'>We always ready to help by providijng the best services for you. <br />
                            We beleive a good blace to live can make your life better</span>
                    </div>
                    <div className='w-[640px]'>

                    </div>
                </div>
                <div className="w-1/3 border-8 border-brightblue rounded-tl-[220px] rounded-tr-[220px] overflow-hidden">
                    <img src="./.png" alt="value" />
                </div>
            </div>
        </section>
    )
}

export default Contact