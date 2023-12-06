import Image from "next/image"
import { FC, useState } from 'react'
import { INetwork } from "@/types"
import { bsc } from "@/assets";


const NetworkLists: FC<INetwork> = (network) => {
    const [selectedNetwork, setSelectedNetwork] = useState<INetwork>({ 
            id: 0, 
            name: '', 
            chainId: 0, 
            logo: bsc  
    });

  return (
     <div 
        key={network.id}
        className="flex w-[130px] h-[100px] flex-col items-center cursor-pointer transition-opacity duration-[.4s] rounded-[10px] hover:border-[1px] p-[15px] hover:opacity-[0.8] hover:bg-[#c8bbbb]"
        onClick={() => setSelectedNetwork(network)}
        >
        <Image 
            src={network.logo} 
            className="w-[50px] h-[50px] rounded-[50%]" 
            alt="network-logo"
        />
        <h2> { network.name } </h2>
    </div>
  )
}

export default NetworkLists