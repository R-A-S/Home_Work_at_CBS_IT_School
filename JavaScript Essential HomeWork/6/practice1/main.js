window.onload = function () {
	var saray = document.getElementById('saray');
	var les = document.getElementById('les');
	var teremok = document.getElementById('teremok');
	var ded = document.getElementById('ded');
	saray.addEventListener("click", sarayLogic);
	les.addEventListener("click", lesLogic);
	teremok.addEventListener("click", teremokLogik);
	ded.addEventListener("click", dedLogic);
	dispStats();
	introJQ();
}

function introJQ() {
	$('#introJq').fadeIn('slow');
	$('#OK').click(function () {
		$('#introJq').fadeOut('slow')
	})
}



// Можно выиграть за минуту :) Но чит кода нет!
var kolobok = {
	live: 10,
	damadge: 0,
	money: 0,
	lesh: false
};

var zayats = {
	live: 70,
	damadge: 20,
	money: 10,
	name: 'Заец'
};
var volk = {
	live: 90,
	damadge: 30,
	money: 25,
	name: 'Волк'
};
var lisa = {
	live: 80,
	damadge: 30,
	money: 20,
	name: 'Лиса'
};
var misha = {
	live: 100,
	damadge: 40,
	money: 30,
	name: 'Медведь'
};
var belka = {
	live: 30,
	damadge: 50,
	money: -20,
	name: 'Где мои орехи! %'
}


function GO() {
	var gameOver = kolobok.live

	if (gameOver <= 0) {
		$(function () {
			$('#gameover').fadeIn();
		})
		setTimeout(function () {
			location.reload(true)
		}, 3000)
	}
}

function dispStats() {
	stat_value_money.innerHTML = kolobok.money;
	stat_value_live.innerHTML = kolobok.live;
	stat_value_damadge.innerHTML = kolobok.damadge;
}


function sarayLogic() {
	// alert("Перед вами старый сарай, может вы найдет там что нибудь полезное?");
	// var conf = confirm("Заглянем в сарай?")
	var textField = document.getElementById("text_filed")

	$("#dialogSaray").fadeIn('slow');
	$("#inSaray").click(function () {
		if (kolobok.money == 0) {
			textField.innerHTML = "Сарайчик заброшен, да не пустой. По полу обильно разбросаны монеты!";
			setTimeout(function () {
				textField.innerHTML += "<p>Целых десять монет! Можно что нибудь прикупить в лавке. <br>Деньги +10коп";
			}, 2000)
			$(function () {
				$('#kop').fadeIn().delay(3000).fadeOut();
			})
			kolobok.money += 10;
			dispStats();
		} else if (kolobok.damadge == 0) {
			setTimeout(function () {
				textField.innerHTML = "<p>Среди разбросанного мусора лежит неплохая палка. Прихвачу пожалуй, пригодится! <p>Атака + 10";
			}, 1000)
			$(function () {
				$('#palka').fadeIn().delay(3000).fadeOut();
			})
			kolobok.damadge += 10;
			dispStats();
		} else if (kolobok.live <= 40) {
			textField.innerHTML = "Хм... в углу помятое сено. А из него выглядывает горлышко бутылки с надписью ЯД."
			$(function () {
				$('#yad').fadeIn().delay(3000).fadeOut();
			})
			var yadu;
			setTimeout(function () {
				yadu = confirm("Выпить яду?!")
				if (yadu) {
					setTimeout(function () {
						textField.innerHTML += "<p> А пить то хочется! Эххх... Гори оно огнем, я же пирожок, что мне будет!!!<p>Здоровье + 60"
					}, 1500)
					kolobok.live += 60;
					dispStats();
				}
			}, 1000)
		} else {
			alert("Закрой дверь, нет тут ничего!!! ©Тараканы");
		}
	})
	$("#noSaray").click(function () {
		$("#dialogSaray").fadeOut('slow');
	})
}

