import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insert } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin(reset) {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => insert(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin inserted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); // resets the form
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending: isCreating, mutate: editCabin };
}
