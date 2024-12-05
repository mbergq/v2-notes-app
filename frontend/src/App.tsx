import { useEffect, useState } from "react";
import Note from "./Note";
interface Data {
  notes: [
    {
      id: string;
      title: string;
      content: string;
      background_color_id: number;
      created_at: string;
    }
  ];
}

function App() {
  const [data, setData] = useState<null | Data>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/notes`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      setData(result);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="h-24 border-b">Dashboard</div>
      <div className="min-h-dvh h-full flex">
        <div className="min-h-dvh h-full w-44 border-r">Note tools</div>
        {data !== null && <Note data={data} />}
      </div>
    </>
  );
}

export default App;
