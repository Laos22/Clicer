// -------------------------------------------ПЕРЕМЕННЫЕ
let board = document.querySelector(".board");
let holesList = [];
let gridBoard = 4;
let countHole = gridBoard * gridBoard;
let sizeHole = board.offsetHeight / gridBoard * 0.85;

//---------------- Выполнение программы
fillBoard(countHole);
createGoal();













// --------------------------------------------ФУНКЦИИ

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
    }, 1000);
}

// ---------------функция рандом от и до
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
