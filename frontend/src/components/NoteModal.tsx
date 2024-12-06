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
      <div className="w-2/3 h-96 bg-lightpurple">
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col my-4 mx-4"
        >
          <button>X</button>
          <div className="w-fit h-fit">
            <input
              defaultValue="title"
              {...register("title")}
              className="w-full"
            />
            <input
              type="radio"
              {...register("color")}
              className="self-start"
              value="green"
              name="color"
            />
            <input
              type="radio"
              {...register("color")}
              className="self-start"
              value="lightpurple"
              name="color"
            />
            <input
              type="radio"
              {...register("color")}
              className="self-start"
              value="red"
              name="color"
            />
            <input
              type="radio"
              {...register("color")}
              className="self-start"
              value="darkpurple"
              name="color"
            />
            <input
              type="radio"
              {...register("color")}
              className="self-start"
              value="yellow"
              name="color"
            />
          </div>
          <input
            type="textarea"
            defaultValue="content"
            {...register("content")}
            className="h-60"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NoteModal;
