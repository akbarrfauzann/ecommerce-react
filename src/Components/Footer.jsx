import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-accent py-16 relative z-10">
      <div className="container lg:flex justify-between mx-auto px-6">
        <div className="flex flex-col lg:w-1/3">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src="./logo.png" alt="" />
            </div>
          </div>
          <h2 className="font-bold py-4 lg:text-3xl">JOIN OUR TRIBE</h2>
          <form action="" className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="w-full h-12 rounded-md pl-6 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full h-12 rounded-md pl-6 outline-none" />
            <p>By clicking Sign Up, you agree to receive marketing text messages from Our Company at the number provided, including messages sent by an autodialer.</p>
            <div className="flex">
              <button className="px-8 h-12 border-2 border-transparent rounded-md bg-neutral text-white hover:bg-primary hover:text-neutral hover:border-neutral transition-bg">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="lg:w-3/5">
          <div className="flex flex-col gap-8 justify-center pb-12 border-b-2 border-neutral lg:flex-row ">
            <div className="w-full mt-8 lg:mt-0">
              <h6 className="font-bold text-primary text-xl pb-4">HOME</h6>
              <ul className="flex flex-col gap-2">
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Store
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Deal of the Week
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Our Club
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Membership
                </a>
              </ul>
            </div>
            <div className="w-full">
              <h6 className="font-bold text-primary text-xl pb-4">ABOUT US</h6>
              <ul className="flex flex-col gap-2">
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Our Journey
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Our Coaches
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Our Team
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Achievements
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Rewards
                </a>
              </ul>
            </div>
            <div className="w-full">
              <h6 className="font-bold text-primary text-xl pb-4">CUSTOMER SERVICES</h6>
              <ul className="flex flex-col gap-2">
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Delivery & Returns
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Payment Information
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  Track My Order
                </a>
                <a href="#" className="hover:text-neutral hover:font-bold">
                  FAQ
                </a>
              </ul>
            </div>
          </div>
          <div className="justify-between items-end pt-12 lg:flex">
            <div>
              <h6 className="font-bold text-neutral text-2xl pb-4">Follow Us</h6>
              <span className="flex items-center justify-center gap-4 lg:py-0 py-4">
                <button className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-neutral hover:bg-primary hover:text-neutral">
                  <FaInstagram />
                </button>
                <button className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-neutral hover:bg-primary hover:text-neutral">
                  <FaFacebookF />
                </button>
                <button className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-neutral hover:bg-primary hover:text-neutral">
                  <FaXTwitter />
                </button>
                <button className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-neutral hover:bg-primary hover:text-neutral">
                  <FaYoutube />
                </button>
              </span>
            </div>
            <span className="flex flex-col items-center gap-8 lg:flex-row">
              <button className="bg-white flex items-center rounded-full gap-2 px-3 py-1">
                <FaApple className="text-neutral text-2xl" />
                <p className="flex flex-col text-xs">
                  Download on the <span className="text-sm font-bold">Apple Store</span>
                </p>
              </button>
              <button className="bg-white flex items-center rounded-full gap-2 px-3 py-1">
                <FaGooglePlay className="text-neutral text-2xl" />
                <p className="flex flex-col text-xs">
                  Get it from <span className="text-sm font-bold">Google Play</span>
                </p>
              </button>
            </span>
          </div>
          <div className="lg:flex justify-between pt-10">
            <p className="font-bold pb-4 lg:pb-0 text-black">© 2024. All Rights Reserved</p>
            <span className="flex justify-between gap-16">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
