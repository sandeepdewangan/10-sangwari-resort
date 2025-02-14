import { useMutation, useQueryClient } from "@tanstack/react-query";
import { save } from "../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isPending: isFormSavingPending, mutate: saveSettings } = useMutation({
    mutationFn: save,
    onSuccess: () => {
      toast.success("Save changes successfully made to database.");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => toast(error.message),
  });
  return { isFormSavingPending, saveSettings };
}
