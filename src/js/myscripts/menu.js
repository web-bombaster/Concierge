let toggleMobileSubmenu = function () {
	// Если есть хоть один элемент
	if (document.querySelector('.nav-list__item--dropdown')) {

		// Если мобильный режим
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			//Выбираем все нужные ссылки
			let navLinksDown = document.querySelectorAll('.nav-list__item--dropdown');

			navLinksDown.forEach(function(element) {
				// Отслеживаем по ним клик, отменяем стандартное действие
				element.addEventListener('click', function(e) {
					e.preventDefault();
					element.classList.toggle('toggle');
				});
			});
		};
	};
};

toggleMobileSubmenu();