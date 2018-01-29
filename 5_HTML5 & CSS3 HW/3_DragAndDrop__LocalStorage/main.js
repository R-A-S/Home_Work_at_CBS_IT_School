// dragstart - вызывается в самом начале переноса перетаскиваемого элемента.
// dragend - вызывается в конце события перетаскивания - как успешного, так и отмененного.
// dragenter - происходит в момент когда перетаскиваемый объект попадает в область целевого элемента.
// dragleave - происходит когда перетаскиваемый элемент покидает область целевого элемента.
// dragover - происходит когда перетаскиваемый элемент находиться над целевым элементом.
// drop - вызывается, когда событие перетаскивания завершается отпусканием элемента над целевым элементом.

//Событие по по загрузке DOM
window.addEventListener('DOMContentLoaded', function () {
  //Собираем ссылки и создаем переменные
  var items = document.querySelectorAll('section.grid > div');
  var source = null;
  var sum = document.getElementById('sum');
  var sumary = document.getElementById('sumary');
  var totalPrice = 0,
    totalQuantity = 0;
  var clear = document.getElementById('clear');
  var drop = document.querySelector('section.drop');
  var cart = {}; //объект заказа
  //Если есть сохраненный заказ, возвращаем его на место
  if (window.localStorage.cartData) {
    cart = JSON.parse(window.localStorage.cartData);
  }
  //Так-же поступаем с текстом корзины
  for (var key in cart) {
    totalPrice += parseInt(cart[key].price);
    totalQuantity += parseInt(cart[key].quantity);
    sum.innerHTML += cart[key].text;
    sumary.innerHTML = 'В корзине ' + totalQuantity + ' позиций, на сумму ' + totalPrice + '&#x20b4;';
  }

  //Функция для упрощения установки обработчиков, почти кроссбраузерная
  function addEvent(elem, evType, fn) {
    if (elem.addEventListener) {
      elem.addEventListener(evType, fn, false);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + evType, fn);
    } else {
      elem['on' + evType] = fn;
    }
  }

  //Перебираем массив элементов
  for (var i = 0; i < items.length; i++) {
    source = items[i];
    //устанавливаем им атрибут
    source.setAttribute('draggable', 'true');

    //привязываем обработчик на перетаскивание
    addEvent(source, 'dragstart', function (e) {
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('Text', this.id);

      this.classList.remove('gridItem');
      this.classList.add('fly');
    });
  }
  //Попытка вернуть класс при неудачном перетаскивании не увенчалась успехом :)
  addEvent(window, 'mouseup', function (e) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains('fly')) {
        items[i].classList.remove('fly');
        items[i].classList.add('gridItem');
      }
    }
  });
  //Обнуляем dragover
  addEvent(drop, 'dragover', function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  });

  // В этом обрабочике творится магия
  addEvent(drop, 'drop', function (evt) {
    // прекращаем дальнейшее распространение события по дереву DOM и отменяем возможный стандартный обработчик установленный браузером.
    if (evt.preventDefault) evt.preventDefault();
    if (evt.stopPropagation) evt.stopPropagation();
    var id = evt.dataTransfer.getData('Text'); // получаем информации которая передавалась через операцию drag & dr  
    var elem = document.getElementById(id);
    //меняем класс на элементе
    elem.classList.remove('fly');
    elem.classList.add('gridItem');

    var sumText = elem.children[2].textContent; //название товара из параграфов по индексу дочернего элемента 
    if (cart[id]) {
      //если элемент есть в объекте заказа
      cart[id].quantity++; //++ количество
      cart[id].price = parseInt(cart[id].price) + parseInt(elem.dataset.price); // ++ стоимость
      cart[id].text = sumText + ' - ' + cart[id].quantity + ' шт ' + ' - ' + ' сумма : ' + cart[id].price + '&#x20b4;' + '<br>';
    } else {
      //если элемента нет, то создаём и добавляем в объект заказа
      var element = {};
      element.id = id;
      element.quantity = 1;
      element.price = elem.dataset.price;
      element.text = sumText + ' - ' + element.quantity + ' шт ' + ' - ' + ' сумма : ' + element.price + '&#x20b4;' + '<br>';
      cart[id] = element;
    }
    //Отображение текста заказа
    sum.innerHTML = '';
    totalPrice = 0;
    totalQuantity = 0;
    for (var key in cart) {
      totalPrice += parseInt(cart[key].price);
      totalQuantity += parseInt(cart[key].quantity);
      sum.innerHTML += cart[key].text;
      sumary.innerHTML = 'В корзине ' + totalQuantity + ' позиций, на сумму ' + totalPrice + '&#x20b4;';
    }
    //Обновляем запись в localStorage 
    window.localStorage.cartData = JSON.stringify(cart);
    return false;
  });
  //Очистка корзины и хранилища
  addEvent(clear, 'click', function () {
    localStorage.removeItem('cartData');
    for (var key in cart) {
      delete cart[key];
    }
    sum.innerHTML = '';
    sumary.innerHTML = '';
  });
  //Псевдо отправка корзины.
  addEvent(send, 'click', function () {
    //Тут должна быть отправка данных о заказае и заполнение формы заказа во всплывающем окне
    //....
    //После удаляем  за ненадобностью данные о зказе.
    localStorage.removeItem('cartData');
    for (var key in cart) {
      delete cart[key];
    }
    sum.innerHTML = '';
    sumary.innerHTML = '';
  });
});