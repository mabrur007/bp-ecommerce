import { useState } from "react";
import AllProducts from "../components/techStore/AllProducts";
import FilterBar from "../components/techStore/FilterBar";
import Pagination from "../components/techStore/Pagination";
import TopFilter from "../components/techStore/TopFilter";

const TechStore = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <Pagination />
      <div className="lg:flex gap-4">
        <div className={`lg:basis-1/6 hidden lg:block `}>
          <FilterBar />
        </div>
        <div className="lg:basis-5/6">
          <button onClick={() => setOpen(!open)} className="block lg:hidden mx-auto mb-2 px-14 py-2 rounded-md bg-primary text-white ">
            {open ? "Show Filter" : "Close Filter"}
          </button>
          <div className={` ${open ? "hidden" : "lg:block"}  `}>
            <FilterBar />
          </div>
          <TopFilter />
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default TechStore;
