import { FC } from "react";
import TableOption from "./TableOption";
import { cn } from "../../utils/cn";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";

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
  return (
    <div className={cn("w-full h-full p-3 rounded-md bg-white", className)}>
      <TableOption />
      <TableHead items={headItems} />
      <TableBody>
        <TableRow items={row1Items} />
      </TableBody>
    </div>
  );
};
export default TableContainer;
