import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import appleStore from "../../assets/images/apple.png";
import appStore from "../../assets/images/google.png";
import { footerLinks } from "../../static/data";

const FooterMain = () => {
  return (
    <footer className="w-full">
      <div className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between px-2 gap-10 lg:gap-12 xl:gap-28 2xl:gap-40">
          <div className="flex-1 max-w-xs">
            <img className="w-40" src="https://i.ibb.co/cXYVxx0/Logo2.png" alt="company_logo" />
            <p className="my-2 text-tsecondary leading-5">
              Best information about the company gies here but now lorem ipsum is
            </p>
            <div className="flex gap-3 mt-3">
              <a href="">
                <div className="bg-secondary text-white w-7 h-7 flex items-center justify-center rounded-full">
                  <BsFacebook />
                </div>
              </a>
              <a href="">
                <div className="bg-secondary text-white w-7 h-7 flex items-center justify-center rounded-full">
                  <AiFillTwitterCircle />
                </div>
              </a>
              <a href="">
                <div className="bg-secondary text-white w-7 h-7 p-[7px] flex items-center justify-center rounded-full">
                  <BsLinkedin />
                </div>
              </a>
              <a href="">
                <div className="bg-secondary text-white w-7 h-7 flex items-center justify-center rounded-full">
                  <AiFillInstagram />
                </div>
              </a>
              <a href="">
                <div className="bg-secondary text-white w-7 h-7 flex items-center justify-center rounded-full">
                  <BsYoutube />
                </div>
              </a>
            </div>
          </div>

          {/* footer links */}
          <div className="flex flex-wrap w-full justify-between">
            {footerLinks.map((section, index) => (
              <div key={index} className="">
                <h4 className="font-semibold text-base max-sm:mt-4">{section.title}</h4>
                <ul className="text-secondary">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="list-none text-gray-400 hover:text-gray-600 mt-2">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* get apps */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base">Get App</h4>
            <div className="flex flex-col gap-2">
              <a href="/">
                <img className="w-32" src={appleStore} alt="apple_store" />
              </a>
              <a href="/">
                <img className="w-32" src={appStore} alt="apple_store" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-[#eff2f4]">
        <div className="max-w-screen-2xl mx-auto py-6 px-2 flex flex-col lg:flex-row justify-between lg:items-center">
          <p>©️ 2023 Bachelor Point | All rights reserved.</p>
          <p className="hidden lg:block">
            A Product of{" "}
            <a
              className="text-primary font-medium"
              href="https://kodeend.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              KodeEnd IT Solutions AB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
