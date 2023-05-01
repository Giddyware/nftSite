import React from 'react'
import {BsEye} from "react-icons/bs"
// import {AiTwotoneHeartv } from "react-icons/ai"
import {BsFillHeartFill} from "react-icons/bs"

export const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];

import Description from './Description';

const Detailtext = () => {
  return (
    <div className='font-poppins flex-1'>

            <div className='bg-blue-50 mt-20 rounded-[5px] border-[1px] px-5 w-full py-10'>
                <p>Best offer</p>
                <p className='text-[30px] font-bold'>2.7115 WETH $5 <span className='text-2xl font-[300] text-[#eee]'>$5,060.78</span> </p>
                <button>
                    <span className='text-blue'> Buy Now </span>
                </button>

            </div>

            <Description />

            
    </div>
  )
}

export default Detailtext