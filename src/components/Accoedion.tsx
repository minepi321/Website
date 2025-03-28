import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"
  
  export function AccordionDemo() {
    const BASE_URL = 'https://minepi.com'
    const data = [
        {
            header: 'Pi Blockchain',
            children: [
                {
                    text: 'Pi Node',
                    href: `${BASE_URL}/pi-blockchain/pi-node/`
                },
                {
                    text: 'Pi BlockExplorer',
                    href: `https://blockexplorer.minepi.com`
                }
                ,
                {
                    text: 'Pi WhitePaper',
                    href: `${BASE_URL}/white-paper/`
                },
                {
                    text: 'RoadMap',
                    href: `${BASE_URL}/roadmap`
                }
            ]
        },
        {
            header: 'Developers',
            children: [
                {
                    text: 'New Developers',
                    href: `${BASE_URL}/developers/`
                },
                {
                    text: 'Why Build on Pi',
                    href: `${BASE_URL}/developers/why-build-on-pi/`
                },
                {
                    text: 'Pi Hackathon',
                    href: `${BASE_URL}/developers/pi-hackathon/`
                },
                {
                    text: 'KYB Verified Businesses',
                    href: `${BASE_URL}/kyb-business-pi/`
                },
                {
                    text: 'KYB Your Business',
                    href: `${BASE_URL}/kyb-businesss-pi/`
                },
                {
                    text: 'Partner With Pi',
                    href: `${BASE_URL}/partners/`
                }
            ],
            
        },
        {
            header: 'About Us',
        },
        {
            header: 'Community',
            children: [
                {
                    text: 'Blog',
                    href: `${BASE_URL}/blog`
                },
                {
                    text: 'Media Outreach',
                    href: `${BASE_URL}/newsroom`
                },
                {
                    text: 'Safety Center',
                    href: `${BASE_URL}/safety`
                }
            ]
        },
        {
            header: 'Support',
        },
    ]
    return (
      <Accordion type="single" collapsible className="w-[90%] mx-auto">
        {
            data.map((accordiondata, index) => (
                <AccordionItem key={crypto.randomUUID()} className="border-b-0" value={`item-${index}`}>
                    <AccordionTrigger display={!!accordiondata.children} className="text-[20px] justify-normal transist">
                        {accordiondata.children ? accordiondata.header : 
                        <Link 
                            href={`${accordiondata.header === 'About Us' ? 'https://minepi.com/about/' : 'https://minepi.com/support/'} `}
                        >
                            {accordiondata.header}
                        </Link> }
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-5 ml-6">
                        {accordiondata.children && (
                            accordiondata.children.map(datum => (     
                             <Link 
                                href={datum.href} 
                                key={crypto.randomUUID()}
                                className="text-[18px]"
                            > 
                             {datum.text}
                             </Link>  
                            ))
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))
        }
      </Accordion>
    )
  }
  