function teremokLogik() {
	var textField = document.getElementById("text_filed")
	// alert("Привет чужак, ты находишься в магазине, выбери себе то, что пронравится!");
	// var lut = prompt("Уменя есть на продажу:  НОЖ +10 к Атаке,  ДРОБОВИК +20 к атаке,  ПРОТЕИН + 20 к Жизни. Так-же есть уникальная для наших краев диковина - ЛЕЩ, отличная закуска под пиво! | 1  НОЖ-10к, | 2 ДРОБОВИК-50к, | 3  ПРОТЕИН-30к, | 4 ЛЕЩ-200к | Что ты выбрал? Укажи номер лота.  ");
	$("#dialogShop").fadeIn('slow');



	$("#shop1").click(function () {
		if (kolobok.money < 10) {
			textField.innerHTML = "у вас не достаточно денег!"
		} else {
			kolobok.damadge += 10;
			kolobok.money -= 10;
			textField.innerHTML = "Поздравляю ваш урон увеличен на 10 и равняется" + kolobok.damadge;
			dispStats();
			$(function () {
				$('#nozh').fadeIn().delay(3000).fadeOut();
			})
		}
	})

	$("#shop2").click(function () {
		if (kolobok.money < 50) {
			textField.innerHTML = "у вас не достаточно денег!"
		} else {
			kolobok.damadge += 20;
			kolobok.money -= 50;
			textField.innerHTML = "Поздравляю ваш урон увеличен на 20 и равняется" + kolobok.damadge;
			dispStats();
			$(function () {
				$('#shotgun').fadeIn().delay(3000).fadeOut();
			})
		}
	})

	$("#shop3").click(function () {
		if (kolobok.money < 30) {
			textField.innerHTML = "у вас не достаточно денег!"
		} else {
			kolobok.live += 20;
			kolobok.money -= 30;
			textField.innerHTML = "Поздравляю ваши жизни увеличены на 20 и равняется" + kolobok.live;
			dispStats();
			$(function () {
				$('#drug').fadeIn().delay(3000).fadeOut();
			})
		}
	})

	$("#shop4").click(function () {
		if (kolobok.money < 200) {
			textField.innerHTML = "у вас не достаточно денег!"
		} else {
			kolobok.lesh = true;
			textField.innerHTML = "Поздравляю вы купили Леща местные мужики за хорошую рыбку готовы многое отдать!"
			kolobok.money -= 200;
			dispStats();
			$(function () {
				$('#lesch').fadeIn().delay(3000).fadeOut();
			})
		}
	})

	$("#shop5").click(function () {
		$("#dialogShop").fadeOut('slow');
	})
}


	function lesLogic() {
		var randomValue = Math.random() * (5 - 0) + 0;
		var randomValue = Math.floor(randomValue);

		var textField = document.getElementById("text_filed")
		var arrayAnim = [zayats, volk, lisa, misha, belka];

		var conf = confirm("В лесу вы встретили персонажа " + arrayAnim[randomValue].name + " хотите атаковать?");
		switch (arrayAnim[randomValue].name) {
			case 'Заец':
				$(function () {
					$('#zaetsImg').fadeIn().delay(3000).fadeOut();
				})
				break;
			case 'Волк':
				$(function () {
					$('#volkImg').fadeIn().delay(3000).fadeOut();
				})
				break;
			case 'Лиса':
				$(function () {
					$('#lisaImg').fadeIn().delay(3000).fadeOut();
				})
				break;
			case 'Медведь':
				$(function () {
					$('#medvedImg').fadeIn().delay(3000).fadeOut();
				})
				break;
			case 'Где мои орехи! %':
				$(function () {
					$('#belkaImg').fadeIn().delay(3000).fadeOut();
				})
				break;
			default:
				textField.innerHTML = 'FatalErorBlin'
		}

		if (conf) {
			var animCaf = (arrayAnim[randomValue].live + arrayAnim[randomValue].damadge) / 2;
			var kolobokCaf = (kolobok.live + kolobok.damadge) / 2;

			if (kolobokCaf > animCaf) {
				kolobok.money += arrayAnim[randomValue].money;
				textField.innerHTML = "Вы выиграли! вы нашли " + arrayAnim[randomValue].money + "денег!"
				dispStats();
			} else {
				kolobok.live -= arrayAnim[randomValue].damadge;
				textField.innerHTML = "Вы проиграли! Ваши жизни равны" + kolobok.live;
				dispStats();
				GO();
			}
		} else {

			kolobok.live -= 10;
			textField.innerHTML = "Вы сбежали но " + arrayAnim[randomValue].name + " успел вам дать пинка! Жизни -10";
			dispStats();
			GO();
		}

	}



	function dedLogic() {

		var ifDed = prompt('Чего принес, или просто на обед пришел?    1 - Принес леща! | 2 - На обед пришел! | 3 - Извини дед, ошибся!');
		switch (ifDed) {

			case '1':
				if (kolobok.lesh == true) {
					alert('ЛЕЩ?! Эхх, бабка неси пиво, пирожок принес леща!');
					$(function () {
						$('#win').fadeIn();
					})
					setTimeout(function () {
						location.reload(true)
					}, 15000)
				} else {
					alert('Бабка насыпай борщ, прирожок дурить меня надумал!')
					$(function () {
						$('#gameover').fadeIn();
					})
					setTimeout(function () {
						location.reload(true)
					}, 3000)
				}
				break;

			case '2':
				alert('Бабка насыпай борщ, хлеб сам пришел!')
				$(function () {
					$('#gameover').fadeIn();
				})
				setTimeout(function () {
					location.reload(true)
				}, 3000)
				break;

			case '3':
				alert('Погоди, не убегай... Ну куда же ты!');
				break;
			default:
				alert('Я кого спрашиваю? ');
				dedLogic();
				break;
		}
	}