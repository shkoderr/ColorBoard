const board = document.getElementById('board')
const colors = ['#ae7ec9', '#b90e72', '#0b2d93', '#0e8b5b', '#bcd30d', '#f48e1a', '#992e2e', '#00e7eb']   //создали массив с цветами
const SQUARES_NUMBER = 1050                //задаём кол-во квадратов

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')  //на каждой итерации создаём div
  square.classList.add('square')               //добавляем диву класс square чтобы стал квадратиком

  square.addEventListener('mouseover', setColor)   //навели на квадратик
  square.addEventListener('mouseleave', removeColor)  //ушли с квадратика

  board.append(square)                        //добавляем наши квадраты к контейнеру
}

 
function setColor(event) {
  const element = event.target
  const color = getRandomColor()      //получаем рандомный цвет
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

//Создадим функцию для получения рандомного цвета из нашего массива цветов
//В качестве улучшения кода, избавимся от переменной index и впишем рандомайзер в индекс переменной 'colors'
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
