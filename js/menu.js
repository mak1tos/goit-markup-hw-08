(() => {
    const refs = {
      openMenulBtn: document.querySelector('.open-menu__btn'),
      closeMenulBtn: document.querySelector('.close-menu__btn'),
      menu: document.querySelector('.mob-menu'),
    };
  
    refs.openMenulBtn.addEventListener('click', toggleMenu);
    refs.closeMenulBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();