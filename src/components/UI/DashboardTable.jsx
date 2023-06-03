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
import { useTranslation } from "react-i18next";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { formatDate } from "../../utils/formatDate";
import { useState } from "react";

function createTransactionData(id, transaction, atm, date, status) {
  return { transaction, atm, date, status };
}

const transactionRows = [
  createTransactionData(1, "deposit", 5, 2, "completed"),
  createTransactionData(2, "withdrawal", -4, 2, "pending"),
  createTransactionData(3, "mint", -2, 5, "cancelled"),
];

const DashboardTable = ({ wallet }) => {
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
    <Paper sx={{ width: "100%", overflow: "hidden", minHeight: 270 }}>
      <TableContainer
        sx={{ maxHeight: 440 }}
        className="px-10 py-5 bg-gray-100 rounded-3xl"
      >
        <Table stickyHeader aria-label="dashboard-table" className="rounded">
          <TableHead className="bg-gray-400 rounded">
            <TableRow className="rounded g-gray-400">
              <TableCell className="text-2xl text-black border-none">
                {t("dashboard.transaction")}
                {/* Transaction */}
              </TableCell>
              <TableCell className="text-2xl text-black border-none">
                Amount
              </TableCell>
              <TableCell className="text-2xl text-black border-none">
                Date
              </TableCell>
              <TableCell className="text-2xl text-black border-none">
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="">
            {wallet?.transactions?.map(
              ({ id, transaction, amount, date, status }) => (
                <TableRow hover className="" key={id}>
                  <TableCell className="text-xl text-black capitalize">
                    {transaction === "withdraw" || transaction === "mint" ? (
                      <div className="flex gap-x-3">
                        <BsArrowUpRight color="hsla(0, 79%, 63%, 1)" />
                        {transaction}
                      </div>
                    ) : transaction === "deposite" ? (
                      <div className="flex gap-x-3">
                        <BsArrowDownLeft color="hsla(84, 100%, 44%, 1)" />
                        {transaction.slice(0, -1)}
                      </div>
                    ) : (
                      "undefined"
                    )}
                  </TableCell>
                  <TableCell className="text-xl text-black">
                    {amount} ETH
                  </TableCell>
                  <TableCell className="text-xl text-black">
                    {formatDate(date)}
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
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={wallet && wallet.transactions?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};

export default DashboardTable;
