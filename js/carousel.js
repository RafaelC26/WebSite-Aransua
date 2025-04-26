const carouselContainer = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__prev');
const nextButton = document.querySelector('.carousel__next');
const items = document.querySelectorAll('.carousel__item');

let currentIndex = 0;
const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 20;
let autoMoveInterval;

carouselContainer.style.width = `${totalItems * itemWidth}px`;

function moveCarousel() {
    const offset = -(currentIndex * itemWidth);
    carouselContainer.style.transition = 'transform 0.5s ease-in-out';
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

function checkLoop() {
    if (currentIndex === totalItems) {
        setTimeout(() => {
            carouselContainer.style.transition = 'none';
            currentIndex = 0;
            moveCarousel();
        }, 500);
    }
}

function resetAutoMove() {
    clearInterval(autoMoveInterval);
    autoMoveInterval = setInterval(() => {
        currentIndex++;
        moveCarousel();
        checkLoop();
    }, 5000);
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveCarousel();
    } else {
        currentIndex = totalItems - 1;
        moveCarousel();
    }
    resetAutoMove();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        moveCarousel();
    } else {
        currentIndex = 0;
        moveCarousel();
    }
    resetAutoMove();
});

resetAutoMove();

document.querySelectorAll('.carousel__item').forEach(item => {
    const button = item.querySelector('.carousel__button');
    const title = item.querySelector('.carousel__title').textContent.trim();
    const precio = item.querySelector('.carousel__price').textContent.trim();
    const whatsappNumber = "573214621895";

    button.href = `https://wa.me/${whatsappNumber}?text=Estoy%20interesado%20en%20el%20vehículo:%20${encodeURIComponent(title)}, Precio%20sugerido:%20${encodeURIComponent(precio)}*`;
    button.target = "_blank";
});