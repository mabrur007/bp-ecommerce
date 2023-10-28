import { cart_pay } from "../../assets/images";
import { cartTopLeftSideData } from "../../static/data";
import { FaArrowLeft } from "react-icons/fa6";

const CartTop = () => {
  return (
    <section>
        <h4 className="mt-4 text-xl font-semibold">My cart{` (3)`}</h4>
      <div className="lg:flex gap-4 my-4 ">
        {/* CartTop left side */}
        <div className="basis-3/4 bg-white border border-border rounded p-4">
          <div className="space-y-6">
            {cartTopLeftSideData.map((item, index) => (
              <div key={index} className="flex justify-between border-b border-border pb-6 ">
                <div className="flex gap-3 pr-4">
                  <img
                    src={item.imgURL}
                    alt={item.name}
                    className="border border-border rounded-md w-[74px] h-fit"
                  />
                  <div>
                    <h4 className="text-dark font-semibold">{item.name}</h4>
                    <div className="text-secondary">
                      <p>
                        Size: {item.size}, Color:{item.color}, Material:
                        {item.material}
                      </p>
                      <p>{item.seller}</p>
                    </div>
                    <div className="mt-2">
                      <button className="border border-border rounded-md px-2 py-1 text-red text-sm hover:bg-red hover:text-white">
                        Remove
                      </button>
                      <button className="border border-border rounded-md px-2 py-1 text-primary ml-2 text-sm hover:bg-primary hover:text-white">
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-dark font-semibold">৳{item.price}</h4>
                  <div>
                    <select
                      id="currency"
                      name="currency"
                      className="border border-[#E0E0E0] p-2 rounded-md focus:outline-primary mt-2"
                    >
                      <option>Qty: 2</option>
                      <option>Qty: 1</option>
                      <option>Qty: 4</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between pt-4">
              <button className="flex items-center gap-2 bg-primary text-white p-2 rounded-md"><FaArrowLeft /> Back to shop</button>
              <button className="border border-border rounded-md text-primary p-2 hover:text-red">Remove all</button>
            </div>
          </div>
        </div>

        {/* CartTop right side */}
        <div className="basis-1/4 space-y-2 max-lg:mt-2">
          <div className=" bg-white border border-border rounded p-4">
            <p>Have a coupon?</p>
            <div className="flex mt-2">
                <input type="text" placeholder="Add coupon" className="border border-border rounded-md rounded-r-none p-2 focus:outline-none w-full"/>
                <button className="border border-border rounded-md rounded-l-none px-2 text-primary hover:bg-primary hover:text-white">Search</button>
            </div>
          </div>

          <div className="space-y-4 bg-white border border-border rounded p-4">
            <div className="border-b border-border pb-4 space-y-2">
                <div className="flex justify-between text-tsecondary">
                    <p>Subtotal</p>
                    <p>৳1403.97</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-tsecondary">Discount</p>
                    <p className="text-red">-৳60.30</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-tsecondary">Tax:</p>
                    <p className="text-green">৳14.00</p>
                </div>
            </div>

            <div className="text-dark font-semibold flex justify-between">
                <p>Total:</p>
                <p className="text-lg">৳1357.97</p>
            </div>

            <div>
                <button className="bg-green rounded-lg text-white text-lg py-3 w-full">Checkout</button>
                <img src={cart_pay} alt="Pay_through"  className="mt-4 mx-auto w-2/4 cursor-pointer"/>
            </div>    
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTop;
