import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  data: {
    id: string;
    title: string;
    content: string;
    color: string;
    created_at: string;
  }[];
};

type FormInputs = {
  id: string;
};

function Note({ data }: Props) {
  const colorMap: { [key: string]: string } = {
    green: "#d6ffe9",
    lightpurple: "#bbc2e2",
    red: "#de6c83",
    darkpurple: "#7b72ac",
    yellow: "#fbd589",
  };

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
    // deleteNote(data);
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
              className={"border-2 border-gray p-4 rounded-md"}
              style={{ backgroundColor: backgroundColor }}
            >
              <h1 className="text-xl">{note.title}</h1>
              <p>{note.content}</p>
              <form method="delete" onSubmit={handleSubmit(onSubmit)}>
                <button type="submit">Delete</button>
                <input
                  defaultValue={note.id}
                  {...register("id")}
                  className="hidden"
                ></input>
              </form>
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
