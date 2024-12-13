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
              {data &&
                data.categories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() =>
                        setSearchParams({ categoryId: category.id })
                      }
                    >
                      {category.name}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {isLoading && "Loading.."}
        {data && (
          <div
            className="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 gap-4 p-4"
            id="notes-layout"
          >
            <Note data={data.notes} />
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
