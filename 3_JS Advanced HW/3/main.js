window.onload = function () {
  var get = function (id) {
    return document.getElementById(id);
  }
  var mil = get("mil");
  var sec = get("sec");
  var min = get("min");
  var start = get("start");
  var pause = get("pause");
  var cancel = get("cancel");
  var refresh = get("refresh");
  var lap = get("lap");

  var counter = 0;
  var interval;
  var a = 0;
  var b = 0;
  mil.innerHTML = 0;
  sec.innerHTML = 0;
  min.innerHTML = 0;

  function count() {
    mil.innerHTML = counter;
    counter++;
  
    if (counter == 100) {
      counter = 0;
      a++;
      sec.innerHTML = a;
    }
    if (a == 60) {
      sec.innerHTML = 0;
      b++;
      min.innerHTML = b;
      a = 0;
    }
  }

  start.onclick = function () {
    interval = setInterval(count, 10);
    start.style.pointerEvents = "none";
  }

  pause.onclick = function () {
    clearInterval(interval);
    start.style.pointerEvents = "";
  }

  cancel.onclick = function () {
    clearInterval(interval);
    mil.innerHTML = 0;
    sec.innerHTML = 0;
    min.innerHTML = 0;
    counter = 0;
    start.style.pointerEvents = "";
  }

  lap.onclick = function () {
    var lapBlock = get('lapTimeBlock');
    var writeTime = document.createElement('p');
    writeTime.className = "lapTimeBlockP";
    lapBlock.appendChild(writeTime);
    writeTime.innerHTML = (b + '  :  ' + a + ' , ' + counter)
    writeTime.style.pointerEvents = "none";
  }
  refresh.onclick = function () {
    document.location.reload(true);
  }
}