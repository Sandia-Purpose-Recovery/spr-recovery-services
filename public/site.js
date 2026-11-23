(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-nav');
  if (menuButton && navigation) {
    const mobileViewport = matchMedia('(max-width: 45rem)');
    function setMenu(open) {
      menuButton.setAttribute('aria-expanded', String(open));
      navigation.hidden = mobileViewport.matches && !open;
    }
    function syncNavigation() {
      menuButton.hidden = !mobileViewport.matches;
      setMenu(false);
    }
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) setMenu(false);
    });
    navigation.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobileViewport.matches) {
        setMenu(false);
        menuButton.focus();
      }
    });
    mobileViewport.addEventListener('change', syncNavigation);
    syncNavigation();
  }

})();
