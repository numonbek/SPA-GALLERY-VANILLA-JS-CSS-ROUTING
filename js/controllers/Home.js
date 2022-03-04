import { FavoriteImages } from '../modules/CheckFavorites.js';
import { cursorMoveTitle } from '../modules/cursorMoveTitle.js';
import { clearDropDown, dropDawn } from '../modules/dropDawn.js';
import { fetchAlbum, fetchImg, fetchUser } from './fetchData.js';

const Home = async (content) => {
  await fetchUser(content);

  await clearDropDown();

  await window.addEventListener('click', callbackAlbums);

  await window.addEventListener('click', callbackImages);
};

const callbackAlbums = async (e) => {
  const targetEl = e.target.closest('.parent-click');
  if (!targetEl) return false;
  if (!targetEl.dataset.userId) return false;
  if (e.target.closest('.list-album__item')) return false;
  const targetChild = targetEl.querySelector('.child-click');

  if (!targetEl.classList.contains('active')) {
    await fetchAlbum(targetEl.dataset.userId, targetChild, e);
  } else {
    await dropDawn(e);
  }
};

const callbackImages = async (e) => {
  const targetElm = e.target.closest('.list__item');
  if (!targetElm) return false;
  if (!targetElm.dataset.albumsId) return;
  if (e.target.closest('.list-album__item')) return false;
  const targetChildElm = targetElm.querySelector('.list-album');

  if (!targetElm.classList.contains('active')) {
    await fetchImg(targetElm.dataset.albumsId, targetChildElm, e);
  } else {
    await dropDawn(e);
  }
  await FavoriteImages(e);
  await cursorMoveTitle(targetChildElm);
};

export { Home };
