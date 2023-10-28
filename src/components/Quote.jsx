
const Quote = () => {
  return (
    <section className="">
      <div className="bg-[url(https://i.ibb.co/s3csJRM/quote.png)] bg-cover bg-center p-4 rounded-md lg:flex">
        <div className="px-10 py-5">
          <h4 className="text-[32px] font-semibold text-white lg:w-[60%]">
            An easy way to send requests to all suppliers
          </h4>
          <p className="text-base font-normal text-white w-[65%] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="bg-white p-6 rounded-md">
          <form>
          <h2 className="text-[20px] font-semibold leading-7 mb-4 ">Send quote to suppliers</h2>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
            
              <div className="sm:col-span-6">
                <div className="">
                  <input
                    type="text"
                    placeholder="What item you need?"
                    className="block w-full p-2 rounded-md ring-1 ring-[#DEE2E7] focus:outline-none placeholder:text-black"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div>
                  <textarea 
                    placeholder="Write more about"
                    className="block w-full p-2 rounded-md ring-1 ring-[#DEE2E7] focus:outline-none" 
                     
                    rows="4" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div>
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="block w-full p-2 rounded-md ring-1 ring-[#DEE2E7] focus:outline-none placeholder:text-black"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full p-2 rounded-md ring-1 ring-[#DEE2E7] focus:outline-none"
                  >
                    <option>Pcs</option>
                    <option>Kg</option>
                    <option>gm</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button type="button" className="bg-primary text-white py-2 px-4 rounded-md">Send inquiry</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quote;
