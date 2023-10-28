import { GiHamburgerMenu } from 'react-icons/gi';
import { PiSquaresFourFill } from 'react-icons/pi';

const TopFilter = () => {
  return (
    <section>
      <div className="bg-white py-5 px-3 border border-[#DEE2E7] rounded-md">
        <div className='lg:flex items-center justify-between max-lg:space-y-4'>
          <div>
            <p>
              12,911 items in
              <span className="font-semibold"> Mobile accessory</span>
            </p>
          </div>

          <div className='flex gap-2'>
            <div className="flex items-center gap-2">
              <input type="checkbox" id='check' className="w-4 h-4" />
              <label htmlFor='check'>Verified only</label>
            </div>

            <div>
              <div>
                <select
                  id="currency"
                  name="currency"
                  className="border border-[#E0E0E0] p-2 rounded-md focus:outline-primary"
                >
                  <option>Featured</option>
                  <option>Best</option>
                  <option>Top Selling</option>
                </select>
              </div>
            </div>

            <div className='flex justify-between items-center border border-[#E0E0E0] rounded-md w-fit'>
              <div className='p-2'>
                <PiSquaresFourFill className='w-5 h-5'/>
              </div>
              <div className='border-l-2 border-[#E0E0E0] bg-[#eff2f4] p-2'>
                <GiHamburgerMenu className='w-5 h-5'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFilter;
