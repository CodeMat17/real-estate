import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "./PropertyCard";
import { useIsDesktop } from "../hooks/useIsDesktop";

const PropertiesSwiper = ({ properties }) => {
  const {isDesktop} = useIsDesktop()
  
  return (
    <Swiper
      slidesPerView={isDesktop ? 3 : 1}
      spaceBetween={10}
      loop={true}
      // loopFillGroupWithBlank={true}
      centeredSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      className='mySwiper'>
      {properties.map((property) => (
        <SwiperSlide key={property.id}>
          <PropertyCard {...property} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PropertiesSwiper;
