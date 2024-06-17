import { FC } from "react";
import { cn } from "../../utils/cn";
import HeadItem from "./HeadItem";

type HeadItem = { label: string; width: number };

interface Props {
  items: HeadItem[];
  className?: string;
}
const TableHead: FC<Props> = ({ items, className }) => {
  return (
    <div
      className={cn(
        "text-sm w-full mt-2 hidden md:flex pb-2 mb-2 border-b",
        className
      )}
    >
      {items.map((item: any) => (
        <HeadItem key={item.label} item={item} />
      ))}
    </div>
  );
};
export default TableHead;
