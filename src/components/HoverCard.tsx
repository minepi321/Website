import {
    HoverCard as HoverCardd,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
const HoverCard = ({ link, texts } : {
    link: React.ReactNode,
    texts?: React.ReactNode
}) => {
  return (
    <HoverCardd>
        <HoverCardTrigger className="z-50" asChild>{link}</HoverCardTrigger>
        {
            texts && <HoverCardContent className="z-50">
            {texts}
        </HoverCardContent>
        }
    </HoverCardd>

  )
}

export default HoverCard