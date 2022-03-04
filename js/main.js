import { buttonToggle, checkHash, toggleClass } from './modules/activeClassBtn.js';
import { FavoriteAlbums } from './modules/CheckFavorites.js';
import { modal } from './modules/Modal.js';
import { router } from './router/indexRoutes.js';

window.addEventListener('DOMContentLoaded', loadFunctions);
window.addEventListener('hashchange', (e) => {
  router(window.location.hash);
  checkHash(window.location.hash);
});

function loadFunctions() {
  router((window.location.hash = '#/'));
  checkHash(window.location.hash);
  buttonToggle();
  toggleClass();
  FavoriteAlbums();
  modal.initModal('card-img');
}
