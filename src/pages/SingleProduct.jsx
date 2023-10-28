import ProductBottom from "../components/SingleProduct/ProductBottom"
import ProductMid from "../components/SingleProduct/ProductMid"
import ProductTop from "../components/SingleProduct/ProductTop"
import SuperDiscount from "../components/SuperDiscount"
import Pagination from "../components/techStore/Pagination"

const SingleProduct = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
        <Pagination />
        <ProductTop />
        <ProductMid />
        <ProductBottom />
        <SuperDiscount />
    </div>
  )
}

export default SingleProduct
