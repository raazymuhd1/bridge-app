import { 
    Dispatch, 
    SetStateAction, 
    useState,
     ReactElement,
     ChangeEvent
} from "react";
import Image from "next/image"

import { Input } from "@/components/ui/input"
import NetworkLists from "./NetworkLists";
import { INetwork } from "@/types";
import { networks } from "@/constants";
import { X } from "lucide-react"


const Networks = ({ showNetworks, setNetwork }: { showNetworks: boolean, setNetwork: Dispatch<SetStateAction<boolean>> }) => {
        const [filteredNetworks, setfilteredNetworks] = useState<INetwork[]>([]);
        const [searchTerm, setSearchTerm] = useState("");


        /**
         * @dev handling network filter
         * @returns returning all filtered networks
         */
        const handleFilteredNetworks = (): ReactElement[] | undefined => {
             if(filteredNetworks?.length > 0) {
                return filteredNetworks.map(network => (
                    <NetworkLists { ...network } />
             ))
            }
            return networks.map(network => (
                    <NetworkLists { ...network } />
                ))
        }

    return (
        <section 
            className={`fixed inset-0 h-screen w-full ${showNetworks ? 'opacity-[1] visible': 'hidden opacity-[0]'} transition-[opacity_3s_ease-in-out] networks-gradient p-[10px]`}
            // onClick={() => setNetwork(false)}
            >
            <X className="text-[#fff] cursor-pointer p-[2px] border-[1px] border-[#fff] rounded-[50%]" onClick={() => setNetwork(false)} />


            <div className="lg:w-[40%] md:w-[60%] w-[80%] mx-auto box-border mt-[40px]">
                <h3 className="text-[18px] text-[#fff] mb-[20px] text-center"> Select Network: </h3>
                <Input 
                    type="text" 
                    placeholder="search network .."
                    value={searchTerm} 
                    onInput={(e: ChangeEvent<HTMLInputElement>) => {
                        const selectedNet = networks.filter(network => network.name.toLowerCase().includes(e.target.value.toLowerCase())  )
                        setSearchTerm(e.target.value)
                        setfilteredNetworks(selectedNet)
                        console.log(selectedNet)
                    }} 
                    
                    />
                <div className="border-[1px] border-t-0 p-[15px] rounded-[10px] flex items-center justify-center gap-[20px] flex-wrap">
                    <>
                      { handleFilteredNetworks() }
                    </>
                </div>
            </div>
        </section>
    )
}

export default Networks;