import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";
import { iconStyle } from "../../configs/style";
import { cn } from "../../utils/cn";

interface Props {
  total: number;
  page: number;
  rowsPerPage: number;
  handlePagination: (direction: "prev" | "next", dest?: number) => void;
  className?: string;
}

const Paginator: FC<Props> = ({
  total,
  className,
  page,
  rowsPerPage,
  handlePagination,
}) => {
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
      <div className="text-sm min-w-20 flex items-center">
        <span className="min-w-12 text-center">
          {String(total > 0 ? (page - 1) * rowsPerPage + 1 : 0).padStart(
            String(total).length,
            "0"
          )}
          -{total > page * rowsPerPage ? page * rowsPerPage : total}
        </span>
        of <span className="min-w-6 text-center">{total}</span>
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
