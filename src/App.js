import Home from "./pages/home";

// swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import SwiperCore, { Navigation,
  Pagination,
  Autoplay,
  Virtual } from 'swiper';

// style css
import './App.css';
import './styles/index.scss';
import {useEffect, useState} from "react";

function App() {
  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

  const [isVisible, setIsVisible] = useState(false);

  const images = {
    imageScrollTop: process.env.PUBLIC_URL + "/images/ckksite-scroll-top.png"
  }

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  return (
      <>
        <Home />
        <img className={"scroll-top" + (isVisible ? " open" : "")} onClick={scrollToTop} src={images.imageScrollTop} />

      </>

  );
}

export default App;
