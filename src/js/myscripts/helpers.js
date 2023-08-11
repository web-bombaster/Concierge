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


let classToggler = function(elementBtn, elementTarget) {
    if (document.querySelector(elementBtn) && document.querySelector(elementTarget)) {
        document.querySelector(elementBtn).addEventListener('click', function () {
            document.querySelector(elementTarget).classList.toggle('toggle');
            document.querySelector(elementBtn).classList.toggle('toggle');
        });
    };
};


let movingConstructor = function(to, metod, block) {
    if (!(document.querySelector(block) && document.querySelector(to))) {        
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


let moving = function () {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 1200) {
        movingConstructor('.mobile-menu__wrapper', 'append', '.jsMenu');
        
    } else {
        movingConstructor('.header__nav', 'prepend', '.jsMenu');
        
    };
    
};

moving();
window.addEventListener('resize', moving);