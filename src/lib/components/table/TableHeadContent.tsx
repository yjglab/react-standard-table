import { FC } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: React.ReactNode;
  itemAlign?: "left" | "center" | "right";
  className?: string;
}
const TableHeadContent: FC<Props> = ({
  children,
  itemAlign = "left",
  className,
}) => {
  return (
    <th
      className={cn(
        "min-h-6",
        itemAlign === "left" && "text-start",
        itemAlign === "center" && "text-center",
        itemAlign === "right" && "text-end",
        className
      )}
    >
      <>{children}</>
    </th>
  );
};
export default TableHeadContent;
