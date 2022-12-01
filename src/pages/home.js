import {useEffect, useState} from "react";
import './home.scss';
import {getWindowDimensions} from "../mixins/window-dimensions";
import Header from "../layout/header/header";
import Metalish from "../layout/metalish/metalish";
import Products from "../layout/products/products";
import Technology from "../layout/technology/technology";
import AboutUs from "../layout/about-us/about-us";
import Support from "../layout/support/support";
import Footer from "../layout/footer/footer";
import Partners from "../layout/partners/partners";
import Careers from "../layout/careers/careers";


const Home = () =>{
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            <Header windowDimensions={windowDimensions}/>
            <Metalish windowDimensions={windowDimensions}/>
            <Products windowDimensions={windowDimensions}/>
            <Technology windowDimensions={windowDimensions}/>
            <Partners windowDimensions={windowDimensions}/>
            <AboutUs windowDimensions={windowDimensions}/>
            {/*<Careers windowDimensions={windowDimensions}/>*/}
            <Support windowDimensions={windowDimensions}/>
            <Footer windowDimensions={windowDimensions}/>
        </>
    )
}

export default Home;