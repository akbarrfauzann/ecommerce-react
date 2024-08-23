export default function KnowMore() {
  return (
    <div className="relative z-20">
      <div className="bg-neutral relative lg:my-12 mt-16 lg:py-0 py-14" data-aos="fade-up">
        <div className="container flex gap-8 mx-auto px-6">
          <div className="w-1/2 h-[40rem] relative lg:block hidden">
            <img src="./celtics.webp" alt="" className="absolute top-0 right-[9.5rem] w-80 h-80 object-cover filter grayscale contrast-100" loading="lazy" />
            <img src="./champions.jpg" alt="" className="absolute top-40 right-4 w-80 filter grayscale contrast-100" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="lg:w-3/5 pb-4 text-white font-bold text-3xl">GET TO KNOW OUR PROGRAM</h2>
            <p className="lg:w-3/5 pb-4 text-white opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam maiores iusto est debitis fugit voluptatum, ex architecto assumenda. Corporis fugit eius qui voluptate rerum adipisci iste officiis! Itaque, quam esse.
            </p>
            <div className="flex mt-4">
              <button className="text-white border-2 px-4 h-12 rounded-md hover:bg-secondary hover:text-neutral hover:border-transparent">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16" data-aos="fade-up">
        <div className="lg:flex justify-between items-center gap-8">
          <div className="relative overflow-hidden lg:w-[40rem] lg:h-[40rem]">
            <img src="./fan.webp" alt="" className="w-full h-full object-cover hoverImg" loading="lazy" />
          </div>
          <div className="w-full mt-4 lg:w-1/2 lg:mt-0">
            <p className="text-2xl lg:text-4xl lg:w-4/5">`Great customer service and great products, I&apos;m really satisfied with the product`</p>
            <div className="flex justify-between items-end">
              <span>
                <p className="font-bold pt-4">John Doe</p>
                <p>Top fan on the boston</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
