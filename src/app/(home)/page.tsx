"use client"
import { useState } from "react";
import { Bridge } from "@/components"
import { ArrowUpDown } from "lucide-react"
import {Networks} from "@/components"


export default function Home() {
     const [showNetworks, setShowNetworks] = useState<boolean>(true);

     console.log(showNetworks)

  return (
    <>
      <main 
        className={`w-full flex flex-col gap-[25px] items-center justify-center mt-[40px] `}>

          <Bridge {...{action: "From", setNetwork: setShowNetworks}} />
          <ArrowUpDown size={34} color="#fff" className="cursor-pointer" />
          <Bridge {...{action: "To", setNetwork: setShowNetworks}} />

      </main>

      { showNetworks && <Networks setNetwork={setShowNetworks} /> }
    </>
  )
}
