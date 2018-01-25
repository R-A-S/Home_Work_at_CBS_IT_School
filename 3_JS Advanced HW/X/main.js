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
  document.getElementById('test').style.backgroundPosition = '0 0,0 0,' + mouse_x + 'px ' + mouse_y + 'px,0 0';

}
init()

// Модальное окно
window.onload = function () {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// <!-- Вкладки -->
var tab;
var tabContent;
window.onload = function () {
  tabContent = document.getElementsByClassName("tabContent");
  tab = document.getElementsByClassName("tab");
  hideTabsContent(1);
}

function hideTabsContent(a) {
  for (var i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("whiteborder");
  }
}

document.getElementById("tabs").onclick = function (event) {
  var target = event.target;
  if (target.className == "tab") {
    for (var i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
}

function showTabsContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    hideTabsContent(0);
    tab[b].classList.add("whiteborder");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
    
    
  }  
}