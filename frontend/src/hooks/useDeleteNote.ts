import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-note"],
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};
