import React from 'react'
import { ArrowLeftRight } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full mx-auto grid lg:grid-cols-[repeat(2,minmax(100px,auto))] h-[100px] items-center justify-between mt-[60px] text-[#fff]">

       <aside className="flex items-center gap-[40px]">
          <h2 className="flex items-center gap-[10px] md:text-[24px] text-[20px] font-extrabold">
                <ArrowLeftRight size={30} /> 
                EasyBridge 
          </h2>

          <div className="flex items-center gap-[20px]">
              <Link href="/faqs"> Faqs </Link>
              <Link href="/policies"> Term Of Use </Link>
          </div>
       </aside>

         <span> Built by <strong className='italic underline'> GreyLabs </strong> </span>
    </footer>
  )
}

export default Footer