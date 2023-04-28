import React from 'react'
import TableRow from './TableRow/TableRow'



const trending = [
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },

  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
  {
    image: "",
    name: "pepe pee-pee redeployed",
    floorPrice: "0.01ETH",
    Volume: "1.9ETH"
  },
]


const Header = ({collection, floorPrice, Volume}) => {
  <div className='grid grid-cols-[3fr_2fr_2fr]'> 
  <li className=''>{collection}</li>
  <li className='text-center'>{floorPrice}</li>
  <li className='text-center'>{Volume}</li>
 </div>
} 

const headers = [
  // {
  //   collection: "COLLECTION",
  //   floorPrice: "FLOOR PRICE",
    
  // }
]





const Trending = () => {
  return (
    <div className='px-5 mx-auto mt-10'>
      <div className='grid grid-cols-2 text-[grey] font-bold mb-5'>
        <div className='grid grid-cols-[3fr_2fr_2fr]'> 
        <li className=''>COLLECTION</li>
        <li className='text-center'>FLOOR PRICE</li>
        <li className='text-center'>VOLUME</li>
        </div>
        
        <div className='grid grid grid-cols-[3fr_2fr_2fr]'> 
        <li className=''>
          COLLECTION
        </li>
        <li className='text-center'>FLOOR PRICE</li>
        <li className='text-center'>VOLUME</li>
       </div>
      </div>
      <div className='grid grid-cols-2 gap-y-20'>
      {
        trending.map((val, index) => {
      return <TableRow {...val} no={index} />
        })
      }
      </div>
    </div>
  )
}

export default Trending