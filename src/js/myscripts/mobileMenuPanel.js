if (document.querySelector('.jsMobileMenuBtnToggle')) {

    let menuPanelInit = function () {
        const menuBtn = document.querySelector('.jsMobileMenuBtnToggle');
        const menu = document.querySelector('.mobile-menu');
        const body = document.querySelector('body');

   
        function menuPanelToggle() {
            if (menuBtn.classList.contains('toggle')) {
                menu.classList.add('toggle');
                body.classList.add('toggle');
            } else {
                menu.classList.remove('toggle');
                body.classList.remove('toggle');
            };
        };


        function menuPanelPosition() {
            const heightViewport = document.documentElement.clientHeight;
            const heightHeader = document.querySelector('.header').offsetHeight;
            const heightMenuOverlay = heightViewport - heightHeader;
            let posTop = window.scrollY;
    
            const menuActive = document.querySelector('.mobile-menu.toggle');

            if (menuActive) {
                menuActive.style.height = heightMenuOverlay + 'px';
                menuActive.style.top = posTop + heightHeader + 'px';
            };
        };
    

        function menuPanelClose() {
            menuBtn.classList.remove('toggle');
            menu.classList.remove('toggle');
            body.classList.remove('toggle');
        };


        function menuPanelOnClickClose() {
            document.addEventListener("click", function(e) {
                const target = e.target;
                const its_menu = target == menu || menu.contains(target);
                const its_btnMenu = target == menuBtn;
    
                if (!its_menu && !its_btnMenu) {
                    menuPanelClose();
                };
            });
        };


        window.addEventListener('resize', function () {
            menuPanelClose();
        }, true);


        let menuLaunch = function() {
            menuPanelToggle();
            menuPanelOnClickClose();
        };

        menuBtn.addEventListener("click", menuLaunch);



        // Добфвляем в панель лого, телефон, почту, соцкнопки, кнопку закрытия панели
        let addElementsInPanel = function() {

            let logo = document.querySelector('.header__logo').cloneNode(true);
            document.querySelector('.mobile-menu__wrapper').prepend(logo);

            let socbtns = document.querySelector('.footer__social').cloneNode(true);
            document.querySelector('.mobile-menu__bottom').prepend(socbtns);
            
            let mail = document.querySelector('.footer__mail').cloneNode(true);
            document.querySelector('.mobile-menu__bottom').prepend(mail);

            let phone = document.querySelector('.header__phone').cloneNode(true);
            document.querySelector('.mobile-menu__bottom').prepend(phone);

            let closeMobileMenuButton = document.createElement('button');
            closeMobileMenuButton.classList.add('mobile-menu__close');    
            document.querySelector('.mobile-menu').append(closeMobileMenuButton);

            closeMobileMenuButton.addEventListener("click", function () {
                menuPanelClose();
            });

        };

        addElementsInPanel();

    };

    menuPanelInit();

};

