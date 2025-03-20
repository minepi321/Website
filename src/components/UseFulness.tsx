import Card, { cardType } from "./Card"
import { DecentralizedIcon, GlobeIcon, MobileIcon } from "./Svgs"

const UseFulness = () => {
    const data: cardType[] = [
        {
            text: 'Secure, Immutable, non-counterfeitable and interoperable digital money.',
            img: <DecentralizedIcon />,
            title: 'Decentralized'
        },
        {
            text: 'Works on your mobile phone and does not drain your battery.',
            img: <MobileIcon />,
            title: 'Mobile First'
        },
        {
            text: 'Easy to use, secure at scale, without the massive electrical waste.',
            img: <GlobeIcon />,
            title: 'User & Planet-Friendly'
        }
    ]
  return (
    <div className="flex justify-center gap-4 py-10 pb-16 usefulness--card">
        {
            data.map(card => (
            <Card 
                key={crypto.randomUUID()}
                img={card.img}
                text={card.text}
                title={card.title} 
            />
        ))
        }
    </div>
  )
}

export default UseFulness