import Link from 'next/link'
import React from 'react'

const HeaderCarouselCard = ({data}) => {
    return (
        <div className='p-4 flex gap-2.5 border rounded-xl text-left max-w-[265px]'>
            <div className='rounded-full flex justify-center items-center bg-white w-[50px] h-[50px] px-4'>
                <img src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.ashx" alt=""  className='w-full h-full'/>
            </div>
            <div>
                <h2 className='text-base leading-[20px] -tracking-[0px] font-bold'>Business Loan EMI Calculator</h2>
                <p className='mt-1 mb-2.5 text-xs leading-[14px]'>Calculate your Business Loan amount and EMIs</p>
                <Link href={"#"} className='flex gap-2 items-center text-primary text-xs tracking-[-.4px] uppercase font-bold group'>Calculate Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.828" height="6.414" viewBox="0 0 10.828 6.414" className='-rotate-90 mt-1 group-hover:translate-x-2 transition duration-500'>
                        <path id="Path_84" data-name="Path 84" d="M440,98l4,4,4-4" transform="translate(-438.586 -96.586)" fill="none" stroke="#c91429" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default HeaderCarouselCard
