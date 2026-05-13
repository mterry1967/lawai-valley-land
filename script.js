
const header = document.getElementById('header');
function onScroll(){
  if(window.scrollY > 80) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll);
onScroll();

const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  menuButton.textContent = mainNav.classList.contains('open') ? 'Close' : 'Menu';
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton.textContent = 'Menu';
  });
});

const slides = [...document.querySelectorAll('.carousel-slide')];
const thumbs = [...document.querySelectorAll('.thumb')];
const prev = document.getElementById('prevSlide');
const next = document.getElementById('nextSlide');
const count = document.getElementById('carouselCount');
let current = 0;

function updateCarousel(){
  slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current));
  thumbs.forEach((thumb, index) => thumb.classList.toggle('is-active', index === current));
  prev.hidden = current === 0;
  next.hidden = current === slides.length - 1;
  count.textContent = `${current + 1} / ${slides.length}`;
}
prev.addEventListener('click', () => {
  if(current > 0){ current--; updateCarousel(); }
});
next.addEventListener('click', () => {
  if(current < slides.length - 1){ current++; updateCarousel(); }
});
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    current = Number(thumb.dataset.index);
    updateCarousel();
  });
});
document.addEventListener('keydown', event => {
  if(event.key === 'ArrowLeft' && current > 0){ current--; updateCarousel(); }
  if(event.key === 'ArrowRight' && current < slides.length - 1){ current++; updateCarousel(); }
});
updateCarousel();
