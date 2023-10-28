
const SuperDiscount = () => {
    const divStyle = {
        background: 'linear-gradient(45deg, #237CFF 65%, #005ADE 35%)',
      };
  return (
    <section>
      <div className="p-8 rounded-md mt-4 flex justify-between items-center" style={divStyle}>
        <div className="text-white">
            <h4 className="sm:text-2xl font-semibold pb-1">Super discount on more than 100 USD</h4>
            <p className="max-sm:text-xs">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-[#FF9017] text-white px-4 py-2 rounded-md">Shop now</button>
      </div>
    </section>
  )
}

export default SuperDiscount
