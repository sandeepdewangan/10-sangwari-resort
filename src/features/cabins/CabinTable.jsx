import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";
import Cabin from "./Cabin";
import CabinForm from "./CabinForm";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const CabinTable = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  // Filter
  const [searchParam] = useSearchParams();
  const filterCondition = searchParam.get("discount") || "all";
  let filteredCabins;

  switch (filterCondition) {
    case "with-discounts":
      filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
      break;
    case "no-discounts":
      filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
      break;
    default:
      filteredCabins = cabins;
  }

  // Sorting
  const sortCondition = searchParam.get("sortBy") || "name-az";
  const [field, order] = sortCondition.split("-");
  const modifier = order == "az" ? 1 : -1;

  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Name</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Max Capacity</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">
                  Regular Price
                </p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Discount</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Description</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Image</p>
              </th>
              <th className="p-2">
                <p></p>
              </th>
            </tr>
          </thead>
          {sortedCabins.map((cabin) => (
            <Cabin key={cabin.id} cabin={cabin} />
          ))}
        </table>
      </div>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5"
        onClick={() => setShowForm(!showForm)}
      >
        Show Cabin Form
      </button>
      {showForm ? (
        <div className="w-[40%] pt-10">
          <CabinForm />
        </div>
      ) : (
        <p>Click to create a new room.</p>
      )}
    </div>
  );
};

export default CabinTable;
