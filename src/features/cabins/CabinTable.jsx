import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";
import Cabin from "./Cabin";
import CabinForm from "./CabinForm";

const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

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
          {cabins.map((cabin) => (
            <Cabin key={cabin.id} cabin={cabin} />
          ))}
        </table>
      </div>

      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5"
      >
        Show Cabin Form
      </button>
      <div className="w-[40%] pt-10">
        <CabinForm />
      </div>
    </div>
  );
};

export default CabinTable;
