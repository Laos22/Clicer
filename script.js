// -------------------------------------------ПЕРЕМЕННЫЕ
let board = document.querySelector(".board");
let cursor = document.querySelector(".cursor");
let holesList = [];
let gridBoard = 3;
let countHole = gridBoard * gridBoard;
let sizeHole = board.offsetHeight / gridBoard * 0.85;
let pos;

//---------------- Выполнение программы


fillBoard(countHole);
addJerry();













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
function addJerry() {
    let jerry = document.querySelector("#jerry");
    let x = random(0, countHole - 1);
    holesList[x].appendChild(jerry);
    if (random(1,2) == 1) animJerryLeft();      // Рандомно запускаем анимацию в разные стороны
    else animJerryRight();

}

//========================================================================== Анимация движение влево
//----- Анимация бегающих ног влево
function runJerryLeft() {
    cnt = 1;
    jerry.style.transform = "scale(1, 1)";
    let interval = setInterval (function() {
        jerry.src = "img/jeri_3_" + cnt++ +".png";
        
        if (cnt >= 11) cnt = 1;
    }, 40);
}
//----- Движение картинки с анимацией влево
function moveJerryLeft() {
    pos = jerry.offsetWidth;
    jerry.style.marginLeft = pos + "px";
    let interval2 = setInterval (function() {
        jerry.style.marginLeft = pos + "px";
        pos -= 9;
        if (pos <= jerry.offsetWidth * -1 ) {
            clearInterval(interval2);
            addJerry();
        }
    }, 50)
}
//----- Функция которая запускат анимацию и движение влево
function animJerryLeft() {
    runJerryLeft();
    moveJerryLeft();
}
//----- Анимация бегающих ног вправо
function runJerryRight() {
    cnt = 1;
    jerry.style.transform = "scale(-1, 1)";
    let interval = setInterval (function() {
        jerry.src = "img/jeri_3_" + cnt++ +".png";
        if (cnt >= 11) cnt = 1;
    }, 40);
}
//----- Движение картинки с анимацией вправо
function moveJerryRight() {
    pos = jerry.offsetWidth * - 1;
    jerry.style.marginLeft = pos + "px";
    let interval2 = setInterval (function() {
        jerry.style.marginLeft = pos + "px";
        pos += 9;
        if (pos >= jerry.offsetWidth) {
            clearInterval(interval2);
            addJerry();
        }
    }, 50)
}
//----- Функция которая запускат анимацию и движение вправо
function animJerryRight() {
    runJerryRight();
    moveJerryRight();
}

//============================================================================ Таймер отсчета времени
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

