import { Link } from "react-router-dom";
import { categories } from "../../static/data";

const Categories = () => {
  return (
    <div className="border-b-[1px] border-border pb-3.5 lg:py-4">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-sm font-medium px-2">
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <span className="material-symbols-rounded">menu</span>
            <p className="hover:bg-accent p-1 rounded-md cursor-pointer">All Categories</p>
          </div>
          <div className="hover:bg-accent p-1 rounded-md cursor-pointer">
            <p>Hot Offers</p>
          </div>
          <div className="hover:bg-accent p-1 rounded-md cursor-pointer">
            <p>Gift Boxes</p>
          </div>
          <div className="hover:bg-accent p-1 rounded-md cursor-pointer">
            <p>Project</p>
          </div>
          <div className="hover:bg-accent p-1 rounded-md cursor-pointer">
            <p>Menu Item</p>
          </div>
          <div className="bg-accent p-1 rounded-md cursor-pointer">
            <Link to="/techstore">Tech Store</Link>
          </div>
          <div className="bg-accent p-1 rounded-md cursor-pointer">
            <Link to="/singleproduct">Single Product</Link>
          </div>
          <div className="bg-accent p-1 rounded-md cursor-pointer">
            <Link to="/cart">Cart</Link>
          </div>
        </div>

        {/* small devices */}
        <div className="lg:hidden flex gap-3 text-base overflow-x-scroll">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 py-2 px-6 text-[#0d6efd] flex justify-center items-center rounded-md bg-[#eff2f4]"
            >
              {category.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
