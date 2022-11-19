// -------------------------------------------ПЕРЕМЕННЫЕ
let board = document.querySelector(".board");
let cursor = document.querySelector(".cursor");
let holesList = [];
let gridBoard = 3;
let countHole = gridBoard * gridBoard;
let sizeHole = board.offsetHeight / gridBoard * 0.85;

//---------------- Выполнение программы


fillBoard(countHole);
createGoal();
startTimer(10);















// -------------------------------------------- ФУНКЦИИ -------------------------------------------
// ------------------------------------------------------------------------------------------------

//-- Функция заполняет поле количеством отверстий
function fillBoard (countHole) {
    holesList = [];
    for(let i = 0; i < countHole; i++) {
        let hole = document.createElement("div");
        hole.className = "hole";
        hole.style.width = sizeHole + "px";
        hole.style.height = sizeHole + "px";
        board.appendChild(hole);
        holesList.push(hole);
    }
}
//-- Добавляем цель в отверстие
function addGoal() {
    let goal1 = document.querySelector("#goal1");
    let x = random(0, countHole - 1);
    console.log(x);
    holesList[x].appendChild(goal1);
}

//-- Появление цели скрывание
function createGoal() {
    addGoal();
    setInterval(function() {
        goal1.remove;
        addGoal();
    }, 2000);
}
// -------------------------------------------------------------------- Таймер отсчета времени
function startTimer (n) {
    let timer = document.querySelector(".timer");
    let count = n;
    setInterval(function() {
        timer.innerHTML = count + "";
        count--;
        if (count == -2) {
            // alert("Таймер окончен, хотите перезапустить страницу?");
            count = n;
            location.reload;
        }
    }, 1000);
 }
 // ------------------------------------------------------------------ Жизни
 // переменная для жизней (количество жизней)
countLifes = 5;

// создаем функцию жизней
function createLifes() {
    let lifesBlock = document.querySelector(".info .lifes");
// очищать блок
    lifesBlock.innerHTML = "";
// создаем счетчик
    let count = 0;
// создаем цикл
   while(count < countLifes){
        let span = document.createElement("span");
        lifesBlock.appendChild(span);
        count = count + 1;
   }

 }
// создаем функцию уменьшения жизней, кликнули на собаку
function lifesDown() {
    countLifes = countLifes - 1;
    if (countLifes <= 0) {
        endGame();
    }
    createLifes();
}

//------------------------------------------------------------------------- Курсор
window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

// -----------------------------------------------------------------------функция рандом от и до
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

