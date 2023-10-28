import { electronicProducts, homeProducts } from "../static/data";

const Products = () => {
    return (
        <section className="my-2 lg:my-4 ">
            {/* Home Products */}
            <div className="lg:flex mb-4">
                <div className="basis-1/5 bg-[url('./assets/images/hp0.jpg')] bg-cover max-lg:bg-center p-8 lg:rounded-l-lg max-lg:rounded-t-lg">
                    <h4 className="text-[20px] font-semibold mb-4 ">Home and <br /> Outdoor items</h4>
                    <button className="btn bg-white rounded-lg text-sm md:text-base text-black px-3 md:px-5 py-1.5 md:py-2 font-medium ">Source now</button>
                </div>

                <div className="basis-4/5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  border-b border-[#E0E0E0]  bg-white">
                    {
                        homeProducts.map((eProduct, index) => (
                            <div className="border-r border-t border-[#E0E0E0]  p-4 flex justify-between group hover:cursor-pointer" key={index}>
                                <div>
                                    <h4 className="font-semibold group-hover:text-primary">{eProduct.name}</h4>
                                    <p className="text-secondary text-[13px]">From <br /> BDT {eProduct.price}</p>
                                </div>
                                <div>
                                    <img src={eProduct.imgURL} alt={eProduct.name} className="w-20 pt-6 group-hover:scale-105 transition-all"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Electronic Products */}
            <div className="lg:flex shadow-sm shadow-secondary">
                <div className="basis-1/5 bg-[url('./assets/images/ep0.jpg')] bg-cover max-lg:bg-center p-8">
                    <h4 className="text-[20px] font-semibold mb-4 ">Consumer <br /> electronics and <br /> gadgets</h4>
                    <button className="btn bg-white rounded-lg text-sm md:text-base text-black px-3 md:px-5 py-1.5 md:py-2 font-medium ">Source now</button>
                </div>

                <div className="basis-4/5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 border-b border-[#E0E0E0] bg-white">
                    {
                        electronicProducts.map((eProduct, index) => (
                            <div className="border-r border-t border-[#E0E0E0] p-4 flex justify-between group hover:cursor-pointer" key={index}>
                                <div>
                                    <h4 className="font-semibold group-hover:text-primary">{eProduct.name}</h4>
                                    <p className="text-secondary text-[13px]">From <br /> BDT {eProduct.price}</p>
                                </div>
                                <div>
                                    <img src={eProduct.imgURL} alt={eProduct.name} className="w-20 pt-6 group-hover:scale-105 transition-all"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Products;
