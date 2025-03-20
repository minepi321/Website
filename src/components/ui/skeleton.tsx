import { cn } from '@/lib/utils'

const Skeleton = ({
    className, ...props
} : React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
        className={cn("animate-pulse rounded-md bg-muted", className)}
        {...props}
    />
  )
}

export default Skeleton

export const LodgeCardSkeleton = () => {
    return(
        <div>
            <Skeleton 
                className='h-[298.22px] mb-3 w-full bg-black rounded-xl'
            />
            <Skeleton 
                className='h-[22.500px] w-[70%] bg-black mb-1'
            />
            <Skeleton 
                className='h-[22.500px] w-[50%] bg-black mb-1'
            />
            <Skeleton 
                className='h-[22.500px] w-[25%] bg-black'
            />
        </div>
    )
}