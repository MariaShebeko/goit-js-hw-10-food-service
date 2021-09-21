import menuItemTpl from './templates/menu-item.hbs';
import menuItems from './menu.json';
import './styles.css';

const themeSwitcher = document.querySelector('.theme-switch__toggle');
themeSwitcher.addEventListener('change', onThemeChange);

const menu = document.querySelector('.js-menu');
const menuItemsMarkup = createMenuItemsMarkup(menuItems);

menu.insertAdjacentHTML('beforeend', menuItemsMarkup);

function createMenuItemsMarkup(menuItems) {
  return menuItems.map(menuItemTpl).join('');
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function addClassColor(color) {
  document.body.classList.add(color);
}
function removeClassColor(light, dark) {
  document.body.classList.toggle(light);
  document.body.classList.toggle(dark);
}

function onThemeChange(evt) {
  if (evt.target.checked) {
    addClassColor(Theme.DARK);
    localStorage.setItem('Theme', 'dark-theme');
  } else {
    removeClassColor(Theme.LIGHT, Theme.DARK);
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', 'light-theme');
  }
}
onPageReload();

function onPageReload() {
  const savedTheme = localStorage.getItem('Theme');

  if (savedTheme === 'dark-theme') {
    themeSwitcher.checked = 'true';
    document.body.classList.add(savedTheme);
  }
}
