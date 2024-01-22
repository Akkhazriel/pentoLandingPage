export const navMenuLoaded = document.addEventListener('DOMContentLoaded', () => {
    const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
    const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
    const mobileNav = document.querySelector('#mobile-nav');

    mobileNavOpenBtn.onclick = function () {
        mobileNav.classList.add('mobile-nav-wrapper--open');
    }
    mobileNavCloseBtn.onclick = function () {
        mobileNav.classList.remove('mobile-nav-wrapper--open');
    }
})