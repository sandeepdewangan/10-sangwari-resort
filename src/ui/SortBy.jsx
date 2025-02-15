import { useSearchParams } from "react-router-dom";

const selectStyle =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-sm p-1";

const SortBy = ({ filterType, options }) => {
  const [searchParam, setSearchParam] = useSearchParams();

  function handleOnSelect(value) {
    searchParam.set(filterType, value);
    setSearchParam(searchParam);
  }

  return (
    <>
      <select
        className={selectStyle}
        onChange={(e) => handleOnSelect(e.target.value)}
      >
        {options.map((op) => (
          <option value={op.value} key={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SortBy;
