import { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children?: ReactNode;
  className?: string;
}

const TableBody: FC<Props> = ({ children, className }) => {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
};

export default TableBody;
