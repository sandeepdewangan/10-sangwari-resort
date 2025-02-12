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
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
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
      {/* Name */}
      <div className="mb-6">
        <label className={labelStyle}>Name</label>
        <input
          type="text"
          className={inputStyle}
          {...register("name", { required: "This field is required" })}
        />
        <label className="text-red-500">
          {errors?.name?.message && <p>{errors?.name?.message}</p>}
        </label>
      </div>
      {/* Max Capacity */}
      <div className="mb-6">
        <label className={labelStyle}>Max Capacity</label>
        <input
          type="number"
          className={inputStyle}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        />
        <label className="text-red-500">
          {errors?.maxCapacity?.message && (
            <p>{errors?.maxCapacity?.message}</p>
          )}
        </label>
      </div>
      {/* Regular Price */}
      <div className="mb-6">
        <label className={labelStyle}>Regular Price</label>
        <input
          type="number"
          className={inputStyle}
          {...register("regularPrice", { required: "This field is required" })}
        />
        <label className="text-red-500">
          {errors?.regularPrice?.message && (
            <p>{errors?.regularPrice?.message}</p>
          )}
        </label>
      </div>
      {/* Discount */}
      <div className="mb-6">
        <label className={labelStyle}>Discount</label>
        <input
          type="number"
          className={inputStyle}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price.",
          })}
        />
        <label className="text-red-500">
          {errors?.discount?.message && <p>{errors?.discount?.message}</p>}
        </label>
      </div>
      {/* Description */}
      <div className="mb-6">
        <label className={labelStyle}>Description</label>
        <input
          type="text"
          className={inputStyle}
          {...register("description", { required: "This field is required" })}
        />
        <label className="text-red-500">
          {errors?.description?.message && (
            <p>{errors?.description?.message}</p>
          )}
        </label>
      </div>
      {/* Image */}
      <div className="mb-6">
        <label className={labelStyle}>Image</label>
        <input type="text" className={inputStyle} {...register("image")} />
        <label className="text-red-500">
          {errors?.image?.message && <p>{errors?.image?.message}</p>}
        </label>
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
