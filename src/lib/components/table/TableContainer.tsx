import { FC } from "react";
import TableOption from "./TableOption";
import { cn } from "../../utils/cn";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import Paginator from "../partials/Paginator";
import TableContent from "./TableContent";
import TableHeadContent from "./TableHeadContent";

const row1Items = [
  {
    id: "1",
    content: "1행1열",
  },
  {
    id: "2",
    content: (
      <div className="text-cyan-400">
        1행2열컴포넌트히히히히히히히히히히히히헤헤헤헤헤헤
      </div>
    ),
  },
  {
    id: "3",
    content: "1행3열",
  },
  {
    id: "4",
    content: <div className="text-red-400">1행4열컴포넌트</div>,
  },
];

const row2Items = [
  {
    id: "1",
    content: "2행1열",
  },
  {
    id: "2",
    content: <div className="text-cyan-400">2행2열컴포넌트헤헤헤</div>,
  },
  {
    id: "3",
    content: "3행3",
  },
  {
    id: "4",
    content: <div className="text-red-400">4행4열</div>,
  },
];

interface Props {
  headItems: any;
  data: any;
  className?: string;
}

const TableContainer: FC<Props> = ({ headItems, data, className = "" }) => {
  return (
    <div
      className={cn("w-full h-full py-4 px-3 rounded-md bg-white", className)}
    >
      <TableOption />
      <table className="table-auto w-full">
        <TableHead>
          <TableRow>
            {headItems.map((item: any) => (
              <TableHeadContent
                key={item.id}
                itemAlign={item.itemAlign}
                className="transition-all hover:bg-slate-100 rounded-md px-2"
              >
                {item.content}
              </TableHeadContent>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {row1Items.map((item: any) => (
              <TableContent
                key={item.id}
                itemAlign={item.itemAlign}
                className={item.className}
              >
                {item.content}
              </TableContent>
            ))}
          </TableRow>
          <TableRow>
            {row2Items.map((item: any) => (
              <TableContent
                key={item.id}
                itemAlign={item.itemAlign}
                className={item.className}
              >
                {item.content}
              </TableContent>
            ))}
          </TableRow>
        </TableBody>
      </table>
      <Paginator />
    </div>
  );
};
export default TableContainer;
