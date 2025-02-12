import React from 'react'
import HeaderDropdownCard from './HeaderDropdownCard'
import HeaderCarouselCard from './HeaderCarouselCard'
import HeaderCarousel from './HeaderCarousel'

const HeaderSidebarData = () => {
    return (
        <div className="w-[75%] flex h-full bg-gray-100">
            <div className="w-[70%] p-5 border-r h-full ">
                <div className="grid grid-cols-3 gap-[15px]">
                    {[1, 1, 1, 1, 1].map((data, index) => (
                        <HeaderDropdownCard key={index} />
                    ))}
                </div>
                <div className='border-t mt-8 pt-8 pl-0 p-5 flex flow-row justify-between'>
                    <div className='flex flex-col gap-2.5'>
                        {
                            [1, 1, 1].map((data, index) => (
                                <p key={index} className='border bg-white rounded-xl w-fit px-3.5 py-1.5 text-primary'>
                                    Home extension loan
                                </p>
                            ))
                        }
                    </div>
                    <div>
                        <HeaderCarouselCard />
                    </div>
                </div>
            </div>
            <div className="w-[30%] h-full flex flex-col justify-between">
                <div className='p-5'>
                    <HeaderCarousel >
                        <HeaderCarouselCard data={""}/>
                    </HeaderCarousel>
                </div>
                <div className='p-5 flex flex-col'>
                    <span className='font-bold text-xl'>Popular Articles</span>
                    <HeaderCarousel >
                        <HeaderCarouselCard data={""}/>
                    </HeaderCarousel>
                </div>
            </div>
        </div>
    )
}

export default HeaderSidebarData
