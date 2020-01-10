

const slides = document.querySelectorAll(".slider__item");
const next = document.querySelector(".slider__left-btn");
const previous = document.querySelector(".slider__right-btn");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);
let playing = true;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slider__item";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slider__item slider__active";
}

function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  playing = true;
  slideInterval = setInterval(nextSlide, 4000);
}

next.addEventListener('click', function(e) {
  e.preventDefault()
  pauseSlideshow();
  nextSlide();
});

previous.addEventListener('click', function(e) {
  e.preventDefault()
  pauseSlideshow();
  previousSlide();
});
