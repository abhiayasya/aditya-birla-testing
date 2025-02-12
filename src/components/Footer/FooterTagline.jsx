import React from 'react'

const FooterTagline = () => {
  return (
    <div className="py-6" >
    <div className="flex justify-between items-center max-md:flex-col max-md:text-center">
      <div className="tagline-markup">
        <p className="text-white font-semibold text-xs font-sans">© 2023, Aditya Birla Capital Ltd. All Rights Reserved.</p>
      </div>

      <div className="tagline-terms">
        <p className="text-white text-xs font-semibold font-sans">Terms and Conditions</p>
      </div>
      
    </div>
    </div>
  )
}

export default FooterTagline
