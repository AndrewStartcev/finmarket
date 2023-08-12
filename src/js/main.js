function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

window.addEventListener('load', Marquee('.marquee', 0.2))

const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active');
  menu.classList.toggle('menu--active');
});

const tabButtons = document.querySelectorAll('.main-services__link');
const tabs = document.querySelectorAll('.main-services__tab');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedTab = button.dataset.tab;
    activateTab(selectedTab);
  });
});

function activateTab(selectedTab) {
  tabs.forEach(tab => {
    if (tab.id === selectedTab.substring(1)) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  tabButtons.forEach(button => {
    if (button.dataset.tab === selectedTab) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
// Устанавливаем активный класс для первой кнопки и таба при загрузке страницы
tabButtons[0].classList.add('active');
tabs[0].classList.add('active');
