import Image from "next/image"
import Link from "next/link"

const Download = () => {
  return (
    <div 
      className=" py-20"
      style={{background: 'linear-gradient(90deg, #8a348e 0%, #423f88 100%)'}}
    >
        <div className="w-[90%] md:w-[60%] mx-auto flex items-center gap-10 download">
          <Image 
              src={'/download-image.webp'}
              alt=""
              height={312}
              width={100}
              className="h-[312px] w-full main--image"
          />
          <div>
              <h5 className=" text-[35px] text-[#f4af47] download--h5">Download the mobile app to start mining today! Join now.</h5>
              <h6 className=" font-normal my-[30px] text-[#fff] text-base">Keep your money! Mining Pi is free. ALl you need is an invitation from an existing trused member on the network. If you have an invitation you can download the mobile app below.</h6>
              <div className="flex items-center gap-2 social--link--container">
                <Link href={''}>
                  <Image 
                    src={'/google_play.png'}
                    height={40}
                    width={138}
                    alt="google play"
                    className="h-10 w-[138px] social--link"
                  />
                </Link>
                <Link href={''}>
                  <Image 
                    src={'/apple_store.png'}
                    height={40}
                    width={138}
                    alt="playstore"
                    className="h-10 w-[138px] social--link"
                  />
                </Link>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Download