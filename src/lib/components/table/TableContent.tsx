import { FC } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: React.ReactNode;
  itemAlign?: "left" | "center" | "right";
  className?: string;
}
const TableContent: FC<Props> = ({
  children,
  itemAlign = "left",
  className,
}) => {
  return (
    <td
      className={cn(
        "min-h-6",
        itemAlign === "left" && "justify-start",
        itemAlign === "center" && "justify-center",
        itemAlign === "right" && "justify-end",
        className
      )}
    >
      <>{children}</>
    </td>
  );
};
export default TableContent;
