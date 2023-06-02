import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function createSalesData(id, transaction, nftName, from, to, atm, status) {
  return { transaction, nftName, from, to, atm, status };
}

const SalesRows = [
  createSalesData(1, "buy", "JK94ejk8", "zac", "Rob", -500, "completed"),
  createSalesData(2, "sell", "jkcxs8jk4", "white", "Bill", 292, "pending"),
  createSalesData(3, "mint", "jkds8r4k", "bell", "josh", -648, "cancelled"),
];

const columns = [
  { id: "transaction", label: "Transaction", minWidth: 170 },
  { id: "NftName", label: "NFT name", minWidth: 100 },
  {
    id: "from",
    label: "From",
    // minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "to",
    label: "To",
    // minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "Amount",
    // minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    // minWidth: 140,
    align: "right",
  },
];

const RecentSalesTable = ({ RecentSalesTableRef, myNftTransaction }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { t } = useTranslation();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        ref={RecentSalesTableRef}
        sx={{ maxHeight: 440, minHeight: 270 }}
        className="px-10 py-5 bg-gray-100 rounded-3xl"
      >
        <Table stickyHeader aria-label="dashboard-table" className="rounded">
          <TableHead className="bg-gray-400 rounded">
            <TableRow className="rounded g-gray-400">
              {/* <TableCell className="text-2xl text-black border-none">
              Transaction
            </TableCell>
            <TableCell className="text-2xl text-black border-none">
              NFT name
            </TableCell>
            <TableCell className="text-2xl text-black border-none">
              From
            </TableCell>
            <TableCell className="text-2xl text-black border-none">
              To
            </TableCell>
            <TableCell className="text-2xl text-black border-none">
              Amount
            </TableCell>
            <TableCell className="text-2xl text-black border-none">
              Status
            </TableCell> */}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  className="text-2xl"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody className="">
            {myNftTransaction
              ?.filter(Boolean)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map(({ id, transaction, nft, From, to, amount, status }) => (
                <TableRow hover className="" key={id}>
                  <TableCell className="text-xl text-black capitalize">
                    {transaction}
                  </TableCell>
                  <TableCell className="text-xl text-black capitalize">
                    {nft?.name}
                  </TableCell>
                  <TableCell className="text-black text-xl">
                    {From.username}
                  </TableCell>
                  <TableCell className="text-black text-xl">
                    {to.username}
                  </TableCell>
                  <TableCell className="text-black text-xl">
                    {amount} ETH
                  </TableCell>

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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={myNftTransaction?.filter(Boolean).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};

export default RecentSalesTable;
