import { cartMidData } from "../../static/data";

const CartMid = () => {
  return (
    <section>
      <div className="my-8">
        
        <div className="flex md:flex-row md:gap-16 flex-col gap-8 max-md:justify-center max-md:items-center">
          {
            cartMidData.map((data, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#DEE2E7] rounded-full flex justify-center items-center">
                  <span className="material-symbols-rounded text-secondary">{ data.icon}</span>
                </div>
                <div className="leading-4">
                  <p className="text-dark">{ data.title }</p>
                  <p className="text-secondary text-sm">{ data.sub }</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CartMid
