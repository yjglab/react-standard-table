import { FC } from "react";
import TableOption from "./TableOption";
import { cn } from "../../utils/cn";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface Props {
  className?: string;
}

const TableContainer: FC<Props> = ({ className = "" }) => {
  return (
    <div className={cn("w-full h-full bg-cyan-100", className)}>
      <TableOption />
      <TableHead />
      <TableBody />
    </div>
  );
};
export default TableContainer;
