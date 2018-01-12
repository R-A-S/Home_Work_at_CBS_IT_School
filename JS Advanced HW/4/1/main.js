window.onload = function () {
  //Функция для получения ссылки на элемент по Id
  var get = function (id) {
    return document.getElementById(id);
  }
  //Загадываем произвольное целочисленное от 1 до 10
  function random() {
    return Math.floor(Math.random() * (11 - 1)) + 1;
  }
  //Их величество переменные с функциями.
  var random = random();
  var input = get("input");
  var div = get("div");
  var ouput = get("ouput");

  //Чит код:  // ouput.innerHTML = random;

  //Функция для запуска проверки по нажатию Enter
  input.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
      //Если значение не в диапазоне, выводим подсказку.
      if (input.value < 1 || input.value > 10) {
        ouput.innerHTML = 'Введите значение из заданного диапазона'
        input.value = '';
        //Значение в диапазоне? Ок, шагаем дальше.
      } else {
        //Меньше
        if (input.value < random) {
          ouput.innerHTML = 'Введенное значение меньше загаданного.'
          input.value = '';
        }
        //Больше
        if (input.value > random) {
          ouput.innerHTML = 'Введенное значение больше загаданного.'
          input.value = '';
        }
        //Победа!
        if (input.value == random) {
          ouput.innerHTML = 'Вы угадали! Привет эпилептикам! ;)'
          input.value = '';
          var color = 0;
          //Ах да, чуть не забыл о DHTML :)
          setInterval(function () {
            color = color + 1 % 360;
            get('hsl').style.backgroundColor = "hsl(" + color + ", 60%, 50%)"; // hsl(0, 100%, 50%)
          }, 1);
        }
      }
    }
  });


}