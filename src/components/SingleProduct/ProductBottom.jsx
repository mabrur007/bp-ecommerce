import { productBottomData } from "../../static/data"

const ProductBottom = () => {
  return (
    <section>
        <div className="bg-white border border-[#E0E0E0] rounded-md p-4 ">
            <h4 className="font-bold mb-4">Related Products</h4>
            <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-6 ">
                {
                    productBottomData.map((item, index) => (
                        <div key={index} className="group">
                            
                            <img src={item.imgURL} alt={item.name} className="border border-[#E0E0E0] rounded-md w-3/3 mb-2"/>
                            <div>
                                <h4 className="text-tsecondary group-hover:text-primary">{item.name}</h4>
                                <p className="text-secondary text-sm">{item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>      
    </section>
  )
}

export default ProductBottom












