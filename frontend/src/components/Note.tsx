import { useDeleteNote } from "../hooks/useDeleteNote";

type Props = {
  data: {
    id: string;
    title: string;
    content: string;
    color: string;
    created_at: string;
  }[];
};

function Note({ data }: Props) {
  const { mutate: deleteNote } = useDeleteNote();

  const colorMap: { [key: string]: string } = {
    green: "#d6ffe9",
    lightpurple: "#bbc2e2",
    red: "#de6c83",
    darkpurple: "#7b72ac",
    yellow: "#fbd589",
  };

  return (
    <>
      {data &&
        data.map((note) => {
          const backgroundColor = colorMap[note.color] || "#d1d5db";
          return (
            <div
              data-cy="note-wrapper"
              id={note.id}
              key={note.id}
              style={{ backgroundColor: backgroundColor }}
              className={
                "border-2 border-gray p-4 rounded-md flex flex-col flex-wrap"
              }
            >
              <div className="flex justify-between">
                <h1 className="text-xl">{note.title}</h1>
                <button
                  onClick={() => deleteNote(note.id)}
                  type="button"
                  className="hover:bg-gray border rounded-md p-1 w-fit text-sm"
                >
                  Delete
                </button>
              </div>
              <p className="w-72">{note.content}</p>
            </div>
          );
        })}
      {data.length === 0 && (
        <h1 id="no-note-msg" className="text-lg ml-5 mt-5">
          No notes related to this category..
        </h1>
      )}
    </>
  );
}

export default Note;
