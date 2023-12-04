import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Wallet, Waypoints } from 'lucide-react'

const btnStyles = 'flex items-center gap-[5px] py-[5px] px-[10px] bg-[#C1D2BC] font-semibold text-[12px] md:text-[14px] lg:text-[16px]'


const Bridge = ({ action }: { action: string }) => {
  return (
    <section className='lg:w-[50%] md:w-[60%] w-[100%] mx-auto'>

        <header className="flex justify-between mb-[10px]">
           <h3 className="lg:text-[30px] text-[#fff] md:text-[20px] text-[14px] "> { action } </h3>

           <aside className='flex flex-col md:flex-row items-center md:gap-[20px] gap-[10px]'>
             <Button variant="outline" className={`${btnStyles}`}>
                 <Wallet className="text-[14px] md:text-[18px]" />
                 Connect Wallet
             </Button>
             <Button variant="outline" className={`${btnStyles}`}>
                 <Waypoints className="text-[14px] md:text-[18px]" />
                 Select Network
             </Button>
           </aside>
        </header>

        <div className="w-full mx-auto h-[200px] rounded-[10px] bg-[#A192AB] p-[10px] shadow-[-1px_-2px_4px_3px_#A192AB,1px_2px_4px_3px_#A192AB] backdrop-blur-[10px]">
            <div className="w-full h-[80px] pl-[8px] bg-[#333] rounded-[10px]">
               <h3 className="text-[14px] md:text-[18px] lg:text-[20px] text-[#fff]"> Asset </h3> 
               <h5> Usdt </h5>
            </div>

            <div className="flex gap-[20px] justify-around mt-[8px]">
                <aside className="w-[70%] h-[80px] pl-[8px] bg-[#333] rounded-[10px] text-[#fff]">
                  <h3 className="text-[14px] md:text-[18px] lg:text-[20px]"> Amount </h3>
                  <input type="text" placeholder='enter amount' className="w-[98%] border-none outline-none bg-[#333] h-[60%] py-[5px] px-[10px]" />
                </aside>

                <aside className="w-[30%] h-[80px] pl-[8px] rounded-[10px] text-[#fff]">
                    <h3 className="text-[14px] md:text-[18px] lg:text-[20px] font-semibold text-[#333]"> Balance </h3> 
                    <h5 className="mt-[6px]"> 10 </h5>
                </aside>
            </div>
        </div>
    </section>
  )
}

export default Bridge