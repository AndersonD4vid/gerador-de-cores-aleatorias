const hex = [
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
   "A", "B", "C", "D", "E", "F"
];


const botao = document.getElementById('botao');
const color = document.querySelector('.color');

botao.addEventListener('click', function () {
   let hexColor = '#';
   for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
   }
   document.getElementById("main").style.backgroundColor = hexColor;
   color.textContent = hexColor;

   const randomNumber = getRandomNumber();

});

function getRandomNumber() {
   return Math.floor(Math.random() * hex.length);
}
