import { FaAngleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex items-center gap-2 text-[#8B96A5] font-light py-6">
        <p className="flex items-center gap-2">Home <FaAngleRight className="text-sm"/></p>
        <p className="flex items-center gap-2">Clothings <FaAngleRight className="text-sm"/></p>
        <p className="flex items-center gap-2">Mens wear <FaAngleRight className="text-sm"/></p>
        <p className="flex items-center gap-2">Tech store</p>

    </div>
  )
}

export default Pagination
