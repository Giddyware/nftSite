import React from 'react'
import TableHead from '../components/tableHead/tableHead'
import Trending from '../components/Trending'

const Collection = () => {
  return (
    <div className='text-2xl font-poppins px-5'>
        <TableHead />
        <Trending />
    </div>
  )
}

export default Collection