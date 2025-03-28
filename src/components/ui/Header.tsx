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
    children? : {text: string, url: string}[]
}

type LinksType = LinksTypeType[] 
const BASE_URL = 'https://minepi.com'
const Links: LinksType = [
    {
        text: 'Pi Blockchain',
        children: [
            {
                text: 'Pi Node',
                url: `${BASE_URL}/pi-blockchain/pi-node/`
            },
            {
                text: 'Pi BlockExplorer',
                url: `https://blockexplorer.minepi.com`
            }
            ,
            {
                text: 'Pi WhitePaper',
                url: `${BASE_URL}/white-paper/`
            },
            {
                text: 'RoadMap',
                url: `${BASE_URL}/roadmap`
            }
        ]
    },
    {
        text: 'Developers',
        children: [
            {
                text: 'New Developers',
                url: `${BASE_URL}/developers/`
            },
            {
                text: 'Why Build on Pi',
                url: `${BASE_URL}/developers/why-build-on-pi/`
            },
            {
                text: 'Pi Hackathon',
                url: `${BASE_URL}/developers/pi-hackathon/`
            },
            {
                text: 'KYB Verified Businesses',
                url: `${BASE_URL}/kyb-business-pi/`
            },
            {
                text: 'KYB Your Business',
                url: `${BASE_URL}/kyb-businesss-pi/`
            },
            {
                text: 'Partner With Pi',
                url: `${BASE_URL}/partners/`
            }
        ]
    },
    {
        text: 'About Us',
    },
    {
        text: 'Community',
        children: [
            {
                text: 'Blog',
                url: `${BASE_URL}/blog`
            },
            {
                text: 'Media Outreach',
                url: `${BASE_URL}/newsroom`
            },
            {
                text: 'Safety Center',
                url: `${BASE_URL}/safety`
            }
        ]
    },
    {
        text: 'Support',
    }
]

const Images = [
    {
        icon: <Twitter />,
        url: 'https://twitter.com/PiCoreTeam'

    },
    {
        icon: <Facebook />,
        url: 'https://www.facebook.com/PiCoreTeam/'
    },
    {
        icon: <Youtube />,
        url: 'https://www.youtube.com/c/PiCoreTeam',
    },
    {
        icon: <Instagram />,
        url: 'https://www.instagram.com/pi_network/'
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
                                            target="_blank"
                                            key={crypto.randomUUID()}
                                            className="relative z-10 no-underline text-black translate-underline-second" 
                                            href={child.url}
                                            >
                                                {child.text}
                                        </Link>
                                    ))}
                                </ul>}
                            />) : 
                            (
                            <Link 
                                className="relative no-underline text-[#fff] flex items-center translate-underline" 
                                href={`${item.text === 'About Us' ? 'https://minepi.com/about/' : 'https://minepi.com/support/'} `}
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
                    Images.map(({icon, url}) => (
                        <div 
                            key={crypto.randomUUID()}
                            className="text-white icons"
                            role="button"
                        >
                            <Link href={url}>
                                {icon}
                            </Link>
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
                            href={img.url} 
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
