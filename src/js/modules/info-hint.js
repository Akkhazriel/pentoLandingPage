export const infoHintLoaded = window.addEventListener('DOMContentLoaded', () => {
    const infoBtns = document.querySelectorAll('.info-dot');
    const infoHints = document.querySelectorAll('.info-hint');

    // For every btns in array ->
    for (let btn of infoBtns) {
        btn.addEventListener('click', showHint);
    }

    // Show Tool Tips on the click
    function showHint (e) {
        e.stopPropagation();
        // Search Parent Node and give toggle-btn
        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    }

    // Close all Tool Tips when we click on somewhere place on page
    document.addEventListener('click', closeHints);

    function closeHints () {
        for (let hint of infoHints) {
            hint.classList.add('none');
        }
    }

    // Block emmersion event click for click on hint
    for (let hint of infoHints) {
        hint.addEventListener('click', (e) => e.stopPropagation());
    }
})
