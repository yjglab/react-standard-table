import { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children?: ReactNode;
  className?: string;
}

const TableBody: FC<Props> = ({ children, className }) => {
  return <tbody className={cn("divide-y", className)}>{children}</tbody>;
};

export default TableBody;
