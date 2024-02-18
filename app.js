let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelector('.slider');
    if (n >= slides.children.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.children.length - 1;
    }

    const transformValue = -slideIndex * 20;
    slides.style.transform = `translateX(${transformValue}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);
