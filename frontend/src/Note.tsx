import { useMutation, useQueryClient } from "@tanstack/react-query";
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

  const queryClient = useQueryClient();

  const { mutate: deleteNote } = useMutation({
    mutationKey: ["deleteNote"],
    mutationFn: async (data: FormInputs) => {
      const response = await fetch(`/api/delete-note`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
    deleteNote(data);
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
                />
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
