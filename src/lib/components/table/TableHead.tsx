import { FC } from "react";
import { cn } from "../../utils/cn";

interface Props {
  className?: string;
}

const TableHead: FC<Props> = ({ className }) => {
  return <div className={cn("", className)}>head</div>;
};

export default TableHead;
