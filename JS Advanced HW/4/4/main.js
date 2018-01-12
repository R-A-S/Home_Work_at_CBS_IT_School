//Передвижение по стрелкам на клавиатуре. 
addEventListener("keydown", move);

function move(event) {
  var ball = document.getElementById("ball");
  var css = window.getComputedStyle(ball);
  var left = parseInt(css.left);
  var top = parseInt(css.top);

  switch (event.key) {

    case "ArrowLeft":
      if (left > 0)
        ball.style.left = left - 10 + "px";
      break;
    case "ArrowUp":
      if (top > 0)
        ball.style.top = top - 10 + "px";
      break;
    case "ArrowRight":
      if (left < document.documentElement.clientWidth - 120)
        ball.style.left = left + 10 + "px";
      break;
    case "ArrowDown":
      if (top < document.documentElement.clientHeight - 125)
        ball.style.top = top + 10 + "px";
      break;
  }
  if (left > document.documentElement.clientWidth / 2 - 65 && left < document.documentElement.clientWidth / 2 - 55 && top == 20) {
    var atention = document.getElementById('atention');
    atention.style.visibility = 'visible';
    setTimeout(function () {
      atention.style.visibility = 'hidden';
    }, 3000)
  }
}


//Передвижение при наведении на кнопку. Доведется размять кисть :)
addEventListener('mouseover', moveMouse);

function moveMouse(event) {
  var ballMouse = document.getElementById("ball");
  var css = window.getComputedStyle(ballMouse);
  var left = parseInt(css.left);
  var top = parseInt(css.top);

  if (left > document.documentElement.clientWidth / 2 - 65 && left < document.documentElement.clientWidth / 2 - 55 && top == 20) {
    var atention = document.getElementById('atention');
    atention.style.visibility = 'visible';
    setTimeout(function () {
      atention.style.visibility = 'hidden';
    }, 3000)
  }

  function get(id) {
    return document.getElementById(id)
  }
  get('up').onmouseover = function () {
    if (top > 0)
      ballMouse.style.top = top - 10 + "px";
  }
  get('down').onmouseover = function () {
    if (true)(top < document.documentElement.clientHeight - 125)
    ballMouse.style.top = top + 10 + "px";
  }
  get('left').onmouseover = function () {
    if (left > 0)
      ballMouse.style.left = left - 10 + "px";
  }
  get('right').onmouseover = function () {
    if (left < document.documentElement.clientWidth - 120)
      ballMouse.style.left = left + 10 + "px";
  }
}


// // СПИ ЖЕНА в интернете, но прикольно :) Пущай будет.
// Сработает по клику на центральную кнопку.

addEventListener('click', fire);

function fire() {
  document.getElementById('fire').onclick = function () {

    var srch = setInterval(show, 250);
    var el, el_X, el_Y, el_w, el_h;

    function show() {
      el = document.getElementById('ball');
      if (el) {
        clearInterval(srch);
        el_X = el.offsetLeft; // текущее положение по горизонтали
        el_Y = el.offsetTop; // текущее положение по вертикали
        el_w = el.offsetWidth; // ширина элемента
        el_h = el.offsetHeight; // высота элемента
        //     alert(el_X);
        // alert(el_w);
        move();

      }
    }

    var win_w, win_h, mov_field_w, mov_field_h;
    var is_direct = 0; //  сообщает сценарию о том выбрано ли какое либо направление для движения
    var flag_h = 0; // флаг напрвления по горизонтали
    var flag_v = 0; // флаг направления по вертикали
    var x = 0;
    var y = 0; // для новых координат элемента
    var l = 0;
    var s = 0;

    function move() {

      window['moving'] = setInterval(kadr, 50);

      function kadr() {
        win_w = window.innerWidth;
        win_h = window.innerHeight;

        mov_field_w = win_w - el_w;
        mov_field_h = win_h - el_h;


        if (!is_direct && (mov_field_w > 0 || mov_field_h > 0)) { // выполняется когда нет направления и зона для движения доступна для как минимум одного направления
          find_direct();
          is_direct = 1; // устанавливаем значение означающее что был произведен выбор направлений для движения.
          // данное значение запрещает менять направление до того как объект достигент конечно положенияё
        }
        // Для горизонтального перемещения          
        if (flag_h) {

          if (flag_h == 1) {
            if (el_X >= mov_field_w) {
              l = 0;
              flag_h = 2;
              el_X = mov_field_w;
            }
            x = (el_X += ++l);
          }

          if (flag_h == 2) {
            if (el_X <= 0) {
              l = 0;
              flag_h = 1;
              el_X = 0;
            }
            x = (el_X += --l);
          }
          el.style.left = x + 'px';
        }
        // Для вертикального перемещения                 
        if (flag_v) {

          if (flag_v == 1) {
            y = (el_Y += ++s);
            if (el_Y >= mov_field_h) {
              s = 0;
              flag_v = 2;
              el_Y = mov_field_h;
            }
          }

          if (flag_v == 2) {
            y = (el_Y += --s);
            if (el_Y <= 0) {
              s = 0;
              flag_v = 1;
              el_Y = 0;
            }
          }
          el.style.top = y + 'px';
        }

      }

    }


    function find_direct() { // определяет направление 
      if (mov_field_w > 0) { //   если есть прространство между объектом и правым или левым краем окна то выбирается направление либо 1 либо 2
        flag_h = parseInt(Math.random() * 2 + 1); // 1 - влево | 2 - вправо
      } else { // иначе
        flag_h = 0; //  по горизонтали двигаться нельзя
      }

      if (mov_field_h > 0) { //   если есть прространство между объектом и нижнем или верхним краем окна то выбирается направление либо 1 либо 2

        flag_v = parseInt(Math.random() * 2 + 1); // 1 - вниз | 2 - вверх
      } else { // иначе
        flag_v = 0; //  по вертикали двигаться нельзя
      }

      if (left > document.documentElement.clientWidth / 2 - 65 && left < document.documentElement.clientWidth / 2 - 55 && top == 20) {
        var atention = document.getElementById('atention');
        atention.style.visibility = 'visible';
        setTimeout(function () {
          atention.style.visibility = 'hidden';
        }, 3000)
      }
    }
  }
}