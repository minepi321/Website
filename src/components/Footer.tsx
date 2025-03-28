import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const BASE_URL = 'https://minepi.com'
    const Links = [
        {
            text: 'Pi Whitepaper',
            url: `${BASE_URL}/white-paper/`
        },
        {
            text: 'Support & FAQ',
            url: `${BASE_URL}/support/`
        },
        {
            text: 'Community Code of Conduct',
            url: 'https://minepi.com/pioneer-code-of-conduct/'
        },
        {
            text: 'Terms of Service',
            url: 'https://socialchain.app/tos'
        },
        {
            text: 'Privacy Policy',
            url: 'https://socialchain.app/privacy'
        },
        {
            text: 'Developer Terms of Use',
            url: 'https://socialchain.app/developer_terms'
        },
        {
            text: 'Pi Trademark',
            url: 'https://minepi.com/pi-trademark-guidelines/'
        },
        {
            text: 'Safety Center',
            url: 'https://minepi.com/safety/'
        },
    ]
  return (
    <footer className="bg-[#252525] text-white py-[100px]">
        <div className="w-[90%] mx-auto flex justify-between">
            <ul className="grid grid-cols-2 gap-5">
                {Links.map(link =>(
                    <li key={crypto.randomUUID()} className="hover:text-[#9244ac]">
                        <Link 
                            href={link.url}
                            className=""
                        > 
                            {link.text} 
                        </Link>
                    </li>
                ))}
            </ul>

            <Image 
                src={'/Pi-Network icon.png'}
                alt="pi icon"
                width={1000}
                height={223}
                className="h-[50px] w-[215px]"
                draggable={false}
            />
        </div>
    </footer>
  )
}

export default Footer
