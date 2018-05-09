let burger = document.querySelector('.header__btn');
let navList = document.querySelector('.header__nav ul');

burger.addEventListener('click', function () {
    this.classList.toggle('open');
    navList.classList.toggle('visible')
});