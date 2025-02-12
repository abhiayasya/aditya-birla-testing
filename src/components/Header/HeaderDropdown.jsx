import React, { useRef, useState } from 'react';
import HeaderSidebarData from './HeaderSidebarData';

const HeaderDropdown = ({ isDropdownOpen, setActiveDropdown }) => {
  const [activeSidebar, setActiveSidebar] = useState(null);
  const dropdownRef = useRef(null);

  const toggleSidebar = (sidebarName) => {
    setActiveSidebar((prev) => (prev === sidebarName ? null : sidebarName));
  };

  return (
    <>
      {isDropdownOpen && (
        <div
          className="fixed top-[86px] left-0 w-full h-[calc(100vh-86px)] bg-black bg-opacity-70 z-40"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
      {(
        <div
          ref={dropdownRef}
          className={`w-[80%] flex max-h-0 overflow-hidden h-[85vh] fixed top-24 z-50 bg-white m-auto rounded-2xl transition-all duration-700 ${
            isDropdownOpen ? 'max-h-[85vh] opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-[25%] flex flex-col text-[20px] font-semibold h-full bg-white shadow-md">
            {['Housing Loans', 'Personal Loans', 'Business Loans'].map(
              (data, index) => (
                <div
                  key={index}
                  className={`px-10 py-4 border-b border-b-gray-300 flex justify-between items-center group hover:text-prbg-primary hover:bg-primary hover:bg-opacity-10 ${
                    activeSidebar === data
                      ? 'text-prbg-primary bg-primary bg-opacity-10'
                      : ''
                  }`}
                  onClick={() => toggleSidebar(data)}
                >
                  {data}
                  <img
                    src="/images/icons/dropdown-menu-sidebar-arrow.svg"
                    className={`w-4 h-4 font-bold group-hover:rotate-45 transition duration-500 ${
                      activeSidebar === data ? 'rotate-45' : ''
                    }`}
                    alt=""
                  />
                </div>
              )
            )}
          </div>
          <HeaderSidebarData data={activeSidebar} />
        </div>
      )}
    </>
  );
};

export default HeaderDropdown;
