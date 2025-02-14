import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

import { getSettings, save } from "../../services/apiSettings";
import toast from "react-hot-toast";

const inputStyle =
  "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500";
const labelStyle = "block mb-2 text-sm font-medium text-gray-900";

const SettingsForm = () => {
  const queryClient = useQueryClient();
  // use query
  const {
    isLoading: isQueryPending,
    data: settings,
    error: queryError,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  const { register, handleSubmit, formState } = useForm();

  // click event
  const { isPending: isFormSavingPending, mutate: saveSettings } = useMutation({
    mutationFn: save,
    onSuccess: () => {
      toast.success("Save changes successfully made to database.");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => toast(error.message),
  });

  const { errors } = formState;

  function onSubmit(data) {
    saveSettings({
      minBookingLength: data.minBookingLength,
      maxBookingLength: data.maxBookingLength,
      maxNumberOfGuestsPerBooking: data.maxNumberOfGuestsPerBooking,
      breakfastPrice: data.breakfastPrice,
    });
  }
  if (isQueryPending || isFormSavingPending) return <p>Loading...</p>;

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Min booking length */}
        <div className="mb-6">
          <label className={labelStyle}>Min Booking Length</label>
          <input
            type="number"
            className={inputStyle}
            {...register("minBookingLength", {
              required: "This field is required",
            })}
            defaultValue={settings.minBookingLength}
          />
          <label className="text-red-500">
            {errors?.minBookingLength?.message && (
              <p>{errors?.minBookingLength?.message}</p>
            )}
          </label>
        </div>
        {/* Max booking length */}
        <div className="mb-6">
          <label className={labelStyle}>Max Booking Length</label>
          <input
            type="number"
            className={inputStyle}
            {...register("maxBookingLength", {
              required: "This field is required",
            })}
            defaultValue={settings.maxBookingLength}
          />
          <label className="text-red-500">
            {errors?.maxBookingLength?.message && (
              <p>{errors?.maxBookingLength?.message}</p>
            )}
          </label>
        </div>
        {/* Max Number of Guests */}
        <div className="mb-6">
          <label className={labelStyle}>Max Number of Guests</label>
          <input
            type="number"
            className={inputStyle}
            {...register("maxNumberOfGuestsPerBooking", {
              required: "This field is required",
            })}
            defaultValue={settings.maxNumberOfGuestsPerBooking}
          />
          <label className="text-red-500">
            {errors?.maxNumberOfGuestsPerBooking?.message && (
              <p>{errors?.maxNumberOfGuestsPerBooking?.message}</p>
            )}
          </label>
        </div>
        {/* Breakfast Price */}
        <div className="mb-6">
          <label className={labelStyle}>Breakfast Price</label>
          <input
            type="number"
            className={inputStyle}
            {...register("breakfastPrice", {
              required: "This field is required",
            })}
            defaultValue={settings.breakfastPrice}
          />
          <label className="text-red-500">
            {errors?.breakfastPrice?.message && (
              <p>{errors?.breakfastPrice?.message}</p>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          disabled={isFormSavingPending}
        >
          Save Changes
        </button>
      </Form>
    </div>
  );
};

export default SettingsForm;
