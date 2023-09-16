const marquee = document.querySelector('.marquee');
if (marquee) {
  window.addEventListener('load', Marquee('.marquee', 0.2))
  function Marquee(selector, speed) {
    if (marquee) {
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
  }

}


const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active');
  menu.classList.toggle('menu--active');
});

const tabButtons = document.querySelectorAll('.main-services__link');
const tabs = document.querySelectorAll('.main-services__tab');

if (tabButtons.length > 0) {

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
}
// получаем все ссылки и кнопки с атрибутом data-popup
const popupTriggers = document.querySelectorAll('[data-popup]');

// добавляем обработчик клика на каждую ссылку и кнопку
popupTriggers.forEach(function (popupTrigger) {
  popupTrigger.addEventListener('click', function (event) {
    event.preventDefault(); // отменяем действие по умолчанию

    // находим id popup элемента
    const popupId = popupTrigger.getAttribute('data-popup');

    // находим popup элемент по id
    const popupElement = document.querySelector(`#${popupId}`);

    // закрываем все открытые popup элементы
    const popupElements = document.querySelectorAll('.popup.show');
    popupElements.forEach(function (popupElement) {
      popupElement.classList.remove('show');
    });

    // открываем выбранный popup элемент
    popupElement.classList.add('show');
  });
});

// получаем все кнопки закрытия popup элемента
const closeButtons = document.querySelectorAll('.popup__close, .popup-close');

// функция для закрытия popup элемента
function closePopup() {
  const popupElements = document.querySelectorAll('.popup.show');
  popupElements.forEach(function (popupElement) {
    popupElement.classList.remove('show');
  });
}

// добавляем обработчик клика на каждую кнопку закрытия popup элемента
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', function (event) {
    event.preventDefault(); // отменяем действие по умолчанию
    closePopup();
  });
});

// добавляем обработчик события нажатия клавиши ESC
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});

// ======== Маска для телефона ===============
document.addEventListener("DOMContentLoaded", function () {
  var phoneInputs = document.querySelectorAll('input[type="tel"]');

  var getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  }

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
      var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }
  var onPhoneKeyDown = function (e) {
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  }
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
});
