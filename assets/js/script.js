function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu-open.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/images/menu-close.png";
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.carousel img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); 
}