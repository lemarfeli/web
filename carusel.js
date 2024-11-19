const track = document.querySelector('.carousel-track'); 
const leftArrow = document.querySelector('.left-arrow'); 
const rightArrow = document.querySelector('.right-arrow'); 
const cards = document.querySelectorAll('.carousel-card'); 

let currentIndex = 0; 
const totalCards = cards.length; 

const getVisibleCards = () => {
    return window.innerWidth > 768 ? 3 : 1; 
};

const updateCarousel = () => {
    const visibleCards = getVisibleCards(); 
    const cardWidth = cards[0].clientWidth; 
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
};

const autoSlide = () => {
    setInterval(() => {
        const visibleCards = getVisibleCards(); 
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++; 
        } else {
            currentIndex = 0; 
        }
        updateCarousel(); 
    }, 3000); 
};

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; 
    } else {
        currentIndex = totalCards - getVisibleCards(); 
    }
    updateCarousel(); 
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < totalCards - getVisibleCards()) {
        currentIndex++; 
    } else {
        currentIndex = 0; 
    }
    updateCarousel(); 
});

window.addEventListener('resize', updateCarousel);

updateCarousel();
autoSlide();