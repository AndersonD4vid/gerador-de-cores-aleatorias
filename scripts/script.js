const colors = [
   "green",
   "blue",
   "rgba(133,122,200)",
   "red"
];

const botao = document.getElementById('botao');
const color = document.querySelector('.color');

botao.addEventListener('click', function () {
   // recebe um numero entre 0 e 3 de colors[]
   const randomNumber = getRandomNumber();

   document.getElementById('main').style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

function getRandomNumber() {
   return Math.floor(Math.random() * colors.length);
}