import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";
import Cabin from "./Cabin";

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
    </div>
  );
};

export default CabinTable;
