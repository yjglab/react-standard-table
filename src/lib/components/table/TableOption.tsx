import { FC } from "react";
import { cn } from "../../utils/cn";
import RowCountSelector from "../partials/RowCountSelector";

interface Props {
  rowsPerPage: number;
  handleRowsPerPage: (rows: number) => void;
  className?: string;
}
const TableOption: FC<Props> = ({
  rowsPerPage,
  handleRowsPerPage,
  className = "",
}) => {
  return (
    <div className={cn("flex items-center justify-end", className)}>
      <RowCountSelector
        className=""
        rowsPerPage={rowsPerPage}
        handleRowsPerPage={handleRowsPerPage}
      />
    </div>
  );
};

export default TableOption;
