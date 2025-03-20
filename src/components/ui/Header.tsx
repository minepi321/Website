'use client';
import { ChevronDown, Facebook, Instagram, Menu, Search, Twitter, X, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HoverCard from "../HoverCard"
import useScrollObserver from "@/hooks/useScollObserver"
import { useState } from "react";
import { AccordionDemo } from "../Accoedion";

interface LinksTypeType {
    text: string,
    children? : string[]
}

type LinksType = LinksTypeType[] 

const Links: LinksType = [
    {
        text: 'Pi Blockchain',
        children: [
            'Pi Node',
            'Pi BlockExplorer',
            'Pi WhitePaper',
            'RoadMap'
        ]
    },
    {
        text: 'Developers',
        children: [
            'New Developers',
            'Why Build on Pi',
            'Pi Hackathon',
            'KYB Verified Businesses',
            'KYB Your Business',
            'Partner With Pi'
        ]
    },
    {
        text: 'About Us',
    },
    {
        text: 'Community',
        children: [
            'Blog',
            'Media Outreach',
            'Safety Center'
        ]
    },
    {
        text: 'Support',
    }
]

const Images = [
    {
        icon: <Twitter />
    },
    {
        icon: <Facebook />
    },
    {
        icon: <Youtube />
    },
    {
        icon: <Instagram />
    }
]

const Header = () => {
    const scroll = useScrollObserver();
    const [isOpened, setIsOpened] = useState<boolean>(false);
    // transition: opacity .2s ease, color .2s ease
  return (
    <header className={`sticky top-0 ${scroll ? 'bg-[#593b8b] opacity-100': 'bg-[#261339] opacity-[0.9]'}`}>
        <div className={`flex h-[106px] w-[90%] mx-auto items-center justify-between `}>
            <Image 
                alt="pi logo"
                width={1000}
                height={223}
                className="h-[50px] w-[215px]"
                src={'/Pi-Network icon.png'}
                draggable={false}
            />

            <ul className="flex items-center gap-2.5">
                {
                    Links.map(item => 
                        (<li 
                            className="text-[#fff] opacity-[0.75] hover:opacity-[1] transist" 
                            key={crypto.randomUUID()}
                        >
                            {item.children ? (
                                <HoverCard 
                                    link={<Link 
                                        className="relative z-20 no-underline text-[#fff] flex items-center translate-underline" 
                                        href=""
                                        >
                                        {item.text}
                                        {
                                            item.children && <ChevronDown />
                                        }
                                    </Link>} 

                                    texts={<ul className="flex flex-col gap-3 ">
                                        {item.children?.map(child => (
                                        <Link 
                                            key={crypto.randomUUID()}
                                            className="relative z-10 no-underline text-black translate-underline-second" 
                                            href=""
                                            >
                                            <h5>{child}</h5>
                                        </Link>
                                    ))}
                                </ul>}
                            />) : 
                            (
                            <Link 
                                className="relative no-underline text-[#fff] flex items-center translate-underline" 
                                href=""
                                >
                                {item.text}
                                {
                                    item.children && <ChevronDown />
                                }
                            </Link>)}
                            
                        </li>)
                    )
                }
            </ul>

            <ul className="flex items-center gap-5">
                {
                    Images.map(({icon}) => (
                        <div 
                            key={crypto.randomUUID()}
                            className="text-white icons"
                            role="button"
                        >
                            {icon}
                        </div>
                    ))
                }
            </ul>
            <div className="hidden mobile--nav items-center gap-5">
                <Search role="button" color="#fff" />
                {
                    !isOpened ? (
                    <Menu 
                        role="button" 
                        onClick={()=> setIsOpened(true)} 
                        color="#fff" 
                    />
                    ) : (
                    <X  
                        onClick={()=>setIsOpened(false)} 
                        role="button" 
                        color="#fff"
                    />
                    ) 
                }
            </div>
        </div>
        {
            isOpened && (
            <div 
                className="absolute flex opacity-95 flex-col text-white justify-center w-full h-[100vh]"
                style={{background: 'linear-gradient(145deg, #593b8b, #1c1a1a)', transition: 'opacity .3s ease'}}
            >
                <div className="mb-[10px]"/>
                <div>
                   <AccordionDemo />
                </div>
                <div  className="flex mt-auto mb-auto w-[90%] mx-auto gap-5"> 
                    {Images.map(
                        img => 
                        <Link 
                            href={''} 
                            key={crypto.randomUUID()}
                            >
                                {img.icon}
                            </Link>
                    )}
                </div>
                <div />
            </div>)
        }
    </header>
  )
}

export default Header