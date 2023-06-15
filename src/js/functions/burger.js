import disableScroll from 'disable-scroll';
(function(){
  const burgers = document?.querySelectorAll('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const close = document?.querySelector('[data-close]');

  const closeBurger = () => {
    burgers.forEach(burger => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
    });
  }

  burgers.forEach(burger => {
    burger?.addEventListener('click', (e) => {
      burger?.classList.toggle('burger--active');
      menu?.classList.toggle('menu--active');
  
      if (menu?.classList.contains('menu--active')) {
        burger?.setAttribute('aria-expanded', 'true');
        burger?.setAttribute('aria-label', 'Закрыть меню');
        disableScroll.on();
      } else {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        disableScroll.off();
      }
    });
  });

  overlay?.addEventListener('click', () => {
    closeBurger();
   
    menu.classList.remove('menu--active');
    disableScroll.off();
  });

  close?.addEventListener('click', () => {
    closeBurger();
    menu.classList.remove('menu--active');
    disableScroll.off();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      closeBurger();
      menu.classList.remove('menu--active');
      disableScroll.off();
    });
  });
})();
