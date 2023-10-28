import { categories } from "../static/data";
import { useState } from "react";
import { styles } from "./../styles/styles";

const Hero = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="bg-white my-2 lg:my-4 lg:p-4 rounded-lg border-border lg:border flex justify-between gap-3">
      {/* left side */}
      <div className="w-96 hidden lg:block">
        <ul className="list-none flex flex-col text-tsecondary">
          {categories.map((category, index) => (
            <li
              onClick={() => setTab(index)}
              key={index}
              className={`${tab === index && "bg-accent text-black"} rounded-md py-3 px-4 cursor-pointer`}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>

      {/* content */}
      <div className="relative w-full h-72 sm:h-96 md:h-[432px] bg-[url(https://res.cloudinary.com/dklkgotsg/image/upload/v1691986202/samples/ecommerce/analog-classic.jpg)] bg-cover bg-center rounded-md text-white">
        <div className="absolute left-10 md:left-16 top-10 md:top-16">
          <p className="text-xl md:text-3xl">Latest trending</p>
          <h1 className="text-2xl md:text-4xl font-bold mt-1 md:mt-2">Electronics items</h1>

          <button className="btn bg-white rounded-lg text-sm md:text-base text-black px-3 md:px-5 py-1.5 md:py-2 font-medium mt-6">Learn more</button>
        </div>
      </div>

      {/* right side */}
      <div className="hidden lg:flex flex-col gap-2 w-80">
        <div className="flex-auto w-full bg-accent rounded-md p-3 flex flex-col space-y-2">
          <div className="flex flex-col mb-2.5 gap-3">
            <img className="w-16 mx-auto" src="https://i.ibb.co/F6ddLwq/profile.png" alt="profile" />
            <p className="leading-5 text-lg">
              Hi, user <br />
              Let&apos;s get started.
            </p>
          </div>
          <button className={`${styles.button} w-full h-10 flex justify-center items-center`}>Join Now</button>
          <button className={`btn rounded-lg w-full h-10 flex justify-center items-center !bg-white text-primary`}>
            Log in
          </button>
        </div>
        <div className="flex-auto w-full bg-[#F38332] rounded-lg p-3 flex justify-center items-center">
          Get BDT 100 off with a new supplier.
        </div>
        <div className="flex-auto w-full bg-[#55BDC3] rounded-lg p-3 flex justify-center items-center">
          Send quotes with supplier preferences.
        </div>
      </div>
    </div>
  );
};

export default Hero;
