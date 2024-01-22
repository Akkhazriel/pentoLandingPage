import { swiper } from "./swiper";

export const tabControlsLoaded = document.addEventListener('DOMContentLoaded', () => {
    const tabsBtns = document.querySelectorAll('[data-tab]');
    const tabsProducts = document.querySelectorAll('[data-tab-value]');

    for (let btn of tabsBtns) {
        btn.addEventListener('click', function () {

            // remove --active for all btns
            for (let btn of tabsBtns) {
                btn.classList.remove('tab-controls__btn--active');
            }

            // add for current btn class --active
            this.classList.add('tab-controls__btn--active');

            // take value of category hide and show products
            for (let product of tabsProducts) {
                if(product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }
            }  

            // update-swiper
            swiper.update();
        })
    }
})