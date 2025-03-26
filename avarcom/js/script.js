//! Автоматичний виклик за номером телефону
document.addEventListener("DOMContentLoaded", function () {
	var phoneButton = document.getElementById("phoneButton");

	phoneButton.addEventListener("click", function () {
		// Вказати номер телефону, на який ви хочете здійснити дзвінок
		var phoneNumber = "+380671590059";

		//! Здійснюємо дзвінок на вказаний номер
		window.location.href = "tel:" + phoneNumber;
	});
});

//! Скрол хедера
window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll')
});

// !Модальне вікно

// Отримуємо елементи DOM для першого вікна
const openDialogBtn1 = document.getElementById('openDialog1');
const closeDialogBtn1 = document.getElementById('closeDialog1');
const dialog1 = document.querySelector('dialog:nth-of-type(1)');

// Отримуємо елементи DOM для другого вікна
const openDialogBtn2 = document.getElementById('openDialog2');
const closeDialogBtn2 = document.getElementById('closeDialog2');
const dialog2 = document.querySelector('dialog:nth-of-type(2)');

// Функції для відкриття і закриття першого вікна
function openDialog1() {
	dialog1.showModal();
}

function closeDialog1() {
	dialog1.close();
}

// Функції для відкриття і закриття другого вікна
function openDialog2() {
	dialog2.showModal();
}

function closeDialog2() {
	dialog2.close();
}

// Додавання обробників подій для першого вікна
openDialogBtn1.addEventListener('click', openDialog1);
closeDialogBtn1.addEventListener('click', closeDialog1);

// Додавання обробників подій для другого вікна
openDialogBtn2.addEventListener('click', openDialog2);
closeDialogBtn2.addEventListener('click', closeDialog2);

// Збільшення картинки ЄВРОПРОТОКОЛ
document.querySelector('.ep__img').addEventListener('click', function () {
	// Отримайте посилання на велике зображення (замініть "large-image.jpg" на своє зображення)
	var largeImageSrc = '/img/evroprotocol.svg';

	// Створіть велике зображення та вікно для нього
	var largeImage = new Image();
	largeImage.src = largeImageSrc;
	var largeImageWindow = window.open('', '_blank');

	// Вставте велике зображення в вікно
	largeImageWindow.document.write('<img src="' + largeImage.src + '">');
	largeImageWindow.document.close(); // Додайте цей рядок
});


