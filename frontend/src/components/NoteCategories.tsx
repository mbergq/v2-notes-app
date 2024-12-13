import { useSearchParams } from "react-router";

type Props = {
  data: {
    id: string;
    name: string;
  }[];
};

function NoteCategories({ data }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="w-16 mt-2">
      {data &&
        data.map((category) => (
          <button
            key={category.id}
            onClick={() =>
              setSearchParams({
                categoryId: category.id,
              })
            }
          >
            {category.name}
          </button>
        ))}
    </div>
  );
}

export default NoteCategories;
