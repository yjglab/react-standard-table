import { FC } from "react";
import { cn } from "../../utils/cn";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const TableContent: FC<Props> = ({ children, className }) => {
  return <div className={cn("", className)}>{children}</div>;
};
export default TableContent;
