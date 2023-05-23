import React from "react";
import { TbArrowsExchange } from "react-icons/tb";

const activities = [
  {
    transaction: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "philip",
    date: "2 hours ago",
  },
  {
    transaction: "Sale",
    price: "$2.680",
    from: "pcs",
    to: "Dave",
    date: "2 hours ago",
  },
  {
    transaction: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "sSam",
    date: "2 hours ago",
  },
  {
    transaction: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "Derick",
    date: "1 hours ago",
  },
  {
    transaction: "Transfer",
    price: "$2.680",
    from: "pcs",
    to: "philip",
    date: "2 hours ago",
  },
];

const ActivityRole = ({ transaction, price, from, to, date }) => {
  return (
    <tr className="overflow-auto bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <p className="flex items-center gap-2">
          <TbArrowsExchange size={18} />
          <span>{transaction}</span>
        </p>
      </th>
      <td className="px-6 py-4 font-semibold">{price}</td>
      <td className="px-6 py-4 text-blue-400">{from}</td>
      <td className="px-6 py-4 text-blue-400">{from}</td>
      <td className="px-6 py-4">{date}</td>
    </tr>
  );
};

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
        <tbody className="">
          {activities.map((act) => (
            <ActivityRole {...act} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
