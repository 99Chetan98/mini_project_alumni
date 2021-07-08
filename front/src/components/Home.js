import {useState ,useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import Login from "./Login";
import Head from './Head';
import '../App.css';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import NewsRoom from './NewsRoom';
import Events from './Events';



// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);
SwiperCore.use([Autoplay])


const Home = () => {
  
    const [state, setstate] = useState({
      div:"",
      swip:""
    });
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll=()=>{
      const position = window.pageYOffset;
      setScrollPosition(position);
      if(position>128){
        setstate({div:"60px",swip:"-60px"});
    }
    else{
      setstate({div:"0px",swip:"0px"});
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
               window.removeEventListener('scroll', handleScroll);
    };
}, []);
  
  return (
    <>
    <ScrollTop/>
          <Head/>
          <div className="Home_div"  style={{marginTop:state.div}}>

              <h1 id="Home_text">&#x201C;Connect With Your Batchmates&#x201D;</h1>




                      <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                              "rotate": 20,
                              "stretch": 0,
                              "depth": 90,
                              "modifier": 1,
                              "slideShadows": true
                        }}  autoplay={{ delay: 900 }} loop={true} className="mySwiper">
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Delhi/FB_IMG_1578144674390.jpg" alt="slider-img" /></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Delhi/1.jpg" alt="slider-img"/></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Mumbai/78359206_2863588623652230_8154776429783941120_n.jpg" alt="slider-img"/></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Aurangabad/FB_IMG_1578144568249.jpg" alt="slider-img"/></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Aurangabad/1.jpg" alt="slider-img"/></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Aurangabad/FB_IMG_1578144563073.jpg" alt="slider-img" /></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Delhi/FB_IMG_1578144674390.jpg" alt="slider-img"/></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Aurangabad/FB_IMG_1578144568249.jpg" alt="slider-img"/></SwiperSlide>
                      <SwiperSlide><img src="https://jnec.org/alumni/images/gallery/Aurangabad/FB_IMG_1578144563073.jpg" alt="slider-img"/></SwiperSlide>
                    </Swiper>

          </div>
          <div className="container-fluid">
            <div className="row news">
                          <div className="col-sm-6">
                          <NewsRoom/>

                                
                          </div>
                          <div className="col-sm-6">

                                  <Events/>
                          </div>  
            </div>

          </div>
          <div className="container-fluid y-box">
            <div className="mbox">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cbm7W8z3FZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          </div>
          <Footer/>
    </>
  )
}

export default Home