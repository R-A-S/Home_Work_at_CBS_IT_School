// Функция-конструктор для создания объекта Human с произвольными значениями (при поддержке https://github.com/Marak/Faker.js) и возрастом.
function Human() {
  this.name = faker.name.findName();
  this.organization = faker.company.companyName();
  this.nationality = faker.address.country();
  this.age = ageRandom();
}

// Почему-то эта функция заканчивается выводом undefined в конце текста....? 
Human.prototype.talk = function () {
  document.write("Имя - " + this.name + ",<br>" + " Компания - " + this.organization + "<br> " + "Возраст - " + this.age + "<br>" + "Национальность - " + this.nationality + '.');
}
// Функция произвольного числа от 18 до 80.
function ageRandom() {
  var a = parseInt(Math.random() * (80 - 18) + 18);
  return a;
}

// Создаём четыре объекта с помошью функции конструктора Human
var first = new Human();
var second = new Human();
var third = new Human();
var fourth = new Human();
var group = [first, second, third, fourth]; // Создаём массив из четырех объектов

// Функция сравнения возраста для сортировки массива
function sortHumans(human1, human2) {
  return human1.age - human2.age
}
// Изменяем порядок в массиве по возрастанию
group.sort(sortHumans);

document.write("<hr>");
document.write("Группа по возрасту : <br><br>");
// Выводим имена и возраст измененного массива
for (var i = 0; i < group.length; i++) {
  document.write(group[i].name + "<br>" + group[i].age + "<br>")
}
document.write("<hr>");
// А теперь в обратном порядке
for (var i = group.length - 1; i >= 0; i--) {
  document.write(group[i].name + "<br>" + group[i].age + "<br>")
}
// Ну и поговорить
document.write("<hr>");
document.write("Младший в группе : <br><br>");
document.write(group[0].talk() + "<br>");
document.write("<hr>");
document.write("Старший в группе : <br><br>");
document.write(group[3].talk() + "<br>");
document.write("<hr>");

// А вот со второй частью задания, где надо подумать пофантазировать
// и придумать какие свойства и методы следует сделать уровня экземпляра 
// а какие на уровне функции-конструктора беда. Фантазии не хватило понять для чего мне это нужно :)