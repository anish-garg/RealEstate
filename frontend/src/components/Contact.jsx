import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BsChatTextFill } from 'react-icons/bs'
import { BsPersonVideo3 } from 'react-icons/bs'

const Contact = () => {
    return (
        <section>
            <div className='flex items-center mt-16 justify-around'>
                <div className="w-[480px] h-[560px] border-8 border-brightblue rounded-tl-[245px] rounded-tr-[245px] overflow-hidden">
                    <img src="./contact.jpg" alt="contact" className="w-full h-full object-fill" />
                </div>
                <div>
                    <div className='flex flex-col mb-12 gap-3'>
                        <span className='text-2xl text-blue-950 font-bold'>Our Contact</span>
                        <span className='text-4xl text-brightblue font-bold'>Easy to Contact Us</span>
                        <span className='text-sm'>We always ready to help by providing the best services for you. <br /> We believe a good place to live can make your life better.</span>
                    </div>

                    <div className='flex flex-col gap-12'>
                        <div className='flex gap-12'>
                            <div className='border-2 w-fit flex flex-col justify-start gap-4 p-4 rounded-md transition-all ease-in duration-500 hover:scale-110 hover:shadow-custom1 hover:shadow-blue-500'>
                                <div className='flex gap-8 items-center'>
                                    <div className='bg-lightblue h-fit p-2 rounded-md text-brightblue'><MdCall size={25} /></div>
                                    <div className='flex flex-col'>
                                        <span className='text-blue-950 font-bold text-xl'>Call</span>
                                        <span className='text-blue-950'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-lightblue text-brightblue rounded-md px-20 py-2 transition-all ease-in duration-[400ms] hover:bg-brightblue hover:text-white hover:scale-95'>Call now</button>
                                </div>
                            </div>

                            <div className='border-2 w-fit flex flex-col justify-start gap-4 p-4 rounded-md transition-all ease-in duration-500 hover:scale-110 hover:shadow-custom1 hover:shadow-blue-500'>
                                <div className='flex gap-8 items-center'>
                                    <div className='bg-lightblue h-fit p-2 rounded-md text-brightblue'><BsFillChatDotsFill size={25} /></div>
                                    <div className='flex flex-col'>
                                        <span className='text-blue-950 font-bold text-xl'>Chat</span>
                                        <span className='text-blue-950'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-lightblue text-brightblue rounded-md px-20 py-2 transition-all ease-in duration-[400ms] hover:bg-brightblue hover:text-white hover:scale-95'>Chat now</button>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-12'>
                            <div className='border-2 w-fit flex flex-col justify-start gap-4 p-4 rounded-md transition-all ease-in duration-500 hover:scale-110 hover:shadow-custom1 hover:shadow-blue-500'>
                                <div className='flex gap-8 items-center'>
                                    <div className='bg-lightblue h-fit p-2 rounded-md text-brightblue'><BsPersonVideo3 size={25} /></div>
                                    <div className='flex flex-col'>
                                        <span className='text-blue-950 font-bold text-xl'>Video Call</span>
                                        <span className='text-blue-950'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-lightblue text-brightblue rounded-md px-[58px] py-2 transition-all ease-in duration-[400ms] hover:bg-brightblue hover:text-white hover:scale-95'>Video Call now</button>
                                </div>
                            </div>

                            <div className='border-2 w-fit flex flex-col justify-start gap-4 p-4 rounded-md transition-all ease-in duration-500 hover:scale-110 hover:shadow-custom1 hover:shadow-blue-500'>
                                <div className='flex gap-8 items-center'>
                                    <div className='bg-lightblue h-fit p-2 rounded-md text-brightblue'><BsChatTextFill size={25} /></div>
                                    <div className='flex flex-col'>
                                        <span className='text-blue-950 font-bold text-xl'>Message</span>
                                        <span className='text-blue-950'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-lightblue text-brightblue rounded-md px-16 py-2 transition-all ease-in duration-[400ms] hover:bg-brightblue hover:text-white hover:scale-95'>Message now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
