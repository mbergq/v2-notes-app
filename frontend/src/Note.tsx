import { useDeleteNote } from "./hooks/useDeleteNote";

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
              className={"border-2 border-gray p-4 rounded-md"}
            >
              <h1 className="text-xl">{note.title}</h1>
              <p>{note.content}</p>
              <button onClick={() => deleteNote(note.id)} type="button">
                Delete
              </button>
            </div>
          );
        })}
      {data.length === 0 && (
        <h1 className="text-lg ml-8 mt-8">
          No notes related to this category..
        </h1>
      )}
    </>
  );
}

export default Note;
