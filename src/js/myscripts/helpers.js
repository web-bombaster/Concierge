// Переключаем класс toggle элемента по клику на этот же элемент. Параметр - классэлемента
let elementToggle = function(element) {
    if (document.querySelector(element)) {
        document.addEventListener('click', function (e) {
            if (e.target.closest(element)) {
                e.preventDefault();
                e.target.closest(element).classList.toggle('toggle');
            };
        });
    };
};

elementToggle('.footer__col');