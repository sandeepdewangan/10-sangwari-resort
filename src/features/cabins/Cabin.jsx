import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useState } from "react";
import CabinForm from "./CabinForm";

const Cabin = ({ cabin }) => {
  const queryClient = useQueryClient();
  const [editForm, setEditForm] = useState(false);
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
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
            <button
              className="cursor-pointer pr-5"
              onClick={() => setEditForm((show) => !show)}
            >
              Edit
            </button>
            <button className="cursor-pointer" onClick={() => mutate(cabin.id)}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      {editForm && (
        <div className="ml-10">
          <CabinForm cabinToEdit={cabin} />
        </div>
      )}
    </>
  );
};

export default Cabin;
