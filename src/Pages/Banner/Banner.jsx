import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// import './styles.css';
import img1 from '../../../public/banner-1.jpg'
import img2 from '../../../public/banner-2.jpg'
import img3 from '../../../public/banner-3.jpg'
import img4 from '../../../public/banner-4.jpg'
import img5 from '../../../public/banner-7.jpg'
const Banner = () => {
return (
                          
                    <Swiper 
                      slidesPerView={'auto'}
                        spaceBetween={30}
                          pagination={{
                                  clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                    <img className='mx-auto w-full h-[65vh]  bg-cover' src={img1} alt="" />                        
                                </SwiperSlide>
                                <SwiperSlide>
                                <img className='mx-auto w-full h-[65vh] bg-cover' src={img2} alt="" /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                <img className='mx-auto w-full h-[65vh] bg-cover' src={img3} alt="" /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                <img className='mx-auto w-full h-[65vh] bg-cover ' src={img4} alt="" /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                <img className='mx-auto w-full h-[65vh] bg-cover' src={img5} alt="" /> 
                                </SwiperSlide>
                              </Swiper>
                         
  );
};

export default Banner;