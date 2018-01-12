//Прикльный фон. Если хватит времени, надо прикрутить свечение к кнопкам калькулятора
ns4 = (document.layers) ? true : false
ie4 = (document.all) ? true : false

function init() {
  if (ns4) {
    document.captureEvents(Event.MOUSEMOVE);
  }
  document.onmousemove = mousemove;
}

function mousemove(event) {
  var mouse_x = y = 0;
  if (document.attachEvent != null) {
    mouse_x = window.event.clientX;
    mouse_y = window.event.clientY;
  } else if (!document.attachEvent && document.addEventListener) {
    mouse_x = event.clientX - 150;
    mouse_y = event.clientY - 100;
  }
  document.getElementById('bg').style.backgroundPosition = '0 0,0 0,' + mouse_x + 'px ' + mouse_y + 'px,0 0';
}
init()
//_____________________________________________________________________________________________________________//

//Запускаемся после загрузки страницы
window.addEventListener("load", calculate, false);
//Калькулятор с читерским методом eval() (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/eval).
function calculate(event) {
  //Собираем необходимые ссылки
  var buttons = document.getElementById("buttons");
  var displayInput = document.getElementById("displayInput");
  var result = document.getElementById("result");
  var buttonC = document.getElementById("buttonC");
  var history = document.getElementById("history");
  var phantom;
  var varForEval;
  //Учим кнопки выводить значение в тектовое поле
  buttons.addEventListener('click', function (event) {
    if (event.target.innerHTML != "=" && event.target.innerHTML != "C") {
      history.innerHTML += event.target.innerHTML;
      phantom.innerHTML += event.target.innerHTML;
      displayInput.innerHTML = event.target.innerHTML;
    }
  }, false);
  //Подсчет текстового значения с помощью метода eval() и вывод результата
  result.addEventListener('click', function () {
    displayInput.innerHTML = eval(phantom.innerHTML);
    history.innerHTML = history.innerHTML + '=' + displayInput.innerHTML + '<br>';
    phantom.innerHTML = ''
  }, false);
  //Сброс текстового поля
  buttonC.addEventListener('click', function () {
    displayInput.innerHTML = '';
  }, false);


}
//Тут будет код для принятия цифр и знаков математических операций с клавиатуры. Если ребенок даст дописать :)