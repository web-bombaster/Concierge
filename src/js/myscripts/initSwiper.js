// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.jsB05Slider')) {
		const jsB10Slider = new Swiper('.jsB05Slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			centeredSlides: true,
			// loop: true,

			pagination: {
				el: ".b05-slider-pagination",
				type: "fraction",
			},
		});
	};

	if (document.querySelector('.jsB10Slider')) {
		const jsB10Slider = new Swiper('.jsB10Slider', {
			spaceBetween: 10,
			slidesPerView: 1.1,
			// loop: true,
			breakpoints: {
				500: {
					slidesPerView: 1.4,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2.4,
					spaceBetween: 20,
				},
				1401: {
					slidesPerView: 2.43,
					spaceBetween: 20,
				},
			},
			navigation: {
				nextEl: ".products-list__next",
				prevEl: ".products-list__prev",
			},
		});
	};

	if (document.querySelector('.jsB11Slider')) {
		const jsB10Slider = new Swiper('.jsB11Slider', {
			spaceBetween: 10,
			slidesPerView: 1.1,
			loop: true,
			breakpoints: {
				500: {
					slidesPerView: 2.2,
					spaceBetween: 10,
					loop: true,
				},
				768: {
					slidesPerView: 3.2,
					spaceBetween: 20,
					loop: true,
				},
				1401: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: false,
				},
			},
			navigation: {
				nextEl: ".products-list__next",
				prevEl: ".products-list__prev",
			},
		});
	};

};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();


