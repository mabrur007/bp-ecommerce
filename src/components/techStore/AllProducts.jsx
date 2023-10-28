import { FaCircle, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { allProducts } from '../../static/data';

const AllProducts = () => {
  return (
    <section className="mt-4">
        <div className=" flex flex-col gap-3">
          {
            allProducts.map((product, index) => (
              <div key={index} className='lg:flex border border-[#E0E0E0] rounded-md p-4 bg-white'>
                <div className='basis-2/6 max-lg:flex'>
                  <img className='max-lg:mx-auto' src={product.imgURL} alt={product.name} />
                  <div className='border border-[#E0E0E0] h-fit w-fit p-2 rounded-md hover:shadow-lg lg:hidden'>
                    <FaRegHeart className='text-primary'/>
                  </div>
                </div>
                
                <div className='space-y-2 lg:mt-5'>
                  <h4>{product.name}</h4>
                  <p className='text-xl text-[#1C1C1C]'>৳ {product.price}</p>
                  <div className='flex items-center md:gap-4 gap-2'>
                    <div className='inline-flex items-baseline max-sm:text-xs'>
                      <FaStar className='text-[#ff9017]' />
                      <FaStar className='text-[#ff9017]' />
                      <FaStar className='text-[#ff9017]' />
                      <FaStar className='text-[#ff9017]' />
                      <FaStarHalfAlt className='text-[#ff9017]' />
                      <p className='text-[#ff9017] font-semibold max-sm:font-normal'>{product.rating}</p>
                    </div>
                    <div className='text-[#8B96A5] inline-flex items-center md:gap-4 gap-2'>
                      <FaCircle className='text-[8px] text-[#DEE2E7]'/>
                      <p className='font-semibold max-sm:text-xs'>{product.orders} orders</p>
                      <FaCircle className='text-[8px] text-[#DEE2E7]'/>
                    </div>
                    <p className='text-[#00B517] font-semibold max-sm:text-xs'>{product.shiping}</p>
                  </div>
                  <p className='text-[#505050]'>{product.description}</p>
                  <p className='text-primary font-semibold'>{product.details}</p>
                </div>

                <div className='border-2 border-[#E0E0E0] h-fit w-fit p-2 rounded-md hover:shadow-lg hover:border-primary max-lg:hidden'>
                  <FaRegHeart className='text-primary text-xl'/>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default AllProducts
