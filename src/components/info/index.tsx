import React from 'react'

const Info = () => {
  return (
    <section className="w-full info-gradient h-[80px] flex justify-center">
        <span className="flex flex-col md:flex-row items-center gap-[10px]"> 
            visit wormholescan here: 
            <a href="https://wormholescan.io/" target="_blank" className="rounded-[15px] font-semibold bg-[#fff] py-[5px] px-[10px] text-[14px] md:text-[18px]"> wormholescan.io 
            </a> 
        </span>
    </section>
  )
}

export default Info