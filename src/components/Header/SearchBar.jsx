import { Link } from "react-router-dom";
import { categories, serarch_menu } from "../../static/data";
import { styles } from "../../styles/styles";

const SearchBar = () => {
  return (
    <div className="lg:border-b-[1px] border-border py-4">
      <div className="hidden max-w-screen-2xl mx-auto lg:flex justify-between items-center px-2">
        <div className="text-2xl font-extrabold">
          <Link to="/">
            <img className="w-40" src="https://i.ibb.co/v3hHShG/Logo1.png" alt="company_logo" />
          </Link>
        </div>
        <div className="text-sm flex items-center w-1/2 xl:w-5/12 2xl:w-1/3">
          <div className="py-2 px-3 border-2 border-primary rounded-l-lg flex w-full">
            <input type="text" className="input w-full" placeholder="Search" />
            <hr className="h-5 border-r-[1px] mr-2.5" />
            <select className="focus:outline-none">
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} className="" value={category.value}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <button className={`${styles.button} !rounded-l-none !py-[10px]`}>Search</button>
        </div>
        <div className="flex items-end gap-3 text-secondary cursor-pointer">
          {serarch_menu.map((menu, index) => (
            <div key={index} >
              <Link to={menu.path}>
                <div className="flex flex-col justify-center items-center text-sm gap-1">
                  <span className="material-symbols-rounded">{menu.icon}</span>
                  <p className="text-xs">{menu.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden px-2">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-rounded">menu</span>
              <img className="w-24" src="https://i.ibb.co/v3hHShG/Logo1.png" alt="company_logo" />
            </div>
            <div className="flex items-center gap-2.5 text-secondary">
              <span className="material-symbols-rounded">shopping_cart</span>
              <span className="material-symbols-rounded">person</span>
            </div>
          </div>
        </div>

        <div className="mt-2.5 border-secondary border-[1px] rounded-md bg-[#F7FAFC] flex items-center gap-2 px-3">
          <span className="material-symbols-rounded text-gray-400">search</span>
          <input
            type="search"
            name="search"
            id="search"
            className="w-full bg-transparent py-2.5 text-gray-700 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
