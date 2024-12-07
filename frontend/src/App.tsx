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
  const [isVisible, setIsVisible] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/notes`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="h-24 border-b-2 border-b-border bg-main">Dashboard</div>
      <div className="min-h-dvh h-full flex bg-main">
        <div className="min-h-dvh h-full w-44 border-r-2 border-r-border flex flex-col">
          <div className="h-full ml-4 mt-4">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="border-2 border-border border-sky-600 w-fit p-1 text-xl"
            >
              new
            </button>
            {isVisible && <p>Modal</p>}
          </div>
        </div>
        {data !== null && <Note data={data} />}
      </div>
    </>
  );
}

export default App;
