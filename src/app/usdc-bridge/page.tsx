"use client"
import { useState } from "react"
import { Bridge } from "@/components"

import { ArrowUpDown } from "lucide-react"

const Usdc = () => {
    const [showWallets, setShowWallets] = useState<boolean>(false)

    return (
        <div className={`w-full flex flex-col gap-[25px] items-center justify-center mt-[40px] `} >
           <Bridge {...{action: "From", setWallet: setShowWallets }} />
           <ArrowUpDown size={34} color="#fff" className="cursor-pointer" />
           <Bridge {...{action: "To", setWallet: setShowWallets}} />
        </div>
    )
}

export default Usdc