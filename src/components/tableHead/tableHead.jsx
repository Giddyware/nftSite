import React from 'react'

const TableHead = () => {
  return (
    <div className='flex justify-between font-poppins w-full text-3xl items-center pt-4 px-5 text-3xl border-b pb-0'>
        <div className='flex gap-4 items-center h-full mt-auto'>
            <div className=' pb-4 h-full border-colapse'>Trending</div>
            <div className='pb-4'>Top</div>
        </div>
        <div className='flex items-center pb-4 gap-4'>
        <div className='flex gap-4 rounded-2xl border-solid border-[1px] border-[grey] '>
            <p className='bg-blue-100 flex items-center px-4 rounded-l-2xl'>1h</p>
            <p className='px-4 py-4'>6h</p>
            <p className='px-4 py-4'>24h</p>
            <p className='px-4 py-4'>7d</p>
        </div>

        <div className='flex gap-4 rounded-2xl border-solid border-[1px] border-[grey] px-8 py-4'> 
            All chains
        </div>
        <div className='flex gap-4 rounded-2xl border-solid border-[1px] border-[grey] px-8 py-4'>
            View all
        </div>
        </div>
    </div>
  )
}

export default TableHead