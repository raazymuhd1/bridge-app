"use client"
import { useState } from "react";
import { Bridge } from "@/components"
import { ArrowUpDown } from "lucide-react"
import {Networks} from "@/components"


export default function Home() {
     const [showNetworks, setShowNetworks] = useState<boolean>(false);
     const [showWallets, setShowWallets] = useState<boolean>(false)

     console.log(showNetworks)

  return (
    <>
      <main 
        className={`w-full flex flex-col gap-[25px] items-center justify-center mt-[40px] `}>

          <Bridge {...{action: "From", setNetwork: setShowNetworks, setWallet: setShowWallets}} />
          <ArrowUpDown size={34} color="#fff" className="cursor-pointer" />
          <Bridge {...{action: "To", setNetwork: setShowNetworks, setWallet: setShowWallets}} />

      </main>

      { showNetworks && <Networks { ...{ showNetworks, setNetwork: setShowNetworks } } /> }
    </>
  )
}
