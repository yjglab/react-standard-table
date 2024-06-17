import { FC } from "react";
import RowCountSelector from "../selector/RowCountSelector";
import { cn } from "../../utils/cn";

interface Props {
  className?: string;
}
const TableOption: FC<Props> = ({ className = "" }) => {
  return (
    <div className={cn("bg-cyan-400 flex items-center justify-end", className)}>
      <RowCountSelector className="" countPerPage={10} />
    </div>
  );
};

export default TableOption;
