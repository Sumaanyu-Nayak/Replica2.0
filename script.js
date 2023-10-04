const header = document.querySelector('.header');
const hiddenbutton = document.querySelector('.TopButton');
const btn = document.getElementById('goup');    

btn.addEventListener('click', () => {
    // Scrolling to the top of a page
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
});