let toggleMobileSubmenu = function () {

	if (document.querySelector('.nav-list__item--dropdown')) {

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

			let navLinksDown = document.querySelectorAll('.nav-list__item--dropdown');

			navLinksDown.forEach(function(element) {
				element.addEventListener('click', function(e) {
					e.preventDefault();
					element.classList.toggle('toggle');
				});
			});
		};
	};
};

toggleMobileSubmenu();