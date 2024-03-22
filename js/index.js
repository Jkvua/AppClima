const carrusel = document.querySelector('.carousel');
const carousel1Items = document.querySelector('.carousel-item');

let correntIndex = 0;

function nextSlide(){
    correntIndex = (correntIndex +1) % carousel1Items.length;
    updateCarousel();
}

function prevSlide() {
    correntIndex = (correntIndex - 1 + carousel1Items.length) % carousel1Items.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -correntIndex * carousel1Items[0].offsetWidth;
    carousel1Items.computedStyleMap.trasform = 'traslatex(${offset}px)';
}

setInterval(nextSlide, 3000);
