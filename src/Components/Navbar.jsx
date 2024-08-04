import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="bg-[#f2f9f1] w-full h-16 items-center flex flex-col justify-center sticky top-0 z-50">
      <div className="w-full">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <ul className="flex items-center lg:gap-8 gap-x-4 max-lg:hidden">
            <li>
              <a href="#" className="leading-normal no-underline text-sm font-semibold hover:text-accent">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="leading-normal no-underline text-sm font-semibold hover:text-accent">
                STORE
              </a>
            </li>
            <li>
              <a href="#" className="leading-normal no-underline text-sm font-semibold hover:text-accent">
                DEAL OF THE WEEK
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src="./logo.png" className="w-20" alt="Logo" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <button className="p-2 rounded-md hover:text-white border bg-primary hover:bg-neutral border-neutral hover:border-neutral text-sm">SUBSCRIBE</button>
          </div>
          {dropdown ? (
            <div className="lg:hidden cursor-pointer" onClick={showDropdown}>
              <IoMdClose />
            </div>
          ) : (
            <div className="lg:hidden cursor-pointer" onClick={showDropdown}>
              <AiOutlineMenu />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-[4.2rem] bg-[#f2f9f1] transition-all">
            <div className="w-full flex flex-col items-baseline gap-4 p-3 pt-0">
              <ul className="w-full flex flex-col justify-center">
                <li>
                  <a href="#" className="leading-normal flex justify-center no-underline text-md py-2">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" className="leading-normal flex justify-center no-underline text-md py-2">
                    STORE
                  </a>
                </li>
                <li>
                  <a href="#" className="leading-normal flex justify-center no-underline text-md py-2">
                    DEAL OF THE WEEK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
