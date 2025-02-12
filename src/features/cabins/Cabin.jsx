import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const Cabin = ({ cabin }) => {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <tbody key={cabin.id}>
      <tr className="hover:bg-slate-50">
        <td className="p-2">
          <p className="text-sm font-bold">{cabin.name}</p>
        </td>
        <td className="p-2">
          <p className="text-sm">{cabin.maxCapacity}</p>
        </td>
        <td className="p-2">
          <p className="text-sm">{cabin.regularPrice}</p>
        </td>
        <td className="p-2">
          <p className="text-sm">{cabin.discount}</p>
        </td>
        <td className="p-2">
          <p className="text-sm">{cabin.description}</p>
        </td>
        <td className="p-2">
          <p className="text-sm">
            <img src={cabin.image} width="100px" />
          </p>
        </td>
        <td className="p-2">
          <a href="#" className="text-sm font-semibold pr-2">
            Edit
          </a>
          <button className="cursor-pointer" onClick={() => mutate(cabin.id)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Cabin;
