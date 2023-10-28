import { FaCheck } from "react-icons/fa6";
import { featuresData, productMidTableData, rightSideData } from '../../static/data';

const ProductMid = () => {
  return (
    <section>
      <div className="lg:flex gap-4 my-4">
        <div className="basis-3/4 bg-white border border-[#e0e0e0] rounded-md">
            {/* first */}
            <div className="text-secondary flex gap-6 border-b border-[#e0e0e0] p-4">
                <p className="text-primary">Description</p>
                <p>Reviews</p>
                <p>Shipping</p>
                <p>About seller</p>
            </div>
            {/* second */}
            <div className="p-4 text-tsecondary">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
            </div>
            {/* third */}
            <div className='p-4'>
                <table className="lg:w-3/4 w-full">
                    <tbody>
                        {
                            productMidTableData.map((item, index) => (
                                <tr key={index} className="border border-[#e0e0e0] text-tsecondary">
                                    <td className="p-4 bg-accent">{item.name}</td>
                                    <td className=" p-4">{item.des}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* fourth */}
            <div className='p-4'>
                {
                    featuresData.map((feature, fid) => (
                        <div key={fid} className="flex items-center gap-2">
                            <FaCheck className="text-[#00B517]"/>
                            <p>{feature.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        
        {/* right side */}
        <div className=" basis-1/4 bg-white p-4 border border-[#e0e0e0] rounded-md max-lg:mt-4">
            <div className=" space-y-6">
                <h4 className="font-bold">You may like</h4>
                {
                    rightSideData.map((rsData, idR) => (
                        <div key={idR} className="flex gap-2 cursor-pointer">
                            <img src={rsData.imgURL} alt="" className=" lg:w-1/4 w-16 object-cover border border-[#e0e0e0] rounded-md" />
                            <div>
                                <h4>{rsData.name}</h4>
                                <p className="text-secondary text-sm">{rsData.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductMid
