import CabinTable from "../features/cabins/CabinTable";
import Filter from "../features/cabins/Filter";

const Cabins = () => {
  return (
    <div className="mx-25">
      <span className="text-2xl">Cabins</span>
      <div>
        <Filter />
      </div>

      <div className="pt-2">
        <CabinTable />
      </div>
    </div>
  );
};

export default Cabins;
