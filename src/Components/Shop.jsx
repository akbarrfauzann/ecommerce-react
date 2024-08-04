import { useState, useEffect, useMemo } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Card = ({ image, name, item, amount }) => {
  const backgroundImage = {
    backgroundImage: "url(./pexels3.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="bg-accent relative overflow-hidden rounded-xl" style={backgroundImage}>
        <img src={image} alt="" className="w-full h-60 object-contain hoverImg" />
      </div>
      <h3 className="text-lg h-12 font-bold pt-6 overflow-hidden text-ellipsis">{name}</h3>
      <p className="text-sm text-neutral py-2">{item}</p>
      <p className="text-accent font-bold">
        ${amount}
        <sup>99</sup>
      </p>
    </div>
  );
};

const Shop = () => {
  const [active, setActive] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [noItemsMessage, setNoItemsMessage] = useState(false);
  const itemsPerPage = 6;

  // Memoize the items array
  const items = useMemo(
    () => [
      { image: "./jersey-green.png", name: "Unisex Nike Jaylen Brown Kelly Green Boston Celtics Swingman Jersey.", item: "jersey", amount: "119", category: "JERSEYS" },
      { image: "./jersey-white.png", name: "Unisex Nike Jayson Tatum White Boston Celtics Swingman Jersey.", item: "jersey", amount: "119", category: "JERSEYS" },
      { image: "./shirt.png", name: "Men's Mitchell & Ness White Boston Celtics Hardwood Classics Vintage Warm Up T-Shirt.", item: "shirt", amount: "37", category: "T-SHIRTS" },
      { image: "./hoodie.png", name: "Men's Fanatics Heather Gray Boston Celtics 2024 NBA Finals Champions.", item: "hoodie", amount: "89", category: "SWEATSHIRTS" },
      { image: "./tie-bar.png", name: "Men's Kelly Green Boston Celtics Tie Bar", item: "accessories", amount: "300", category: "ACCESSORIES" },
      { image: "./headband.png", name: "Nike Black NBA Headband", item: "accessories", amount: "300", category: "ACCESSORIES" },
      { image: "./hat1.png", name: "Men's '47 Black Boston Celtics Logo Hitch Adjustable Hat", item: "hat", amount: "38", category: "HATS" },
      { image: "./hat2.png", name: "Men's New Era Cream Boston Celtics 2024 NBA Finals Champions Locker Room 9FIFTY Snapback Hat", item: "hat", amount: "38", category: "HATS" },
      { image: "./collectibles1.png", name: "WinCraft Boston Celtics 2024 NBA Finals Champions Four-Pack Buttons Set", item: "Collectibles", amount: "1,299", category: "COLLECTIBLES" },
      { image: "./collectibles2.png", name: `Boston Celtics Autographed 2024 NBA Finals Champions 16" x 20" NBA Finals Celebration Photograph`, item: "Collectibles", amount: "7", category: "COLLECTIBLES" },
      { image: "./collectibles3.png", name: `WinCraft Boston Celtics 2024 NBA Finals Champions Three-Piece Collector Pin Set`, item: "Collectibles", amount: "32", category: "COLLECTIBLES" },
      { image: "./collectibles4.png", name: "WinCraft Boston Celtics 2024 NBA Finals Champions Collector Pin", item: "Collectibles", amount: "8", category: "COLLECTIBLES" },
      { image: "./collectibles5.png", name: `Jayson Tatum Boston Celtics Autographed 2024 NBA Finals Champions 12" Larry O'Brien Replica Trophy`, item: "Collectibles", amount: "549", category: "COLLECTIBLES" },
      { image: "./collectibles6.png", name: `Boston Celtics 2024 NBA Finals Champions 12" Larry O'Brien Replica Trophy`, item: "Collectibles", amount: "99", category: "COLLECTIBLES" },
    ],
    []
  );

  const getItemProps = (index) => ({
    variant: currentPage === index ? "filled" : "text",
    color: "black",
    onClick: () => setCurrentPage(index),
  });

  const next = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const filteredItems = active === "ALL" ? items : items.filter((item) => item.category === active);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    setNoItemsMessage(filteredItems.length === 0 || currentItems.length === 0);
    setCurrentItems(currentItems);
  }, [active, currentPage, items, itemsPerPage]);

  return (
    <div className="container mx-auto px-6" data-aos="fade-up">
      <div className="lg:flex justify-between py-8">
        <h2 className="font-black py-4 text-3xl">SHOP</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 pt-4 lg:mb-0 text-sm border-b border-transparent h-8">
          <p className={`cursor-pointer h-6 sm:w-auto ${active === "ALL" ? "font-bold border-b-2 border-neutral" : ""}`} onClick={() => setActive("ALL")}>
            ALL
          </p>
          <p className={`cursor-pointer h-6 sm:w-auto ${active === "ACCESSORIES" ? "font-bold border-b-2 border-neutral" : ""}`} onClick={() => setActive("ACCESSORIES")}>
            ACCESSORIES
          </p>
          <p className={`cursor-pointer h-6 sm:w-auto ${active === "JERSEYS" ? "font-bold border-b-2 border-neutral" : ""}`} onClick={() => setActive("JERSEYS")}>
            JERSEYS
          </p>
          <p className={`cursor-pointer h-6 sm:w-auto ${active === "T-SHIRTS" ? "font-bold border-b-2 border-neutral" : ""}`} onClick={() => setActive("T-SHIRTS")}>
            T-SHIRTS
          </p>
          <p className={`cursor-pointer h-6 sm:w-auto ${active === "SWEATSHIRTS" ? "font-bold border-b-2 border-neutral" : ""}`} onClick={() => setActive("SWEATSHIRTS")}>
            SWEATSHIRTS
          </p>
          <p className={`cursor-pointer h-6 sm:w-auto ${active === "HATS" ? "font-bold border-b-2 border-neutral" : ""}`} onClick={() => setActive("HATS")}>
            HATS
          </p>
          <p className={`cursor-pointer h-6 sm:w-auto ${active === "COLLECTIBLES" ? "font-bold border-b-2 border-neutral" : ""}`} onClick={() => setActive("COLLECTIBLES")}>
            COLLECTIBLES
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {noItemsMessage ? <p className="text-center col-span-full text-neutral">NO ITEMS</p> : currentItems.map((item, index) => <Card key={index} image={item.image} name={item.name} item={item.item} amount={item.amount} />)}
      </div>
      <div className="flex items-center gap-2 mt-8 justify-center md:justify-end text-xs md:text-sm">
        <Button variant="text" className="flex items-center gap-2 p-1 md:p-2 hover:bg-accent" onClick={prev} disabled={currentPage === 1}>
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 md:h-5 md:w-5" /> Previous
        </Button>
        <div className="flex items-center gap-2 text-accent">
          {[1, 2, 3, 4, 5].map((number) => (
            <IconButton key={number} {...getItemProps(number)} className={`h-6 w-6 md:h-8 md:w-8 font-bold hover:text-black ${currentPage === number ? " text-black" : ""}`}>
              {number}
            </IconButton>
          ))}
        </div>
        <Button variant="text" className="flex items-center gap-2 p-1 md:p-2 hover:bg-accent" onClick={next} disabled={currentPage === Math.ceil(items.length / itemsPerPage)}>
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Shop;
