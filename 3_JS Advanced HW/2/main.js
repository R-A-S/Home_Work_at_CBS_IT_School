window.onload = function () {
  var list = document.getElementById("list");
}

function resetColor() {
  var liList = document.getElementsByClassName("horisontal_menu_portfolio_item");
  for (var i = 0; i < liList.length; i++) {
    liList[i].setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 0.5; transition: all 0.3s ease-in-out;");
  }
}

function selectFirstChild() {
  resetColor();
  // Получение первого дочернего элемента в списке.
  var child = list.firstElementChild;
  if (child != null) {
    // добавление атрибута style="color:red" для выбранного элемента.
    child.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 1; transition: all 0.3s ease-in-out;");
  }
}

function selectLastChild() {
  resetColor();
  // Получение последнего дочернего элемента в списке.
  var child = list.lastElementChild;
  if (child != null) {
    child.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 1; transition: all 0.3s ease-in-out;");
  }
}

var node = null;

function selectNextNode() {
  resetColor();
  if (node == null) {
    node = list.firstElementChild;
    node.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 1; transition: all 0.3s ease-in-out;");
    return;
  }
  // Получение следующего элемента, которые в дереве находиться на одном уровне.
  node = node.nextSibling;
  if (node != null) {
    node.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 1; transition: all 0.3s ease-in-out;");
  }
}

function selectPrevNode() {
  resetColor();
  if (node == null) {
    node = list.lastElementChild;
    node.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 1; transition: all 0.3s ease-in-out;");
    return;
  }
  // Получение предыдущего элемента, которые в дереве находиться на одном уровне.
  node = node.previousSibling;
  if (node != null) {
    node.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 1; transition: all 0.3s ease-in-out;");
  }
}

function createNewChild() {
  if (list.childNodes.length == 9) {
    alert("Фатит!! :)");
  } else
    // создание элемента li
    var item = document.createElement("li");
  var image = document.createElement("img")
  item.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px; height: 174px; border: 3px solid rgb(136, 136, 136); opacity: 0.5; transition: all 0.3s ease-in-out;");
  image.setAttribute("style", "width: 118px; height: 174px; margin: 1px;");
  var a = parseInt(Math.random() * (11 - 1) + 1);
  image.setAttribute("src", "img/" + a + '.jpg')
  item.appendChild(image);
  // добавление созданного элемента в конце.
  list.appendChild(item);
  item.className = "horisontal_menu_portfolio_item";
}

function removeLastChild() {
  var item = list.lastElementChild;
  if (item != null) {
    // удаление выбранного элемента из дерева.
    list.removeChild(item);
  }
}

function createNewChildAtStart() {
  if (list.childNodes.length == 9) {
    alert("Фатит!! :)");
  } else
  var item = document.createElement("li");
  var image = document.createElement("img")
  item.setAttribute("style", "margin-left: 5px; position: relative;  float: left;  width: 118px;  height: 174px;border: 3px solid rgb(136, 136, 136);  opacity: 0.5;transition: all 0.3s ease-in-out;");
  image.setAttribute("style", "width: 118px; height: 174px; margin: 1px;");
  var a = parseInt(Math.random() * (11 - 1) + 1);
  image.setAttribute("src", "img/" + a + '.jpg')
  item.appendChild(image);
  if (list.firstChild != null) {
    // вставка элемента перед указанным элементом.
    list.insertBefore(item, list.firstChild);
    item.className = "horisontal_menu_portfolio_item";
  }
}