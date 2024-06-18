import { FC, useState } from "react";
import TableOption from "./TableOption";
import { cn } from "../../utils/cn";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import Paginator from "../partials/Paginator";

interface Props {
  className?: string;
}

const headItems = [
  { id: "1", content: "abc" },
  { id: "2", content: "def" },
  { id: "3", content: "ghi" },
  { id: "4", content: "jkh" },
];

const row1Items = [
  {
    id: "1",
    content: "1행1열",
  },
  {
    id: "2",
    content: <div className="text-cyan-400">1행2열컴포넌트</div>,
    className: "col-span-3",
  },
  {
    id: "3",
    content: "1행3열",
  },
  {
    id: "4",
    content: <div className="text-red-400">1행4열컴포넌트</div>,
  },
];

const TableContainer: FC<Props> = ({ className = "" }) => {
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
