"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";
import MobileHeader from "./MobileHeader/MobileHeader";
import HeaderTopNav from "./HeaderTopNav";

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    
    const toggleDropdown = (dropdownName) => {
      setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    };

  return (
    <div className="sticky top-0 z-10">
      <HeaderTopNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} toggleDropdown={toggleDropdown} />
      <header className="mx-auto flex flex-col shadow-md items-center bg-white">
        <div className="flex items-center max-xl:max-w-7xl w-full bg-white mx-auto">
          {/* Logo */}
          <div className="max-lg:hidden flex flex-[0_0_170] items-center xl:pl-32">
            <Link href="/" className="w-[130px]">
              <Image
                width={130}
                height={30}
                src="/images/logo/aditya-birla-logo.webp"
                alt="Logo"
                className=""
              />
            </Link>
          </div>
          <div className="max-lg:hidden flex items-center justify-between w-full bg-primary text-white rounded-bl-2xl pl-10 xl:pr-32">
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 items-center text-[15px]">
              {/* Loans Dropdown */}
              
                <button
                  className="text-white focus:outline-none flex items-center gap-2"
                  onClick={() => toggleDropdown("loans")}
                >
                  Loans
                  <div
                    className={`${activeDropdown === "loans" ? "rotate-180" : ""
                      }`}
                  >
                    <img
                      src="/images/icons/down-arrow.svg"
                      className="text-white"
                      alt=""
                    />
                  </div>
                </button>
              {/* Investments Dropdown */}
                <button
                  className="text-white focus:outline-none flex items-center gap-2"
                  onClick={() => toggleDropdown("investments")}
                >
                  Investments
                  <div
                    className={`${activeDropdown === "investments" ? "rotate-180" : ""
                      }`}
                  >
                    <img
                      src="/images/icons/down-arrow.svg"
                      className="text-white"
                      alt=""
                    />
                  </div>
                </button>
              {/* Insurance Dropdown */}
                <button
                  className="text-white focus:outline-none flex items-center gap-2"
                  onClick={() => toggleDropdown("insurance")}
                >
                  Insurance
                  <div
                    className={`${activeDropdown === "insurance" ? "rotate-180" : ""
                      }`}
                  >
                    <img
                      src="/images/icons/down-arrow.svg"
                      className="text-white"
                      alt=""
                    />
                  </div>
                </button>
              {/* Payments Dropdown */}
                <button
                  className="text-white focus:outline-none flex items-center gap-2"
                  onClick={() => toggleDropdown("payments")}
                >
                  Payments
                  <div
                    className={`${activeDropdown === "payments" ? "rotate-180" : ""
                      }`}
                  >
                    <img
                      src="/images/icons/down-arrow.svg"
                      className="text-white"
                      alt=""
                    />
                  </div>
                </button>
              <Link href={"/"} className="flex gap-2 items-center">
                Download
                <img
                  src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/Logo-3.ashx"
                  alt=""
                  className="max-w-[30px]"
                />
              </Link>
            </nav>

            {/* Login / Quick Services */}
            <div className="hidden md:flex gap-1 my-3 font-semibold">
              <button
                onClick={() => toggleDropdown("tools")}
                className="flex flex-row justify-center items-center gap-2 uppercase text-xs leading-none px-5 py-1 border border-white rounded-full">
                Tools
                <div
                  className={` flex items-center justify-center h-fit w-4 ${activeDropdown === "tools" ? "rotate-180" : ""
                    }`}
                >
                  <img
                    src="/images/icons/down-arrow.svg"
                    className="text-white"
                    alt=""
                  />
                </div>
              </button>
              <button
                onClick={() => toggleDropdown("service")}
                className="flex items-center gap-2 uppercase text-xs leading-none px-5 py-1 border border-white rounded-full">
                Quick Services
                <div
                  className={`${activeDropdown === "service" ? "rotate-180" : ""
                    }`}
                >
                  <img
                    src="/images/icons/down-arrow.svg"
                    className="text-white"
                    alt=""
                  />
                </div>
              </button>
              <button className="px-5 py-1 border bg-white text-pribg-primary rounded-full hover:bg-primary hover:text-white transition duration-700">
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Components */}
        <HeaderDropdown setActiveDropdown={setActiveDropdown} isDropdownOpen={activeDropdown === "loans"} />
        <HeaderDropdown setActiveDropdown={setActiveDropdown} isDropdownOpen={activeDropdown === "investments"} />
        <HeaderDropdown setActiveDropdown={setActiveDropdown} isDropdownOpen={activeDropdown === "insurance"} />
        <HeaderDropdown setActiveDropdown={setActiveDropdown} isDropdownOpen={activeDropdown === "payments"} />
        <HeaderDropdown setActiveDropdown={setActiveDropdown} isDropdownOpen={activeDropdown === "tools"} />
        <HeaderDropdown setActiveDropdown={setActiveDropdown} isDropdownOpen={activeDropdown === "service"} />
      </header>
      <MobileHeader />
    </div>

  );
};

export default Header;
