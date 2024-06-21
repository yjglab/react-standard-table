import React, { useEffect, useState } from "react";
import TableContainer from "./lib/components/table/TableContainer";
import { useTableStore } from "./lib/contexts/table.store";

const headItems = [
  { id: "1", content: "abc" },
  { id: "2", content: "def" },
  { id: "3", content: "ghi" },
  { id: "4", content: "jkh" },
];

function App() {
  const [data, setData] = useState([]);
  const { setTotal } = useTableStore();
  // only test
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
      response.json().then((res) => {
        setData(res);
        setTotal(res.length);
      })
    );
  }, []);

  data && console.log(data);
  return (
    <div className="min-h-[400px]">
      <TableContainer headItems={headItems} data={data} />
    </div>
  );
}

export default App;
