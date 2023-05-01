import React from 'react'
import ActiviyTable from './ActiviyTable'

const Activity = () => {
  return (
    <div className='w-[90%] max-w-[12000px] mt-10 text-poppins font-poppins text-3xl mx-auto rounded-t-[5px]'>
        <p className='border rounded-[inherit] py-4 px-8'>Item Activity</p>
        <div><input type="text" /></div>

        <div>
            <ActiviyTable />
        </div>
    </div>
  )
}

export default Activity