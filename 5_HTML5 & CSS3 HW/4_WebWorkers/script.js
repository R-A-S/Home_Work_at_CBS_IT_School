/*jshint esversion: 6 */
window.onload = function() {
  document.getElementById('start').onclick = function() {
    // Создание нового потока
    var worker = new Worker('webWorker.js');
    //Создание обработчика для получения сообщений от потока
    worker.addEventListener('message', function(e) {
      document.getElementById('output').innerHTML += e.data + '<br />';
    },
    false
    );

    // запуск потока
    worker.postMessage('');
  };
};
