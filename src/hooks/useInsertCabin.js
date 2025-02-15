import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insert } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useInsertCabin(reset) {
  const queryClient = useQueryClient();
  const { isPending, mutate: createCabin } = useMutation({
    mutationFn: insert,
    onSuccess: () => {
      toast.success("Cabin inserted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); // resets the form
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, mutate: createCabin };
}
