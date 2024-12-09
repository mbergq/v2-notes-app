import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  title: string;
  content: string;
  color: string;
};

function NoteModal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <div className="min-h-dvh h-full flex justify-center items-center">
      <div className="w-2/3 h-full bg-main">
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col my-4 mx-4"
        >
          <button className="self-end mr-1 text-gray">X</button>
          <input
            defaultValue="Title.."
            {...register("title")}
            className="w-fit rounded-sm text-gray"
          />
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
            className="h-60 mb-5 resize-none rounded-md"
          />
          <button
            type="submit"
            className="border w-fit p-2 self-start text-sm text-gray"
          >
            Add note
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteModal;
