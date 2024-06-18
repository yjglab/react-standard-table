import { FC, useEffect, useState } from "react";
import TableOption from "./TableOption";
import { cn } from "../../utils/cn";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import Paginator from "../partials/Paginator";

interface Props {
  headItems: any;
  data: any;
  className?: string;
}

const TableContainer: FC<Props> = ({ headItems, data, className = "" }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const total = 30; // data.length

  const handleRowsPerPage = (rows: number) => {
    setRowsPerPage(rows);
  };

  const handlePagination = (direction: "prev" | "next", dest?: number) => {
    if (dest) {
      setPage(dest);
    } else {
      if (direction === "prev" && page > 1) {
        setPage((prev) => prev - 1);
      } else if (direction === "next" && page * rowsPerPage < total) {
        setPage((prev) => prev + 1);
      }
    }
  };

  return (
    <div
      className={cn("w-full h-full py-4 px-3 rounded-md bg-white", className)}
    >
      <TableOption
        rowsPerPage={rowsPerPage}
        handleRowsPerPage={handleRowsPerPage}
      />
      <TableHead items={headItems} />
      <TableBody>
        <TableRow items={row1Items} />
      </TableBody>
      <Paginator
        total={total}
        page={page}
        rowsPerPage={rowsPerPage}
        handlePagination={handlePagination}
      />
    </div>
  );
};
export default TableContainer;
