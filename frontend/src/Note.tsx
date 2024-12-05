type Props = {
  data: {
    notes: {
      id: string;
      title: string;
      content: string;
      background_color_id: number;
      created_at: string;
    }[];
  };
};

function Note({ data }: Props) {
  return (
    <>
      {data &&
        data.notes.map((note) => {
          return (
            <div
              data-cy="note-wrapper"
              id={note.id}
              key={note.id}
              className="border-2 min-h-72 h-fit p-4 w-72 ml-6 mt-6"
            >
              <button>Delete</button>
              <h1 className="text-xl">{note.title}</h1>
              <p>{note.content}</p>
            </div>
          );
        })}
    </>
  );
}

export default Note;
