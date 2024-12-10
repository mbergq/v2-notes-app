import { useEffect, useState } from "react";
import Note from "./Note";
import NoteModal from "./components/NoteModal";
import { Link, useParams } from "react-router";

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

  const { id } = useParams();
  const fetchDataOnCategory = async () => {
    if (id === undefined) {
      return;
    }
    console.log("Params id:", id);

    try {
      const response = await fetch(`api/notes-category/${id}`);
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
    fetchData();
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
    fetchData();
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
            <nav>
              <ul>
                <Link to={"/"} onClick={fetchData}>
                  <li>All</li>
                </Link>
                <Link
                  to={"/93c5e657-ac3f-4c29-8f8d-9647e573f43e"}
                  onClick={fetchDataOnCategory}
                >
                  <li>Shopping</li>
                </Link>
                <Link
                  to={"/541325c5-f05b-4899-8659-84df2844dcdc"}
                  onClick={fetchDataOnCategory}
                >
                  <li>To-do</li>
                </Link>
                <Link
                  to={"/90629a6b-9723-4101-a5be-48f950bf2e6a"}
                  onClick={fetchDataOnCategory}
                >
                  <li>Study</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        {data !== null && (
          <div className="grid grid-cols-3 grid-rows-3">
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
