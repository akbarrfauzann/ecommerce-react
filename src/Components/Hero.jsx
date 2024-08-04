export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#babdc6] to-[#ddeedf]">
      <div className="container mx-auto px-6 lg:pb-0 pb-4" data-aos="fade-up">
        <h1 className="flex justify-center text-6xl lg:text-9xl pt-4 text-center font-black text-neutral font-sans">RISE UP</h1>
        <div className="lg:flex justify-between items-end">
          <div className="lg:hidden block w-full -mt-6">
            <img src="./940.png" className="w-full h-full" />
          </div>

          <div className="lg:w-1/6 lg:mb-14">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-sm lg:text-xl -mb-3">Welcome to the Boston Celtics Store</p>
              <button className="px-8 my-6 h-12 rounded-md border-2 border-neutral hover:bg-neutral hover:text-white transition-bg">Shop now</button>
            </div>
            <div className="mt-6 lg:mt-0">
              <img src="./collect.png" alt="" />
              <p className="border-b-2 border-neutral py-4">Find your perfect leather fit, designed for players of all levels and budgets.</p>
            </div>
          </div>

          <div className="lg:block hidden w-1/3 -mt-12">
            <img src="./940.png" alt="" className="w-full h-full" />
          </div>

          <div className="lg:w-1/6 flex flex-col items-center mb-14">
            <img src="./jersey.png" alt="" className="lg:w-1/2 md:w-1/6 md:pt-10 pt-10" />
            <button className="mt-4 px-8 h-12 text-xs border-2 border-transparent rounded-md bg-neutral text-white hover:bg-primary hover:text-black hover:border-neutral transition-bg">DEAL OF THE WEEK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
