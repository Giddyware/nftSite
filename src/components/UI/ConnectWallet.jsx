import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import metamask from "./../../assets/metamask.png"
import conibaseWallet from "./../../assets/conibaseWallet.svg"
import fortmatic from "./../../assets/fortmatic.png"
import walletConnect from "./../../assets/walletConnect.svg"
import { BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'

const ConnectWallet = ({show, modalStatus}) => {
const [showMore, setShowMore] = useState(false)

const changeShowmore = () => {
    setShowMore((prev) => !prev)

}
  return (
      <div className='fixed mx-auto sm:left-[30%] sm:top-[15%] h-[70%] w-[90%] sm:w-[40%] text-3xl font-poppins font-[500] z-[10000]' style={{
          transform: show?"translateY(0)":"translateY(-1500px)",
          opacity: show?"1":"0",
          transition: "all 1s"
      }}>
        <div className='flex flex-col gap-6 w-full bg-white rounded-3xl px-10 h-full '>
            <div className='flex w-full mt-5'><h3 className='flex-1 text-center py-6'>Connect your Wallet</h3><div className='cursor-pointer'>
            {/* onClick = {() => props.handler()} */}
            <div className='flex items-center justify-center py-6' onClick={modalStatus}>
                <AiOutlineClose fontSize={20} />
                </div>
            </div>
            </div>
            <div className={'overflow-y-scroll'}>
                    <div className='px-[5%] pb-7  border-b-solid border-b-[1px] border-b-[rgb(227, 227, 227)] text-[#646D75] text-center font-[100] font-normal font-lato'>If you don't have a wallet, you can select a provider and create one now. <span className='text-blue-400 font-[200]'> Learn more </span></div>
                <div>
            <div className='flex w-full gap-5  py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'><div className='w-8'><img src={metamask} className = 'w-full'/></div> <h3>Install Metamask</h3> </div>
            <div className='flex w-full gap-5 py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'> <div><img src={walletConnect} /></div> <h3>WalletConnect</h3> </div>
            <div className='flex w-full  gap-5 py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'> <div className='w-8'><img src={fortmatic} className = 'w-full' /></div><h3>Fortmatic</h3></div>
            <div className='flex w-full  gap-5 py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'><div><img src={conibaseWallet} /></div> <h3>Coinbase Wallet</h3> </div>
            <div className='flex w-full  gap-5 py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'><div><img src={conibaseWallet} /></div> <h3>Coinbase Wallet</h3> </div>
            {showMore?<><div className='flex w-full  gap-5 py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'><div><img src={conibaseWallet} /></div> <h3>Coinbase Wallet</h3> </div>
            <div className='flex w-full  gap-5 py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'><div><img src={conibaseWallet} /></div> <h3>Coinbase Wallet</h3> </div>
            <div className='flex w-full  gap-5 py-7 rounded-md px-3 items-center hover:border-d cursor-pointer'><div><img src={conibaseWallet} /></div> <h3>Coinbase Wallet</h3> </div>

            </>:null}
            
            </div>
            </div>
            <div className='text-center font-bold py-6 cursor-pointer border-t-solid border-t-[1px] border-t-[rgb(227, 227, 227)]' onClick={changeShowmore}>
                 {showMore?"show less": "show More"}
            </div>
        </div>
        </div>
 
  )
}

export default ConnectWallet