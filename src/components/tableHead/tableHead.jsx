import React from 'react'

const TableHead = () => {
  return (
    <div className='flex items-center justify-between w-full px-5 pt-4 pb-0 text-3xl border-b font-poppins'>
        <div className='flex items-center h-full gap-4 mt-auto'>
            <div className='h-full pb-4 border-colapse'>Trending</div>
            <div className='pb-4'>Top</div>
        </div>
        <div className='flex items-center gap-4 pb-4'>
        <div className='flex gap-4 rounded-2xl border-solid border-[1px] border-[grey] '>
            <p className='flex items-center px-4 bg-blue-100 rounded-l-2xl'>1h</p>
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