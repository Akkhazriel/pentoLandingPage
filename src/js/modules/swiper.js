import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
export const swiperLoad = document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],

        loop: true,
        slidesPerView: 4,
        spaceBetween: 42,
      
        // Navigation arrows
        navigation: {
          nextEl: '#btnNext',
          prevEl: '#btnPrev',
        },
    
    });
})