import { SubmitHandler, useForm } from "react-hook-form";
import { XCircle } from "react-feather";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  onClick: () => void;
};

type FormInputs = {
  title: string;
  content: string;
  color: string;
  categoryId: string;
};

function NoteModal({ onClick }: Props) {
  const queryClient = useQueryClient();

  const { mutate: addNote } = useMutation({
    mutationKey: ["newNote"],
    mutationFn: async (data: FormInputs) => {
      const response = await fetch(`/api/notes`, {
        method: "POST",
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

    addNote(data);
    onClick();
  };

  return (
    <div className="min-h-dvh h-full flex justify-center items-center">
      <div className="w-1/3 h-fit bg-main border-2 border-gray rounded-md">
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col my-4 mx-4"
        >
          <button
            onClick={onClick}
            className="self-end text-gray"
            id="closeButton"
          >
            <XCircle color="grey" size={28} />
          </button>

          <input
            {...register("title")}
            className="w-fit rounded-sm text-gray"
            id="title"
          />
          <div>
            <label htmlFor="shopping">Shopping</label>
            <input
              type="radio"
              {...register("categoryId")}
              value="shopping"
              name="categoryId"
            />
            <label htmlFor="shopping">To-do</label>
            <input
              type="radio"
              {...register("categoryId")}
              value="to-do"
              name="categoryId"
            />
            <label htmlFor="shopping">Study</label>
            <input
              type="radio"
              {...register("categoryId")}
              value="study"
              name="categoryId"
            />
          </div>
          <div className="w-fit h-fit my-1">
            <input
              type="radio"
              {...register("color")}
              value="green"
              name="color"
              className="accent-green"
            />
            <input
              type="radio"
              {...register("color")}
              value="lightpurple"
              name="color"
              className="accent-lightpurple"
            />
            <input
              type="radio"
              {...register("color")}
              value="red"
              name="color"
              className="accent-red"
            />
            <input
              type="radio"
              {...register("color")}
              value="darkpurple"
              name="color"
              className="accent-darkpurple"
            />
            <input
              type="radio"
              {...register("color")}
              value="yellow"
              name="color"
              className="accent-yellow"
            />
          </div>
          <textarea
            {...register("content")}
            className="h-60 mb-5 resize-none rounded-md text-gray"
          />
          <button
            type="submit"
            className="border w-fit p-2 self-start text-sm text-gray rounded-sm"
          >
            Add note
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteModal;
