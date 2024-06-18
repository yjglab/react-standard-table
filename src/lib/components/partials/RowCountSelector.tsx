import { FC, useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { Check, ChevronDown } from "lucide-react";
import { iconStyle } from "../../configs/style";

interface Props {
  rowsPerPage: number;
  handleRowsPerPage: (rows: number) => void;
  counts?: number[];
  defaultValue?: number;
  className?: string;
}
const RowCountSelector: FC<Props> = ({
  rowsPerPage,
  handleRowsPerPage,
  counts = [10, 25, 50],
  defaultValue = rowsPerPage,
  className = "",
}) => {
  const [selected, setSelected] = useState(defaultValue);
  const [triggered, setTriggered] = useState(false);

  const handleClickOption = (countValue: number) => {
    setSelected(countValue);
    handleRowsPerPage(countValue);
  };
  useEffect(() => {
    setTriggered(false);
  }, [selected]);

  return (
    <div
      onMouseLeave={() => setTriggered(false)}
      className={cn("relative max-w-16 text-sm", className)}
    >
      <button
        onMouseOver={() => setTriggered(true)}
        className="w-full h-full flex items-center space-x-3 bg-white text-slate-700 px-2 py-1.5 rounded-md \
      transition-all hover:bg-slate-100"
      >
        <ChevronDown
          size={iconStyle.size}
          strokeWidth={iconStyle.strokeWidth}
          className={cn(
            "transition-all",
            triggered ? "transform rotate-180 will-change-transform" : ""
          )}
        />
        <span>{selected}</span>
      </button>
      <div
        className={cn(
          "absolute min-w-24 opacity-0",
          "transition-all duration-200 right-0",
          triggered && "opacity-100"
        )}
      >
        <div className="w-full h-full shadow-md ring-1 ring-slate-50 flex flex-col space-y-1 py-1 relative top-1 bg-white rounded-md px-1 ">
          {counts.map((countValue) => (
            <button
              key={countValue}
              disabled={!triggered}
              onClick={() => handleClickOption(countValue)}
              className={cn(
                "flex items-center w-full px-2.5 justify-between py-1.5 text-left hover:bg-slate-100 rounded-md"
              )}
            >
              <span>{countValue}</span>
              {selected === countValue && (
                <Check
                  size={iconStyle.size}
                  strokeWidth={iconStyle.strokeWidth}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RowCountSelector;
