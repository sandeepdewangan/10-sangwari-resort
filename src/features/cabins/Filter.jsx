import { useSearchParams } from "react-router-dom";

const labelStyle =
  "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-600 cursor-pointer";

// this filter buttons can be used with any tables like, bookings, users etc.
// now it become re-usable component.
const Filter = ({ filterField, options }) => {
  const [searchParam, setSearchParam] = useSearchParams();

  function handleOnClick(value) {
    searchParam.set(filterField, value);
    setSearchParam(searchParam);
  }
  return (
    <>
      {options.map((filterButton) => (
        <span
          className={labelStyle}
          onClick={() => handleOnClick(filterButton.value)}
          key={filterButton.value}
        >
          {filterButton.label}
        </span>
      ))}
    </>
  );
};

export default Filter;
