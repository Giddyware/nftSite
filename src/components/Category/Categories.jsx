import React from 'react'

const lis = [
    "All",
    "Art",
    "Gaming",
    "Memberships",
    "PFPs",
    "Photography"
]


const Category = ({text}) => {
    return(
        <div className='white px-5 hover:bg-[grey] hover:pointer rounded-xl p-3'>
            {text}
        </div>
    )
}




const Categories = () => {
  return (
    <div className='px-5 flex gap-5 text-3xl mt-5 font-poppins text-white'>
        {lis.map((val) => {
            return <Category text={val}/>
        })}
    </div>
  )
}

export default Categories