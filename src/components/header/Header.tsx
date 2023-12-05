"use client"
import Link from "next/link"
import { useState, ReactElement } from "react"
import { Menu, ArrowLeftRight } from "lucide-react"

interface ILink {
    id: number;
    title: string;
    href: string;
    isActive: boolean;
}

const navlinks: ILink[] = [
    { id: 0, title: "bridge", href: '/', isActive: false },
    { id: 1, title: "usdc-bridge", href: 'usdc-bridge', isActive: false },
    { id: 2, title: "transfer", href: 'bridge', isActive: false },
]

const Header = () => {
    const [links, setLinks] = useState<ILink[]>(navlinks)

    const handleActiveLink = (): void => {
         const link1 = links[0];
         const link2 = links[1];
         const link3 = links[2];

         if(link1.isActive) {
             link2.isActive = false;
             link3.isActive = false;
         } else if(link2.isActive) {
             link1.isActive = false;
             link3.isActive = false;
         } else if(link3.isActive) {
            link1.isActive = false;
            link2.isActive = false;
         }

         console.log(links)
    }


    function handleLineBelow(): ReactElement {
        if(!(links[0].isActive || links[1].isActive || links[2].isActive)) {
            return <></>
        }

        return <div className="h-[2px] w-[50px] bg-[#92ae14]" />
    }


  return (
    <header className="h-[100px] w-full mx-auto text-[#fff]">
        <nav className="flex justify-between h-full gap-[20px] items-center">
            <h2 className="flex items-center gap-[10px] md:text-[24px] text-[20px] font-extrabold">
                <ArrowLeftRight size={30} /> 
                 EasyBridge 
            </h2>

            <ul className="hidden lg:flex gap-[60px] font-normal text-[14px] md:text-[18px]">
                {/* { links.map(link => (
                    <Link 
                        onClick={() => handleActiveLink(link.id)} 
                        key={link.id} 
                        href={link.href}
                        // className=""
                        > { link.title } 
                    </Link>
                )) } */}
                <Link onClick={handleActiveLink} href={links[0].href}> 
                    { links[0].title } 
                   <> { handleLineBelow } </>
                </Link>
                <Link onClick={handleActiveLink} href={links[1].href}> { links[1].title } </Link>
                <Link onClick={handleActiveLink} href={links[2].href}> { links[2].title } </Link>
            </ul>

            <Menu 
                size={24} color={'#ffff'} className="cursor-pointer lg:hidden"  
            />
        </nav>
    </header>
  )
}

export default Header