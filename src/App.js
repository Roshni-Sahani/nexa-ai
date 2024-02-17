import "./App.css";
import Mynav from "./Components/Mynav";
import Homeassistant from "./Components/Homeassistant";
import Unique from "./Components/Unique";
import Blockchain from "./Components/Blockchain";
import Footer from "./Components/Footer";
import Ready from "./Components/Ready";
import Nexai from "./Components/Nexai";
import Utility from "./Components/Utility";
import Nexaslider from "./Components/Nexaslider";
import { useEffect, useState } from "react";
import BackToTop from "../src/assets/images/BackToTop.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Loader from "./Components/Loader";

function App() {
   // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
    useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
    });
   const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
    <>
       {screenLoading ? (
        <Loader />
      ) : (
    <div className="App bg-black overflow-x-clip">
        <Mynav />
      <Homeassistant />
      <Unique />
      <Blockchain />
      <Nexaslider />
      <Nexai />
      <Utility />
      <Ready />
      <Footer />
        <div onClick={() => top()} className={backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-[#000] cursor-pointer border-[2px] border-solid border-white animate-bounce transition-all ease-linear duration-300 right-[2%] z-[10]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
          </div>
            )} 
    </>
  );
}

export default App;
