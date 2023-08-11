function initSwiper() {

	if (document.querySelector('.jsB05Slider')) {
		const jsB10Slider = new Swiper('.jsB05Slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			centeredSlides: true,

			pagination: {
				el: ".b05-slider-pagination",
				type: "fraction",
			},

			navigation: {
				nextEl: ".jsB05Slider__next",
				prevEl: ".jsB05Slider__prev",
			},
		});
	};

	if (document.querySelector('.jsB10Slider')) {
		const jsB10Slider = new Swiper('.jsB10Slider', {
			spaceBetween: 10,
			slidesPerView: 1.05,

			breakpoints: {
				500: {
					slidesPerView: 1.8,
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
		});
	};

	if (document.querySelector('.jsB11Slider')) {
		const jsB10Slider = new Swiper('.jsB11Slider', {
			spaceBetween: 10,
			slidesPerView: 1.1,
			loop: true,
			breakpoints: {
				500: {
					slidesPerView: 1.8,
					spaceBetween: 10,
					loop: true,
				},
				768: {
					slidesPerView: 2.4,
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


window.addEventListener("resize", function () {
	initSwiper();
});

initSwiper();


