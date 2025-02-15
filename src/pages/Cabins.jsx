import CabinTable from "../features/cabins/CabinTable";
import Filter from "../features/cabins/Filter";

const Cabins = () => {
  return (
    <div className="mx-25">
      <span className="text-2xl">Cabins</span>
      <div>
        <Filter
          filterField={"discount"}
          options={[
            { label: "All", value: "all" },
            { label: "With Discounts", value: "with-discounts" },
            { label: "No Discounts", value: "no-discounts" },
          ]}
        />
      </div>

      <div className="pt-2">
        <CabinTable />
      </div>
    </div>
  );
};

export default Cabins;
