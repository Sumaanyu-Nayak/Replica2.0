const hiddenbutton = document.getElementById('TopButton')

function checkScroll() {
    const scrollPosition = document.documentElement.scrollTop;

    if(scrollPosition > (0.04*window.innerHeight)) {
        hiddenbutton.classList.add('active');
    } else {
        hiddenbutton.classList.remove('active');
    }
}

window.addEventListener('scroll', checkScroll);