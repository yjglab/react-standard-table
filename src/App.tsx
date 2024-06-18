import React, { useEffect, useState } from "react";
import TableContainer from "./lib/components/table/TableContainer";

const headItems = [
  { id: "1", content: "abc" },
  { id: "2", content: "def" },
  { id: "3", content: "ghi" },
  { id: "4", content: "jkh" },
];

const row1Items = [
  {
    id: "1",
    content: "1행1열",
  },
  {
    id: "2",
    content: <div className="text-cyan-400">1행2열컴포넌트</div>,
    className: "col-span-3",
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

function App() {
  const [data, setData] = useState([]);

  // only test
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
      response.json().then((res) => setData(res))
    );
  }, []);

  data && console.log(data);
  return (
    <div className="min-h-[400px]">
      <TableContainer headItems={headItems} data={} />
    </div>
  );
}

export default App;
