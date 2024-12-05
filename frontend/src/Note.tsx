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
  console.log(data);
  return (
    <>
      {data &&
        data.notes.map((note) => {
          return (
            <div data-cy="note-wrapper" id={note.id} key={note.id}>
              <button>Delete</button>
              <p>{note.title}</p>
              <p>{note.content}</p>
            </div>
          );
        })}
    </>
  );
}

export default Note;
