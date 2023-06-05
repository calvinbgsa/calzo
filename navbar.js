// DOM: Document Object Manipulation
let open = false;
document.querySelector('.menu-trigger').addEventListener('click', function () {
  if (!open) {
    document.querySelector('.menu').setAttribute('style', 'transform: translateX(0)');
    // document.querySelector('.menu').setAttribute('style', 'display: block')
  } else {
    document.querySelector('.menu').setAttribute('style', 'transform: translateX(-100%)');
    // document.querySelector('.menu').setAttribute('style', 'display: none')
  }

  open = !open;
});

const variableA = 10;
let variableB = 20;
variableB = 1;

const data = ['apel', 'jeruk', 'mangga', 'pepaya'];

const root = document.querySelector('#root ol');
let element = '';
data.forEach((item) => {
  console.log(item);
  element += `<li>${item}</li>`;
});
root.innerHTML = element;
console.log(data);
