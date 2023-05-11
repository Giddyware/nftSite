import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function createSalesData(id, transaction, nftName, from, to, atm, status) {
  return { transaction, nftName, from, to, atm, status };
}

const SalesRows = [
  createSalesData(1, "buy", "JK94ejk8", "zac", "Rob", -500, "completed"),
  createSalesData(2, "sell", "jkcxs8jk4", "white", "Bill", 292, "pending"),
  createSalesData(3, "mint", "jkds8r4k", "bell", "josh", -648, "cancelled"),
];

const RecentSalesTable = ({ RecentSalesTableRef }) => {

  const {t} = useTranslation()

  return (
    <TableContainer
      ref={RecentSalesTableRef}
      className="px-10 py-5 bg-gray-100 rounded-3xl"
    >
      <Table aria-label="dashboard-table" className="rounded">
        <TableHead className="bg-gray-400 rounded ">
          <TableRow className="rounded">
            <TableCell className="text-xl text-black border-none">
              Transaction
            </TableCell>
            <TableCell className="text-xl text-black border-none">NFT name</TableCell>
            <TableCell className="text-xl text-black border-none">From</TableCell>
            <TableCell className="text-xl text-black border-none">To</TableCell>
            <TableCell className="text-xl text-black border-none">Amount</TableCell>
            <TableCell className="text-xl text-black border-none">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className="">
          {SalesRows.map(
            ({ id, transaction, nftName, from, to, atm, status }) => (
              <TableRow className="" key={id}>
                <TableCell className="text-xl text-black capitalize">
                  {transaction}
                </TableCell>
                <TableCell className="text-xl text-black capitalize">
                  {nftName}
                </TableCell>
                <TableCell className="text-black">{from}</TableCell>
                <TableCell className="text-black">{to}</TableCell>
                <TableCell className="text-black">{atm} ETH</TableCell>

                <TableCell
                  className={`capitalize text-xl ${
                    status === "pending"
                      ? "text-[hsla(28,_87%,_62%,_1)]"
                      : status === "completed"
                      ? "text-[hsla(84,_100%,_44%,_1)]"
                      : status === "cancelled"
                      ? "text-[hsla(0,_79%,_63%,_1)]"
                      : "undefined"
                  }`}
                >
                  {status}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentSalesTable;
