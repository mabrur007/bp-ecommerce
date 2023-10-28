import { offers } from "../static/data"
const DealsAndOffers = () => {
  return (
    <section className="my-2 lg:my-4 ">
        <div className="lg:flex bg-white border border-[#E0E0E0] rounded-lg">
            {/* lg:rounded-l-lg max-lg:rounded-t-lg */}
            <div className="basis-1/5 p-8 lg:border-r border-[#E0E0E0]">
                <h4 className="text-[20px] font-semibold">Deals and offers</h4>
                <p className="text-[16px] text-[#8B96A5]">Hygiene equipments</p>
                <div className="flex gap-2 mt-4">
                    <div className="h-fit p-2 bg-[#606060] rounded-md text-center">
                        <p className="text-[16px] text-white font-bold leading-none">04</p>
                        <span className="text-white text-[12px]">Days</span>
                    </div>
                    <div className="h-fit p-2 bg-[#606060] rounded-md text-center">
                        <p className="text-[16px] text-white font-bold leading-none">13</p>
                        <span className="text-white text-[12px]">Hour</span>
                    </div>
                    <div className="h-fit p-2 bg-[#606060] rounded-md text-center">
                        <p className="text-[16px] text-white font-bold leading-none">34</p>
                        <span className="text-white text-[12px]">Min</span>
                    </div>
                    <div className="h-fit p-2 bg-[#606060] rounded-md text-center">
                        <p className="text-[16px] text-white font-bold leading-none">56</p>
                        <span className="text-white text-[12px]">Sec</span>
                    </div>
                </div>
            </div>

            <div className="basis-4/5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                {
                    offers.map((offer, index) => (
                        <div key={index} className={`group border-r max-lg:border-t p-10 border-[#E0E0E0] ${index === offers.length - 1 ? 'lg:border-r-0' : ''} ${index === offers.length - 3 ? 'md:max-lg:border-b md:max-lg:border-r-0' : ''} ${index === offers.length - 2 ? 'max-md:border-b max-md:border-r-0' : ''} ${index === offers.length - 4 ? 'max-md:border-r-0' : ''}`}>
                            <img src={offer.imgURL} alt={offer.name} className="group-hover:scale-105 transition-all" />
                            <h4 className=" text-center group-hover:text-primary">{offer.name}</h4>
                            <div className="bg-[#FFE3E3] py-1 px-3 w-fit mx-auto rounded-full mt-2">
                                <p className="text-[14px] text-[#EB001B] font-semibold">{offer.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default DealsAndOffers
