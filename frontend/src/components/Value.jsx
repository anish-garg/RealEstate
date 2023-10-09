import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    // AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdArrowDropDown } from 'react-icons/md'
import data from '../utilities/accordion'
import { useState } from 'react';

const Value = () => {
    // const [open, setOpen] = useState(null);
    const [expanded, setExpanded] = useState(false)
    // const expand = "shadow-xl shadow-brightblue";
    // const collapsed = ""
    const handleChange = () => {
        setExpanded(!expanded)
    }
    // console.log(expanded);
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
                        <Accordion className=''
                            allowMultipleExpanded={false}
                            preExpanded={[]}
                            allowZeroExpanded
                        >
                            {data.map((item, i) => {
                                return (
                                    <AccordionItem key={i} uuid={i} className={`bg-white border-2 rounded-lg mb-4 ${expanded ? "shadow-xl shadow-brightblue" : ""}`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton onClick={() => handleChange()} className='bg-white p-5'>
                                                {/* <AccordionItemState>
                                                    {({ expanded }) => console.log(expanded)}
                                                </AccordionItemState> */}
                                                <div className='flex justify-between items-center'>
                                                    <div className='bg-lightblue p-2 rounded-md text-brightblue'>
                                                        {item.icon}
                                                    </div>
                                                    <span className='text-xl text-brightblue font-semibold'>{item.heading}</span>
                                                    <div className='bg-lightblue p-2 rounded-md text-brightblue'>
                                                        <MdArrowDropDown />
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>

                                            <p>{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
                <div className="w-1/3 border-8 border-brightblue rounded-tl-[220px] rounded-tr-[220px] overflow-hidden">
                    <img src="./value.png" alt="value" />
                </div>
            </div>
        </section >
    )
}

export default Value