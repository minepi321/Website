import Image from "next/image"
import Link from "next/link"
import UseFulness from "./UseFulness"
import Download from "./Download"

const Main = () => {
  return (
    <main>
      <div className="bg-[#261339] -mt-[150px] main--top">
        <div className="w-[90%] mx-auto grid grid-cols-5 items-center main--top">
          <div className="col-span-3 w-full">
            <h1 className="text-white text-[65px] leading-[1.1em] main--h1 mb-6">The First Digital Currency You Can Mine on Your Phone</h1>
            <h3 className="text-white text-[20.4px] leading-[27.2px] main--h3 mb-7">Start mining Pi cryptocurrency today with our free, energy-light mobile app!</h3>
            <Link
              href={'/claim-pi'}
              className="border-[#c4940e] text-[30px] font-bold border-2 rounded-sm py-5 px-[54px] block w-fit text-[#e7b105] hover:text-[#ffffff] hover:bg-[#fac100] hover:border-[#fac100] transition-all hover:-translate-y-[2px]"
            >Claim Pi
            </Link>
          </div>
          <div className="col-span-2">
            <Image
              draggable={false}
              src={'/pi_video-6.webp'}
              height={472.69}
              width={283.73}
              alt="pi vid img"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#783a8c] -z-20 text-center flex flex-col items-center py-[60px] text-white text-3xl text-[30px] font-[700] mining--crypto relative">
        <h3 className="mb-2">Mining crypto is hard.</h3>
        <h3 className="mb-2">Investing in crypto is risky.</h3>
        <h3 className="mb-2">Too many of us are left out of the cryptocurrency</h3>
        <h3 className="">revolution...</h3>

       <div className="h-[50px] absolute -bottom-[50px] w-[100%]">
       <svg className="h-[50px] w-full rotate-180 " aria-hidden="true" fill="#783a8c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none"> <path d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path> <path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path> <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
       </svg>
       </div>
      </div>

      <div className="flex items-center justify-center mt-10 py-20 reason--for--mining">
        <div className="">
          <h3 className="text-[#783a8c] mb-6 max-w-[550px] text-3xl font-normal">Pi makes crypto mining easy.</h3>
          <p className="max-w-[550px] mb-6 text-xl font-normal">Breakthrough tech allows you to mine Pi on your phone without draining your battery</p>
          <Link 
            href={''}
            className="bg-[#783a8c] py-[15px] px-[46px] rounded-[5px] text-white"
          >
            Learn The Tech Behind Pi
          </Link>
        </div>
        <div 
          className="w-[233.96px] relative h-[220.96px] -z-20 background--image" 
          style={{background: 'url(/phone.webp)', backgroundSize: '100%'}}>
          <Image 
            src={'/coin.webp'}
            draggable={false}
            height={272}
            width={234}
            alt="coin image"
            className="absolute -top-[30px]"
          />
        </div>
      </div>
      <UseFulness />
      <Download />
    </main>
  )
}

export default Main