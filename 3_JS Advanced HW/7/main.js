window.addEventListener("load", function () {
  //Функция для получения ссылки по ID
  function getId(id) {
    return document.getElementById(id);
  }
  //Функция для получения ссылки по имени
  function getName(name) {
    return document.getElementsByName(name);
  }

  //Получение стоимости из значения radio
  function getRadio(name) {
    var radio = getName(name);
    for (var i = 0; i < radio.length; ++i)
      if (radio[i].checked) return radio[i].value;
  }

  //Получение суммы значений CheckBox и отображение рисунков наполнения
  function getCheckBox(name) {
    var checkBox = getName(name);
    var checkBoxSum = 0;
    for (var i = 0; i < checkBox.length; ++i) {
      if (checkBox[i].checked) {
        checkBoxSum += parseInt(checkBox[i].value);
        //Показываем выбранные ингредиенты
        switch (checkBox[i].id) {
          case "fillingInput1":
            getId("1").style.display = "block"
            break;
          case "fillingInput2":
            getId("2").style.display = "block"
            break;
          case "fillingInput3":
            getId("3").style.display = "block"
            break;
          case "fillingInput4":
            getId("4").style.display = "block"
            break;
          case "fillingInput5":
            getId("5").style.display = "block"
            break;
          case "fillingInput6":
            getId("6").style.display = "block"
            break;
          default:
            break;
        }
      }
      //Скрываем отмененные ингредиенты
      if (!checkBox[i].checked) {
        switch (checkBox[i].id) {
          case "fillingInput1":
            getId("1").style.display = "none"
            break;
          case "fillingInput2":
            getId("2").style.display = "none"
            break;
          case "fillingInput3":
            getId("3").style.display = "none"
            break;
          case "fillingInput4":
            getId("4").style.display = "none"
            break;
          case "fillingInput5":
            getId("5").style.display = "none"
            break;
          case "fillingInput6":
            getId("6").style.display = "none"
            break;
          default:
            break;
        }
      }
    }
    return checkBoxSum;
  }

  //Обработчик по клику в контейнере параметров пиццы
  //Выводит сумму значений radio и CheckBox в общую стоимость

  getId("sizeAndFillingContainer").addEventListener("click", function () {
    var pizzaSize = parseInt(getRadio("size"));
    var pizzaFilling = parseInt(getCheckBox("filling"));
    getId("cost").value = pizzaSize + pizzaFilling + " ₴";
  })

  //Выводим во всплывающее окно данные по заказу.
  //Можно было проще через parentNode, но для работы красивых чекбоксов я не могу завернуть input в label
  getId("reg").addEventListener("submit", function () {
    if (flag == true) {
      var total = getId("total"),
        totalOrder = getId("totalOrder"),
        totalPrice = getId("totalPrice"),
        totalDelivery = getId("totalDelivery"),
        totalSize = getId("totalSize"),
        fill = getName("filling"),
        size = getName('size');

      //Общая стоимость
      totalPrice.innerHTML += getId("cost").value;
      //Данные доставки
      totalDelivery.innerHTML += getId("name").value + "<br>" + getId("phone").value + "<br>" + getId("adress").value
      //Размер пиццы
      for (var i = 0; i < size.length; i++) {

        if (size[i].getAttribute('type') == 'radio' && size[i].checked) {

          switch (size[i].id) {
            case "size1":
              totalSize.innerHTML += "Маленькая" + "&nbsp" + "пицца" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + size[i].value + "₴" + "<br>" + "<br>"
              break;
            case "size2":
              totalSize.innerHTML += "Средняя" + "&nbsp" + "пицца" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + size[i].value + "₴" + "<br>"
              break;
            case "size3":
              totalSize.innerHTML += "Большая" + "&nbsp" + "пицца" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + size[i].value + "₴" + "<br>"
              break;
            default:
              break;
          }
        }
      }
      //Наполнение
      for (var i = 0; i < fill.length; i++) {

        if (fill[i].getAttribute('type') == 'checkbox' && fill[i].checked) {

          switch (fill[i].id) {
            case "fillingInput1":
              totalSize.innerHTML += "Бекон" + "&nbsp" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + fill[i].value + "₴" + "<br>"
              break;
            case "fillingInput2":
              totalSize.innerHTML += "Грибы" + "&nbsp" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + fill[i].value + "₴" + "<br>"
              break;
            case "fillingInput3":
              totalSize.innerHTML += "Колбаса" + "&nbsp" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + fill[i].value + "₴" + "<br>"
              break;
            case "fillingInput4":
              totalSize.innerHTML += "Оливки" + "&nbsp" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + fill[i].value + "₴" + "<br>"
              break;
            case "fillingInput5":
              totalSize.innerHTML += "Специи" + "&nbsp" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + fill[i].value + "₴" + "<br>"
              break;
            case "fillingInput6":
              totalSize.innerHTML += "Сыр" + "&nbsp" + "&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp" + fill[i].value + "₴" + "<br>"
              break;
            default:
              break;
          }
        }

      }

      document.getElementById("total").style.display = "block";
      document.getElementById("totalContainer").style.display = "block";
      setTimeout(function () {
        location.reload();
      }, 10000);
    }
  })

  if (window.localStorage.pageColor) {
    document.body.style.backgroundImage = window.localStorage.pageColor;
  }

  document.getElementById("saveButton").addEventListener("click", function () {
    var selectedColor = getCheckedRadioId("color")
    window.localStorage.pageColor = selectedColor;
    document.body.style.backgroundImage = selectedColor;
    if(document.body.style.backgroundImage == "url(img/269.jpg)")alert(afgafdg)
  });

  function getCheckedRadioId(name) {
    var elements = document.getElementsByName(name);

    for (var i = 0; i < elements.length; ++i)
      if (elements[i].checked) return elements[i].value;
  }
})







// регистрация события загрузки документа
if (window.addEventListener) window.addEventListener("load", init, false);

// установка обработчиков для форм и элементов форм.
function init() {
  for (var i = 0; i < document.forms.length; i++) {
    var form = document.forms[i];

    var formValidation = false;

    for (var j = 0; j < form.elements.length; j++) {
      var e = form.elements[j];

      // пропускаем все что не поле ввода.
      if (e.type != "text") {
        continue;
      }

      // проверка имеются ли атрибуты требующие проверки.
      var pattern = e.getAttribute("data-val");

      if (pattern) {
        e.onchange = validateInput; // обработчик на изменение.
        formValidation = true; // форма требует проверку.
      }
    }
    if (formValidation) {
      form.onsubmit = validateForm; // установка обработчика для формы на submit
    }
  }
}

// обработчик на изменение содержимого полей ввода.
function validateInput() {
  var pattern = this.dataset.val,
    valMsg = this.dataset.valMsg,
    valMsgId = this.dataset.valMsgId,
    value = this.value;

  var res = value.search(pattern);
  if (res == -1) {
    document.getElementById(valMsgId).innerHTML = valMsg;
    this.className = "error";
  } else {
    document.getElementById(valMsgId).innerHTML = "";
    this.className = "valid";
  }
}

var flag = false;
// обработчик на submit формы.
function validateForm() {

  var invalid = false;

  for (var i = 0; i < this.elements.length; ++i) {
    var e = this.elements[i];
    if (e.type == "text" && e.onchange != null) {
      e.onchange();
      if (e.className == "error") invalid = true;
    }
  }

  if (invalid) {
    return false;
  } else {
    flag = true;
  }
}
