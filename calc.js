'usestrict';

const firstInput = document.querySelector('.calc__first');
const operation = document.querySelector('.calc__operation');
const secondInput = document.querySelector('.calc__second');
const button = document.querySelector('.calc__btn');
const output = document.querySelector('.calc__result');

const validateNumber = function (firstValue, secondValue) {
  if (!secondValue.length && !firstValue.length) {
    return 'Введите первое и второе число';
  }
  if (!firstValue.length) {
    return 'Заполните первое поле';
  }
  if (!secondValue.length) {
    return 'Заполните третье поле';
  }
  if (isNaN(firstValue) && isNaN(secondValue)) {
    return 'Вы некорректно ввели первое и второе число';
  }
  if (isNaN(firstValue)) {
    return 'В первом поле введите число';
  }
  if (isNaN(secondValue)) {
    return 'Во втором поле введите число';
  }
  return false;
};

const sum = function (firstValue, secondValue) {
  if (validateNumber(firstValue, secondValue)) {
    return validateNumber(firstValue, secondValue);
  }
  return +firstValue + +secondValue;
};

const subtraction = function (firstValue, secondValue) {
  if (validateNumber(firstValue, secondValue)) {
    return validateNumber(firstValue, secondValue);
  }
  return firstValue - secondValue;
};

const multiplication = function (firstValue, secondValue) {
  if (validateNumber(firstValue, secondValue)) {
    return validateNumber(firstValue, secondValue);
  }
  return firstValue * secondValue;
};

const division = function (firstValue, secondValue) {
  if (validateNumber(firstValue, secondValue)) {
    return validateNumber(firstValue, secondValue);
  }
  return firstValue / secondValue;
};

button.addEventListener('click', function () {
  switch (operation.value) {
    case '+':
      output.innerHTML = sum(firstInput.value, secondInput.value);
      break;
    case '-':
      output.innerHTML = subtraction(firstInput.value, secondInput.value);
      break;
    case '*':
      output.innerHTML = multiplication(firstInput.value, secondInput.value);
      break;
    case '/':
      output.innerHTML = division(firstInput.value, secondInput.value);
      break;
    default:
      output.innerHTML = 'Нераспознанная операция';
      break;
  }
});
