import { useSearchParams } from "react-router-dom";

const labelStyle =
  "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-600 cursor-pointer";

const Filter = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  function handleOnClick(value) {
    searchParam.set("discount", value);
    setSearchParam(searchParam);
  }
  return (
    <>
      <span className={labelStyle} onClick={() => handleOnClick("all")}>
        All
      </span>
      <span
        className={labelStyle}
        onClick={() => handleOnClick("with-discounts")}
      >
        With Discounts
      </span>
      <span
        className={labelStyle}
        onClick={() => handleOnClick("no-discounts")}
      >
        No Discounts
      </span>
    </>
  );
};

export default Filter;
