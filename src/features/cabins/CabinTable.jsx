import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";

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
                  <a href="#" className="text-sm font-semibold ">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CabinTable;
