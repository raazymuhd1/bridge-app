import { Input } from "@/components/ui/input"
import { networks } from "@/constants";
import { X } from "lucide-react"
import { Dispatch, SetStateAction } from "react";

const Networks = ({ setNetwork }: { setNetwork: Dispatch<SetStateAction<boolean>> }) => {

    return (
        <section 
            className="fixed inset-0 h-screen w-full transition-all duration-500 networks-gradient p-[10px]"
            onClick={() => setNetwork(false)}
            >
            <X className="text-[#fff] cursor-pointer p-[2px] border-[1px] border-[#fff] rounded-[50%]" onClick={() => setNetwork(false)} />

            <div className="w-[60%] mx-auto mt-[40px]">
                <Input type="text" placeholder="search network .." />
                <div className="border-[1px] border-t-0 p-[15px] rounded-[10px]">
                    { networks.map(network => (
                        <div key={network.id}>
                            {/* logo */}
                            <h2> { network.name } </h2>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Networks;