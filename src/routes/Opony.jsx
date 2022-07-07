import { Link } from "react-router-dom";
import { getOpony } from "../data/opony";

// import Swiper core and required modules
// import { Navigation} from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

export default function Opony() {
  let data = getOpony();
  return (
    <div className='container'>
      <div className='row'>
          {
            data.map(({code, name, url, image1, image2, image3, image4}) => {
              return (
              <div className='col-3'>
                <div className="swiper__container text-center mb-5 mt-5">
                  <Swiper
                  // modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  // navigation
                  pagination={{ clickable: true }}

                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide><img src={image1} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image2} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image3} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image4} className='image' /></SwiperSlide>
                    
                  </Swiper>

                  <p className=''>({code})</p>
                  <p className='name'>{name}</p>
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}