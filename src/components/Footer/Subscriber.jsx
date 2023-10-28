import { styles } from "../../styles/styles";

const Subscriber = () => {
  return (
    <section className="bg-[#eff2f4]">
      <div className="max-w-screen-2xl mx-auto py-10 text-center px-2">
        <h4 className="font-semibold text-[20px] leading-7 ">Subscribe on our newsletter</h4>
        <p className="text-tsecondary leading-6 mt-1">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="mt-5 sm:flex gap-2.5 items-center justify-center">
          <div className="flex gap-3 border border-border rounded-lg items-center py-1.5 px-2.5 bg-white text-tsecondary">
            <span className="material-symbols-rounded text-secondary">mail</span>
            <input
              type="text"
              className="input py-1 placeholder:text-secondary focus:outline-none"
              placeholder="Search"
            />
          </div>
          <button className={`${styles.button} w-fit px-4 max-sm:mt-2 !py-[10px]`}>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscriber;
