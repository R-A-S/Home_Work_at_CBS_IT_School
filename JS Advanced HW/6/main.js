// Пол дня не мог заставить работать. Как только поместил весь код в window.onload,
// сразу все варианты кода заработали....
window.onload = function () {

  var textSaved = false; // Флаг события click на кнопке сохранения
  var textArea = document.getElementById("textArea"); // Текстовое поле
  var save = document.getElementById("save"); // Кнопка сохранения

  // Изменение флага события click на кнопке сохранения
  save.addEventListener("click", function () {
    textSaved = true;
  }, false);

  // Проверка на ввод данных после сохранения
  textArea.addEventListener("input", function () {
    if (textSaved) {
      textSaved = false;
    }
  }, false);

  //Проверка все ли данные сохранены
  window.onbeforeunload = function () {
    if (textArea.value.length != 0 && !textSaved) {
      return "Закрыть страницу без сохранения?";
    }
  }

  //Проверка на сохранение пустого текстового поля
  save.onmousedown = function () {
    var e = 0;
    if (textArea.value.length == 0) {
      textArea.style.border = '1px solid red';
      e = 1;
    }
    if (e) {
      alert('Введите текст');
      return false;
    }
  }
  //Изменение цвета текста по сочетаниям ctrl+q и shift+q ()
  document.addEventListener("keydown", function(event){
if(event.ctrlKey && event.keyCode == 81 ){
  textArea.style.color = "aqua";
}
if(event.shiftKey && event.keyCode == 81 ){
  textArea.style.color = "black";
}
  }, false);
}



