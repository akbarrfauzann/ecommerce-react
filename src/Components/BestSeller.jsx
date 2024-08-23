import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BestSeller() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselRef = useRef();

  const handlePrevious = () => {
    if (carouselRef.current) carouselRef.current.previous(0);
  };

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next(0);
  };

  return (
    <div className="container mx-auto px-6 py-14" data-aos="fade-down" data-aos-delay="200">
      <div className="flex lg:ml-[70%] md:justify-end gap-10 mb-10">
        <h2 className="text-3xl font-black">BEST SELLER</h2>
        <span className="flex gap-x-2 items-center">
          <button className="p-2 rounded-md border hover:text-white bg-primary hover:bg-neutral" aria-label="Previous">
            <FaArrowLeft onClick={handlePrevious} />
          </button>
          <button className="p-2 rounded-md border hover:text-white bg-primary hover:bg-neutral" aria-label="Next">
            <FaArrowRight onClick={handleNext} />
          </button>
        </span>
      </div>
      <div>
        <Carousel partialVisbile={false} swipeable={true} draggable={false} ssr={true} infinite autoPlay={true} arrows={false} keyBoardControl={true} renderButtonGroupOutside={true} responsive={responsive} ref={carouselRef}>
          <div className="p-4 rounded-md bg-[whitesmoke] md:ml-3 lg:ml-6 h-full flex flex-col justify-between" aria-hidden="true">
            <img src="./jersey-green.png" alt="" className="w-full h-60 bg-secondary rounded-md object-contain" />
            <span className="text-center py-4 px-6 flex flex-col flex-grow justify-between">
              <div className="flex-grow">
                <p className="text-lg font-bold">Unisex Nike Jaylen Brown Kelly Green Boston Celtics Swingman Jersey.</p>
                <p className="py-2">Jersey</p>
              </div>
              <button tabIndex="-1" className="w-full bg-neutral h-12 mt-4 text-white rounded-md border-2 border-transparent hover:border-neutral hover:bg-white hover:text-neutral transition-lg">
                $119.99
              </button>
            </span>
          </div>
          <div className="p-4 rounded-md bg-[whitesmoke] md:ml-3 lg:ml-6 h-full flex flex-col justify-between" aria-hidden="true">
            <img src="./jersey-white.png" alt="" className="w-full h-60 bg-secondary rounded-md object-contain" />
            <span className="text-center py-4 px-6 flex flex-col flex-grow justify-between">
              <div className="flex-grow">
                <p className="text-lg font-bold">Unisex Nike Jayson Tatum White Boston Celtics Swingman Jersey.</p>
                <p className="py-2">Jersey</p>
              </div>
              <button tabIndex="-1" className="w-full bg-neutral h-12 mt-4 text-white rounded-md border-2 border-transparent hover:border-neutral hover:bg-white hover:text-neutral transition-lg">
                $119.99
              </button>
            </span>
          </div>
          <div className="p-4 rounded-md bg-[whitesmoke] md:ml-3 lg:ml-6 h-full flex flex-col justify-between" aria-hidden="true">
            <img src="./basket.png" alt="" className="w-full h-60 bg-secondary rounded-md object-contain" />
            <span className="text-center py-4 px-6 flex flex-col flex-grow justify-between">
              <div className="flex-grow">
                <p className="text-lg font-bold">Boston Celtics Wilson 2024 NBA Finals Champion Collectors Edition Basketball.</p>
                <p className="py-2">Basketball</p>
              </div>
              <button tabIndex="-1" className="w-full bg-neutral h-12 mt-4 text-white rounded-md border-2 border-transparent hover:border-neutral hover:bg-white hover:text-neutral transition-lg">
                $399.99
              </button>
            </span>
          </div>
          <div className="p-4 rounded-md bg-[whitesmoke] md:ml-3 lg:ml-6 h-full flex flex-col justify-between" aria-hidden="true">
            <img src="./shirt.png" alt="" className="w-full h-60 bg-secondary rounded-md object-contain" />
            <span className="text-center py-4 px-6 flex flex-col flex-grow justify-between">
              <div className="flex-grow">
                <p className="text-lg font-bold">Men&apos;s Mitchell & Ness White Boston Celtics Hardwood Classics Vintage Warm Up T-Shirt.</p>
                <p className="py-2">T-shirt</p>
              </div>
              <button tabIndex="-1" className="w-full bg-neutral h-12 mt-4 text-white rounded-md border-2 border-transparent hover:border-neutral hover:bg-white hover:text-neutral transition-lg">
                $37.99
              </button>
            </span>
          </div>
          <div className="p-4 rounded-md bg-[whitesmoke] md:ml-3 lg:ml-6 h-full flex flex-col justify-between" aria-hidden="true">
            <img src="./hoodie.png" alt="" className="w-full h-60 bg-secondary rounded-md object-contain" />
            <span className="text-center py-4 px-6 flex flex-col flex-grow justify-between">
              <div className="flex-grow">
                <p className="text-lg font-bold">Men&apos;s Fanatics Heather Gray Boston Celtics 2024 NBA Finals Champions.</p>
                <p className="py-2">Hoodie</p>
              </div>
              <button tabIndex="-1" className="w-full bg-neutral h-12 mt-4 text-white rounded-md border-2 border-transparent hover:border-neutral hover:bg-white hover:text-neutral transition-lg">
                $89.99
              </button>
            </span>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
