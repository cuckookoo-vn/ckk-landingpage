import Home from "./pages/home";

// swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation,
  Pagination,
  Autoplay,
  Virtual } from 'swiper';

// style css
import './App.css';
import './styles/index.scss'

function App() {
  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

  return (
    <Home />
  );
}

export default App;
