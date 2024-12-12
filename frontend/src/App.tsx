import { useState } from "react";
import Note from "./Note";
import NoteModal from "./components/NoteModal";
import { useSearchParams, Link } from "react-router";
import { useNotes } from "./hooks/useNotes";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const { data, isLoading } = useNotes({
    categoryId: categoryId,
  });

  const triggerModal = () => {
    setIsVisible(!isVisible);
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
              onClick={triggerModal}
              className="border-2 border-gray w-fit p-1 text-xl text-gray"
            >
              new
            </button>
            <div className="flex flex-col underline mt-8">
              <Link to="/">All</Link>
              <button
                className="self-start"
                onClick={() =>
                  setSearchParams({
                    categoryId: "93c5e657-ac3f-4c29-8f8d-9647e573f43e",
                  })
                }
              >
                Shopping
              </button>
              <button
                className="self-start"
                onClick={() =>
                  setSearchParams({
                    categoryId: "541325c5-f05b-4899-8659-84df2844dcdc",
                  })
                }
              >
                To-do
              </button>
              <button
                className="self-start"
                onClick={() =>
                  setSearchParams({
                    categoryId: "90629a6b-9723-4101-a5be-48f950bf2e6a",
                  })
                }
              >
                Study
              </button>
            </div>
          </div>
        </div>
        {isLoading && "Loading.."}
        {data && (
          <div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4"
            id="notes-layout"
          >
            <Note data={data} />
          </div>
        )}
      </div>
      {isVisible && (
        <div className="fixed w-full h-full top-0 left-0 flex-1 justify-center items-center">
          <NoteModal onClick={triggerModal} />
        </div>
      )}
    </>
  );
}

export default App;
