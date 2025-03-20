import { ReactNode } from "react"

export interface cardType {
    img: ReactNode,
    title: string,
    text: string
}
const Card = ({
    img, title, text
} : cardType) => {
  return (
    <div className="p-[25px] w-[221.15px] h-[328.81px] card shadow-lg rounded-[5px] border border-[#ededed] bg-white">
        <div className="flex justify-center mb-2">
            {img}
            {/* {<Image
                draggable={false} 
                src={img}
                height={60}
                width={60}
                alt={`${title}`}
                className="size-[60px]"
            />} */}
        </div>
        <h4 className=" text-center text-2xl font-bold mb-2">{title}</h4>
        <h5 className=" text-center font-normal text-lg">{text}</h5>
    </div>
  )
}

export default Card