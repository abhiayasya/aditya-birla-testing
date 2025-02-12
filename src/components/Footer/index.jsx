"use client";
import Image from "next/image";
import ListOfLinks from "../ListOfLinks";
import SocialLinks from "../SocialLinks";
const Footer = () => {
const handleKeyDown=(event)=>{
if(event.key==='Enter'){
window.location.href='tel:18002707000'
}
}
const socialData = [
{
path: "https://facebook.com",
label: "Facebook",
icon: (
<svg
   xmlns="http://www.w3.org/2000/svg"
   width="9.701"
   height="19.02"
   viewBox="0 0 9.701 19.02"
   >
   <path
      id="icons8-facebook-f"
      d="M11.17,22.02V12.51H8V9.34h3.17v-1.7C11.17,4.415,12.74,3,15.419,3a15.445,15.445,0,0,1,2.282.139V6.17H15.874c-1.137,0-1.534.6-1.534,1.816V9.34h3.332l-.453,3.17H14.34v9.51Z"
      transform="translate(-8 -3)"
      fill="#fff"
      />
</svg>
),
},
{
path: "https://twitter.com",
label: "Twitter",
icon: (
<svg
   xmlns="http://www.w3.org/2000/svg"
   width="18.308"
   height="14.877"
   viewBox="0 0 18.308 14.877"
   >
   <path
      id="icons8-twitter"
      d="M20.307,6.2a7.5,7.5,0,0,1-2.157.591A3.762,3.762,0,0,0,19.8,4.711a7.531,7.531,0,0,1-2.386.912,3.757,3.757,0,0,0-6.5,2.569,3.8,3.8,0,0,0,.1.856A10.663,10.663,0,0,1,3.273,5.123a3.763,3.763,0,0,0,1.162,5.015,3.748,3.748,0,0,1-1.7-.47v.047A3.756,3.756,0,0,0,5.748,13.4a3.757,3.757,0,0,1-.99.132,3.825,3.825,0,0,1-.706-.067A3.76,3.76,0,0,0,7.56,16.071,7.579,7.579,0,0,1,2,17.626a10.633,10.633,0,0,0,5.758,1.687A10.613,10.613,0,0,0,18.442,8.627q0-.244-.011-.486A7.643,7.643,0,0,0,20.307,6.2Z"
      transform="translate(-1.999 -4.436)"
      fill="#fff"
      />
</svg>
),
},
{
path: "https://www.linkedin.com/",
label: "LinkedIn",
icon: (
<svg
   xmlns="http://www.w3.org/2000/svg"
   width="18.08"
   height="17.294"
   viewBox="0 0 18.08 17.294"
   >
   <path
      id="icons8-linkedin-2"
      d="M7.93,20.294H4V8.5H7.93ZM5.966,6.93A1.965,1.965,0,1,1,7.93,4.964,1.966,1.966,0,0,1,5.966,6.93ZM22.08,20.294H18.3V14.555c0-1.369-.026-3.129-1.964-3.129-1.968,0-2.27,1.49-2.27,3.03v5.837H10.289V8.494h3.627v1.612h.051A4,4,0,0,1,17.544,8.2c3.828,0,4.536,2.444,4.536,5.621Z"
      transform="translate(-4 -3)"
      fill="#fff"
      />
</svg>
),
},
{
path: "https://www.youtube.com/",
label: "Youtube",
icon: (
<svg
   xmlns="http://www.w3.org/2000/svg"
   width="20.321"
   height="14.068"
   viewBox="0 0 20.321 14.068"
   >
   <path
      id="Path_7945"
      data-name="Path 7945"
      d="M184.884,154H171.441A3.439,3.439,0,0,0,168,157.439v7.19h0a3.439,3.439,0,0,0,3.439,3.439h13.443a3.439,3.439,0,0,0,3.439-3.439v-7.19h0A3.439,3.439,0,0,0,184.884,154Zm-5.862,8.6-3.048,1.563v-6.253l6.1,3.126Z"
      transform="translate(-168.002 -154)"
      fill="#fff"
      />
</svg>
),
},
];
return (
<footer>
   {/*Repeated for mobile view */}
   <div className=" flex md:hidden bg-[#CFCFCF] gap-5 p-4 px-2">
      <Image
         src="/footer_brand_logo.webp"
         alt="Aditya Birla Capital Logo"
         width={130}
         height={20}
         className="object-contain"
         />
      <div className=" flex items-center gap-2  h-full border border-white rounded-xl px-2 p-1">
         <div
            className="flex items-center justify-center p-1.5 bg-red-600 rounded-full
            "
            >
            <Image src="/Phone.png" alt="Phone Icon" width={12} height={5} />
         </div>
         <div className="mt-2">
            <p className="font-medium text-gray-700 text-xs">
               Toll-Free Number
            </p>
            <a  onKeyDown={handleKeyDown}
               tabIndex={0} href="tel:18002707000" className="text-xs font-bold">
            1800 270 7000
            </a>
         </div>
      </div>
   </div>
   <div className="bg-[#C6C6C6] py-3 md:py-7 md:px-20 w-full">
      <ListOfLinks
         arrowClass="text-gray-500 text-lg "
         toggleClass="flex justify-between items-center md:block "
         containerClass="flex flex-col md:justify-start md:items-start gap-y-2  text-xs px-4 md:px-0"
         headingClass="font-bold text-gray-900 text-sm md:text-lg "
         listClass="md:flex md:flex-wrap md:items-center md:gap-x-8 "
         itemClass="relative py-2 md:after:content-[''] md:after:absolute after:top-25 after:-right-4 after:h-5 after:w-[1px] after:bg-black last:after:w-0 py-2"
         hoverClass="hover:text-[#C91429] transition-colors hover:font-semibold"
         />
   </div>
   <div className=" py-3 md:py-0 px-4 md:px-20  grid grid-cols-1 md:grid-cols-5 md:gap-24 bg-[#CFCFCF]">
      <div className=" hidden md:flex flex-col gap-9 md:border-r border-gray-400 md:py-7">
         <div>
            <Image
               src="/footer_brand_logo.webp"
               alt="Aditya Birla Capital Logo"
               width={140}
               height={60}
               className="object-cover"
               />
         </div>
         <div className="px-4 p-8 bg-[#ECECEC] hover:bg-white shadow-lg rounded-xl flex flex-col items-start gap-4 w-fit ">
            <div
               className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-full
               "
               >
               <Image src="/Phone.png" alt="Phone Icon" width={20} height={20} />
            </div>
            <div className="mt-2">
               <p className="font-medium text-gray-700 text-sm">
                  Toll-Free Number
               </p>
               <a
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  href="tel:18002707000"
                  className="text-sm font-bold text-red-500"
                  >
               1800 270 7000
               </a>
            </div>
         </div>
      </div>
      <div className="md:py-7">
         <ListOfLinks
            toggleClass="flex justify-between items-center pb-3 "
            headingClass="font-bold text-gray-900 md:text-lg text-sm"
            arrowClass="text-gray-500"
            listClass="md:space-y-2"
            itemClass="text-xs md:text-sm py-2 md:py-0 text-gray-800 md:px-0"
            hoverClass="hover:text-red-500 transition-colors hover:font-semibold"
            />
         <ListOfLinks
            containerClass="border-t border-[#C6C6C6] md:border-t-0 "
            toggleClass="flex justify-between items-center md:py-0 md:pt-4 py-3 "
            headingClass="font-bold text-gray-900 md:text-lg text-sm md:pb-3"
            arrowClass="text-gray-500"
            listClass="md:space-y-2"
            itemClass="text-xs md:text-sm py-2 md:py-0  text-gray-800 md:px-0"
            hoverClass="hover:text-red-500 transition-colors hover:font-semibold"
            />
      </div>
      <div className="md:py-7">
         <ListOfLinks
            containerClass="md:border-t-0 border-t border-[#C6C6C6] "
            toggleClass="flex justify-between items-center md:py-0 py-3"
            headingClass="font-bold text-gray-900 md:text-lg text-sm md:pb-3"
            arrowClass="text-gray-500"
            listClass="md:space-y-2"
            itemClass="text-xs md:text-sm py-2 md:py-0  text-gray-800 md:px-0"
            hoverClass="hover:text-red-500 transition-colors hover:font-semibold"
            />
      </div>
      <div className="md:py-7 md:border-r  md:border-gray-400">
         <ListOfLinks
            containerClass="border-t border-[#C6C6C6] md:border-t-0 "
            toggleClass="flex justify-between items-center md:py-0 py-3"
            headingClass="font-bold text-gray-900 md:text-lg text-sm md:pb-3"
            arrowClass="text-gray-500"
            listClass="md:space-y-2"
            itemClass="text-xs md:text-sm py-2 md:py-0  text-gray-800 md:px-0"
            hoverClass="hover:text-red-500 transition-colors hover:font-semibold"
            />
      </div>
      {/*  Repeat Mobile App */}
      <div className="md:hidden block py-4 border-t border-[#C6C6C6]">
         <h4 className="font-bold mb-4 text-sm md:text-lg">
            Download Mobile App
         </h4>
         <div className="mt-4 flex   gap-4 items-start">
            <button  className="flex items-center justify-center px-6 py-3 bg-white rounded-full ">
               <Image
                  src="/Apple_logo.png"
                  alt="Apple Logo"
                  width={10}
                  height={10}
                  />
               <span className="ml-2 text-xs font-medium text-gray-700">
               APP STORE
               </span>
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-white rounded-full ">
               <Image
                  src="/Appstore.png"
                  alt="Play Store Logo"
                  width={10}
                  height={10}
                  />
               <span className="ml-2 text-xs font-medium text-gray-700">
               PLAYSTORE
               </span>
            </button>
         </div>
      </div>
      {/* QR Code & Mobile App */}
      <div className="hidden md:flex flex-col items-end md:py-7">
         {/* 
         <h4 className="font-semibold mb-4">Do Download Mobile App</h4>
         */}
         <div className="bg-gray-200 rounded-2xl w-40 p-5">
            <Image src="/BarCode.png" width={120} height={60} alt="BarCode" />
            <p className="font-medium text-gray-700 text-xs">
               Scan the QR Code to
            </p>
            <p className="text-xs font-bold text-red-500">Download ABCD App</p>
         </div>
         <div className="mt-4 flex flex-col gap-1.5">
            <button className="flex items-center justify-center w-40 h-11 hover:border-0 border border-gray-400 rounded-full hover:bg-white">
               <Image
                  src="/Apple_logo.png"
                  alt="Apple Logo"
                  width={16}
                  height={16}
                  />
               <span className="ml-2 text-xs font-medium text-gray-700">
               APP STORE
               </span>
            </button>
            <button className="flex items-center justify-center w-40 h-11 hover:border-0 border border-gray-400 rounded-full hover:bg-white">
               <Image
                  src="/Appstore.png"
                  alt="Play Store Logo"
                  width={16}
                  height={16}
                  />
               <span className="ml-2 text-xs font-medium text-gray-700">
               PLAYSTORE
               </span>
            </button>
         </div>
      </div>
   </div>
   <div className="flex bg-red-700 justify-between gap-4 items-center md:px-20 py-2 text-sm flex-col-reverse md:flex-row">
      <h1 className="text-white text-xs order-1 md:hidden block">
         Follow Us On
      </h1>
      <p className="text-white text-xs">
         © 2023 Aditya Birla Capital. All rights reserved.
      </p>
      <div className="flex gap-2 md:gap-0 items-center">
         <SocialLinks
            data={socialData}
            classNames=" bg-red-700 flex justify-center "
            listClass="flex gap-4"
            itemClass=" flex items-center justify-center   "
           iconClass="bg-red-800 md:bg-red-700 rounded-full  md:hover:bg-red-800 "
            labelClass="hidden"
            svgClass="flex items-center w-7 h-7 md:w-12 md:h-12 justify-center"
            
            />
      </div>
   </div>
</footer>
);
};
export default Footer;