import { cartBottomData } from "../../static/data";
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartBottom = () => {
  return (
    <section>
      <div className="my-4 bg-white border border-border rounded-md p-4">
        <h4 className="text-xl font-semibold text-dark pb-4">Saver for later</h4> 
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 ">
          {
            cartBottomData.map((product, index) => (
              <div key={index} className="group">
                <div className="border  border-border rounded-md">
                  <img className="mx-auto  group-hover:scale-105 transition-all p-4" src={product.imgURL} alt={product.name} />
                </div>
                <div className="space-y-2 mt-2">
                  <h4 className="text-lg font-semibold group-hover:text-primary">৳{product.price}</h4>
                  <p className="text-tsecondary w-3/4">{product.name}</p>
                  <button className="border border-border rounded-md p-2 text-primary flex gap-2 items-center hover:bg-primary hover:text-white"><HiOutlineShoppingCart/> <span>Move to cart</span></button>
                </div>
              </div>
            ))
            }
        </div>
      </div>
    </section>
  )
}

export default CartBottom
