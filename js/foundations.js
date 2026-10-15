// ---- variables ----
const track = document.getElementById('carousel-track');
const layerName = document.getElementById('layer-name');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const slides = Array.from(document.getElementsByClassName('layer-slide'));
const dots = Array.from(document.getElementsByClassName('carousel-dot'));

const layerNames = ['kernel', 'device', 'user'];
let currentSlide = 0; // need to track slide state

// function to go to the slide
function goToSlide(slideIndex) {
  slideIndex = (slideIndex + slides.length) % slides.length; // we use modulus to wrap here
  currentSlide = slideIndex;

  // first we change the name of the layer
  // and then we move the layer with its transform property
  // we have a transition animation setup on transform to
  // make this happen smoothly.
  layerName.textContent = layerNames[slideIndex];
  track.style.transform = `translateX(-${slideIndex * 100}%)`;

  // loop through each slide and evaluate whether they are the current slide
  // if so, set the corresponding class
  // if not, remove the corresponding class
  // this is made easy with the toggle method of JS classlist
  slides.forEach((slide, index) => slide.classList.toggle('is-active', index === slideIndex));
  dots.forEach((dot, index) => dot.classList.toggle('is-active', index === slideIndex));
};

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index))
});

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

goToSlide(0);
