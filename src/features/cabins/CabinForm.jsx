import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { insert } from "../../services/apiCabins";
import toast from "react-hot-toast";

const inputStyle =
  "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500";
const labelStyle = "block mb-2 text-sm font-medium text-gray-900";

const CabinForm = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, mutate } = useMutation({
    mutationFn: insert,
    onSuccess: () => {
      toast.success("Cabin inserted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); // resets the form
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className={labelStyle}>Name</label>
        <input type="text" className={inputStyle} {...register("name")} />
      </div>
      <div className="mb-6">
        <label className={labelStyle}>Max Capacity</label>
        <input
          type="number"
          className={inputStyle}
          {...register("maxCapacity")}
        />
      </div>
      <div className="mb-6">
        <label className={labelStyle}>Regular Price</label>
        <input
          type="number"
          className={inputStyle}
          {...register("regularPrice")}
        />
      </div>
      <div className="mb-6">
        <label className={labelStyle}>Discount</label>
        <input type="number" className={inputStyle} {...register("discount")} />
      </div>
      <div className="mb-6">
        <label className={labelStyle}>Description</label>
        <input
          type="text"
          className={inputStyle}
          {...register("description")}
        />
      </div>
      <div className="mb-6">
        <label className={labelStyle}>Image</label>
        <input type="text" className={inputStyle} {...register("image")} />
      </div>

      <button
        type="submit"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        disabled={isLoading}
      >
        Submit
      </button>
    </Form>
  );
};

export default CabinForm;
