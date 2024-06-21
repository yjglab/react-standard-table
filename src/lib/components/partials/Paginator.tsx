import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";
import { iconStyle } from "../../configs/style";
import { cn } from "../../utils/cn";
import { useTableStore } from "../../contexts/table.store";

interface Props {
  className?: string;
}

const Paginator: FC<Props> = ({ className }) => {
  const { page, rowsPerPage, total, setPage } = useTableStore();
  const handlePagination = (direction: "prev" | "next", dest?: number) => {
    if (dest) {
      setPage(dest);
    } else {
      if (direction === "prev" && page > 1) {
        setPage(page - 1);
      } else if (direction === "next" && page * rowsPerPage < total) {
        setPage(page + 1);
      }
    }
  };

  return (
    <div
      className={cn(
        "w-full flex justify-center items-center space-x-2 mt-6",
        className
      )}
    >
      <button
        type="button"
        className="px-1 py-0 disabled:text-slate-400"
        disabled={page === 1}
        onClick={() => handlePagination("prev")}
      >
        <ChevronLeft
          size={iconStyle.size}
          strokeWidth={iconStyle.strokeWidth}
        />
      </button>
      <div className="text-sm min-w-20 flex items-center space-x-1">
        <span className="w-6 text-center font-semibold">
          {total > 0 ? (page - 1) * rowsPerPage + 1 : 0}
        </span>
        <span>-</span>
        <span className="w-6 text-center font-semibold">
          {total > page * rowsPerPage ? page * rowsPerPage : total}
        </span>
        <span>of</span>
        <span className="w-6 text-center font-semibold">{total}</span>
      </div>
      <button
        type="button"
        className="px-1 py-0 disabled:text-slate-400"
        disabled={total <= page * rowsPerPage}
        onClick={() => handlePagination("next")}
      >
        <ChevronRight
          size={iconStyle.size}
          strokeWidth={iconStyle.strokeWidth}
        />
      </button>
    </div>
  );
};
export default Paginator;
