import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BestSeller from "./Components/BestSeller";
import JoinTeam from "./Components/JoinTeam";
import Shop from "./Components/Shop";
import KnowMore from "./Components/KnowMore";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <BestSeller />
        <JoinTeam />
        <Shop />
        <KnowMore />
        <Footer />
      </div>
    </>
  );
}

export default App;
