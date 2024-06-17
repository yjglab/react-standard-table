import { FC, useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { ChevronDown } from "lucide-react";
import { iconStyle } from "../../configs/style";

interface Props {
  countPerPage: number;
  counts?: number[];
  defaultValue?: number;
}
const RowCountSelector: FC<Props> = ({
  countPerPage,
  counts = [10, 25, 50],
  defaultValue = countPerPage,
}) => {
  const [selected, setSelected] = useState(defaultValue);
  const [triggered, setTriggered] = useState(true);

  useEffect(() => {}, [selected]);

  return (
    <div
      onMouseLeave={() => setTriggered(false)}
      className={cn("relative text-center max-w-16 text-sm")}
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
            triggered ? "transform rotate-180" : ""
          )}
        />
        <span>{selected}</span>
      </button>
      <div
        className={cn(
          "absolute min-w-24 left-0 opacity-0",
          "transition-all duration-200",
          triggered && "opacity-100"
        )}
      >
        <div className="w-full h-full flex flex-col space-y-1 py-1 relative top-1 bg-white rounded-md px-1 ">
          {counts.map((countValue) => (
            <button
              key={countValue}
              onClick={() => setSelected(countValue)}
              className={cn("py-0.5", "hover:bg-slate-100 rounded-md")}
            >
              {countValue}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RowCountSelector;
