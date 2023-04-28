import React from 'react'

const TableRow = ({image, name ,floorPrice, Volume, no}) => {
  return (
    <div className='grid grid-cols-[3fr_2fr_2fr] items-start font-bold'>
        <div className='flex gap-5'>
            <div>{no}</div>
            image
            {/* <div><img src={image} alt="" /></div> */}
            <div className=''>
                {name}
        </div>
        </div>
       
        <div className=' text-center'>
            {floorPrice}
        </div>
        <div className='text-center'>
            {Volume}
        </div>
    </div>
  )
}

export default TableRow