import { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

type HeadItem = { content: string | ReactNode; width?: number };

interface Props {
  items: HeadItem[];
  className?: string;
  itemAlign?: "left" | "center" | "right";
}
const TableHead: FC<Props> = ({ items, className, itemAlign = "left" }) => {
  return (
    <div
      className={cn(
        "text-sm w-full mt-2 hidden md:flex pb-2 mb-2 border-b",
        className
      )}
    >
      {items.map((item: any) => (
        <div
          key={item.content}
          className={cn(
            `md:w-[${item.width || Math.floor(100 / items.length)}%]`,
            itemAlign === "left" && "text-left",
            itemAlign === "center" && "text-center",
            itemAlign === "right" && "text-right"
          )}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};
export default TableHead;
