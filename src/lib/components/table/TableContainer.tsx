import { FC } from "react";
import RowCountSelector from "../selector/RowCountSelector";
interface Props {}

const TableContainer: FC<Props> = ({}) => {
  return (
    <>
      <RowCountSelector countPerPage={10} />
    </>
  );
};
export default TableContainer;
