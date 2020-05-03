window.addEventListener('scroll', () => {
  if (pageYOffset < 265) {
    document.querySelector('.header__right').classList.remove('cartFix');
  } else {
    document.querySelector('.header__right').classList.add('cartFix');
  }
});
