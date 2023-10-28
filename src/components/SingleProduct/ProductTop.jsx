import { FaBox, FaCheck, FaCircle, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdOutlineMessage, MdOutlineVerifiedUser } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { flag_ger } from '../../assets/images';
import { singleProductImages } from "../../static/data";

const ProductTop = () => {
  return (
    <section>
      <div className="lg:flex gap-4 bg-white p-4 border border-[#e0e0e0] rounded-md">
        {/* part 1 */}
        <div className="basis-1/4">
            <div>
                {
                    singleProductImages.map((singleImg, index) => (
                        <div key={index} >
                            <div >
                                <img src={singleImg.mainImg} alt={singleImg.name} className="border border-[#e0e0e0] rounded-md max-lg:mx-auto"/>
                            </div>

                            <div className="flex max-lg:gap-4 items-center lg:justify-between mt-4">
                                {
                                    singleImg.subImgs.map((subImg, idx) => (
                                        <div key={idx} className="w-14 h-14 border border-[#E0E0E0] hover:border-primary cursor-pointer rounded-md p-1.5">
                                            <img src={subImg.img} alt={singleImg.name} className="h-full w-full"/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* part 2 */}
        <div className="basis-2/4 max-lg:py-8">
            <div className='space-y-1'>
                <div className='flex items-center gap-1 text-[#00B517]'>
                    <FaCheck className=' text-sm'/>
                    <p className="">In stock</p>
                </div>
                <h4 className="text-[#1C1C1C] text-xl font-semibold">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
                <div className='flex items-center md:gap-4 gap-2'>
                    <div className='inline-flex items-baseline max-sm:text-xs'>
                      <FaStar className='text-[#ff9017]' />
                      <FaStar className='text-[#ff9017]' />
                      <FaStar className='text-[#ff9017]' />
                      <FaStar className='text-[#ff9017]' />
                      <FaStarHalfAlt className='text-[#ff9017]' />
                      <p className='text-[#ff9017] font-semibold max-sm:font-normal'>4.5</p>
                    </div>
                    <div className='text-[#8B96A5] inline-flex items-center md:gap-4 gap-2'>
                      <FaCircle className='text-[8px] text-[#DEE2E7]'/>
                      <div className='flex gap-1 items-center'>
                        <MdOutlineMessage />
                        <p className='font-semibold max-sm:text-xs'>32 reviews</p>
                      </div>
                      <FaCircle className='text-[8px] text-[#DEE2E7]'/>
                    </div>
                    <div className='flex gap-1 items-center text-[#8B96A5]'>
                        <FaBox />
                        <p className='font-semibold max-sm:text-xs'>154 sold</p>
                      </div>
                </div>
            </div>

            <div className='flex  p-4 bg-[#FFF0DF]  mt-3 '>
                <div className='md:pr-20 pr-2'>
                    <h4 className='text-[#FA3434] md:text-xl '>৳ 98.00</h4>
                    <p className='text-tsecondary'>50-100 pcs</p>
                </div>
                <div className='border-x border-[#BDC1C8] md:pl-4 md:pr-20 px-2'>
                    <h4 className='text-[#1C1C1C] md:text-xl'>৳ 98.00</h4>
                    <p className='text-tsecondary'>50-100 pcs</p>
                </div>
                <div className='md:pl-4 md:pr-20 pl-2'>
                    <h4 className='text-[#1C1C1C] md:text-xl'>৳ 98.00</h4>
                    <p className='text-tsecondary'>50-100 pcs</p>
                </div>
            </div>
            
            {/* price section */}
            <div>
                <div className='border-b border-[#E0E0E0] space-y-3 py-4'>
                <div className='lg:grid grid-cols-3'>
                        <p className='text-secondary'>Price:</p>
                        <p>Negotiable</p>
                    </div>
                </div>

                <div className='border-b border-[#E0E0E0] space-y-3 py-4'>
                    <div className='lg:grid grid-cols-3'>
                        <p className='text-secondary'>Type:</p>
                        <p>Classic shoes</p>
                    </div>
                    <div className='lg:grid grid-cols-3'>
                        <p className='text-secondary'>Material:</p>
                        <p>Plastic material</p>
                    </div>
                    <div className='lg:grid grid-cols-3'>
                        <p className='text-secondary'>Design:</p>
                        <p>Modern nice</p>
                    </div>
                </div>

                <div className='border-b border-[#E0E0E0] space-y-3 py-4'>
                    <div className='lg:grid grid-cols-3'>
                        <p className='text-secondary'>Customization:</p>
                        <p>Customized logo and design custom packages</p>
                    </div>
                    <div className='lg:grid grid-cols-3'>
                        <p className='text-secondary'>Protection:</p>
                        <p>Refund Policy</p>
                    </div>
                    <div className='lg:grid grid-cols-3'>
                        <p className='text-secondary'>Warranty:</p>
                        <p>2 years full warranty </p>
                    </div>
                </div>
            </div>
        </div> 
            
        {/* part 3 */}
        <div className="basis-1/4">
            <div className='p-4 border border-[#E0E0E0] rounded-md'>
                <div className='flex gap-2 border-b border-[#E0E0E0] pb-4'>
                    <h4 className='bg-[#C6F3F1] rounded-md text-3xl font-bold text-[#4CA7A799] w-fit px-4 py-2'>R</h4>
                    <p className='text-[#1C1C1C] font-'>Supplier <br /> Guanjoi Trading LLC</p>
                </div>

                <div className='py-8 space-y-2'>
                    <div className='flex items-center gap-4 text-secondary'>
                        <img src={flag_ger} alt="germany" className='w-7'/>
                        <p>Germany, Berlin</p>
                    </div>
                    <div className='flex items-center gap-4 text-secondary'>
                        <MdOutlineVerifiedUser className='w-7 text-2xl'/>
                        <p>Verified Seller</p>
                    </div>
                    <div className='flex items-center gap-4 text-secondary'>
                        <TbWorld className='w-7 text-2xl'/>
                        <p>Worldwide shipping</p>
                    </div>
                </div>

                <div>
                    <button className='bg-primary rounded-md py-3 w-full text-white mb-2'>Send inquiry</button>
                    <button className='hover:bg-primary border border-[#E0E0E0] rounded-md py-3 w-full text-primary hover:text-white font-semibold'>{`Seller's`} profile</button>
                </div>
            </div>

            <div className='mt-6 text-primary flex items-center gap-2 justify-center'>
                <FaRegHeart className='text-2xl '/>
                <p>Save for later</p>
            </div>
        </div> 
      </div>
    </section>
  )
}

export default ProductTop
