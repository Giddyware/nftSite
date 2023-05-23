import React from "react";

const activities = [
  {
    transfer: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "philip",
    date: "2 hours ago",
  },
  {
    transfer: "Sale",
    price: "$2.680",
    from: "pcs",
    to: "Dave",
    date: "2 hours ago",
  },
  {
    transfer: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "sSam",
    date: "2 hours ago",
  },
  {
    transfer: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "Derick",
    date: "1 hours ago",
  },
  {
    transfer: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "philip",
    date: "2 hours ago",
  },
];

// const ActiviyRole = ({ transfer, price, from, to, date }) => {
//   return (
//     <div className="grid grid-cols-5 border-y-solid border-y-[#eee] border-y p-6">
//       <div>{transfer}</div>
//       <div>{price}</div>
//       <div className="text-blue-500">{from}</div>
//       <div className="text-blue-500">{to}</div>
//       <div className="text-blue-500">{date}</div>
//     </div>
//   );
// };

// const ActiviyTable = () => {
//   return (
//     <div>
//       <div className="grid justify-around grid-cols-5">
//         <div>Event </div>
//         <div>Price </div>
//         <div>From </div>
//         <div>To </div>
//         <div>Date </div>
//       </div>

//       <div className="bg-blue[#FBFDFF] px-5">
//         {activities.map((act) => (
//           <ActiviyRole {...act} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActiviyTable;

const ActivityTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-6">
              Event
            </th>
            <th scope="col" className="px-6 py-6">
              Price
            </th>
            <th scope="col" className="px-6 py-6">
              From
            </th>
            <th scope="col" className="px-6 py-6">
              To
            </th>
            <th scope="col" className="px-6 py-6">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Transfer
            </th>
            <td className="px-6 py-4"> </td>
            <td className="px-6 py-4">Dave</td>
            <td className="px-6 py-4">Samson</td>
            <td className="px-6 py-4">2 hours ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
