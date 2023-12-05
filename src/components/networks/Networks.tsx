import { Dispatch, SetStateAction } from "react";
import Image from "next/image"

import { Input } from "@/components/ui/input"
import { networks } from "@/constants";
import { X } from "lucide-react"

const Networks = ({ setNetwork }: { setNetwork: Dispatch<SetStateAction<boolean>> }) => {

    return (
        <section 
            className="fixed inset-0 h-screen w-full transition-[display_.5s_ease-in-out] networks-gradient p-[10px]"
            // onClick={() => setNetwork(false)}
            >
            <X className="text-[#fff] cursor-pointer p-[2px] border-[1px] border-[#fff] rounded-[50%]" onClick={() => setNetwork(false)} />


            <div className="lg:w-[40%] md:w-[60%] w-[80%] mx-auto box-border mt-[40px]">
                <h3 className="text-[18px] text-[#fff] mb-[20px] text-center"> Select Network: </h3>
                <Input type="text" placeholder="search network .." />
                <div className="border-[1px] border-t-0 p-[15px] rounded-[10px] flex items-center justify-center gap-[20px] flex-wrap">
                    { networks.map(network => (
                        <div 
                            key={network.id}
                            className="flex w-[130px] h-[100px] flex-col items-center cursor-pointer transition-all duration-[.4s] rounded-[10px] hover:border-[1px] p-[15px] hover:opacity-[0.8] hover:bg-[#c8bbbb]"
                            >
                            <Image 
                                src={network.logo} 
                                className="w-[50px] h-[50px] rounded-[50%]" 
                                alt="network-logo"
                                />
                            <h2> { network.name } </h2>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Networks;