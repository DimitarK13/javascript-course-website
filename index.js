const navToggle = document.querySelector('#toggle-nav');
const navList = document.querySelector('.primary-nav-list');
const navToggleSpan = document.querySelector('.toggle-nav-span');

navToggle.addEventListener('click', () => {
  let isOpen = navList.getAttribute('aria-expanded') === 'true';

  isOpen ? closeNav() : openNav();
});

function closeNav() {
  navList.setAttribute('aria-expanded', 'false');
  navToggleSpan.textContent = 'menu';
}

function openNav() {
  navList.setAttribute('aria-expanded', 'true');
  navToggleSpan.textContent = 'close';
}

const openDialogBtns = document.querySelectorAll('.open-dialog');
const closeDialog = document.querySelector('.close-dialog');
const modal = document.querySelector('#modal');

for (let i = 0; i < openDialogBtns.length; i++) {
  openDialogBtns[i].addEventListener('click', () => {
    modal.showModal();
  });
}

closeDialog.addEventListener('click', () => {
  modal.close();
});

const slides = document.querySelectorAll('.carousel-item');
const nextSlideBtn = document.querySelector('#next-item');
const prevSlideBtn = document.querySelector('#prev-item');
let slideIndex = 1;

nextSlideBtn.addEventListener('click', () => {
  showSlides((slideIndex += 1));
});

prevSlideBtn.addEventListener('click', () => {
  showSlides((slideIndex -= 1));
});

const showSlides = (index) => {
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }

  console.log(index);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
};

showSlides(slideIndex);
