import { FC } from "react";
import { cn } from "../../utils/cn";
import RowCountSelector from "../partials/RowCountSelector";

interface Props {
  className?: string;
}
const TableOption: FC<Props> = ({ className = "" }) => {
  return (
    <div className={cn("flex items-center justify-end", className)}>
      <RowCountSelector className="" />
    </div>
  );
};

export default TableOption;
