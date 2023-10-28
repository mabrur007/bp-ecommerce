import { FaAngleDown } from "react-icons/fa";
import { techStoreData } from '../../static/data';

const FilterBar = () => {
  return (
    <div className="">
        <div>
          {
            techStoreData.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center py-2 border-t border-[#DEE2E7]">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p><FaAngleDown /></p>
                </div>

                <div>
                  {
                    item.names.map((data, idx) => (
                      <div key={idx}>
                        <p className="py-1.5 hover:text-primary cursor-pointer text-[#505050]">{data.name}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }   
        </div>
    </div>
  )
}

export default FilterBar
