"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const HeaderTopNav = ({activeDropdown,setActiveDropdown,toggleDropdown}) => {

    return (
        <header className="max-lg:hidden z-50 relative bg-white">
            {/* Header Content */}
            <div className="mx-auto flex justify-end items-center max-w-7xl ">
                <div className="flex text-xs pr-4 items-center">
                    <Link href="#" className="font-semibold px-4 py-2 hover:bg-[#c91429] hover:bg-opacity-10">PERSONAL</Link>
                    <Link href="#" className="font-semibold px-4 py-2 hover:bg-[#c91429] hover:bg-opacity-10">BUSINESS</Link>

                    {/* CORPORATES Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("CORPORATES")}
                            className="font-semibold px-4 py-2 hover:bg-[#c91429] hover:bg-opacity-10 flex "
                        >
                            CORPORATES
                            <svg
                                className={`ml-1 h-3 w-3 transform transition-transform duration-300 ${activeDropdown === "CORPORATES" ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Background Overlay */}
                        {activeDropdown && (
                            <div
                                className="fixed top-[86px] left-0 w-full h-[calc(100vh-86px)] bg-black bg-opacity-70 z-40"
                                onClick={() => setActiveDropdown(null)}
                            ></div>
                        )}
                        {(
                            <div className={`absolute flex top-24 right-[-100%] w-[600px] max-h-0 bg-white text-black rounded-2xl shadow-lg z-50 transition-all duration-700 ${
                                activeDropdown === "CORPORATES" ? 'max-h-[85vh] p-5 opacity-100' : 'opacity-0 max-h-0 h-0'
                              }`}>
                                {/* <div className=""> */}
                                    <div className="min-w-[181px]">
                                        <h4 className="font-bold mb-2 text-lg">Loans</h4>
                                        <ul className="uppercase gap-2.5 flex flex-col font-bold text-xs leading-5">
                                            <li>Corporate Loans</li>
                                            <li>Loan Against Property</li>
                                            <li>Lease Rental Discounting</li>
                                        </ul>
                                    </div>
                                    <div className="min-w-[181px] pl-2 border-l">
                                        <h4 className="font-bold mb-2 text-lg">Investments</h4>
                                        <ul className="uppercase gap-2.5 flex flex-col font-bold text-xs leading-5">
                                            <li>Mutual Funds</li>
                                            <li>Stock and Securities</li>
                                        </ul>
                                    </div>
                                    <div className="min-w-[181px] pl-2 border-l">
                                        <h4 className="font-bold mb-2 text-lg">Insurance</h4>
                                        <ul className="uppercase gap-2.5 flex flex-col font-bold text-xs leading-5">
                                            <li>Group Life Insurance</li>
                                            <li>Group Health Insurance</li>
                                        </ul>
                                    </div>
                                {/* </div> */}
                            </div>
                        )}
                    </div>
                    {/* CORPORATES Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("ADVISORS")}
                            className="font-semibold px-4 py-2 hover:bg-[#c91429] hover:bg-opacity-10 flex"
                        >
                            ADVISORS
                            <svg
                                className={`ml-1 h-3 w-3 transform transition-transform duration-300 ${activeDropdown === "ADVISORS" ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Background Overlay */}
                        {activeDropdown === "ADVISORS" && (
                            <div
                                className="fixed top-[86px] left-0 w-full h-[calc(100vh-86px)] bg-black bg-opacity-70 z-40"
                                onClick={() => setActiveDropdown(null)}
                            ></div>
                        )}
                        {(
                            <div className={`absolute top-24 flex right-[-100%] w-[600px] max-h-0 bg-white text-black rounded-2xl shadow-lg z-50 transition-all duration-700 ${
                                activeDropdown === "ADVISORS" ? 'max-h-[85vh] p-5 opacity-100' : 'opacity-0 max-h-0 h-0'
                              }`}>
                                {/* <div className="p-5 flex"> */}
                                    <div className="min-w-[181px]">
                                        <h4 className="font-bold mb-2 text-lg">Loans</h4>
                                        <ul className="uppercase gap-2.5 flex flex-col font-bold text-xs leading-5">
                                            <li>Corporate Loans</li>
                                            <li>Loan Against Property</li>
                                            <li>Lease Rental Discounting</li>
                                        </ul>
                                    </div>
                                    <div className="min-w-[181px] pl-2 border-l">
                                        <h4 className="font-bold mb-2 text-lg">Investments</h4>
                                        <ul className="uppercase gap-2.5 flex flex-col font-bold text-xs leading-5">
                                            <li>Mutual Funds</li>
                                            <li>Stock and Securities</li>
                                        </ul>
                                    </div>
                                    <div className="min-w-[181px] pl-2 border-l">
                                        <h4 className="font-bold mb-2 text-lg">Insurance</h4>
                                        <ul className="uppercase gap-2.5 flex flex-col font-bold text-xs leading-5">
                                            <li>Group Life Insurance</li>
                                            <li>Group Health Insurance</li>
                                        </ul>
                                    </div>
                                {/* </div> */}
                            </div>
                        )}
                    </div>

                    <Link href="#" className="font-semibold px-4 py-2 hover:bg-[#c91429] hover:bg-opacity-10">CAREERS</Link>
                </div>

                <div className="font-bold pl-6 py-1 ml-4 border-l border-gray-400 text-sm text-[#c91429] flex gap-1">
                    <img
                        src="https://www.adityabirlacapital.com/-/media/abccorp/data/media/img/nav_phone.svg?extension=webp"
                        alt=""
                        className="max-w-3"
                    />
                    <Link href="tel:18002707000">1800 270 7000</Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderTopNav;
