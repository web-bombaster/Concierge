function loadData() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 100);
	})
};

loadData()
	.then(() => {
		let preloaderEl = document.getElementById('preloader');
		preloaderEl.classList.add('hidden');
		preloaderEl.classList.remove('visible');
	});