import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const Links = [
        {
            text: 'Pi WHitepaper'
        },
        {
            text: 'Support & FAQ'
        },
        {
            text: 'Community Code of Conduct'
        },
        {
            text: 'Terms of Service'
        },
        {
            text: 'Privacy Policy'
        },
        {
            text: 'Developer Terms of Use'
        },
        {
            text: 'Pi Trademark'
        },
        {
            text: 'Safety Center'
        },
    ]
  return (
    <footer className="bg-[#252525] text-white py-[100px]">
        <div className="w-[90%] mx-auto flex justify-between">
            <ul className="grid grid-cols-2 gap-5">
                {Links.map(link =>(
                    <li key={crypto.randomUUID()} className="hover:text-[#9244ac]">
                        <Link 
                            href={''}
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