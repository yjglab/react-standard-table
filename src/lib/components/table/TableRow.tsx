import { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}

const TableRow: FC<Props> = ({ children, className }) => {
  return <tr className={cn("gap-2 md:gap-0 h-10", className)}>{children}</tr>;
};
export default TableRow;
