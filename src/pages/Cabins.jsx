import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

const Cabins = () => {
  useEffect(function () {
    getCabins().then((d) => console.log(d));
  }, []);
  return <div>Cabins</div>;
};

export default Cabins;
