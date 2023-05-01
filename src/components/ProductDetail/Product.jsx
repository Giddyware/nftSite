import React from 'react'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import Image1 from "../../assets/nft/nft1.jpg";

const Product = () => {
  return (
    <div className='w-[40%] px-10 border-solid border-[1px] flex flex-col gap-5 rounded-[5px]'>
        <div className='flex justify-end'><HiOutlineHeart  size={'20px'} /></div>
        <div className='h-[400px]'>
            <img src={Image1} alt="" className='h-full' />
        </div>
    </div>
  )
}

export default Product