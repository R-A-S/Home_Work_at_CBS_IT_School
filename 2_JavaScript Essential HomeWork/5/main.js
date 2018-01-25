var doc = {
  title: 'Tytle',
  body: 'Body',
  footer: 'Footer',
  data: 'Data',
  app: {
    header: 'appHeader',
    body: 'appBody',
    footer: 'appFooter',
    data: 'appData',
  },
  fill: function () {
    doc.app.header = prompt('Введиде цвет заголовка', '#F3520C');
    doc.app.menu = prompt('Введиде цвет меню', '#F3520C');
    doc.app.footer = prompt('Введиде цвет нижнего колонтитула', '#F3520C');
    doc.app.data = prompt('Введиде цвет статьи', '#F3520C');

  },
  disp: function () {
    document.getElementById('h_c').style.backgroundColor = doc.app.header;
    document.getElementById('right_article').style.backgroundColor = doc.app.menu;
    document.getElementById('footer_center').style.backgroundColor = doc.app.footer;
    document.getElementById('article').style.backgroundColor = doc.app.data;
  },
}
confirm('Разукрасим страницу?');
if (confirm) {
  doc.fill();
  doc.disp();
}

function Click() {
  document.getElementById('menu').style.backgroundColor = 'red';
}