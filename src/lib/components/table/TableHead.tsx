import { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}
const TableHead: FC<Props> = ({ children, className }) => {
  return (
    <thead className={cn("text-sm w-full border-b mb-10", className)}>
      {children}
    </thead>
  );
};
export default TableHead;
