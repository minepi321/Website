import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"
  
  export function AccordionDemo() {
    const data = [
        {
            header: 'Pi Blockchain',
            children: [
                {
                    text: 'Pi Node',
                    href: '',
                },
                {
                    text: 'Pi BlockExplorer',
                    href: '',
                },
                {
                    text: 'Pi Whitepaper',
                    href: '',
                },
                {
                    text: 'Roadmap',
                    href: '',
                }
            ]
        },
        {
            header: 'Developers',
            children: [
                {
                    text: 'New Developers',
                    href: '',
                },
                {
                    text: 'Why BUild on Pi?',
                    href: '',
                },
                {
                    text: 'Pi Hackathon',
                    href: '',
                },
                {
                    text: 'KYB Veified Businesses',
                    href: '',
                },
                {
                    text: 'KYB Your Business',
                    href: ''
                },
                {
                    text: 'Partner with Pi',
                    href: ''
                },
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
                    href: '',
                },
                {
                    text: 'Media Outreach',
                    href: '',
                },
                {
                    text: 'Safety Center',
                    href: '',
                },
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
                        {accordiondata.header}
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
  