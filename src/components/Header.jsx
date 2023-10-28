import Categories from "./Header/Categories";
import SearchBar from "./Header/SearchBar";

const Header = () => {
  return (
    <div className="bg-white">
      <SearchBar />
      <Categories />
    </div>
  );
};

export default Header;
