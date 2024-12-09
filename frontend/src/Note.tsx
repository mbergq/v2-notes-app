type Props = {
  data: {
    notes: {
      id: string;
      title: string;
      content: string;
      color: string;
      created_at: string;
    }[];
  };
};

function Note({ data }: Props) {
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
        data.notes.map((note) => {
          const backgroundColor = colorMap[note.color] || "#d1d5db";
          return (
            <div
              data-cy="note-wrapper"
              id={note.id}
              key={note.id}
              className={
                "border-2 border-gray min-h-72 h-fit p-4 ml-6 mt-6 rounded-md"
              }
              style={{ backgroundColor: backgroundColor }}
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
