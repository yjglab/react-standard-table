import { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface RowItem {
  id: string;
  content: string | ReactNode;
  width?: number;
  className?: string;
}

interface Props {
  items: RowItem[];
  className?: string;
  itemAlign?: "left" | "center" | "right";
}

const TableRow: FC<Props> = ({ items, className, itemAlign = "left" }) => {
  return (
    <div
      className={cn(
        "md:flex items-center grid grid-cols-3 gap-2 md:gap-0",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "min-h-6 flex items-center",
            `md:w-[${item.width || Math.floor(100 / items.length)}%]`,
            itemAlign === "left" && "justify-start",
            itemAlign === "center" && "justify-center",
            itemAlign === "right" && "justify-end",
            item.className
          )}
        >
          <>{item.content}</>
        </div>
      ))}
    </div>
  );
};
export default TableRow;
