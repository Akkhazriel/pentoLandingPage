import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
import 'swiper/css';


export const swiper = new Swiper('.swiper', {
  modules: [Navigation],

  // loop: true,
  slidesPerView: 4,
  spaceBetween: 42,
  // freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: '#btnNext',
    prevEl: '#btnPrev',
  }

  // breakpoints: {

  // },

});