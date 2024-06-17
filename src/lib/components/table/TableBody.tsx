import { FC } from "react";
import { cn } from "../../utils/cn";

interface Props {
  className?: string;
}

const TableBody: FC<Props> = ({ className }) => {
  return <div className={cn("", className)}>body</div>;
};

export default TableBody;
