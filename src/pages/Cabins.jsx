import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../services/apiCabins";

const Cabins = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  console.log(isLoading, cabins, error);

  return <div>Cabins</div>;
};

export default Cabins;
