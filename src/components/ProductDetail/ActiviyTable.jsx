import React from 'react'

const activities = [
    {
        transfer: "Transfer",
        price: "$2.680",
        from: "pcs",
        to: "philipi",
        date: "2 hourse ago"
    },
    {
        transfer: "Transfer",
        price: "$2.680",
        from: "pcs",
        to: "philipi",
        date: "2 hourse ago"
    },
    {
        transfer: "Transfer",
        price: "$2.680",
        from: "pcs",
        to: "philipi",
        date: "2 hourse ago"
    },
    {
        transfer: "Transfer",
        price: "$2.680",
        from: "pcs",
        to: "philipi",
        date: "2 hourse ago"
    },{
        transfer: "Transfer",
        price: "$2.680",
        from: "pcs",
        to: "philipi",
        date: "2 hourse ago"
    },
]



const ActiviyRole = ({tansfer, price, from, to, date}) => {
    return (
        <div className='grid grid-cols-5 border-y-solid border-y-[#eee] border-y-[1px] p-6'>
            <div >
                {tansfer}
            </div>
            <div>
                {price}
            </div>
            <div className='text-blue-500'>
                {from}
            </div>
            <div className='text-blue-500'>
                {to}
            </div>
            <div>
                {date}
            </div>
        </div>
    )
}



const ActiviyTable = () => {
  return (
    <div>
        <div className='grid grid-cols-5'>
            <div>Event </div>
            <div>Price </div>
            <div>From </div>
            <div>To </div>
            <div>Date </div>
        </div>

        <div className='bg-blue-50 px-5'>
            {activities.map(act => <ActiviyRole {...act}/>)}
        </div>
    </div>
  )
}

export default ActiviyTable