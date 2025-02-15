import CabinTable from "../features/cabins/CabinTable";
import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";

const Cabins = () => {
  return (
    <div className="mx-25">
      <span className="text-2xl">Cabins</span>
      <div className="flex flex-auto">
        <Filter
          filterField={"discount"}
          options={[
            { label: "All", value: "all" },
            { label: "With Discounts", value: "with-discounts" },
            { label: "No Discounts", value: "no-discounts" },
          ]}
        />

        <SortBy
          filterType="sortBy"
          options={[
            { value: "name-az", label: "Sort by Name (A-Z)" },
            { value: "name-za", label: "Sort by Name (Z-A)" },
            { value: "regularPrice-az", label: "Sort by Regular Price (A-Z)" },
            { value: "regularPrice-za", label: "Sort by Regular Price (Z-A)" },
            { value: "discount-az", label: "Sort by Discount (A-Z)" },
            { value: "discount-za", label: "Sort by Discount (Z-A)" },
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
