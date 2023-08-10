// Переключаем класс toggle элемента по клику на этот же элемент. Параметр - классэлемента
let elementToggle = function(element) {
    if (document.querySelector(element)) {
        document.addEventListener('click', function(e) {
            if (e.target.closest(element)) {
                e.preventDefault();
                e.target.closest(element).classList.toggle('toggle');
            };
        });
    };
};

elementToggle('.footer__col');
// elementToggle('.nav-list__item--dropdown');


// Переключатель класса toggle у элемента по клику на другом элементе. Параметры - класс элемента по которому кликаем и класс элемента, которому переключаем класс toggle
let classToggler = function(elementBtn, elementTarget) {
    if (document.querySelector(elementBtn) && document.querySelector(elementTarget)) {
        document.querySelector(elementBtn).addEventListener('click', function () {
            document.querySelector(elementTarget).classList.toggle('toggle');
            document.querySelector(elementBtn).classList.toggle('toggle');
        });
    };
};


// Функция для перемещения элемента в другой элемент. Параметры: куда перемещаем, способ перемещения, что перемещаем
let movingConstructor = function(to, metod, block) {
    if (!(document.querySelector(block) && document.querySelector(to))) {
        console.log("переноса не будт");
        return;
    } else {
        switch (metod) {
            case 'prepend':
                document.querySelector(to).prepend(document.querySelector(block));
                break;

            case 'before':
                document.querySelector(to).before(document.querySelector(block));
                break;

            case 'after':
                document.querySelector(to).after(document.querySelector(block));
                break;

            default:
                document.querySelector(to).append(document.querySelector(block));
                break;
        };
    }
};


// функция будет перемещать блок в указанное место при определенной ширине экрана
let moving = function () {
    const windowWidth = window.innerWidth; // ширина экрана
    
    if (windowWidth <= 1200) {
        movingConstructor('.mobile-menu__wrapper', 'append', '.jsMenu');
        
    } else {
        movingConstructor('.header__nav', 'prepend', '.jsMenu');
        
    };
    
};

moving();
window.addEventListener('resize', moving);