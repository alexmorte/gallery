//! Добавляю класс с заменой существующего при нажатии на радио-кнопки

lightThemeInput.onclick = () => {
	// При клике остаеться только этот класс

	document.body.className = 'lightTheme';
	document.getElementById('header').className = 'header';
	document.getElementById('footer').className = 'footer';
}

darkThemeInput.onclick = () => {
	document.body.className = 'darkTheme';

	// При клике добавляеться один класс и удаляеться другой
	document.getElementById('header').classList.add('headerDark');

	document.getElementById('header').classList.remove('headerBackendless');

	document.getElementById('footer').classList.add('footerDark');

	document.getElementById('footer').classList.remove('footerBackendless');
}

backendlessThemeInput.onclick = () => {
	document.body.className = 'backendlessTheme';

	// При клике добавляеться один класс и удаляеться другой
	document.getElementById('header').classList.remove('headerDark');
	document.getElementById('header').classList.add('headerBackendless');
	document.getElementById('footer').classList.add('footerBackendless');
	document.getElementById('footer').classList.remove('footerDark');
}

//! Добавляю класс с заменой существующего при нажатии на радио-кнопки

button1.onclick = () => {
	// При клике остаеться только этот класс

	document.body.className = 'lightTheme';
	document.getElementById('header').className = 'header';
	document.getElementById('footer').className = 'footer';
}

button2.onclick = () => {
	document.body.className = 'darkTheme';

	// При клике добавляеться один класс и удаляеться другой
	document.getElementById('header').classList.add('headerDark');

	document.getElementById('header').classList.remove('headerBackendless');

	document.getElementById('footer').classList.add('footerDark');

	document.getElementById('footer').classList.remove('footerBackendless');
}

button3.onclick = () => {
	document.body.className = 'backendlessTheme';

	// При клике добавляеться один класс и удаляеться другой
	document.getElementById('header').classList.remove('headerDark');
	document.getElementById('header').classList.add('headerBackendless');
	document.getElementById('footer').classList.add('footerBackendless');
	document.getElementById('footer').classList.remove('footerDark');
}

/* Сделал так, чтобы при клике на селектор "select" выпадал список и выбраный пункт отображался как выбраный. Подробнее в видео "Кастомный Select на CSS и JS" */
let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('select-active');
	};

	function selectChoose() {
		let text = this.innerText,
		select = this.closest('.select'),
		currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('select-active');
	}
};

select();

//! Добавляю класс с заменой существующего при выборе селектора
selectLightTheme.onclick = () => {
	// При клике остаеться только этот класс

	document.body.className = 'lightTheme';
	document.getElementById('header').className = 'header';
	document.getElementById('footer').className = 'footer';
}

selectDarkTheme.onclick = () => {
	document.body.className = 'darkTheme';

	// При клике добавляеться один класс и удаляеться другой
	document.getElementById('header').classList.add('headerDark');
	document.getElementById('header').classList.remove('headerBackendless');
	document.getElementById('footer').classList.add('footerDark');
	document.getElementById('footer').classList.remove('footerBackendless');
}

selectBackendlessTheme.onclick = () => {
	document.body.className = 'backendlessTheme';

	// При клике добавляеться один класс и удаляеться другой
	document.getElementById('header').classList.remove('headerDark');
	document.getElementById('header').classList.add('headerBackendless');
	document.getElementById('footer').classList.add('footerBackendless');
	document.getElementById('footer').classList.remove('footerDark');
}

