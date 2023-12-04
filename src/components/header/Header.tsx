"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, ArrowLeftRight } from "lucide-react"

interface ILink {
    id: number;
    title: string;
    href: string;
    isActive: boolean;
}

const navlinks: ILink[] = [
    { id: 0, title: "bridge", href: '/', isActive: false },
    { id: 1, title: "usdc-bridge", href: 'bridge', isActive: false },
    { id: 2, title: "transfer", href: 'bridge', isActive: false },
]

const Header = () => {
    const [links, setLinks] = useState<ILink[]>(navlinks)

    const handleActiveLink = (linkId: number): void => {
        console.log(linkId)
    }

  return (
    <header className="h-[100px] w-full mx-auto text-[#fff]">
        <nav className="flex justify-between h-full gap-[20px] items-center">
            <h2 className="flex items-center gap-[10px] md:text-[24px] text-[20px] font-extrabold">
                <ArrowLeftRight size={30} /> 
                 EasyBridge 
            </h2>

            <ul className="hidden lg:flex gap-[60px] font-normal text-[14px] md:text-[18px]">
                { links.map(link => (
                    <Link 
                        onClick={() => handleActiveLink(link.id)} 
                        key={link.id} 
                        href={link.href}
                        // className=""
                        > { link.title } 
                    </Link>
                )) }
            </ul>

            <Menu 
                size={24} color={'#ffff'} className="cursor-pointer lg:hidden"  
            />
        </nav>
    </header>
  )
}

export default Header