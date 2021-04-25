import './index.css';

const header = document.querySelector('.header');
/*console.log('s');
function makeFixed() {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 2) {
    header.classList.add('header_fixed');
    if (scrollHeight < 40) {
      document.querySelector('.header_fixed').style.height = `${100 - scrollHeight}px`;
    } else {
      document.querySelector('.header_fixed').style.height = `60px`;
    }
  } else {
    header.classList.remove('header_fixed');
  }
};
window.addEventListener('scroll', makeFixed);*/

const headerImageElements = Array.from(header.querySelectorAll('.header__background'));
console.log(headerImageElements);
function changeImage() {
  if (headerImageElements[0].classList.contains('header__background_main')) {
    headerImageElements[0].classList.remove('header__background_main');
    headerImageElements[1].classList.add('header__background_main');
  } else if (headerImageElements[1].classList.contains('header__background_main')) {
    headerImageElements[1].classList.remove('header__background_main');
    headerImageElements[0].classList.add('header__background_main');
  }
}
setInterval(changeImage, 5000);
