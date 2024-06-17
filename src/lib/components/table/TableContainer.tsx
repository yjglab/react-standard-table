import { FC } from "react";
import TableOption from "./TableOption";
import { cn } from "../../utils/cn";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface Props {
  className?: string;
}

const testItems = [
  { label: "abc", width: 25 },
  { label: "def", width: 10 },
  { label: "ghi", width: 30 },
];
const TableContainer: FC<Props> = ({ className = "" }) => {
  return (
    <div className={cn("w-full h-full bg-cyan-100 p-3 rounded-md", className)}>
      <TableOption />
      <TableHead items={testItems} />
      <TableBody />
    </div>
  );
};
export default TableContainer;
