import { FC, useState } from "react";
interface Props {
  onChange?: any;
  countPerPage: number;
  counts?: number[];
}
const RowCountSelector: FC<Props> = ({
  onChange,
  countPerPage,
  counts = [10, 25, 50],
}) => {
  const [triggered, setTriggered] = useState(true);

  return (
    <div onChange={onChange} className="bg-white/30 relative p-2 rounded-md">
      <h1>{countPerPage}</h1>
      {triggered && (
        <div className="absolute bg-red-200/60 rounded-md px-2 min-w-24">
          {counts.map((countValue) => (
            <div key={countValue}>{countValue}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default RowCountSelector;
