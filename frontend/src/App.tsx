import { useEffect, useState } from "react";
import Note from "./Note";
import NoteModal from "./components/NoteModal";
import { useSearchParams, Link } from "react-router";

type Data = [
  {
    id: string;
    title: string;
    content: string;
    color: string;
    created_at: string;
  }
];

function App() {
  const [data, setData] = useState<null | Data>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const fetchAllNotes = async () => {
    const searchParamsForFetch = new URLSearchParams();

    if (categoryId) {
      searchParamsForFetch.append("categoryId", categoryId);
    }

    try {
      const response = await fetch(`/api/notes?${searchParams.toString()}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllNotes();
  }, [searchParams]);

  const handleClick = () => {
    setIsVisible(!isVisible);
    fetchAllNotes();
  };

  return (
    <>
      <div className="h-24 border-b-2 border-b-gray bg-main">Dashboard</div>
      <div
        className={`min-h-dvh h-full flex bg-main ${isVisible && "opacity-40"}`}
      >
        <div className="min-h-dvh h-full w-44 border-r-2 border-r-gray flex flex-col">
          <div className="h-full ml-4 mt-4">
            <button
              onClick={handleClick}
              className="border-2 border-gray w-fit p-1 text-xl text-gray"
            >
              new
            </button>
            <nav className="mt-8 underline">
              <Link to="/">All</Link>
              <button
                onClick={() =>
                  setSearchParams({
                    categoryId: "93c5e657-ac3f-4c29-8f8d-9647e573f43e",
                  })
                }
              >
                Shopping
              </button>
            </nav>
          </div>
        </div>
        {data !== null && (
          <div className="grid grid-cols-3 gap-6 p-6" id="notes-layout">
            <Note data={data} />
          </div>
        )}
      </div>
      {isVisible && (
        <div className="fixed w-full h-full top-0 left-0 flex-1 justify-center items-center">
          <NoteModal onClick={handleClick} />
        </div>
      )}
    </>
  );
}

export default App;
