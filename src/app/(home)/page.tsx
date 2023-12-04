import { Bridge } from "@/components"
import { ArrowUpDown } from "lucide-react"

export default function Home() {
  return (
    <main 
      className="w-full flex flex-col gap-[25px] items-center justify-center mt-[40px]">

        <Bridge action="From" />
        <ArrowUpDown size={34} color="#fff" className="cursor-pointer" />
        <Bridge action="To" />

    </main>
  )
}
