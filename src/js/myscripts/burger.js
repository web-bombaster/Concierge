if (document.querySelector('.js-burger')) {

    const btnBurger = document.querySelectorAll('.js-burger');

    function btnBurgerToggle(e) {
        e.target.classList.toggle('toggle');
    }

    btnBurger.forEach(element => {
        element.addEventListener("click", btnBurgerToggle);
    });
};




