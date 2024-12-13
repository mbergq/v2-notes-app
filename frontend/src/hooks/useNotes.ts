import { useQuery } from "@tanstack/react-query";

// type Data = [
//   {
//     id: string;
//     title: string;
//     content: string;
//     color: string;
//     created_at: string;
//   }
// ];

type Data = {
  notes: [
    {
      id: string;
      title: string;
      color: string;
      content: string;
      created_at: string;
    }
  ];
  categories: [{ id: string; name: string }];
};

export const useNotes = (filter: { categoryId?: string | null }) => {
  return useQuery({
    queryKey: ["notes", filter.categoryId],
    queryFn: async () => {
      const searchParamsForFetch = new URLSearchParams();

      if (filter.categoryId) {
        searchParamsForFetch.append("categoryId", filter.categoryId);
      }

      const response = await fetch(
        `/api/notes?${searchParamsForFetch.toString()}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: Data = await response.json();
      return result;
    },
  });
};
